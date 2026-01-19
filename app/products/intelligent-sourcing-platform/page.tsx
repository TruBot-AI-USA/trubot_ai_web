import SolutionCategoriesTabs from "./components/SolutionCategories";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import VerticalTimeline from "@/app/ui/components/shared/VerticalTimeline";
import BenefitCard from "@/app/ui/components/shared/BenefitCard";
import StoryCard from "@/app/ui/components/shared/StoryCard";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import CTASection from "@/app/ui/components/shared/CTASection";
import {
  benefitList,
  faqSection,
  featureList,
  guideList,
  heroSection,
  relatedProductList,
  stepList,
  storyList,
  ctaSection,
} from "@/app/ui/libs/constants/individual-product/intelligent-sourcing-platform";

export const metadata = {
  title: "Strategic AI Sourcing for SMEs | TruBot AI",
  description:
    "Compare, discover, and implement AI tools tailored for small and medium businesses. Explore the best AI marketplace platform today.",
  keywords: [
    "Strategic AI Sourcing",
    "AI Tools Comparison Platform",
    "AI Marketplace for SMEs",
    "AI Solutions Buying Guide",
    "AI Tools Directory",
    "AI Solutions Finder",
    "AI Tools Aggregator Platform",
    "AI Solutions Comparison Tool",
    "AI Marketplace Platform",
    "AI Solutions for Businesses",
  ],
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Key Features */}
      <div className="bg-gray-soft">
        <PageLayout id="features">
          <SectionHeader
            title="Key Features"
            subtitle="Everything you need to find and implement the perfect AI solution."
          />

          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {featureList.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* How it Works */}
      <PageLayout id="how-it-works">
        <SectionHeader
          title="How It Works"
          subtitle="A simple five-step journey from discovery to optimization."
        />
        <div className="max-w-4xl mx-auto">
          <VerticalTimeline title="" steps={stepList} animationOffset={0} />
        </div>
      </PageLayout>

      {/* Solution Categories */}
      <div className="bg-gray-soft">
        <SolutionCategoriesTabs />
      </div>

      {/* SME Benefits */}
      <PageLayout id="sme-benefits">
        <SectionHeader
          title="Benefits for SMEs"
          subtitle="Why thousands of small and medium enterprises trust our AI sourcing platform."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {benefitList.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </PageLayout>

      {/* Success Stories */}
      <div className="bg-gray-soft">
        <PageLayout id="success-stories">
          <SectionHeader
            title="Success Stories"
            subtitle="Explore how SMEs across industries are transforming with strategic AI implementation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-12">
            {storyList.map((story, index) => (
              <StoryCard key={index} {...story} delay={index * 100} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Expert Guidance */}
      <PageLayout id="expert-guidance">
        <SectionHeader
          title="Expert Guidance"
          subtitle="Get the insights and support you need to confidently move forward with AI."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {guideList.map((resource, index) => (
            <ProductCard
              key={index}
              icon={resource.icon}
              title={resource.title}
              description={resource.description}
              link={resource.link}
              animationDelay={index * 100}
            />
          ))}
        </div>
      </PageLayout>

      {/* FAQ */}
      <div className="bg-gray-soft">
        <FAQSection {...faqSection} />
      </div>

      {/* Related Services */}
      <PageLayout id="related-services">
        <SectionHeader
          title="Related Services"
          subtitle="Discover other ways we support your AI journey."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {relatedProductList.map((service, index) => (
            <ProductCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              animationDelay={index * 100}
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
