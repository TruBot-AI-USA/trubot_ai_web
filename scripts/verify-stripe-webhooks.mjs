import { readFileSync } from 'fs';
import { resolve } from 'path';
import Stripe from 'stripe';

function loadEnv() {
  const envPath = resolve(process.cwd(), '.env');
  const content = readFileSync(envPath, 'utf8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnv();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

console.log('=== Stripe webhook endpoints ===');
const endpoints = await stripe.webhookEndpoints.list({ limit: 10 });
if (endpoints.data.length === 0) {
  console.log('No webhook endpoints configured.');
} else {
  for (const ep of endpoints.data) {
    console.log(`\nURL: ${ep.url}`);
    console.log(`Status: ${ep.status}`);
    console.log(`Events: ${ep.enabled_events.join(', ')}`);
  }
}

console.log('\n=== Recent checkout.session.completed events ===');
const events = await stripe.events.list({ limit: 10, type: 'checkout.session.completed' });
for (const event of events.data) {
  const session = event.data.object;
  const email =
    session.customer_email ||
    session.customer_details?.email ||
    session.metadata?.email ||
    '(none)';
  console.log(`\nEvent: ${event.id}`);
  console.log(`  created: ${new Date(event.created * 1000).toISOString()}`);
  console.log(`  session: ${session.id}`);
  console.log(`  email in payload: ${email}`);
  console.log(`  pending_webhooks: ${event.pending_webhooks}`);
}
