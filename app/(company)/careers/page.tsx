import Image from "next/image";
import type { Metadata } from "next";
import { MdMail } from "react-icons/md";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import Button from "@/app/ui/components/shared/Button";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import JobList from "./components/JobList";
import CTASection from "@/app/ui/components/shared/CTASection";
import {
  heroSection,
  principleList,
  stepList,
  afterStepList,
  summaryList,
  jobList,
  ctaSection,
} from "@/app/ui/libs/constants/company/careers";

export const metadata: Metadata = {
  title: "Join TruBot AI – Build the Future of AI with Us",
  description:
    "Discover exciting career opportunities at TruBot AI. We're seeking passionate individuals to join our mission in transforming AI solutions. Explore our open roles and be part of our innovative team.",
  keywords: [
    "TruBot AI careers",
    "AI job opportunities",
    "join TruBot AI",
    "TruBot AI hiring",
    "AI careers",
    "TruBot AI open positions",
    "TruBot AI jobs",
    "TruBot AI team",
  ],
  authors: [
    {
      name: "TruBot AI",
      url: "https://trubot.ai/careers",
    },
  ],
  creator: "TruBot AI",
  publisher: "TruBot AI",
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-dark text-light overflow-hidden">
        <PageLayout
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          padding="lg"
        >
          <div className="fade-in slide-in-up">
            <span className="inline-block bg-electric/10 text-electric px-3 py-1 rounded-full text-sm font-medium mb-4">
              {heroSection.tagline}
            </span>
            <h1 className="text-5xl sm:text-6xl font-heading font-extrabold text-light leading-tight mb-6">
              {heroSection.title}
            </h1>
            <p className="text-lg sm:text-xl text-light/70 max-w-xl mb-10 font-body">
              {heroSection.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button {...heroSection.primaryCTA} variant="primary" animate />
              <Button
                {...heroSection.secondaryCTA}
                variant="outline"
                target="_blank"
                animate
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="hidden md:flex justify-center fade-in slide-in-up animation-delay-300">
            <Image
              src={heroSection.image.src}
              alt={heroSection.image.alt}
              width={400}
              height={400}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </PageLayout>

        {/* Background Glow */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-electric opacity-10 rounded-full blur-3xl pointer-events-none z-0" />
      </div>

      {/* Our Hirign Philosophy */}
      <div className="bg-gray-soft">
        <PageLayout id="hiring-philosophy">
          <SectionHeader
            title="We Hire Builders, Not Resumés"
            subtitle="At TruBot AI, we care more about how you think than what your CV says. Our hiring process is designed to reflect the real work you'll be doing because the best way to know if we’ll build well together is to actually build something together."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {principleList.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              href="/our-culture"
              label="See how we work"
              variant="outline"
              animate
            />
          </div>
        </PageLayout>
      </div>

      {/* How We Hire */}
      <PageLayout id="hiring-process" className="relative">
        <SectionHeader
          title="Our Hiring Process, Step by Step"
          subtitle="Our process is designed to be fast, fair, and focused on what matters: how you think, what you can build, and whether we can grow together."
        />

        <div className="relative">
          {/* Gradient vertical line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-electric to-teal pulse-slow rounded-full"
            aria-hidden="true"
          />

          <div className="space-y-24">
            {stepList.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row-reverse" : ""
                  } items-center md:items-start md:justify-between gap-10 fade-in slide-in-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Icon bubble */}
                  <div className="z-10 w-14 h-14 rounded-full bg-electric text-white flex items-center justify-center shadow-xl absolute md:static left-1/2 -translate-x-1/2 md:translate-x-0 border-4 border-white">
                    <step.icon className="w-6 h-6" />
                  </div>

                  {/* Card */}
                  <div
                    className={`bg-light rounded-xl shadow-lg hover:shadow-xl border border-gray-200 p-6 md:w-[47%] transition duration-300 hover-glow ${
                      isLeft ? "md:ml-auto" : "md:mr-auto"
                    }`}
                  >
                    <span className="block text-xs text-electric font-medium mb-2 uppercase tracking-wider">
                      Step {index + 1}
                    </span>
                    <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-navy/80 font-body">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 text-center fade-in slide-in-up animation-delay-400">
          <p className="text-navy font-body mb-4">
            Got questions about our hiring process?
          </p>
          <Button
            href="mailto:careers@trubotai.com"
            label="Contact Careers"
            iconLeft={MdMail}
            variant="link"
            target="_blank"
          />
        </div>

        {/* Background Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-electric opacity-10 rounded-full blur-3xl z-0" />
      </PageLayout>

      {/* Open Roles */}
      <div className="bg-gray-soft">
        <JobList jobList={jobList} />
      </div>

      {/* What to Expect After you Apply */}
      <PageLayout id="post-apply" className="relative">
        <SectionHeader
          title="What Happens After You Apply?"
          subtitle="No long waits. No guessing games. Once you apply, we’ll guide you through each step: fast, clear, and human."
        />

        {/* Stepper Timeline */}
        <div className="mt-16 space-y-16 max-w-4xl mx-auto">
          {afterStepList.map((step, index) => (
            <div
              key={index}
              className="relative flex items-start gap-6 pl-10 border-l-2 border-electric/20 fade-in slide-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute -left-[28px] top-0 w-12 h-12 rounded-full bg-electric text-white flex items-center justify-center shadow-lg border-4 border-white">
                <step.icon className="w-5 h-5" />
              </div>

              <div>
                <span className="block text-xs text-electric font-medium uppercase tracking-wider mb-1">
                  Step {index + 1}
                </span>
                <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-navy/80 font-body">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-20 max-w-2xl mx-auto bg-light/50 backdrop-blur-sm border border-electric/20 rounded-xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 shadow-lg fade-in slide-in-up animation-delay-300">
          {summaryList.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <item.icon className="w-6 h-6 text-electric mt-1" />
              <div>
                <h4 className="text-sm font-semibold text-navy">
                  {item.label}
                </h4>
                <p className="text-sm text-navy/70 font-body">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center fade-in slide-in-up animation-delay-500">
          <p className="text-navy font-body mb-4">Have questions?</p>
          <Button
            href="mailto:careers@trubotai.com"
            label="Contact Our Team"
            iconLeft={MdMail}
            variant="outline"
            target="_blank"
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
