import { Metadata } from "next";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

import Button from "@/app/ui/components/shared/Button";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import CTASection from "@/app/ui/components/shared/CTASection";
import {
  heroSection,
  featureList,
  differentiatorList,
  apartList,
  snapshotSection,
  ctaSection,
} from "@/app/ui/libs/constants/company/investor-relations";

export const metadata: Metadata = {
  title: "Investor Relations | TruBot AI – Scalable AI for Small Business",
  description:
    "Explore TruBot AI’s investor strategy, product ecosystem, and partner-driven growth model. Learn how we’re scaling AI adoption across SMEs through validated products, strategic acquisitions, and real-world use cases.",
  keywords: [
    "TruBot AI investor relations",
    "AI investment opportunity",
    "AI startups for investors",
    "scalable AI for small business",
    "AI product ecosystem",
    "SaaS investor pitch",
    "white-label AI products",
    "AI automation startup",
    "B2B AI platform",
    "invest in AI tools for SMEs",
  ],
  authors: [{ name: "TruBot AI", url: "https://trubot.ai/investor-relations" }],
  creator: "TruBot AI",
  publisher: "TruBot AI",
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-navy to-dark overflow-hidden">
        <PageLayout
          id="investment-hero"
          className="relative z-10 min-h-[80vh] flex flex-col items-center"
          padding="lg"
        >
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl sm:text-6xl font-heading font-extrabold text-white leading-tight mb-6 fade-in slide-in-up">
              {heroSection.title}
            </h1>

            <p className="text-lg sm:text-xl font-body text-white/90 mb-8 fade-in slide-in-up animation-delay-200">
              {heroSection.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
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

            <p className="text-sm text-light/60 font-body mt-8 fade-in slide-in-up animation-delay-300 max-w-md mx-auto">
              {heroSection.text}
            </p>
          </div>
        </PageLayout>

        {/* Soft Glow */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-electric/10 rounded-full blur-3xl z-0" />
      </div>

      {/* Why Invest */}
      <div className="bg-gray-soft">
        <PageLayout id="why-invest">
          <SectionHeader
            title="Built for Scale. Tuned for Impact. Backed by Market Validation."
            subtitle="TruBot AI is not just another AI startup. We are a product integrator with a bold vision and a practical strategy focused on solving real problems for real businesses. With every product already validated in the market, we’re reducing risk while unlocking scale."
          />

          <div className="mt-16 space-y-20">
            {featureList.map((item, idx) => {
              const isReversed = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col-reverse md:flex-row bg-light rounded-xl p-8 md:p-12 shadow ${
                    isReversed ? "md:flex-row-reverse" : ""
                  } items-center gap-10 fade-in slide-in-up`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={400}
                      height={400}
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                  {/* Text */}
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                      {item.title}
                    </h3>
                    <p className="text-navy/80 font-body mb-6">{item.text}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      {item.links?.map((link, i) => (
                        <Button
                          key={i}
                          href={link.href}
                          label={link.label}
                          variant="outline"
                          animate
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </PageLayout>
      </div>

      {/* How We Do It Differently */}
      <PageLayout id="how-we-do-it">
        <SectionHeader
          title="How We Do It Differently"
          subtitle="A smarter path to building an AI business not just another product."
        />
        <div className="mt-14 grid sm:grid-cols-2 gap-8">
          {differentiatorList.map((item, idx) => (
            <div
              key={idx}
              className={`fade-in slide-in-up`}
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="bg-light rounded-2xl border-t-4 border-electric shadow hover:shadow-lg transition-all duration-300 p-8">
                <h3 className="text-2xl font-heading font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-navy/80 font-body mb-5">
                  {item.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-navy/80 font-body text-sm">
                  {item.solutions.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>

      {/* What Sets Us Apart */}
      <div className="bg-gray-soft">
        <PageLayout id="what-sets-us-apart">
          <SectionHeader
            title="What Sets Us Apart"
            subtitle="Simple solutions. Scalable systems. Built for real businesses."
          />

          <div className="relative mt-24 h-screen">
            {/* Center Bubble */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
              <div className="w-32 h-32 rounded-full bg-white/60 backdrop-blur-md border border-white/30 shadow-xl flex items-center justify-center text-electric font-heading font-semibold text-base float">
                TruBot AI
              </div>
            </div>

            {/* Floating Differentiators */}
            {apartList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`absolute ${item.position} w-[260px] sm:w-[280px] backdrop-blur-md bg-white/70 border border-white/30 rounded-xl shadow-xl p-5 transition-all hover:scale-[1.02] fade-in float`}
                  style={{ animationDelay: `${idx * 200}ms` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-electric/10 rounded-full flex items-center justify-center">
                      <Icon className="text-electric w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-navy text-md">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-navy/80 text-sm font-body">{item.text}</p>
                </div>
              );
            })}
          </div>
        </PageLayout>
      </div>

      {/* Investor Snapshot */}
      <PageLayout id="investor-snapshot">
        <SectionHeader
          title={snapshotSection.title}
          subtitle={snapshotSection.subtitle}
        />

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {snapshotSection.snapshotList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-white/70 backdrop-blur-md border border-white/40 shadow-lg transition hover:shadow-xl fade-in slide-in-up"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-electric/10 rounded-full flex items-center justify-center">
                    <Icon className="text-electric w-5 h-5" />
                  </div>
                  <h3 className="text-navy font-heading font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="text-electric font-body font-semibold mb-1">
                  {item.highlight}
                </p>
                <p className="text-navy/80 text-sm font-body">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Block */}
        <div className="mt-14 text-center space-y-4">
          <Button
            {...snapshotSection.primaryCTA}
            variant="outline"
            target="_blank"
            animate
          />
          <p className="text-sm text-navy/70 font-body">
            Prefer email?
            <Button
              href="mailto:investors@trubotai.com"
              label="investors@trubotai.com"
              variant="link"
              target="_blank"
              className="inline pl-1 pr-1"
            />
            or
            <Button
              href="/contact"
              label="contact us"
              variant="link"
              className="inline pl-1 pr-1"
            />
            .
          </p>
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
              “Your capital. Our innovation. Exponential returns.”
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
