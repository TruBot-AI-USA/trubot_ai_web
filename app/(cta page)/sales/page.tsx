import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import Button from "@/app/ui/components/shared/Button";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import NextSteps from "./components/NextSteps";
import CTASection from "@/app/ui/components/shared/CTASection";
import {
  heroSection,
  stepList,
  promiseSection,
  partnerSection,
  exploreLinks,
  ctaSection,
} from "@/app/ui/libs/constants/cta/sales";

export const metadata: Metadata = {
  title: "TruBot AI Sales | Connect with Our AI Solutions Team",
  description:
    "Ready to transform your business with AI? Contact TruBot AI's sales team to explore our tailored chatbot, voice bot, and automation solutions for SMEs.",
  keywords: [
    "AI solutions",
    "chatbots",
    "voice bots",
    "business automation",
    "SME AI tools",
    "TruBot AI sales",
    "AI for small businesses",
    "contact TruBot AI",
  ],
  authors: [
    {
      name: "TruBot AI",
      url: "https://trubot.ai/sales",
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
        id="sales-hero"
        padding="lg"
        className="min-h-[80vh] flex items-center relative overflow-hidden"
        aria-label="Sales Contact Hero"
      >
        {/* Content Grid */}
        <div className="z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in slide-in-up">
            <p
              className="inline-block mb-4 px-4 py-1 bg-electric/10 text-electric text-sm rounded-full font-medium"
              role="doc-subtitle"
            >
              {heroSection.text}
            </p>

            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-navy leading-tight mb-6">
              {heroSection.title}
            </h1>

            <p className="text-lg md:text-xl text-navy/80 font-body mb-6">
              {heroSection.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
          <div className="fade-in slide-in-up animation-delay-200">
            <Image
              src={heroSection.image.src}
              alt={heroSection.image.alt}
              width={400}
              height={400}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-electric opacity-10 rounded-full blur-[160px] z-0" />
      </PageLayout>

      {/* What Happens Next */}
      <div className="bg-gray-soft">
        <PageLayout id="sales-next-steps" className="relative overflow-hidden">
          <SectionHeader
            title="Here’s What Happens After You Reach Out"
            subtitle="No guesswork, no waiting. We keep it simple, fast, and personalized. Here’s how your journey with TruBot AI begins."
          />

          <NextSteps stepList={stepList} />

          <div className="text-center mt-12 text-sm text-navy/60 font-body z-10">
            Not looking to talk yet? Request a
            <Button
              href="/demo"
              label="Demo"
              variant="link"
              className="inline pl-1 pr-1"
            />
            instead.
          </div>

          {/* Background visuals */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] bg-electric/10 rounded-full blur-[160px]" />
          </div>
        </PageLayout>
      </div>

      {/* Sales Team Promise */}
      <PageLayout id="sales-team-promise" aria-label="Sales Team Promise">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Section Header + Promise Grid */}
          <div>
            <SectionHeader
              title={promiseSection.title}
              subtitle={promiseSection.subtitle}
              align="left"
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {promiseSection.promiseList.map((promise, index) => {
                const Icon = promise.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 fade-in slide-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-1 rounded-full bg-gradient-to-br from-electric/10 to-light shadow-sm border border-electric/20 flex items-center justify-center text-electric">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-navy font-heading">
                        {promise.title}
                      </h3>
                      <p className="text-sm text-navy/70 mt-1 leading-relaxed font-body">
                        {promise.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="flex justify-center fade-in scale-up animation-delay-300">
            <Image
              src={promiseSection.image.src}
              alt={promiseSection.image.alt}
              width={400}
              height={400}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="mt-12 w-full justify-center flex">
          <Button
            {...promiseSection.btn}
            variant="teal"
            target="_blank"
            animate
          />
        </div>
      </PageLayout>

      {/* Partner Redirect */}
      <div className="bg-gray-soft">
        <PageLayout
          id="sales-partner-redirect"
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="flex justify-center fade-in slide-in-up">
            <Image
              src={partnerSection.img.src}
              alt={partnerSection.img.alt}
              width={400}
              height={400}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Right Content */}
          <div className="fade-in slide-in-up animation-delay-200">
            <h3 className="text-3xl font-heading font-bold text-navy mb-4">
              {partnerSection.title}
            </h3>
            <p className="text-lg text-navy/80 font-body mb-6">
              {partnerSection.subtitlea}
            </p>
            <p className="text-lg text-navy/80 font-body mb-8">
              {partnerSection.subtitleb}
            </p>
            <Button {...partnerSection.btn} variant="link" className="pl-0" />
          </div>
        </PageLayout>
      </div>

      {/* Still Exploring */}
      <PageLayout id="still-exploring">
        <SectionHeader
          title="Still Exploring?"
          subtitle="Take a moment to dive deeper into our offerings and reach out when you're ready. We’ll be right here."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-12">
          {exploreLinks.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link
                href={card.href}
                key={index}
                className="group bg-white border border-gray-200 hover:border-electric hover:shadow-lg rounded-xl p-6 transition fade-in slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <Icon size={20} className="text-electric" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy group-hover:text-electric font-heading">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-navy/80 font-body mb-4">
                  {card.description}
                </p>
                <span className="text-electric font-medium text-sm group-hover:text-teal font-body">
                  Learn More
                </span>
              </Link>
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
