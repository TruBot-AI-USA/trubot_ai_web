import Image from "next/image";
import { ArrowRight } from "lucide-react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import AIScoreCard from "./components/AIScoreCard";
import ProblemSolutionSection from "./components/ProblemSolutionSection";
import ProcessStepCard from "./components/ProcessStepCard";
import TestimonialCard from "./components/TestimonialCard";
import AIPartnerSection from "./components/AIPartnerSection";
import CustomCTASection from "./components/CustomCTASection";
import {
  heroSection,
  problemSolution,
  processSteps,
  featuresGrid,
  testimonial,
  ctaSection,
  faqList,
} from "@/app/ui/libs/constants/individual-product/trulead";

export const metadata = {
  title: "TruLead – AI-Powered Lead Generation & Prospecting | TruBot AI",
  description:
    "Automate your prospecting with AI. Find, qualify, and enrich high-quality leads in minutes with TruLead. Transform your sales pipeline with intelligent lead generation and data enrichment.",
  keywords: [
    "Lead Generation Software",
    "AI Lead Generation",
    "Lead Prospecting Tools",
    "Automated Lead Generation",
    "Lead Enrichment Platform",
    "Sales Prospecting Software",
    "B2B Lead Generation",
    "AI-Powered Prospecting",
    "Lead Qualification",
    "Contact Data Enrichment",
    "Sales Intelligence Platform",
    "Lead Scoring Software",
    "Prospect Research Tools",
    "TruLead",
    "TruBot AI Lead Generation",
  ],
};

const Page = () => {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="bg-[#1034A6] text-white overflow-hidden relative">
        <PageLayout className="flex flex-col items-center gap-12 mx-auto md:flex-row py-12 lg:pt-10 lg:pb-20">
          {/* Left: Text Content */}
          <div className="flex-1 w-full text-center md:text-left z-10">
            <span className="inline-block px-4 py-1 mb-6 font-semibold text-white/90 rounded-full bg-white/10 border border-white/20">
              🚀 {heroSection.badge}
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl leading-tight">
              {heroSection.title.main}
              <br />
              <span className="text-blue-200">
                {heroSection.title.highlight}
              </span>
            </h1>
            <h2 className="mb-8 text-lg text-blue-100 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {heroSection.subtitle}
            </h2>

            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <Button
                href={heroSection.buttons.primary.href}
                label={heroSection.buttons.primary.label}
                className="h-[50px] px-8 rounded-full !bg-white !text-[#1034A6] hover:!bg-blue-50 border-none flex items-center justify-center font-semibold whitespace-nowrap min-w-max"
                iconRight={ArrowRight}
              />
              <Button
                href={heroSection.buttons.secondary.href}
                label={heroSection.buttons.secondary.label}
                className="h-[50px] px-8 rounded-full !bg-white !text-[#1034A6] hover:!bg-blue-50 border-none flex items-center justify-center font-semibold whitespace-nowrap min-w-max"
              />
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
              {heroSection.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl text-white font-bold">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero Image & Floating Card */}
          <div className="relative flex-1 w-full max-w-lg mt-12 md:mt-0 z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src={heroSection.image.src}
                alt={heroSection.image.alt}
                width={heroSection.image.width}
                height={heroSection.image.height}
                priority
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating AI Score Card */}
            <AIScoreCard />

            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-500/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </PageLayout>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-[50%] transform scale-150 translate-y-8"></div>
      </div>

      {/* --- PROBLEM & SOLUTION (ZIG ZAG) --- */}
      <div className="bg-white space-y-0">
        {problemSolution.map((section, index) => (
          <div
            key={section.id}
            className={`py-0 ${index % 2 !== 0 ? "bg-blue-50/30" : "bg-white"}`}
          >
            <PageLayout>
              <ProblemSolutionSection
                id={section.id}
                badge={section.badge}
                title={section.title}
                description={section.description}
                features={section.features}
                imageSrc={section.imageSrc}
                imageAlt={section.imageAlt}
                reversed={section.reversed}
              />
            </PageLayout>
          </div>
        ))}
      </div>

      {/* --- 3-STEP PROCESS SECTION --- */}
      <div className="bg-white py-0">
        <PageLayout>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              {processSteps.title}
            </h2>
            <p className="text-gray-600 text-lg">{processSteps.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.steps.map((step, idx) => (
              <ProcessStepCard
                key={idx}
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
                color={step.color}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* --- WHY LOVE TRULEAD (GRID) --- */}
      <div className="bg-gray-50 py-0">
        <PageLayout>
          <SectionHeader
            title={featuresGrid.title}
            subtitle={featuresGrid.subtitle}
          />

          <div className="grid gap-6 md:grid-cols-2 mt-12">
            {featuresGrid.features.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group flex gap-6 items-start"
              >
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${item.color}`}
                >
                  <item.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PageLayout>
      </div>

      {/* --- AI PARTNER SECTION (Text Heavy Center) --- */}
      <AIPartnerSection />

      {/* --- TESTIMONIAL --- */}
      <div className="bg-white py-0">
        <PageLayout>
          <TestimonialCard
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
          />
        </PageLayout>
      </div>

      {/* --- CTA SECTION --- */}
      <div className="bg-white pb-0">
        <PageLayout>
          <CustomCTASection
            title={ctaSection.title}
            subtitle={ctaSection.subtitle}
            features={ctaSection.features}
            buttons={ctaSection.buttons}
          />
        </PageLayout>
      </div>

      {/* --- FAQ SECTION --- */}
      <div className="bg-gray-50">
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about TruLead."
          faqList={faqList}
        />
      </div>
    </>
  );
};

export default Page;
