import BenefitCard from "@/app/ui/components/shared/BenefitCard";
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
  benefitList,
  audienceList,
  partnerBenefitList,
  productList,
  stepList,
  ctaSection,
} from "@/app/ui/libs/constants/partners/implementation-partner";

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Why Partner */}
      <div className="bg-gray-soft">
        <PageLayout id="why-partner">
          <SectionHeader
            title="Why Partner with TruBot AI?"
            subtitle="Discover the unique advantages of joining our AI implementation partner ecosystem."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {benefitList.map((feature, index) => (
              <FeatureCard
                key={index}
                index={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Who Can */}
      <PageLayout id="who-can-partner">
        <SectionHeader
          title="Who Can Become an Implementation Partner?"
          subtitle="Our partner program supports a wide range of industries looking to integrate AI solutions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {audienceList.map((audience, index) => (
            <BenefitCard
              key={index}
              audience={audience.audience}
              subtitle={audience.subtitle}
              benefits={audience.benefits}
            />
          ))}
        </div>
      </PageLayout>

      {/* Benefits of Joining */}
      <div className="bg-gray-soft">
        <PageLayout id="benefits">
          <SectionHeader
            title="Benefits of Joining"
            subtitle="From new revenue streams to dedicated marketing support — here’s what sets our partner program apart."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {partnerBenefitList.map((benefit, index) => (
              <UseCaseCard
                key={index}
                index={index}
                icon={benefit.icon}
                title={benefit.title}
                subtitle={benefit.subtitle}
                description={benefit.description}
                results={benefit.results}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Products */}
      <PageLayout id="products">
        <SectionHeader
          title="Our Product Suite"
          subtitle="Explore our powerful tools that drive automation and engagement across channels."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {productList.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
              link={product.link}
              animationDelay={index * 100}
            />
          ))}
        </div>
      </PageLayout>

      {/* Get Started */}
      <div className="bg-gray-soft">
        <PageLayout id="get-started" className="relative z-10">
          <SectionHeader
            title="How to Get Started"
            subtitle="Becoming a TruBot AI partner is simple. Just follow these steps to get started:"
          />
          {/* Timeline Line (only desktop) */}
          <div className="hidden lg:block absolute top-[50%] left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-1 bg-gray-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center mt-12">
            {stepList.map((step, index) => (
              <HorizontalTimeline
                key={index}
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={index * 150}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
