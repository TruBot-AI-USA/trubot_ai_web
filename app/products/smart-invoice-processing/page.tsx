import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import UseCaseCard from "@/app/ui/components/shared/UseCaseCard";
import TabCard from "@/app/ui/components/shared/TabCard";
import StoryCard from "@/app/ui/components/shared/StoryCard";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import CTASection from "@/app/ui/components/shared/CTASection";
import TechSpecs from "./components/TechSpecs";
import {
  caseStudyList,
  ctaSection,
  faqSection,
  featureList,
  heroSection,
  relatedProductList,
  roiSection,
  useCaseList,
} from "@/app/ui/libs/constants/individual-product/smart-invoice-processing";

export const metadata = {
  title:
    "AI Invoice Management Solution – Automate Your Accounts Payable | TruBot AI",
  description:
    "Discover TruBot AI’s intelligent invoice automation platform. Streamline accounts payable, prevent fraud, ensure compliance, and boost finance team productivity.",
  keywords: [
    "AI Invoice Management",
    "Automated Invoice Processing",
    "Invoice Automation Software",
    "Accounts Payable Automation",
    "Intelligent Invoice Matching",
    "Fraud Detection in Invoicing",
    "Payment Optimization Tools",
    "Compliance Management Solutions",
    "Invoice Data Extraction AI",
    "TruBot AI Invoice Solutions",
  ],
};

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection {...heroSection} />

      {/* Key Features */}
      <div className="bg-gray-soft">
        <PageLayout id="features">
          <SectionHeader
            title="Key Features"
            subtitle="Discover the intelligent features that power our invoice management solution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureList.map((feature, index) => (
              <FeatureCard key={index} index={index} {...feature} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Use Cases */}
      <PageLayout id="use-cases">
        <SectionHeader
          title="Real-World Use Cases"
          subtitle="Discover how businesses of all sizes benefit from our AI-powered invoice management solution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCaseList.map((useCase, index) => (
            <UseCaseCard key={index} index={index} {...useCase} />
          ))}
        </div>
      </PageLayout>

      {/* Tech Specs */}
      <div className="bg-gray-soft">
        <TechSpecs />
      </div>

      {/* Pricing to be added */}
      {/* Pricing */}
      {/* <PricingSection /> */}

      {/* ROI Calculator */}
      <PageLayout id="roi-calculator">
        <SectionHeader
          title="ROI Calculator"
          subtitle="See how much you can save with our intelligent invoice management solution."
        />

        <div className="max-w-3xl mx-auto">
          <TabCard {...roiSection} />
        </div>
      </PageLayout>

      {/* Case Study */}
      <div className="bg-gray-soft">
        <PageLayout id="case-studies">
          <SectionHeader
            title="Customer Success Stories"
            subtitle="See how real businesses achieved measurable results with our solution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudyList.map((study, index) => (
              <StoryCard key={index} delay={index * 150} {...study} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* FAQ */}
      <FAQSection {...faqSection} />

      {/* Related Products */}
      <div className="bg-gray-soft">
        <PageLayout id="related-products">
          <SectionHeader
            title="Related Products"
            subtitle="Explore other tools in our AI suite to enhance your finance operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProductList.map((product, index) => (
              <ProductCard
                key={index}
                animationDelay={index * 100}
                {...product}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* CTA Section */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
