import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const res = await fetch(
      "https://crm.trubotai.com/api/v1/LeadCapture/359fe9482c1cbe561b271f0bf918aa4a",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cCompanyName: data.companyName,
          website: data.website,
          industry: data.industry,
          cCompanySize: data.companySize,
          cPartnershipType: data.partnershipType,
          cPartnershipGoals: data.partnershipGoals,
          firstName: data.firstName,
          lastName: data.lastName,
          emailAddress: data.email,
          phoneNumber: data.phone,
          cJobTitle: data.jobTitle,
          cCurrentCustomerBase: data.currentCustomers,
          cTechnicalCapabilities: data.technicalCapabilities,
          description: data.questions,
          cSource: "Partners Apply Form",
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
