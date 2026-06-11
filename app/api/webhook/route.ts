import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const resendKey = process.env.RESEND_API_KEY;

function getStripe() {
  if (!stripeSecret) {
    throw new Error('STRIPE_SECRET_KEY is not configured. Please set it in your environment.');
  }
  return new Stripe(stripeSecret, { apiVersion: '2022-11-15' });
}

export async function POST(req: Request) {
  if (!webhookSecret) {
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 });
  }

  const signature = req.headers.get('stripe-signature');
  const body = await req.text();

  let event: Stripe.Event;

  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(body, signature || '', webhookSecret);
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: `Webhook error: ${err.message}` }, { status: 400 });
  }

  // Handle the event types you care about
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      // eslint-disable-next-line no-console
      console.log('Checkout session completed:', session.id, session.metadata);
      
      // Send confirmation email
      if (resendKey && session.customer_email) {
        try {
          const resend = new Resend(resendKey);
          const productName = (session.metadata?.name as string) || 'Your Purchase';
          const amount = session.amount_total ? (session.amount_total / 100).toFixed(2) : 'N/A';
          
          await resend.emails.send({
            from: 'noreply@trubotai.com',
            to: session.customer_email,
            subject: `Payment Confirmation - ${productName}`,
            html: `
              <h2>Payment Successful!</h2>
              <p>Thank you for your purchase.</p>
              <p><strong>Product:</strong> ${productName}</p>
              <p><strong>Amount:</strong> $${amount}</p>
              <p><strong>Order ID:</strong> ${session.id}</p>
              <p>Your digital asset will be available for download shortly.</p>
              <p>If you have any questions, please contact our support team.</p>
              <p>Best regards,<br/>TruBot AI Team</p>
            `,
          });
          // eslint-disable-next-line no-console
          console.log('Confirmation email sent to:', session.customer_email);
        } catch (emailErr: any) {
          // eslint-disable-next-line no-console
          console.error('Failed to send confirmation email:', emailErr.message);
        }
      }
      break;
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      // eslint-disable-next-line no-console
      console.log('Payment succeeded:', paymentIntent.id);
      break;
    default:
      // eslint-disable-next-line no-console
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
