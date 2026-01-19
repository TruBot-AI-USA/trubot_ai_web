import BenefitCard from "@/app/ui/components/shared/BenefitCard";
import CheckList from "@/app/ui/components/shared/CheckList";
import CTASection from "@/app/ui/components/shared/CTASection";
import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import VerticalTimeline from "@/app/ui/components/shared/VerticalTimeline";
import {
  heroSection,
  audienceList,
  stepList,
  productFitList,
  loveList,
  ctaSection,
} from "@/app/ui/libs/constants/partners/royalty-program";

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Who This For */}
      <div className="bg-gray-soft">
        <PageLayout id="eligibility">
          <SectionHeader
            title="Who This Is For"
            subtitle="Perfect if you're ready to sell but stuck on growth"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {audienceList.map((item, index) => (
              <FeatureCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                index={index}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* How it Works */}
      <PageLayout id="how-it-works">
        <SectionHeader
          title="How It Works"
          subtitle="Three simple steps to revenue without risk"
        />

        <div className="mt-12 max-w-3xl mx-auto">
          <VerticalTimeline title="Step-by-Step" steps={stepList} />
        </div>
      </PageLayout>

      {/* Ideal Product Fit */}
      <div className="bg-gray-soft">
        <PageLayout id="product-fit">
          <SectionHeader
            title="Ideal Product Fit"
            subtitle="Products we can grow with confidence and speed"
          />

          <div className="max-w-3xl mx-auto mt-10">
            <CheckList items={productFitList} columns={1} />
          </div>
        </PageLayout>
      </div>

      {/* Why Founders Love It */}
      <PageLayout id="why-founders-love-it">
        <SectionHeader
          title="Why Founders Love It"
          subtitle="Built for simplicity, success, and focus"
        />

        <div className="max-w-3xl mx-auto mt-10">
          <BenefitCard {...loveList} />
        </div>
      </PageLayout>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
