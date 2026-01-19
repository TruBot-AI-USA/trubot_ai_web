import BenefitCard from "@/app/ui/components/shared/BenefitCard";
import Button from "@/app/ui/components/shared/Button";
import CTASection from "@/app/ui/components/shared/CTASection";
import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import HorizontalTimeline from "@/app/ui/components/shared/HorizontalTimeline";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import UseCaseCard from "@/app/ui/components/shared/UseCaseCard";
import {
  heroSection,
  featureList,
  audienceList,
  benefitList,
  productList,
  stepList,
  ctaSection,
} from "@/app/ui/libs/constants/partners/reseller-program";

const Page = () => {
  return (
    <>
      {/* Hero  */}
      <HeroSection {...heroSection} />

      {/* Why Partner */}
      <div className="bg-gray-soft">
        <PageLayout id="why-partner">
          <SectionHeader
            title="Why Partner with TruBot AI?"
            subtitle="Gain access to scalable, branded AI tools with expert support."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {featureList.map((f, index) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                description={f.description}
                icon={f.icon}
                index={index}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Who Can Be Reseller */}
      <PageLayout id="who-can-resell">
        <SectionHeader
          title="Who Can Become a Reseller?"
          subtitle="Our program is designed for a wide range of business types ready to grow with AI."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {audienceList.map((card, index) => (
            <BenefitCard
              key={index}
              audience={card.audience}
              subtitle={card.subtitle}
              benefits={card.benefits}
            />
          ))}
        </div>
      </PageLayout>

      {/* Benefits of Joining */}
      <div className="bg-gray-soft">
        <PageLayout id="benefits">
          <SectionHeader
            title="Benefits of Joining"
            subtitle="Maximize your growth potential with TruBot AI’s reseller ecosystem."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {benefitList.map((item, index) => (
              <UseCaseCard
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                results={item.results}
                icon={item.icon}
                index={index}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Our Product Suite */}
      <PageLayout id="product-suite">
        <SectionHeader
          title="Our Product Suite"
          subtitle="A complete set of AI tools built to drive engagement, automation, and intelligence."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {productList.map((product, index) => (
            <ProductCard
              key={product.title}
              icon={product.icon}
              title={product.title}
              description={product.description}
              link={product.link}
              animationDelay={index * 120}
            />
          ))}
        </div>
      </PageLayout>

      {/* Get Started */}
      <div className="bg-gray-soft">
        <PageLayout id="get-started" className="relative z-10">
          <SectionHeader
            title="How to Get Started"
            subtitle="Join in 4 simple steps and scale your AI business."
          />
          {/* Timeline Line (only desktop) */}
          <div className="hidden lg:block absolute top-[38%] left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-1 bg-gray-200" />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
            {stepList.map((step, index) => (
              <HorizontalTimeline
                key={index}
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-heading font-bold text-navy mb-4">
              Ready to Partner with Us?
            </h3>

            <p className="text-navy/70 font-body mb-6">
              Take the next step in growing your business with TruBot AI.
            </p>

            <Button
              href="/contact"
              variant="primary"
              animate
              label="Apply Now"
            />
          </div>
        </PageLayout>
      </div>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
