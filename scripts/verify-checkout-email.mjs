/**
 * Verifies Stripe checkout session email fields and optional Azure send.
 * Usage: node scripts/verify-checkout-email.mjs [--send-test user@example.com]
 */
import { readFileSync } from 'fs';
import { resolve } from 'path';
import Stripe from 'stripe';
import { EmailClient } from '@azure/communication-email';

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

function resolveCustomerEmail(session) {
  const sessionEmail = session.customer_email ?? null;
  const customerDetailsEmail = session.customer_details?.email ?? null;
  const metadataEmail = session.metadata?.email ?? null;
  const customerEmail = sessionEmail || customerDetailsEmail || metadataEmail || null;
  const source = sessionEmail
    ? 'customer_email'
    : customerDetailsEmail
      ? 'customer_details.email'
      : metadataEmail
        ? 'metadata.email'
        : 'none';

  return { customerEmail, source, sessionEmail, customerDetailsEmail, metadataEmail };
}

loadEnv();

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const acsConnectionString =
  process.env.AZURE_EMAIL_CONNECTION_STRING ||
  process.env.AZURE_COMMUNICATION_SERVICE_CONNECTION_STRING;
const emailSender = process.env.AZURE_EMAIL_SENDER || 'DoNotReply@trubotai.com';
const sendTestTo = process.argv.includes('--send-test')
  ? process.argv[process.argv.indexOf('--send-test') + 1]
  : null;

if (!stripeSecret) {
  console.error('STRIPE_SECRET_KEY missing');
  process.exit(1);
}

const stripe = new Stripe(stripeSecret, { apiVersion: '2022-11-15' });

console.log('=== Checkout email verification ===\n');
console.log('Config:');
console.log(`  STRIPE_SECRET_KEY: ${stripeSecret ? 'set' : 'missing'}`);
console.log(`  STRIPE_WEBHOOK_SECRET: ${process.env.STRIPE_WEBHOOK_SECRET ? 'set' : 'missing'}`);
console.log(`  AZURE_EMAIL_CONNECTION_STRING: ${acsConnectionString ? 'set' : 'missing'}`);
console.log(`  AZURE_EMAIL_SENDER: ${emailSender}`);
console.log('');

const sessions = await stripe.checkout.sessions.list({ limit: 5, status: 'complete' });

if (sessions.data.length === 0) {
  console.log('No completed checkout sessions found in Stripe.');
} else {
  console.log(`Recent completed sessions (${sessions.data.length}):`);
  for (const session of sessions.data) {
    const retrieved = await stripe.checkout.sessions.retrieve(session.id);
    const resolved = resolveCustomerEmail(retrieved);
    console.log(`\n  Session: ${session.id}`);
    console.log(`    payment_status: ${retrieved.payment_status}`);
    console.log(`    customer_email: ${resolved.sessionEmail ?? '(empty)'}`);
    console.log(`    customer_details.email: ${resolved.customerDetailsEmail ?? '(empty)'}`);
    console.log(`    metadata.email: ${resolved.metadataEmail ?? '(empty)'}`);
    console.log(`    resolved recipient: ${resolved.customerEmail ?? '(none)'}`);
    console.log(`    email source used by webhook: ${resolved.source}`);
    console.log(`    would trigger email: ${Boolean(acsConnectionString && emailSender && resolved.customerEmail)}`);
  }
}

if (sendTestTo) {
  if (!acsConnectionString) {
    console.error('\nCannot send test email: AZURE_EMAIL_CONNECTION_STRING missing');
    process.exit(1);
  }

  console.log(`\n=== Sending Azure test email to ${sendTestTo} ===`);
  const emailClient = new EmailClient(acsConnectionString);
  const poller = await emailClient.beginSend({
    senderAddress: emailSender,
    content: {
      subject: 'TruBot checkout email test',
      plainText: 'This is a test email from verify-checkout-email.mjs',
      html: '<p>This is a test email from <strong>verify-checkout-email.mjs</strong></p>',
    },
    recipients: { to: [{ address: sendTestTo, displayName: 'Customer' }] },
  });
  const result = await poller.pollUntilDone();
  console.log(`Azure send status: ${result.status}`);
  if (result.error) console.log('Azure send error:', result.error);
}
