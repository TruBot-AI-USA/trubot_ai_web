import BenefitCard from "@/app/ui/components/shared/BenefitCard";
import CTASection from "@/app/ui/components/shared/CTASection";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import HorizontalTimeline from "@/app/ui/components/shared/HorizontalTimeline";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import SolutionCard from "@/app/ui/components/shared/SolutionCard";
import UseCaseCard from "@/app/ui/components/shared/UseCaseCard";
import {
  heroSection,
  advantageList,
  partnerList,
  benefitList,
  productList,
  stepList,
  ctaSection,
} from "@/app/ui/libs/constants/partners/technology-partner";

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Why Partner */}
      <div className="bg-gray-soft">
        <PageLayout id="why-partner" background="gray" padding="lg">
          <SectionHeader
            title="Why Partner with TruBot AI?"
            subtitle="Explore the strategic advantages of joining our technology partner network."
            align="center"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {advantageList.map((item, idx) => (
              <SolutionCard
                key={idx}
                name={item.name}
                provider={item.provider}
                description={item.description}
                icon={item.icon}
                tags={item.tags}
                link={item.link}
                bgColor="bg-light"
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Who Can */}
      <PageLayout id="partner-types">
        <SectionHeader
          title="Who Can Become a Technology Partner?"
          subtitle="Our program supports a variety of tech innovators and platform builders."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
          {partnerList.map((item, idx) => (
            <BenefitCard
              key={idx}
              audience={item.audience}
              subtitle={item.subtitle}
              benefits={item.benefits}
            />
          ))}
        </div>
      </PageLayout>

      {/* Benefits of Joining */}
      <div className="bg-gray-soft">
        <PageLayout id="benefits">
          <SectionHeader
            title="Benefits of Joining"
            subtitle="From accelerating innovation to unlocking new revenue, our technology partnership program is built to scale with you."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {benefitList.map((benefit, index) => (
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
      <PageLayout id="product-suite">
        <SectionHeader
          title="Our Product Suite"
          subtitle="Explore AI tools ready for integration — from chat and voice to finance and surveillance."
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
            subtitle="Follow these steps to become a certified TruBot AI Technology Partner."
          />

          {/* Timeline Line (only desktop) */}
          <div className="hidden lg:block absolute top-[48%] left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-1 bg-gray-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 justify-center mt-12">
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
