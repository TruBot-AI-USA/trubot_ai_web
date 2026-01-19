import { FaExchangeAlt } from "react-icons/fa";

import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";
import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import VerticalTimeline from "@/app/ui/components/shared/VerticalTimeline";
import SolutionCard from "@/app/ui/components/shared/SolutionCard";
import BenefitCard from "@/app/ui/components/shared/BenefitCard";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import CTASection from "@/app/ui/components/shared/CTASection";
import SolutionCategoriesTabs from "./components/SolutionCategories";
import TestimonialCarousel from "./components/TestimonialCarousel";
import {
  heroSection,
  featureList,
  buyStepList,
  providerStepList,
  solutionList,
  benefitList,
  faqSection,
  relatedProductList,
  ctaSection,
} from "@/app/ui/libs/constants/individual-product/ai-marketplace";

export const metadata = {
  title: "AI Marketplace Platform | Enterprise Strategic AI Sourcing",
  description:
    "Discover verified AI tools, providers, and integration services for your business. TruBot AI Marketplace connects SMEs and enterprises with scalable AI solutions.",
  keywords: [
    "AI Marketplace for Enterprises",
    "Strategic AI Sourcing",
    "AI Tools Directory",
    "Enterprise AI Solutions",
    "AI Procurement Platform",
    "AI Integration Services",
    "AI Tools for Businesses",
    "AI Marketplace Platform",
    "AI Solutions for SMEs",
  ],
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Key Features */}
      <div className="bg-gray-soft">
        <PageLayout id="features" ariaLabelledby="sfeatures-heading">
          <SectionHeader
            title="Key Features"
            subtitle="Explore what makes our Strategic AI Sourcing ideal for SMEs and enterprises"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {featureList.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Solutions Category */}
      <SolutionCategoriesTabs />

      {/* How It Works */}
      <div className="bg-gray-soft">
        <PageLayout id="how-it-works" ariaLabelledby="how-it-works-heading">
          <SectionHeader
            title="How the AI Marketplace Works"
            subtitle="A seamless experience for solution buyers and providers"
          />
          <div className="mt-16 flex flex-col md:flex-row items-start gap-12">
            <VerticalTimeline title="For Buyers" steps={buyStepList} />
            {/* Icon Separator */}
            <div className="hidden md:flex flex-col justify-center items-center self-stretch px-4">
              <div className="flex flex-col justify-center items-center h-full text-electric">
                <div className="w-px flex-1 bg-electric mb-2" />
                <FaExchangeAlt
                  className="w-6 h-6 float my-2"
                  aria-hidden="true"
                />
                <div className="w-px flex-1 bg-electric mt-2" />
              </div>
            </div>

            <VerticalTimeline
              title="For Solution Providers"
              steps={providerStepList}
              animationOffset={400}
            />
          </div>
        </PageLayout>
      </div>

      {/* Featured Solutions */}
      <PageLayout
        id="featured-solutions"
        aria-labelledby="featured-solutions-heading"
      >
        <SectionHeader
          title="Featured AI Solutions"
          subtitle="Discover top-rated tools from leading AI solution providers"
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {solutionList.map((solution, index) => (
            <SolutionCard
              key={index}
              name={solution.name}
              provider={solution.provider}
              description={solution.description}
              icon={solution.icon}
              tags={solution.tags}
              link={solution.link}
              bgColor={solution.bgColor}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="/solutions"
            label="View All Solutions"
            variant="primary"
            animate
            aria-label="View all available AI solutions on the platform"
          />
        </div>
      </PageLayout>

      {/* Benefits Section */}
      <div className="bg-gray-soft">
        <PageLayout id="benefits-section" ariaLabelledby="benefits-heading">
          <SectionHeader
            title="AI Marketplace Benefits for Businesses and Providers"
            subtitle="Tailored advantages for every stakeholder in your AI adoption journey"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitList.map((group, index) => (
              <BenefitCard
                key={index}
                audience={group.audience}
                subtitle={group.subtitle}
                benefits={group.benefits}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* FAQ */}
      <div className="bg-gray-soft">
        <FAQSection {...faqSection} id="faq-heading" />
      </div>

      {/* Related Products */}
      <PageLayout
        id="related-products"
        ariaLabelledby="related-products-heading"
      >
        <SectionHeader
          title="Related AI Products for Your Business"
          subtitle="Explore complementary tools to enhance your AI transformation"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
          {relatedProductList.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
              link={product.link}
              animationDelay={index * 150}
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
