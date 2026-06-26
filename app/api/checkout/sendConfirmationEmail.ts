import Stripe from 'stripe';
import { EmailClient } from '@azure/communication-email';

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const acsConnectionString =
  process.env.AZURE_EMAIL_CONNECTION_STRING ||
  process.env.AZURE_COMMUNICATION_SERVICE_CONNECTION_STRING;
const emailSender = process.env.AZURE_EMAIL_SENDER || 'DoNotReply@trubotai.com';

const EMAIL_SENT_METADATA_KEY = 'confirmation_email_sent';

function getStripe() {
  if (!stripeSecret) {
    throw new Error('STRIPE_SECRET_KEY is not configured.');
  }
  return new Stripe(stripeSecret, { apiVersion: '2022-11-15' });
}

function getEmailClient() {
  if (!acsConnectionString) {
    throw new Error('AZURE_EMAIL_CONNECTION_STRING is not configured.');
  }
  return new EmailClient(acsConnectionString);
}

export function resolveCustomerEmail(session: Stripe.Checkout.Session) {
  const sessionEmail = session.customer_email ?? null;
  const customerDetailsEmail = session.customer_details?.email ?? null;
  const metadataEmail = session.metadata?.email ?? null;
  const customerEmail = sessionEmail || customerDetailsEmail || metadataEmail || null;
  const emailSource = sessionEmail
    ? 'customer_email'
    : customerDetailsEmail
      ? 'customer_details.email'
      : metadataEmail
        ? 'metadata.email'
        : 'none';

  return { customerEmail, emailSource };
}

export type SendConfirmationResult =
  | { ok: true; sent: true; email: string; sessionId: string }
  | { ok: true; sent: false; reason: 'already_sent' | 'not_paid' | 'no_email'; email?: string; sessionId: string }
  | { ok: false; error: string };

export async function sendCheckoutConfirmationEmail(
  sessionId: string
): Promise<SendConfirmationResult> {
  if (!sessionId.startsWith('cs_')) {
    return { ok: false, error: 'Invalid session_id' };
  }

  const stripe = getStripe();
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  const { customerEmail, emailSource } = resolveCustomerEmail(session);

  if (session.payment_status !== 'paid') {
    return {
      ok: true,
      sent: false,
      reason: 'not_paid',
      email: customerEmail ?? undefined,
      sessionId,
    };
  }

  if (session.metadata?.[EMAIL_SENT_METADATA_KEY] === 'true') {
    return {
      ok: true,
      sent: false,
      reason: 'already_sent',
      email: customerEmail ?? undefined,
      sessionId,
    };
  }

  if (!customerEmail) {
    return { ok: true, sent: false, reason: 'no_email', sessionId };
  }

  if (!acsConnectionString || !emailSender) {
    return { ok: false, error: 'Email service is not configured' };
  }

  const productName = session.metadata?.name || session.metadata?.product || 'Your Purchase';
  const amount = session.amount_total ? (session.amount_total / 100).toFixed(2) : 'N/A';
  const productLinks = {
  "Finance Templates": process.env.FINANCE_TEMPLATE,
  "Leads (1M)": process.env.LEADS_1M,
  "Leads (250K)": process.env.LEADS_250K,
  "Accelerator": process.env.ACCELERATOR,
  "Grant": process.env.GRANT,
  "Investor": process.env.INVESTOR,
  "AI LinkedIn Prompts Pack": process.env.AI_LINKEDIN_PROMPTS_PACK,
  "Architecture PRD": process.env.ARCHITECTURE_PRD,
  "Product PRD": process.env.PRODUCT_PRD,
  "Real Estate": process.env.REAL_ESTATE,
  "All Assets Bundle": process.env.ALL_ASSETS_BUNDLE,
  "Channel Partner Pack": process.env.CHANNEL_PARTNER_PACK,
  "Cold Email Templates": process.env.COLD_EMAIL_TEMPLATE,
  "GTM": process.env.GTM,
  "Leads (150M)": process.env.LEADS_150M,
  "Leads (390M)": process.env.LEADS_390M,
  "Lean PRD": process.env.LEAN_PRD,
  "M&A": process.env.MA,
  "NDA and Agreements": process.env.NDA_AGREEMENT,
  "Pitch Deck Samples": process.env.PITCH_DECK,
  "Project Timeline Templates": process.env.PROJECT_TIMELINE_TEMPLATE,
  "Proposals Docs": process.env.PROPOSAL_DOC,
  "Website Content": process.env.WEBSITE_CONTENT,
};

  // Get the download link for the purchased product
  const downloadLink = productLinks[productName] || "";
  const emailClient = getEmailClient();
  const poller = await emailClient.beginSend({
    senderAddress: emailSender,
    content: {
      subject: `Payment Confirmation - ${productName}`,
      plainText: `Payment Successful!\n\nThank you for your purchase.\nProduct: ${productName}\nAmount: $${amount}\nOrder ID: ${session.id}\n\nYour digital asset will be available for download shortly.\nIf you have any questions, please contact our support team.\n\nBest regards,\nTruBot AI Team`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0F172A;">
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
          <p><strong>Product:</strong> ${productName}</p>
          <p><strong>Amount:</strong> $${amount}</p>
          <p><strong>Order ID:</strong> ${session.metadata?.orderId || session.id}</p>
          <p>Your digital asset can be downloaded from <a href="${downloadLink}"> here</a>.</p>
          <p>If you have any questions, please contact our support team.</p>
          <p>Best regards,<br/>TruBot AI Team</p>
        </div>
      `,
    },
    recipients: {
      to: [{ address: customerEmail, displayName: 'Customer' }],
      bcc: [{ address: "admin@trubotai.com", displayName: "TruBot AI Admin" }],
    },
  });

  const sendResult = await poller.pollUntilDone();
  if (sendResult.status !== 'Succeeded') {
    console.error('Confirmation email failed:', sendResult.status, sendResult.error);
    return { ok: false, error: 'Failed to send confirmation email' };
  }

  await stripe.checkout.sessions.update(sessionId, {
    metadata: {
      ...session.metadata,
      [EMAIL_SENT_METADATA_KEY]: 'true',
    },
  });

  console.log('Confirmation email sent to:', customerEmail, `(source: ${emailSource})`);

  return { ok: true, sent: true, email: customerEmail, sessionId };
}
