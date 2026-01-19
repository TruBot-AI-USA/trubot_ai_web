import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import UseCaseCard from "@/app/ui/components/shared/UseCaseCard";
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
  useCaseList,
} from "@/app/ui/libs/constants/individual-product/ai-social-media-suite";

export const metadata = {
  title: "Social Media Tools – TruBot AI",
  description:
    "Supercharge your strategy with AI-powered social media tools for automation, content creation, analytics, and engagement.",
  keywords: [
    "AI Social Media Tools",
    "Social Media Automation",
    "AI-Powered Content Creation",
    "Social Media Engagement Optimization",
    "Social Media Analytics",
    "AI Chatbots for Social Media",
    "Social Media Marketing Automation",
    "AI Content Generation",
    "Social Media Management Tools",
    "AI Tools for Digital Marketing",
  ],
};

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection {...heroSection} />

      {/* Key Features */}
      <div className="bg-gray-soft">
        <PageLayout id="features" ariaLabelledby="features-heading">
          <SectionHeader
            title="Key Features"
            subtitle="Everything you need to streamline and supercharge your social media strategy."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureList.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Use Cases */}
      <PageLayout id="use-cases" ariaLabelledby="use-cases-heading">
        <SectionHeader
          title="Use Cases"
          subtitle="Discover how different teams leverage our platform to achieve outstanding results."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {useCaseList.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} index={index} />
          ))}
        </div>
      </PageLayout>

      {/* Tech Specs */}
      <div className="bg-gray-soft">
        <TechSpecs />
      </div>

      {/* To be added */}
      {/* <Pricing /> */}
      {/* <PricingSection /> */}

      {/* To be added */}
      {/* Demo */}
      {/* <div className="bg-gray-soft">
        <PageLayout id="interactive-demo">
          <SectionHeader
            title="Interactive Platform Demo"
            subtitle="Experience our AI social media tools in action. See how the platform can generate content, analyze performance, and optimize your social media strategy in real-time."
          />

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            <div className="w-full md:w-1/2 text-center">
              <div className="float inline-block">
                <Image
                  src="/images/social-demo-preview.png"
                  alt="AI Social Demo"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-md"
                />
              </div>
              <p className="mt-4 text-sm text-navy/80 font-body typing-effect max-w-xs mx-auto">
                “Hi! Ready to see what AI can do for your social strategy?”
              </p>
            </div>

            <div className="w-full md:w-1/3 text-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                animate
                label="Launch Interactive Demo"
                iconLeft={Bot}
                iconAnimate
                className="pulse-slow"
              />
            </div>
          </div>
        </PageLayout>
      </div> */}

      {/* Case Study */}
      <PageLayout id="case-studies" ariaLabelledby="case-studies-heading">
        <SectionHeader
          title="Case Studies"
          subtitle="See how leading brands use our platform to boost content performance and drive business results."
          align="center"
          animate
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {caseStudyList.map((story, index) => (
            <StoryCard key={index} {...story} delay={index * 150} />
          ))}
        </div>
      </PageLayout>

      {/* FAQ */}
      <div className="bg-gray-soft">
        <FAQSection {...faqSection} />
      </div>

      {/* Related Products */}
      <PageLayout
        id="related-products"
        ariaLabelledby="related-products-heading"
      >
        <SectionHeader
          title="Related Products"
          subtitle="Explore more AI-powered tools to boost your social media and customer engagement."
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

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
