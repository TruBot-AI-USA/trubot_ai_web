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
  benefitList,
  audienceList,
  strategicBenefitList,
  productList,
  stepList,
  ctaSection,
} from "@/app/ui/libs/constants/partners/strategic-partner";

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
            subtitle="We don’t just build AI — we shape its future with partners who share our vision."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {benefitList.map((item, idx) => (
              <SolutionCard
                key={idx}
                name={item.name}
                provider={item.provider}
                description={item.description}
                icon={item.icon}
                tags={item.tags}
                link={item.link}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Who Can */}
      <PageLayout id="strategic-audience">
        <SectionHeader
          title="Who Can Become a Strategic Partner?"
          subtitle="If you're building, researching, or advising on AI — let's co-create the future together."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {audienceList.map((item, idx) => (
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
            subtitle="Built for visionaries and pioneers — our partner program is more than collaboration. It’s transformation."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {strategicBenefitList.map((benefit, index) => (
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
          subtitle="All of TruBot AI’s products are available for strategic collaboration — from co-building features to integrating within your stack."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
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

      {/* How to Start */}
      <div className="bg-gray-soft">
        <PageLayout id="get-started" className="relative z-10">
          <SectionHeader
            title="How to Get Started"
            subtitle="Our partnership process is designed to create alignment and accelerate innovation — together."
          />

          {/* Timeline Line (only desktop) */}
          <div className="hidden lg:block absolute top-[52%] left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-1 bg-gray-200" />

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
