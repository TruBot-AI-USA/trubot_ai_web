import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripeSecret = process.env.STRIPE_SECRET_KEY;

function getStripe() {
  if (!stripeSecret) {
    throw new Error('STRIPE_SECRET_KEY is not configured. Please set it in your environment.');
  }
  return new Stripe(stripeSecret, { apiVersion: '2022-11-15' });
}

export async function POST(req: Request) {
  try {
    const stripe = getStripe();
    const { product, price, amount, name, email } = await req.json();

    const domain = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    
    // Calculate the amount in cents for Stripe
    const amountInCents = amount ?? Math.round(Number(price) * 100);
    
    // Keep the original price for display (not multiplied by 100)
    const displayPrice = amount ? Math.round(amount / 100) : price;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      locale: 'en',
      billing_address_collection: 'required',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: name || product },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      success_url: `${domain}/marketplace/success?session_id={CHECKOUT_SESSION_ID}&product=${encodeURIComponent(product)}&price=${displayPrice}&currency=usd`,
      cancel_url: `${domain}/marketplace?canceled=1`,
      automatic_tax: { enabled: process.env.STRIPE_TAX_AUTO === 'true' },
      metadata: { product, email, name, currency: 'usd' },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('Stripe checkout error', err);
    return NextResponse.json({ error: err.message || 'Unknown error' }, { status: 500 });
  }
}
