import { Metadata } from "next";

import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import HorizontalTimeline from "@/app/ui/components/shared/HorizontalTimeline";
import CTASection from "@/app/ui/components/shared/CTASection";
import PartnersApplyForm from "@/app/(crm-form)/partners-apply-form/PartnersApplyForm";
import {
  heroSection,
  formSection,
  nextStepSection,
  ctaSection,
} from "@/app/ui/libs/constants/partners/apply";

export const metadata: Metadata = {
  title: "Apply to TruBot AI Partner Program | Partnership Application",
  description:
    "Apply to become a TruBot AI partner. Submit your application to join our partner ecosystem and unlock new business opportunities, technical support, and co-marketing benefits.",
  keywords: [
    "TruBot AI Partner Application",
    "AI partnership application",
    "Apply for AI partnership",
    "SME AI partner application",
    "AI solution partner form",
    "TruBot AI partner program",
    "AI business partnership",
    "AI partner benefits",
    "AI co-marketing",
    "AI technical support",
    "AI for agencies",
    "AI for consultants",
    "AI for technology providers",
  ],
  authors: [{ name: "TruBot AI", url: "https://trubot.ai/partners/apply" }],
  creator: "TruBot AI",
  publisher: "TruBot AI",
  openGraph: {
    title: "Apply to TruBot AI Partner Program | Partnership Application",
    description:
      "Submit your application to join the TruBot AI partner ecosystem. Unlock new business opportunities, technical support, and co-marketing benefits.",
    url: "https://trubot.ai/partners/apply",
    siteName: "TruBot AI",
    images: [
      {
        url: "https://trubot.ai/images/partners/partnership-type.png",
        width: 1200,
        height: 630,
        alt: "TruBot AI Partner Application",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply to TruBot AI Partner Program | Partnership Application",
    description:
      "Apply to become a TruBot AI partner and unlock new business opportunities, technical support, and co-marketing benefits.",
    images: ["https://trubot.ai/images/partners/partnership-type.png"],
  },
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Application Form */}
      <div className="bg-gray-soft">
        <PageLayout id="application-form">
          <SectionHeader
            title={formSection.title}
            subtitle={formSection.subtitle}
          />

          <PartnersApplyForm />
        </PageLayout>
      </div>

      {/* Next Steps */}
      <PageLayout id="next-steps" className="relative z-10">
        <SectionHeader
          title={nextStepSection.title}
          subtitle={nextStepSection.subtitle}
        />
        {/* Timeline Line (only desktop) */}
        <div className="hidden lg:block absolute top-[50%] left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-1 bg-gray-200" />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {nextStepSection.stepList.map((step, idx) => (
            <HorizontalTimeline
              key={idx}
              stepNumber={idx + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={idx * 150}
            />
          ))}
        </div>
      </PageLayout>

      {/* CTA Section */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
