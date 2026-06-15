import { NextResponse } from 'next/server';
import { sendCheckoutConfirmationEmail } from '../sendConfirmationEmail';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const sessionId = typeof body?.session_id === 'string' ? body.session_id.trim() : '';

    if (!sessionId) {
      return NextResponse.json({ error: 'session_id is required' }, { status: 400 });
    }

    const result = await sendCheckoutConfirmationEmail(sessionId);

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    if (result.sent) {
      return NextResponse.json({
        sent: true,
        alreadySent: false,
        email: result.email,
        sessionId: result.sessionId,
      });
    }

    return NextResponse.json({
      sent: false,
      alreadySent: result.reason === 'already_sent',
      reason: result.reason,
      email: result.email ?? null,
      sessionId: result.sessionId,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to send confirmation email';
    console.error('send-confirmation error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
