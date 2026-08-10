import { createSEO } from "@/app/ui/libs/seo";
import ClientLifetimeDeals from "./ClientLifetimeDeals";

export const metadata = createSEO({
  title: "Lifetime Deals on AI Automation | TruBot AI",
  description: "Claim lifetime access to TruBot AI tools like TruLead, TruCRM, and TruERP with one-time pricing for growing businesses.",
  keywords: [
    "Lifetime Deals",
    "AI Automation Lifetime",
    "TruBot AI Lifetime",
    "One-Time Pricing AI",
    "Business Automation Deals",
    "No-Code AI Tools",
    "CRM Lifetime License",
    "ERP Lifetime Access",
    "Sales Automation Offer",
    "AI Chatbot Deal",
  ],
  path: "/lifetime-deals",
  image: "/images/og-image.png",
  imageAlt: "TruBot AI Lifetime Deals",
});

export default function LifetimeDealsPage() {
  return <ClientLifetimeDeals />;
}
