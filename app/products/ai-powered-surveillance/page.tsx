import BenefitCard from "@/app/ui/components/shared/BenefitCard";
import CTASection from "@/app/ui/components/shared/CTASection";
import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import HorizontalTimeline from "@/app/ui/components/shared/HorizontalTimeline";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import {
  benefitList,
  capabilityList,
  ctaSection,
  foundationList,
  heroSection,
  stepList,
} from "@/app/ui/libs/constants/individual-product/ai-powered-surveillance";

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Key Capability */}
      <div className="bg-gray-soft">
        <PageLayout id="capabilities">
          <SectionHeader
            title="Key Capabilities"
            subtitle="TruBotAI's Surveillance System delivers intelligent, proactive, and customizable protection."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilityList.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* How It Works */}
      <PageLayout id="how-it-works" className="relative z-10">
        <SectionHeader
          title="How It Works"
          subtitle="Intelligent. Autonomous. Reliable."
        />

        {/* Timeline Line (only desktop) */}
        <div className="hidden lg:block absolute top-[50%] left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-1 bg-gray-200" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
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

      {/* Why TruBot AI */}
      <div className="bg-gray-soft">
        <PageLayout id="why-trubot">
          <SectionHeader
            title="Why TruBotAI?"
            subtitle="Smarter security through edge AI and adaptive intelligence"
          />

          <div className="max-w-3xl mx-auto">
            <BenefitCard
              audience="Trusted Architecture. Built for Action."
              subtitle="Powerful advantages of TruBot’s AI Surveillance System:"
              benefits={benefitList}
            />
          </div>
        </PageLayout>
      </div>

      {/* Foundation */}
      <PageLayout id="tech-foundations">
        <SectionHeader
          title="Technical Foundations"
          subtitle="Engineered for extensibility, speed, and smart integration"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {foundationList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-white shadow-md hover-glow fade-in slide-in-up transition-all"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-electric/10 p-3 rounded-full text-electric">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-navy text-lg">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-navy/70 font-body">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </PageLayout>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
