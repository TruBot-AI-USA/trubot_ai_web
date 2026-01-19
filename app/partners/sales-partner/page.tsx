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
  productList,
  stepList,
  featureList,
  ctaSection,
} from "@/app/ui/libs/constants/partners/sales-partner";

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
            subtitle="Whether you're a solo closer or a full sales agency, our partner program is designed to help you win."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {benefitList.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Who This For */}
      <PageLayout id="audience">
        <SectionHeader
          title="Who Is This For?"
          subtitle="TruBot AI Sales Partner Program is built for closers, consultants, and platforms ready to monetize AI."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
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

      {/* Products */}
      <div className="bg-gray-soft">
        <PageLayout id="products">
          <SectionHeader
            title="What You’ll Be Selling"
            subtitle="Our sales-friendly AI products are built for fast onboarding, demo-ready deployment, and real-world results."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {productList.map((product, idx) => (
              <ProductCard
                key={idx}
                icon={product.icon}
                title={product.title}
                description={product.description}
                link={product.link}
                animationDelay={idx * 100}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* How It Works */}
      <PageLayout id="how-it-works" className="relative z-10">
        <SectionHeader
          title="How It Works"
          subtitle="We’ve made it simple. From application to commission, our Sales Partner journey is streamlined for success."
        />

        {/* Timeline Line (only desktop) */}
        <div className="hidden lg:block absolute top-[52%] left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-1 bg-gray-200" />

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

      {/* Stand Out */}
      <div className="bg-gray-soft">
        <PageLayout id="why-stand-out">
          <SectionHeader
            title="Why TruBot AI Stands Out"
            subtitle="With a modern, partner-first architecture and industry-ready AI, we help you close smarter and scale faster."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {featureList.map((feature, index) => (
              <UseCaseCard
                key={index}
                index={index}
                icon={feature.icon}
                title={feature.title}
                subtitle={feature.subtitle}
                description={feature.description}
                results={feature.results}
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
