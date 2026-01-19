import Image from "next/image";
import type { Metadata } from "next";

import Button from "@/app/ui/components/shared/Button";
import CTASection from "@/app/ui/components/shared/CTASection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import {
  heroSection,
  benefitList,
  dealStructureList,
  stepList,
  checkList,
  ctaSection,
} from "@/app/ui/libs/constants/company/mna";
import { MdMail } from "react-icons/md";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Sell Your B2B SaaS or Hosting Business | TruBot AI M&A",
  description:
    "Explore founder‑friendly M&A opportunities with TruBot AI. Get a smooth exit, flexible deal structures, and continued product legacy. Book a call today.",
  keywords: [
    "B2B SaaS acquisition",
    "selling SaaS business",
    "hosting company M&A",
    "business exit",
    "founder exit",
    "acquire SaaS",
    "TruBot AI acquisition",
  ],
  authors: [
    {
      name: "TruBot AI",
      url: "https://trubot.ai/mna",
    },
  ],
  creator: "TruBot AI",
  publisher: "TruBot AI",
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <PageLayout
        id="hero-acquisition"
        className="flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* Left Content */}
        <div className="max-w-xl fade-in slide-in-left">
          <h1 className="text-5xl sm:text-6xl font-heading font-extrabold text-navy leading-tight mb-6">
            <span className="bg-gradient-to-r from-electric to-navy bg-clip-text text-transparent">
              {heroSection.title}
            </span>
          </h1>

          <p className="text-xl text-navy/80 font-body mb-6">
            {heroSection.subtitle}
          </p>

          <ul className="mb-8 space-y-2 font-body text-navy text-sm">
            {heroSection.bullets.map((item, idx) => (
              <li
                key={idx}
                className="inline-flex items-center gap-2 bg-electric/10 text-electric px-3 py-1 rounded-full w-fit"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button
              {...heroSection.primaryCTA}
              variant="primary"
              target="_blank"
              animate
            />
            <Button
              {...heroSection.secondaryCTA}
              variant="outline"
              target="_blank"
              animate
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="bg-gray-soft rounded-xl fade-in slide-in-right">
          <Image
            src={heroSection.img.src}
            alt={heroSection.img.alt}
            width={400}
            height={400}
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </PageLayout>

      {/* Why Sell to TruBot */}
      <div className="bg-gray-soft">
        <PageLayout id="why-sell">
          <SectionHeader
            title="Why Sell to TruBot AI?"
            subtitle="At TruBot AI, we’re not just acquiring companies; we’re building a future-proof ecosystem of tools that empower small and mid-sized businesses. If your B2B SaaS or hosting business aligns with our mission, we’re here to make your exit seamless, respectful, and mutually rewarding."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefitList.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg hover-raise transition-all fade-in slide-in-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-electric/10 text-electric rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-heading font-semibold text-electric">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-sm text-navy/80 font-body">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16 fade-in slide-in-up animation-delay-400">
            <p className="font-body text-navy text-lg mb-4">
              “Want to see how your product fits into our vision?”
            </p>
            <Button
              href="/solutions"
              label="Explore Our AI Solutions"
              variant="outline"
              animate
            />
          </div>
        </PageLayout>
      </div>

      {/* Deal Structure */}
      <PageLayout id="deal-structures">
        <SectionHeader
          title="Deal Structures We Offer"
          subtitle="Flexible pathways tailored to your exit goals and long-term vision. Whether you're looking for a clean break or continued involvement, we’ll craft a deal that fits."
        />

        <div className="relative w-full h-[540px] md:h-[520px] flex items-center justify-center">
          {/* SVG Arrows */}
          <svg
            className="absolute w-full h-full pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="arrowGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1f2937" />
              </linearGradient>
            </defs>
            <path
              d="M 320 180 Q 500 140 640 270"
              stroke="url(#arrowGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 1040 180 Q 800 140 680 270"
              stroke="url(#arrowGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 680 530 Q 680 420 680 330"
              stroke="url(#arrowGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Center Node */}
          <div className="relative z-10 w-32 h-32 rounded-full bg-light shadow-xl flex items-center justify-center font-heading text-electric text-sm text-center hover:scale-105 transition-transform duration-300 border border-electric/20">
            <div className="absolute inset-0 rounded-full bg-electric opacity-10 blur-2xl scale-110 z-0" />
            <span className="relative z-10">TruBot AI</span>
          </div>

          {/* Deal Cards */}
          {dealStructureList.map((structure, idx) => {
            const Icon = structure.icon;
            const positionMap = {
              "top-left": "absolute top-4 left-4 w-72",
              "top-right": "absolute top-4 right-4 w-72",
              bottom: "absolute bottom-4 left-1/2 -translate-x-1/2 w-80",
            } as const;

            type PositionKey = keyof typeof positionMap;

            return (
              <div
                key={idx}
                className={`${
                  positionMap[structure.position as PositionKey]
                } fade-in slide-in-up`}
              >
                <div className="bg-gradient-to-br from-light to-white via-gray-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative w-10 h-10 bg-electric/10 text-electric rounded-full flex items-center justify-center shadow-sm">
                      <div className="absolute inset-0 rounded-full bg-electric opacity-20 blur-lg animate-ping z-0" />
                      <Icon className="relative w-5 h-5 z-10" />
                    </div>
                    <h3 className="text-navy font-heading font-semibold text-base">
                      {structure.title}
                    </h3>
                  </div>
                  <p className="text-sm text-navy/70 font-body leading-relaxed">
                    {structure.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 fade-in slide-in-up animation-delay-600">
          <p className="font-body text-navy text-lg mb-4">
            Not sure which structure fits your goals?
          </p>
          <Button
            href="mailto:acquisitions@trubotai.com"
            label="Email Us"
            iconLeft={MdMail}
            variant="outline"
            target="_blank"
            animate
          />
        </div>
      </PageLayout>

      {/* MNA Process */}
      <div className="bg-gray-soft">
        <PageLayout id="mna-process">
          <SectionHeader
            title="What Our M&A Process Looks Like"
            subtitle="Selling your business shouldn’t feel like a black box. Here’s how we make the process clear, collaborative, and efficient—from intro to integration."
          />

          {/* Horizontal Carousel */}
          <div className="relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 px-4 scroll-smooth items-center">
              {stepList.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === stepList.length - 1;

                return (
                  <div key={index} className="flex items-center gap-4">
                    {/* Step Card */}
                    <div
                      className="min-w-[300px] md:min-w-[340px] max-w-xs bg-white border border-gray-100 rounded-2xl p-6 flex-shrink-0 snap-center shadow-md hover:shadow-xl transition-all fade-in slide-in-up"
                      style={{ animationDelay: `${index * 120}ms` }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-electric/10 text-electric rounded-full shadow-sm">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xs uppercase tracking-wide text-navy/60 font-semibold">
                          {step.label}
                        </h3>
                      </div>
                      <h4 className="text-lg font-heading text-navy font-semibold mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm text-navy/80 font-body leading-relaxed mb-3">
                        {step.description}
                      </p>
                      {step.cta && (
                        <Button
                          href={step.cta.href}
                          label={step.cta.label}
                          target="_blank"
                          iconLeft={Calendar}
                          variant="link"
                          animate
                        />
                      )}
                    </div>

                    {/* Arrow */}
                    {!isLast && (
                      <div className="text-electric/70 text-xl opacity-80">
                        <ArrowRight />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16 fade-in slide-in-up animation-delay-600">
            <p className="font-body text-navy text-lg mb-4">
              Ready to begin the conversation?
            </p>
            <Button
              href="mailto:acquisitions@trubotai.com"
              label="Email Us"
              iconLeft={MdMail}
              variant="outline"
              target="_blank"
              animate
            />
          </div>
        </PageLayout>
      </div>

      {/* Due Diligence List */}
      <PageLayout id="due-diligence">
        <SectionHeader
          title="What We Look for During Due Diligence"
          subtitle="Don’t worry; we’re not here to nitpick. We just want a clear view of your business so we can move quickly and make the right decisions for both sides."
        />

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {/* Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {checkList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-light border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all fade-in slide-in-up"
                >
                  <div className="p-2 bg-electric/10 text-electric rounded-full">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm text-navy font-medium font-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs text-navy/50 font-body">
                      {item.category}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-xl flex items-center fade-in slide-in-right">
            <Image
              src="/images/mna/due-diligence.png"
              alt="Due Diligence"
              width={400}
              height={400}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Copy Tip */}
        <div className="mt-10 text-center text-navy/70 text-sm font-body max-w-xl mx-auto fade-in slide-in-up animation-delay-300">
          You don’t need to have everything perfect. We’ll guide you through
          exactly what’s needed and we keep it all confidential.
        </div>

        {/* CTA */}
        <div className="text-center mt-10 fade-in slide-in-up animation-delay-400">
          <Button
            href="/contact"
            label="Contact Us"
            variant="secondary"
            animate
          />
        </div>
      </PageLayout>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
