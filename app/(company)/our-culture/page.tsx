import Image from "next/image";
import { Metadata } from "next";
import { FaQuoteLeft } from "react-icons/fa6";
import { LuQuote } from "react-icons/lu";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import Button from "@/app/ui/components/shared/Button";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import CTASection from "@/app/ui/components/shared/CTASection";
import BenefitCard from "@/app/ui/components/shared/BenefitCard";
import {
  heroSection,
  culturePillarList,
  highlightList,
  roadmapList,
  perkList,
  ctaSection,
} from "@/app/ui/libs/constants/company/our-culture";

export const metadata: Metadata = {
  title: "TruBot AI Culture | Empowering Innovation & Collaboration",
  description:
    "Discover the culture at TruBot AI—where innovation thrives, collaboration is key, and every team member contributes to building AI solutions that empower SMEs globally.",
  keywords: [
    "TruBot AI culture",
    "work at TruBot AI",
    "TruBot AI team",
    "AI company culture",
    "SME AI solutions",
    "TruBot AI careers",
    "innovation at TruBot AI",
    "collaborative AI teams",
  ],
  authors: [
    {
      name: "TruBot AI",
      url: "https://trubot.ai/our-culture",
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
        id="culture-hero"
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-light"
      >
        {/* Text Content */}
        <div className="fade-in slide-in-up">
          <h1 className="text-5xl sm:text-6xl font-heading font-extrabold text-navy leading-tight mb-6">
            <span className="bg-gradient-to-r from-electric to-navy bg-clip-text text-transparent">
              {heroSection.title}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-navy/70 max-w-xl mb-6 font-body">
            {heroSection.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button {...heroSection.primaryCTA} variant="primary" animate />
            <Button {...heroSection.secondaryCTA} variant="ghost" animate />
          </div>

          <p className="text-sm text-navy/60 mt-4 font-body">
            {heroSection.text}
          </p>
        </div>

        {/* Illustration */}
        <div className="hidden md:block fade-in slide-in-up animation-delay-200">
          <Image
            src={heroSection.image.src}
            alt={heroSection.image.alt}
            width={400}
            height={400}
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </PageLayout>

      {/* What Defines our Culture */}
      <div className="bg-gray-soft">
        <PageLayout
          id="culture-principles"
          className="relative overflow-hidden"
        >
          <SectionHeader
            title="Our Culture Principles"
            subtitle="Beliefs that keep us grounded and growing"
          />

          {/* Orbit Container */}
          <div className="hidden md:block relative w-[500px] h-[500px] md:w-[620px] md:h-[620px] mx-auto">
            {/* Central Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-electric rounded-full flex items-center justify-center text-light font-semibold text-sm shadow-xl z-10">
              Our Culture
            </div>

            {/* Floating Orbit Items */}
            {culturePillarList.map((pillar, idx) => {
              const Icon = pillar.icon;
              const angle = (360 / culturePillarList.length) * idx;

              return (
                <div
                  key={idx}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translate(240px) rotate(-${angle}deg)`,
                    transformOrigin: "center",
                    animationDelay: `${idx * 120}ms`,
                  }}
                >
                  <div className="w-44 p-4 bg-light rounded-xl text-center shadow-md hover:shadow-lg hover-glow hover-scale fade-in slide-in-up float">
                    <Icon className="mx-auto mb-2 text-electric w-7 h-7" />
                    <h3 className="text-md font-heading font-semibold text-navy mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-navy/70 font-body">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Optional background glow */}
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] md:w-[520px] md:h-[520px] bg-electric/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />

            {/* Orbit lines */}
            <div className="absolute inset-0 rounded-full border border-dashed border-electric/20 z-0" />
          </div>

          {/* Mobile Fallback */}
          <div className="md:hidden px-4 mt-20 space-y-6 fade-in slide-in-up">
            {culturePillarList.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-light rounded-lg p-4 shadow-md hover:shadow-lg transition-all fade-in slide-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="text-electric w-6 h-6" />
                    <h3 className="text-base font-heading font-semibold text-navy">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-navy/70 font-body">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </PageLayout>
      </div>

      {/* Live at TruBot AI */}
      <PageLayout id="life-at-trubot">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Column */}
          <div className="fade-in slide-in-up">
            <SectionHeader
              title="How We Work, Collaborate & Grow"
              subtitle="Whether it’s a strategy jam on Zoom, async product planning, or testing our latest AI prototype—life at TruBot AI is about real ownership, meaningful progress, and doing work you’re proud of."
            />

            {/* Highlights */}
            <div className="mt-10 space-y-6">
              {highlightList.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 fade-in slide-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-electric/10 text-electric p-2 rounded-full shadow-md shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-heading font-semibold text-navy mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-navy/70 font-body">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Optional CTA */}
            <div className="flex justify-end mt-5">
              <Button
                href="/about"
                label="About TruBot AI"
                variant="outline"
                animate
              />
            </div>
          </div>

          {/* Visual Column */}
          <div className="fade-in slide-in-up animation-delay-200">
            <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/our-culture/life-at-trubot-illustration.png"
                alt="Life at TruBot AI"
                width={400}
                height={400}
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Team Quote */}
        <div className="mt-20 max-w-3xl mx-auto text-center fade-in slide-in-up animation-delay-300">
          <div className="bg-gray-soft p-6 rounded-xl shadow-md relative">
            <LuQuote className="absolute -top-6 left-1/2 -translate-x-1/2 text-electric text-3xl bg-light rounded-full p-1 shadow" />
            <blockquote className="italic text-navy/90 text-lg font-body mb-4">
              “I get to solve real business problems with full ownership and
              zero bureaucracy. That’s rare and that’s TruBot AI.”
            </blockquote>
            <p className="text-sm text-navy/60 font-body">
              — Backend Developer
            </p>
          </div>
        </div>
      </PageLayout>

      {/* Roadmap */}
      <div className="bg-gray-soft">
        <PageLayout id="culture-roadmap" className="relative z-10">
          <SectionHeader
            title="The Road Ahead"
            subtitle="We’re not just building AI tools; we’re building the infrastructure for a smarter, more efficient world of work. Our mission is to make AI practical, usable, and empowering for every small business."
          />

          {/* Roadmap container with line */}
          <div className="relative border-l border-dotted border-electric/30 max-w-3xl mx-auto">
            {roadmapList.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative pl-12 pb-14 fade-in slide-in-up hover-scale transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon Node */}
                  <div className="absolute -left-[30px] top-0 w-12 h-12 bg-light rounded-full shadow-xl flex items-center justify-center border border-electric pulse-slow z-10">
                    <Icon className="text-electric w-6 h-6" />
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-heading text-navy font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-navy/70 font-body">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="text-center fade-in slide-in-up animation-delay-300">
            <Button
              href="/careers"
              label="Want to help shape the future?"
              variant="link"
            />
          </div>
        </PageLayout>
      </div>

      {/* Where People Thrive */}
      <PageLayout id="where-people-thrive">
        <SectionHeader
          title="Where People Thrive"
          subtitle="Our culture isn’t just about perks—it’s built for builders. Here’s how we create an environment where great work happens and people stay energized."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-in slide-in-up">
          {perkList.map((item, index) => (
            <BenefitCard
              key={index}
              audience={item.audience}
              subtitle={item.subtitle}
              benefits={item.benefits}
              bgClass="bg-gray-soft"
            />
          ))}
        </div>
      </PageLayout>

      {/* Quote */}
      <div className="bg-gray-soft">
        <PageLayout id="investor-quote" ariaLabelledby="investor-quote-heading">
          <div className="text-center max-w-2xl mx-auto fade-in slide-in-up">
            <FaQuoteLeft
              className="text-electric text-2xl mb-4 mx-auto opacity-60 float"
              aria-hidden="true"
            />
            <blockquote
              className="text-2xl sm:text-3xl font-heading text-navy italic leading-relaxed"
              id="investor-quote-heading"
            >
              “We don’t just build AI — we build legacies.”
            </blockquote>
          </div>
        </PageLayout>
      </div>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
