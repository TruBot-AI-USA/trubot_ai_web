import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripeSecret = process.env.STRIPE_SECRET_KEY;

function getStripe() {
  if (!stripeSecret) {
    throw new Error('STRIPE_SECRET_KEY is not configured. Please set it in your environment.');
  }
  return new Stripe(stripeSecret, { apiVersion: '2022-11-15' });
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json({ error: 'session_id is required' }, { status: 400 });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json({
      email: session.customer_email || session.customer_details?.email || session.metadata?.email,
      amount: session.amount_total ? session.amount_total / 100 : null,
      metadata: session.metadata,
    });
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('Failed to retrieve session:', err);
    return NextResponse.json({ error: err.message || 'Failed to retrieve session' }, { status: 500 });
  }
}
