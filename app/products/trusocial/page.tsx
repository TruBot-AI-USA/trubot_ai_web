import Image from "next/image";
import { ArrowRight } from "lucide-react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import CTASection from "@/app/ui/components/shared/CTASection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Pricing from "./components/Pricing";
import AddOnsTable from "./components/AddOnsTable";
import {
  heroSection,
  benefitList,
  featureList,
  whyChooseList,
  faqList,
  relatedProductList,
  ctaSection,
} from "@/app/ui/libs/constants/individual-product/trusocial";

export const metadata = {
  title: "TruSocial – AI-Powered Social Media Management Platform",
  description:
    "Design, plan, schedule, and analyze your social media content with AI. TruSocial helps businesses create engaging content and manage multiple platforms effortlessly.",
  keywords: [
    "Social Media Management",
    "AI Content Generation",
    "Social Media Scheduling",
    "Content Creation Tools",
    "Social Media Analytics",
    "AI-Powered Marketing",
    "Social Media Automation",
    "Content Management Platform",
    "Social Media Planning",
    "Digital Marketing Tools",
  ],
};

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <PageLayout className="flex flex-col items-center gap-12 mx-auto md:flex-row py-20">
          {/* Left: Text Content */}
          <div className="flex-1 w-full text-center md:text-left">
            <span className="inline-block px-4 py-1 mb-4 font-semibold text-electric rounded-full bg-electric/10">
              {heroSection.badge}
            </span>
            <h1 className="mb-4 text-4xl font-bold text-navy md:text-5xl">
              {heroSection.title.main}
              <br />
              {heroSection.title.highlight}
            </h1>
            <div className="mb-2 text-2xl font-normal text-navy">
              {heroSection.poweredBy.text}{" "}
              <span className="text-3xl font-bold tracking-wide text-purple-600">
                {heroSection.poweredBy.ai.letter}
                <span className="relative inline-block">
                  {heroSection.poweredBy.ai.subLetter}
                  <span className="absolute -top-2.5 -right-1.0 text-purple-600 text-lg font-bold">
                    {heroSection.poweredBy.ai.sparkle}
                  </span>
                </span>
              </span>
            </div>
            <h2 className="mb-8 text-3xl font-semibold text-navy">
              {heroSection.subtitle}
            </h2>

            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <Button
                href={heroSection.buttons.secondary.href}
                label={heroSection.buttons.secondary.label}
                variant={heroSection.buttons.secondary.variant}
                iconRight={ArrowRight}
              />
              <Button
                href={heroSection.buttons.primary.href}
                label={heroSection.buttons.primary.label}
                variant={heroSection.buttons.primary.variant}
                iconRight={ArrowRight}
                target="_blank"
              />
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative flex-1 w-full max-w-lg">
            <div className="relative">
              <Image
                src={heroSection.image.src}
                alt={heroSection.image.alt}
                width={heroSection.image.width}
                height={heroSection.image.height}
                priority
                className="relative z-20"
              />
            </div>
          </div>
        </PageLayout>
      </div>

      {/* Feature List */}
      <div id="features" className="bg-gray-soft">
        <PageLayout className="mx-auto">
          <SectionHeader
            title="One Stop Shop for Social Media Management"
            subtitle="Powerful features, instead of tools designed to streamline your social media workflow and maximize your impact."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {benefitList.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center"
              >
                {/* Icon Container */}
                <div
                  className={`flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-gradient-to-br ${item.iconColor}`}
                >
                  <item.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-navy mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Features */}
      <div className="text-white bg-gradient-to-br from-electric via-teal to-coral">
        <PageLayout className="px-4 pt-16 mx-auto md:pt-20" padding="none">
          <SectionHeader
            title="AI Editor at Your Fingertips"
            subtitle="Create stunning social media content with our intuitive design tools. No design experience required."
          />

          {/* Editor Preview Placeholder with Overlapping Feature Cards */}
          <div className="relative mx-auto">
            {/* Main Container with Enhanced Styling */}
            <div className="relative overflow-hidden bg-gradient-to-b from-white/95 via-white/90 to-#D400FF backdrop-blur-sm rounded-t-3xl shadow-2xl border border-white/30 min-h-[500px]">
              {/* Feature Cards Grid */}
              <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-8 p-8 md:p-12">
                <div className="grid w-full max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {featureList.map((item) => {
                    return (
                      <div
                        key={item.title}
                        className="flex flex-col items-center p-6 text-center transition-all duration-300 ease-out transform bg-white group rounded-2xl hover:scale-105"
                      >
                        {/* Icon Container with Enhanced Styling */}
                        <div className="relative mb-6">
                          <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl blur-sm opacity-20 group-hover:opacity-30"></div>
                          <div className="relative flex items-center justify-center w-16 h-16 transition-colors duration-300 border bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl border-teal-200/50 group-hover:border-teal-300/70">
                            <item.icon className="w-8 h-8 text-teal-600" />
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="mb-3 text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </div>

      {/* Why Choose */}
      <PageLayout>
        <SectionHeader
          title="Why Choose Tru Social?"
          subtitle="Join thousands of businesses that trust TrubotSocial to power their social media success."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseList.map((item) => {
            return (
              <div
                key={item.title}
                className="relative flex flex-col items-center p-4 text-center group rounded-2xl"
              >
                {item.comingSoon && (
                  <div className="absolute z-10 transform -translate-x-1/2 -top-2 left-1/2">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-red-500 rounded-full shadow-sm bg-red-50">
                      Coming Soon
                      <span className="p-1 ml-1 bg-white rounded-full">👍</span>
                    </span>
                  </div>
                )}

                {/* Icon Container with Enhanced Styling */}
                <span className="relative inline-flex items-center justify-center w-16 h-16 mb-3 rounded-full bg-electric/10">
                  <item.icon className="w-8 h-8 text-electric" />
                </span>
                <h3 className="mb-2 text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </PageLayout>

      {/* Testimonial */}
      <div className="text-white bg-gradient-to-br from-electric via-teal to-coral">
        <PageLayout className="mx-auto">
          <SectionHeader
            title="See What Early Users Are Saying"
            className="text-white"
          />
          <TestimonialCarousel />
        </PageLayout>
      </div>

      {/* Pricing Section */}
      <Pricing />

      {/* AddOns Section */}
      <AddOnsTable />

      {/* FAQ */}
      <div className="bg-gray-soft">
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Got questions? We've got answers. Can't find what you're looking for? Contact our support team."
          faqList={faqList}
        />
      </div>

      {/* Related Products */}
      <div className="bg-gray-soft">
        <PageLayout>
          <SectionHeader
            title="Explore Our Other AI Solutions"
            subtitle="Discover how our AI-powered tools can transform different aspects of your business."
          />
          <div className="grid gap-8 mt-12 md:grid-cols-3">
            {relatedProductList.map((product, index) => (
              <ProductCard
                key={product.title}
                icon={product.icon}
                title={product.title}
                description={product.description}
                link={product.link}
                animationDelay={index * 100}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Call to Action Section */}
      <CTASection
        title={ctaSection.title}
        subtitle={ctaSection.subtitle}
        primaryCTA={ctaSection.primaryCTA}
      />
    </>
  );
};

export default Page;
