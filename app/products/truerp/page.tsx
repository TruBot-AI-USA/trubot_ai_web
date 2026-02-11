import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import CTASection from "@/app/ui/components/shared/CTASection";
import Pricing from "./components/Pricing";
import {
  heroSection,
  problemsList,
  coreCapabilities,
  flowSteps,
  industriesList,
  ctaSection,
} from "@/app/ui/libs/constants/individual-product/truerp";

export const metadata: Metadata = {
  title: "TruERP – Unified ERP Platform for Business Operations | TruBot AI",
  description:
    "Run your entire business in one place. TruERP unifies CRM, Finance, HR, and Operations. Sell faster, track inventory, manage accounting, and control operations with a single integrated platform.",
  keywords: [
    "ERP Software",
    "Enterprise Resource Planning",
    "Unified Business Platform",
    "CRM and ERP Integration",
    "Business Management Software",
    "Inventory Management System",
    "Financial Management Software",
    "HR Management System",
    "Operations Management",
    "ERP for SMEs",
    "Business Operations Platform",
    "Integrated Business Software",
    "TruERP",
    "TruBot AI ERP",
  ],
};

const Page = () => {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <PageLayout className="flex flex-col items-center gap-12 mx-auto md:flex-row py-12 lg:pt-20 lg:pb-20">
          {/* Left: Text Content */}
          <div className="flex-1 w-full text-center md:text-left z-10">
            <span className="inline-block px-4 py-1 mb-4 font-semibold text-electric rounded-full bg-electric/10">
              {heroSection.badge}
            </span>
            <h1 className="mb-6 text-4xl font-bold text-navy md:text-5xl leading-tight">
              {heroSection.title.main}
              <br />
              <span className="text-electric">{heroSection.title.highlight}</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 max-w-[600px] mx-auto md:mx-0 leading-relaxed">
              {heroSection.subtitle}
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start mb-12">
              <Button
                href={heroSection.buttons.primary.href}
                label={heroSection.buttons.primary.label}
                variant="primary"
                iconRight={ArrowRight}
                className="h-[52px] px-7 rounded-full"
              />
              <Button
                href={heroSection.buttons.secondary.href}
                label={heroSection.buttons.secondary.label}
                variant="outline"
                className="h-[52px] px-7 rounded-full border-electric text-electric hover:bg-electric/5"
              />
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-3 gap-6">
              {heroSection.featureCards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-4 border border-gray-200 flex items-center gap-3 bg-white hover:bg-gray-50 hover:border-electric/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-6 h-6 text-electric" />
                  </div>
                  <p className="text-sm font-medium text-navy">{card.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative flex-1 w-full max-w-lg mt-12 md:mt-0 z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <Image
                src={heroSection.image.src}
                alt={heroSection.image.alt}
                width={heroSection.image.width}
                height={heroSection.image.height}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </PageLayout>
      </div>

      {/* --- PROBLEMS SECTION --- */}
      <div id="problems" className="bg-gray-soft">
        <PageLayout>
          <SectionHeader
            title="The Problems Modern Businesses Face"
            subtitle="Most teams operate across disconnected tools and manual workflows. TruERP removes the busywork so teams can work accurately, faster, and together."
            align="left"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {problemsList.map((problem, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-200 transition-all hover:bg-electric/5 hover:border-electric/30 hover:shadow-md"
              >
                <h3 className="font-semibold text-lg flex items-center gap-2 text-navy mb-2">
                  <span className="w-3 h-3 border-2 border-electric rounded-full flex-shrink-0"></span>
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </PageLayout>
      </div>

      {/* --- CORE CAPABILITIES SECTION --- */}
      <div id="capabilities">
        <PageLayout>
          <SectionHeader
            title="Core Capabilities"
            subtitle="Everything your business needs—connected, accurate, and fast. Use the full suite or only the modules you need."
            align="left"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {coreCapabilities.map((capability, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-200 transition-all hover:bg-electric/5 hover:border-electric/30 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-electric" />
                </div>
                <h3 className="font-semibold text-lg text-navy mb-2">
                  {capability.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>

          {/* Flow Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-b from-electric to-[#274B9A] text-white rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-4xl font-semibold">
                  From Quote → Cash in One Flow
                </h3>
                <p className="text-sm opacity-90 mt-3 max-w-[520px]">
                  A streamlined end‑to‑end process: create a quotation, convert
                  to an order, generate an invoice, record payments — all synced
                  instantly across finance and inventory.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  {flowSteps.map((step) => (
                    <div
                      key={step}
                      className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </div>

      {/* --- INDUSTRIES WE SERVE SECTION --- */}
      <div id="industries" className="bg-gray-soft">
        <PageLayout>
          <SectionHeader
            title="Industries We Serve"
            subtitle="TruERP is flexible for a range of businesses—from trading and distribution to services and finance-oriented teams."
            align="left"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {industriesList.map((industry, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all hover:shadow-md hover:border-electric/30"
              >
                <div className="bg-gray-50 h-44 relative overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-navy mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PageLayout>
      </div>

      {/* --- PRICING SECTION --- */}
      <Pricing />

      {/* --- CTA SECTION --- */}
      <CTASection
        title={ctaSection.title}
        subtitle={ctaSection.subtitle}
        primaryCTA={ctaSection.primaryCTA}
      />
    </>
  );
};

export default Page;