import Image from "next/image";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";
import FAQSection from "@/app/ui/components/shared/FAQSection";
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
            <div className="absolute top-8 -right-4 md:-right-12 bg-white p-6 rounded-2xl shadow-xl animate-in fade-in slide-in-from-bottom-6 hidden md:block max-w-[240px] z-20">
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wide mb-2">
                AI Insight Score
              </p>
              <div className="text-4xl font-bold text-green-600 mb-1">
                98/100
              </div>
              <div className="text-gray-500 text-xs font-medium">
                High buying intent
              </div>
            </div>

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
              <div
                className={`flex flex-col lg:flex-row items-center gap-16 ${
                  section.reversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                      section.id === "problem"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {section.badge}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-600">{section.description}</p>

                  <div className="space-y-4 pt-4">
                    {section.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100"
                      >
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                            section.id === "problem"
                              ? "bg-red-50 text-red-500"
                              : "bg-green-50 text-green-500"
                          }`}
                        >
                          <feat.icon size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">
                            {feat.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                            {feat.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                    <Image
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      width={600}
                      height={450}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
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
              <div
                key={idx}
                className="relative p-8 rounded-2xl border border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div
                  className={`text-6xl font-bold opacity-10 absolute top-4 right-4 ${
                    step.color.split(" ")[0]
                  }`}
                >
                  {step.number}
                </div>
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${step.color}`}
                >
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
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
      <div className="bg-[#1034A6] text-white py-5 text-center">
        <PageLayout>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We Didnt Build Just Another Database <br />
          </h2>
          <h2 className="text-blue-300 text-3xl md:text-5xl font-bold">
            We Built an AI Partner
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mt-10 mb-10">
            TruLead continuously learns from interactions, market signals, and
            evolving buyer behavior—making it smarter every day.
          </p>
        </PageLayout>
      </div>

      {/* --- TESTIMONIAL --- */}
      <div className="bg-white py-0">
        <PageLayout>
          <div className="bg-blue-50 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="text-blue-600 mb-6 flex justify-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} fill="currentColor" className="w-6 h-6" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-navy mb-8 relative z-10">
              `&quot;`{testimonial.quote}`&quot;`
            </blockquote>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                {testimonial.author.charAt(0)}
              </div>
              <div className="font-bold text-gray-900">
                {testimonial.author}
              </div>
              <div className="text-gray-600">{testimonial.role}</div>
            </div>
            {/* Decorative Quotes */}
            <div className="absolute top-4 left-8 text-blue-200 text-9xl font-serif opacity-50">
              “
            </div>
          </div>
        </PageLayout>
      </div>

      {/* --- CTA SECTION --- */}
      <div className="bg-white pb-0">
        <PageLayout>
          <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                {ctaSection.title}
              </h2>
              <p className="text-lg text-gray-600">{ctaSection.subtitle}</p>

              <ul className="space-y-3 pt-4">
                {ctaSection.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto">
              <Button
                href={ctaSection.buttons.primary.href}
                label={ctaSection.buttons.primary.label}
                className="h-[60px] px-8 rounded-full !bg-blue-600 !text-white hover:!bg-blue-700 flex items-center justify-center font-bold text-lg"
                iconRight={ArrowRight}
              />
              <Button
                href={ctaSection.buttons.secondary.href}
                label={ctaSection.buttons.secondary.label}
                className="h-[60px] px-8 rounded-full !bg-blue-600 !text-white hover:!bg-blue-700 flex items-center justify-center font-bold text-lg"
              />
            </div>
          </div>
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
