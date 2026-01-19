import { Metadata } from "next";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import TrusocialWaitlistForm from "./TrusocialWaitlistForm";

export const metadata: Metadata = {
  title: "Join TruSocial Waitlist | AI-Powered Social Media Management",
  description:
    "Be the first to experience TruSocial - AI-powered social media management platform. Get early access, exclusive perks, and help shape the future of social media automation.",
  keywords: [
    "TruSocial Waitlist",
    "AI social media management",
    "Social media automation",
    "AI content creation",
    "Social media scheduling",
    "Multi-platform posting",
    "Social media analytics",
    "Engagement management",
    "AI for social media",
    "Social media tools",
    "Content creation AI",
    "Social media platform",
    "Early access social media",
    "TruBot AI social media",
    "Social media management software",
    "AI-powered posting",
    "Social media optimization",
  ],
  authors: [{ name: "TruBot AI", url: "https://trubot.ai/trusocial-waitlist" }],
  creator: "TruBot AI",
  publisher: "TruBot AI",
  openGraph: {
    title: "Join TruSocial Waitlist | AI-Powered Social Media Management",
    description:
      "Get early access to TruSocial - the AI-powered social media management platform. Join thousands of businesses waiting for the future of social media automation.",
    url: "https://trubot.ai/trusocial-waitlist",
    siteName: "TruBot AI",
    images: [
      {
        url: "https://trubot.ai/images/default-og.png",
        width: 1200,
        height: 630,
        alt: "TruSocial Waitlist - AI-Powered Social Media Management",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join TruSocial Waitlist | AI-Powered Social Media Management",
    description:
      "Be the first to experience AI-powered social media management. Get early access to TruSocial and help shape the future of social media automation.",
    images: ["https://trubot.ai/images/default-og.png"],
  },
};

const Page = () => {
  return (
    <PageLayout className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl mx-auto px-4">
        <SectionHeader
          title="Join the TruSocial Waitlist"
          subtitle="Be the first to experience AI-powered social media management. Get early access, exclusive perks, and help shape the future of TruSocial."
        />

        <TrusocialWaitlistForm />
      </div>
    </PageLayout>
  );
};

export default Page;
