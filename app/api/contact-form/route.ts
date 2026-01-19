import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const res = await fetch(
      "https://crm.trubotai.com/api/v1/LeadCapture/f641e1ec49fb8bbcd945cf75096ee115",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          emailAddress: data.email,
          description: data.message,
          phoneNumber: data.mobile,
          cSource: "Contact Form",
        }),
      }
    );

    if (!res.ok)
      return NextResponse.json({ error: "Failed to submit" }, { status: 500 });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
