import { Metadata } from "next";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
import { ArrowDown, ArrowRight } from "lucide-react";

import BenefitCard from "@/app/ui/components/shared/BenefitCard";
import Button from "@/app/ui/components/shared/Button";
import CTASection from "@/app/ui/components/shared/CTASection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import {
  heroSection,
  painPointList,
  productList,
  stepList,
  industryList,
  benefitList,
  ctaSection,
} from "@/app/ui/libs/constants/company/sme-empowerment";

export const metadata: Metadata = {
  title: "Empower Your SME with AI | TruBot AI – Plug & Play Automation",
  description:
    "Boost your small business with TruBot AI — plug‑and‑play chatbots, voice bots, and automations that launch in days. Pay just 10% on successful sales — no hidden fees, no lock‑ins.",
  keywords: [
    "SME AI automation",
    "small business chatbot",
    "voice bot for SMEs",
    "TruBot AI",
    "SME empowerment",
  ],
  authors: [
    {
      name: "TruBot AI",
      url: "https://trubot.ai/sme-empowerment",
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
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-light min-h-[80vh]"
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
          <p className="text-sm text-navy/60 mb-6 font-body">
            {heroSection.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              {...heroSection.primaryCTA}
              variant="primary"
              target="_blank"
              animate
            />
            <Button {...heroSection.secondaryCTA} variant="outline" animate />
            <Button {...heroSection.thirdCTA} variant="ghost" animate />
          </div>
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

      {/* Why AI Solution */}
      <div className="bg-gray-soft">
        <PageLayout id="why-ai-solution">
          <SectionHeader
            title="You’re Not Inefficient — You’re Under-Equipped"
            subtitle="Every missed call, unanswered message, or delayed follow-up costs you business. And when you’re wearing too many hats, those moments add up. Fast.\n\nAt TruBot AI, we believe you shouldn’t need a tech department to compete like the big players. That’s why we give SMEs the tools to automate smartly — without bloated software or bloated budgets."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {painPointList.map(
              ({ icon: Icon, title, message, color, delay }, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:-translate-y-1 hover:shadow-xl fade-in slide-in-up transition-transform"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <div
                    className={`bg-${color}/10 text-${color} p-2 rounded-full inline-flex mb-4`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-md font-heading font-semibold text-navy mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-navy/70 italic font-body">
                    {message}
                  </p>
                </div>
              )
            )}
          </div>

          {/* Solution Reveal Block */}
          <div className="mt-16 bg-electric rounded-2xl p-8 text-white max-w-4xl mx-auto text-center fade-in slide-in-up animation-delay-500 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-2">
              Automation isn’t optional anymore — it’s your competitive edge.
            </h3>

            <p className="text-white/90 font-body mb-4">
              That’s why we built a smarter way forward for SMEs.
            </p>

            <Button
              href="/solutions"
              label="See how TruBot solves this"
              iconRight={ArrowRight}
              variant="teal"
              animate
            />
          </div>
        </PageLayout>
      </div>

      {/* What We Offer */}
      <PageLayout id="what-we-offer">
        <SectionHeader
          title="Everything You Need, Nothing You Don’t"
          subtitle="Our AI tools are built for simplicity, speed, and scale — so you can automate without the tech complexity. Whether you're answering customer questions, booking calls, or sending invoices — we've got you covered."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productList.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
              link={product.link}
              animationDelay={product.delay}
            />
          ))}
        </div>

        <div className="text-center mt-12 fade-in slide-in-up animation-delay-300">
          <p className="text-navy/80 text-sm font-body">
            Want to mix and match? <br />
            We tailor every solution based on your business goals.
          </p>

          <Button
            label="Browse all AI products"
            href="/products"
            variant="link"
            iconRight={ArrowRight}
          />
        </div>
      </PageLayout>

      {/* How It Works */}
      <div className="bg-gray-soft">
        <PageLayout id="empowerment-journey" className="relative">
          <SectionHeader
            title="Your Empowerment Journey"
            subtitle="Three simple steps to unlock high-growth opportunities with TruBot AI."
          />

          {/* Step Cards */}
          <div className="relative flex flex-col items-center space-y-10 mt-14">
            {stepList.map(
              ({ title, description, icon: Icon, glow, delay }, idx) => (
                <div
                  key={idx}
                  className={`relative bg-white rounded-xl p-6 shadow-md border border-gray-100 w-full text-center transition-all fade-in slide-in-up ${
                    glow ? "hover-glow pulse-slow" : "hover-raise"
                  }`}
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-teal/10 text-teal p-3 rounded-full inline-flex">
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-navy mb-2">
                    {title}
                  </h3>
                  <p className="text-navy/70 text-sm font-body">
                    {description}
                  </p>

                  {idx < stepList.length - 1 && (
                    <ArrowDown
                      size={20}
                      className="text-electric mt-6 absolute left-1/2 -bottom-6 -translate-x-1/2 z-20"
                    />
                  )}
                </div>
              )
            )}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-14 fade-in slide-in-up animation-delay-500">
            <Button
              href="/demo"
              label="Book a Demo"
              variant="outline"
              iconRight={ArrowRight}
              animate
            />
          </div>

          {/* Background Illustration */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric opacity-5 rounded-full blur-3xl" />
            <div className="absolute top-2/3 right-10 w-[400px] h-[400px] bg-teal opacity-5 rounded-full blur-2xl" />
          </div>
        </PageLayout>
      </div>

      {/* Business Like You */}
      <PageLayout id="business-industries">
        <SectionHeader
          title="Built for Businesses Like Yours"
          subtitle="We empower growing teams across diverse industries — whether you sell products, schedule patients, manage finances, or fix things on the go."
        />

        <div className="mt-16 space-y-20">
          {industryList.map(
            (
              { title, description, benefit, imgAlt, imgSrc, reverse, delay },
              index
            ) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 fade-in slide-in-up"
                style={{ animationDelay: `${delay}ms` }}
              >
                {/* Illustration */}
                <div className={reverse ? "md:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={imgSrc}
                      alt={imgAlt}
                      width={400}
                      height={400}
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                </div>

                {/* Text Block */}
                <div className="bg-light rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-heading font-semibold text-navy mb-3">
                    {title}
                  </h3>
                  <p className="text-navy/80 font-body mb-4">{description}</p>
                  <p className="text-sm font-body text-electric">{benefit}</p>
                </div>
              </div>
            )
          )}
        </div>
      </PageLayout>

      {/* Why Join */}
      <div className="bg-gray-soft">
        <PageLayout id="sme-network">
          <SectionHeader
            title="Why Join TruBot AI’s SME Network?"
            subtitle="More sales. More exposure. No strings attached."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefitList.map((item, index) => (
              <BenefitCard
                key={index}
                audience={item.audience}
                subtitle={item.subtitle}
                benefits={item.benefits}
                bgClass="bg-light"
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Quote Box */}
      <PageLayout id="founder-quote">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md px-8 py-12 relative fade-in slide-in-up">
          {/* Quote Icon */}
          <FaQuoteLeft className="text-electric text-3xl opacity-30 absolute top-6 left-6 float pulse-slow" />

          {/* Quote Text */}
          <blockquote className="text-2xl sm:text-3xl font-heading text-navy italic leading-relaxed z-10 relative">
            “A single deal in our network can 10X your business.”
          </blockquote>
        </div>
      </PageLayout>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
