import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import BenefitCard from "@/app/ui/components/shared/BenefitCard";
import VerticalTimeline from "@/app/ui/components/shared/VerticalTimeline";
import SolutionCard from "@/app/ui/components/shared/SolutionCard";
import TestimonialCard from "@/app/ui/components/shared/TestimonialCard";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import CTASection from "@/app/ui/components/shared/CTASection";
import WLPHeroSection from "./components/WLPHeroSection";
import ProductSection from "./components/ProductSection";
import {
  ctaSection,
  faqSection,
  featureList,
  heroSection,
  highlightList,
  personaList,
  stepList,
  testinomialList,
} from "@/app/ui/libs/constants/partners/white-label-partners";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <WLPHeroSection {...heroSection} />

      {/* Why Join */}
      <div className="bg-gray-soft">
        <PageLayout id="why-join">
          <SectionHeader
            title="Why Join the TruBot AI White Label Program?"
            subtitle="At TruBot AI, we empower digital agencies, SaaS providers, and IT consultants to scale without building AI tools from scratch."
            align="left"
          />

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-12">
            {featureList.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* White Label Products */}
      <ProductSection />

      {/* Ideal For */}
      <div className="bg-gray-soft">
        <PageLayout id="ideal-for">
          <SectionHeader
            title="Ideal For"
            subtitle="TruBot AI is a perfect fit for service providers looking to scale with AI-powered automation."
          />

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 mt-12">
            {personaList.map((persona, index) => (
              <BenefitCard
                key={index}
                audience={persona.audience}
                subtitle={persona.subtitle}
                benefits={persona.benefits}
                bgClass="bg-light"
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* How it works */}
      <PageLayout id="how-it-works">
        <SectionHeader
          title="How It Works"
          subtitle="Getting started with TruBot AI's White Label Program is quick and easy."
        />

        <VerticalTimeline
          title="3 Simple Steps"
          steps={stepList}
          animationOffset={200}
        />

        {/* Optional Notes */}
        <div className="mt-16 bg-electric/10 border border-electric rounded-xl p-6 text-center font-body text-navy text-sm fade-in slide-in-up">
          <p className="mb-2">✔ No coding required</p>
          <p>✔ No tech expertise needed</p>
        </div>
      </PageLayout>

      {/* What Makes TruBot Different */}
      <div className="bg-gray-soft">
        <PageLayout id="why-different">
          <SectionHeader
            title="What Makes TruBot AI Different?"
            subtitle="A platform that's not only white-labeled—but truly partner-ready, globally scalable, and fully supported."
          />

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {highlightList.map((item, index) => (
              <SolutionCard key={index} {...item} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Testinomial */}
      <PageLayout id="testimonials">
        <SectionHeader
          title="What Our Partners Say"
          subtitle="Trusted by fast-growing agencies, consultants, and SaaS teams."
        />

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 mt-12">
          {testinomialList.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
            />
          ))}
        </div>
      </PageLayout>

      {/* FAQ */}
      <div className="bg-gray-soft">
        <FAQSection {...faqSection} />
      </div>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
