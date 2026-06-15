import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

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
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('Webhook signature verification failed:', message);
    return NextResponse.json({ error: `Webhook error: ${message}` }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log('Checkout session completed:', {
        id: session.id,
        payment_status: session.payment_status,
      });
      break;
    }
    case 'payment_intent.succeeded': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log('Payment succeeded:', paymentIntent.id);
      break;
    }
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
