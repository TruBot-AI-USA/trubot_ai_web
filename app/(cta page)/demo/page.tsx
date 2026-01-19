import Image from "next/image";
import { Metadata } from "next";
import { MdMail } from "react-icons/md";
import { AiOutlineShake } from "react-icons/ai";

import Button from "@/app/ui/components/shared/Button";
import CTASection from "@/app/ui/components/shared/CTASection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import {
  clientTypeList,
  demoFeatureList,
  heroSection,
  ctaSection,
} from "@/app/ui/libs/constants/cta/demo";

export const metadata: Metadata = {
  title: "TruBot AI Demo – Chat｜Voice｜Automation",
  description:
    "Book your personalized TruBot AI demo — experience chat, voice & intelligent automation tailored to your business. No fluff, just real results.",
  keywords: [
    "TruBot AI demo",
    "AI chatbot demo",
    "AI voicebot demo",
    "business automation demo",
    "conversational AI demo",
    "live demo appointment",
  ],
  authors: [
    {
      name: "TruBot AI",
      url: "https://trubot.ai/demo",
    },
  ],
  creator: "TruBot AI",
  publisher: "TruBot AI",
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <div
        id="book-demo-cta"
        className="relative bg-dark text-light overflow-hidden"
      >
        <PageLayout
          padding="lg"
          className="relative z-10 text-center max-w-4xl"
        >
          {/* Trust Badge */}
          <p
            className="text-electric font-body italic text-sm mb-4 fade-in animation-delay-100"
            aria-label="trust-badge"
          >
            {heroSection.trustBadge}
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl text-light font-heading font-extrabold leading-tight fade-in slide-in-up">
            {heroSection.title}
          </h1>

          {/* Subheadline */}
          <p className="text-light/80 text-lg sm:text-xl font-body mt-6 fade-in slide-in-up animation-delay-200">
            {heroSection.subtitle}
          </p>

          {/* Value Reinforcement */}
          <p className="text-light/60 text-base font-body mt-6 fade-in slide-in-up animation-delay-300">
            {heroSection.subtitle2}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 fade-in scale-up animation-delay-400">
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

          {/* Soft CTA */}
          <p className="mt-6 text-sm text-light/50 font-body fade-in slide-in-up animation-delay-500">
            Want to discuss your needs with our Sales team first?
            <Button
              href="/sales"
              label="Talk to Sales"
              variant="link"
              className="inline pl-1 pr-1"
            />
          </p>
        </PageLayout>

        {/* Glowing Orb Background */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-electric opacity-10 rounded-full blur-3xl pointer-events-none rotate"></div>
      </div>

      {/* What you'll Get */}
      <div className="bg-gray-soft">
        <PageLayout id="demo-feature-highlight">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <SectionHeader
              title="Get clarity. Get answers. Get ahead."
              subtitle="When you book a demo with TruBot AI, it’s not a generic pitch. It’s a guided, interactive session that shows exactly how our solutions can work for your business — from first message to full automation."
            />
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {demoFeatureList.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-light rounded-xl p-6 shadow-md fade-in slide-in-up hover:shadow-lg hover-glow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-electric/10 text-electric p-2 rounded-full">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-navy">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-navy/80 font-body">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mt-12 max-w-2xl mx-auto text-sm text-center text-navy/60 font-body italic fade-in slide-in-up animation-delay-400">
            🔎 Not ready to book just yet? That’s okay. Feel free to explore all
            our
            <Button
              href="/products"
              label="products"
              variant="link"
              className="inline pl-1 pr-1"
            />
            and see what catches your eye.
          </p>
        </PageLayout>
      </div>

      {/* Who is this for */}
      <PageLayout id="client-types">
        <SectionHeader
          title="Who Is This For?"
          subtitle="You’re not here by accident — TruBot AI is built for businesses like yours. No matter your size or sector, if you're looking to automate, scale, or simplify your customer communication, you're in the right place."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientTypeList.map((ct, idx) => (
            <div
              key={idx}
              className="bg-gray-soft rounded-2xl p-6 flex flex-col items-center text-center shadow-sm transition-shadow hover:shadow-lg hover-glow hover-raise fade-in slide-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Image
                src={ct.illustration}
                alt={ct.title}
                width={200}
                height={200}
                className="w-full rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-heading text-navy mb-2">
                {ct.title}
              </h3>
              <p className="text-navy/80 font-body mb-4">{ct.description}</p>
              <div className="flex flex-col sm:flex-row gap-3 w-full mt-auto">
                <div className="w-full flex justify-around">
                  <Button
                    href={ct.primaryHref}
                    label={ct.primaryLabel}
                    variant="primary"
                    animate
                  />
                  <Button
                    href={ct.secondaryHref}
                    label={ct.secondaryLabel}
                    iconLeft={MdMail}
                    target="_blank"
                    variant="ghost"
                    animate
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-2xl mx-auto text-sm text-center text-navy/60 font-body italic fade-in slide-in-up animation-delay-400">
          And More... From financial services to healthcare, legal to logistics
          — TruBot AI is already helping teams reduce costs, respond faster, and
          work smarter. Let’s explore how it can work for you.
        </p>
      </PageLayout>

      {/* Partner with Us */}
      <div id="partner-invite" className="bg-gray-soft">
        <PageLayout className="relative z-10 flex justify-center">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-10 max-w-2xl w-full shadow-lg text-center fade-in scale-up transition hover:shadow-xl hover-glow">
            <AiOutlineShake className="w-12 h-12 text-electric mb-6 mx-auto pulse-slow" />

            <SectionHeader
              title="Want to Partner With Us?"
              subtitle="Looking for something long-term? We work with agencies, consultants, SaaS platforms, and service providers who want to offer AI-driven solutions without reinventing the wheel."
            />

            <p className="text-navy/70 font-body mb-8">
              Whether you&apos;re looking to resell, white-label, or co-develop
              — we&apos;ve built partner programs to grow together.
            </p>

            <Button
              href="/partners"
              label="Explore our programs"
              variant="secondary"
              animate
            />

            <p className="text-navy/60 italic text-sm mt-6 font-body">
              From startups to enterprise resellers — we offer white-label, SME
              empowerment, and co-branded AI partnership models. Curious? Let’s
              talk partnerships.
            </p>
          </div>
        </PageLayout>
      </div>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
