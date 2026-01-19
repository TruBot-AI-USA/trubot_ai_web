import { FaRocket } from "react-icons/fa";

import SolutionCard from "../ui/components/shared/SolutionCard";
import CTASection from "../ui/components/shared/CTASection";
import PageLayout from "../ui/components/shared/PageLayout";
import { ctaSection, solutionList } from "../ui/libs/constants/solutions";

export const metadata = {
  title: "AI Chatbot Solutions by Industry – TruBot AI",
  description:
    "Explore TruBot AI’s no-code chatbot builder, multilingual chatbots, and AI-powered customer support for WhatsApp, Messenger, and more.",
  keywords: [
    "AI Chatbot Solutions",
    "No-Code Chatbot Builder",
    "Multilingual Chatbots",
    "Omnichannel Customer Support",
    "AI-Powered Customer Engagement",
    "Chatbot for SMEs",
    "WhatsApp Business Chatbot",
    "Facebook Messenger Automation",
    "Lead Generation Chatbot",
    "Customer Support Automation",
  ],
};

const Page = () => {
  return (
    <>
      <PageLayout id="solutions-by-industry">
        <div className="text-center">
          <h1 className="text-4xl font-heading text-navy mb-4">
            AI Solutions by Industry
          </h1>

          <p className="text-navy/70 font-body max-w-3xl mx-auto">
            TruBot AI adapts to your workflows — empowering you to automate
            smarter and scale faster.
          </p>
        </div>
      </PageLayout>

      <PageLayout>
        {solutionList.map((category) => (
          <div
            key={category.id}
            role="region"
            aria-labelledby={`solution-heading-${category.id}`}
            className="mb-16"
          >
            <h2
              id={`solution-heading-${category.id}`}
              className="text-2xl font-heading text-navy mb-6"
            >
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, index) => (
                <SolutionCard
                  key={`${category.id}-${index}`}
                  name={item.title}
                  provider={category.title}
                  description={item.description}
                  icon={FaRocket}
                  tags={[category.title]}
                  link="#"
                />
              ))}
            </div>
          </div>
        ))}
      </PageLayout>

      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
