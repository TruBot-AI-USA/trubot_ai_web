import Image from "next/image";
import { Metadata } from "next";
import { FaCheckCircle, FaUserTie } from "react-icons/fa";

import AboutHeroSection from "./components/AboutHeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";
import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import CTASection from "@/app/ui/components/shared/CTASection";
import {
  heroSection,
  problemWeSolveSection,
  storySection,
  visionNMissionSection,
  approachList,
  valueList,
  roadmapList,
  ctaSection,
} from "@/app/ui/libs/constants/company/about";

export const metadata: Metadata = {
  title: "About TruBot AI | Empowering SMEs with Accessible AI Solutions",
  description:
    "Learn about TruBot AI's mission to simplify AI for small and mid-sized businesses. Discover our journey, core values, and commitment to making intelligent automation accessible to all.",
  keywords: [
    "TruBot AI",
    "About TruBot AI",
    "AI for SMEs",
    "Accessible AI solutions",
    "AI automation for small businesses",
    "TruBot mission",
    "TruBot values",
    "AI tools for SMEs",
  ],
  authors: [{ name: "TruBot AI", url: "https://trubot.ai/about" }],
  creator: "TruBot AI",
  publisher: "TruBot AI",
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <AboutHeroSection {...heroSection} />

      {/* Problem We Solve */}
      <div className="bg-gray-soft">
        <PageLayout id="problem">
          <SectionHeader
            title={problemWeSolveSection.title}
            subtitle={problemWeSolveSection.subtitle}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in slide-in-up">
              {problemWeSolveSection.problemList.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-light border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all hover-scale"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-2 rounded-full bg-electric/10 text-electric shadow-md">
                      <Icon size={20} />
                    </div>
                    <p className="text-navy/80 font-body text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <div className="relative h-[360px] sm:h-[420px] flex items-center justify-center">
                <div className="z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-electric/20 text-electric flex items-center justify-center text-3xl mb-2 shadow-md">
                    <FaUserTie />
                  </div>
                  <span className="text-sm text-navy/60 font-body">
                    Founder
                  </span>
                </div>
                {problemWeSolveSection.floatingIconList.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="absolute w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-electric shadow-md float"
                      style={item.style}
                    >
                      <Icon size={20} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center bg-light/80 border border-light/30 rounded-xl px-6 py-5 backdrop-blur-sm shadow fade-in scale-up animation-delay-400">
            <p className="text-navy font-medium text-lg font-body">
              You shouldn’t need a 50 person team to compete. That’s why we
              built
              <span className="text-electric font-semibold"> TruBot AI </span>to
              help small businesses run smarter, faster, and lighter.
            </p>
          </div>
        </PageLayout>
      </div>

      {/* Story */}
      <PageLayout id="our-story">
        <SectionHeader
          title={storySection.title}
          subtitle={storySection.subtitle}
        />

        <div className="mt-16 rounded-xl bg-gray-soft p-8 md:p-12 shadow fade-in slide-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-heading text-navy font-semibold mb-4">
                {storySection.beginning.title}
              </h3>
              <p className="text-navy/80 font-body leading-relaxed">
                {storySection.beginning.text}
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <Image
                src={storySection.beginning.imgURL}
                alt={storySection.beginning.imgAlt}
                className="w-full rounded-lg shadow-md"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-xl bg-gray-soft p-8 md:p-12 shadow fade-in slide-in-up animation-delay-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <Image
                src={storySection.problem.imgURL}
                alt={storySection.problem.imgAlt}
                className="w-full rounded-lg shadow-md"
                width={400}
                height={400}
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-heading text-navy font-semibold mb-4">
                {storySection.problem.title}
              </h3>
              <p className="text-navy/80 font-body leading-relaxed">
                {storySection.problem.text}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center bg-electric/5 rounded-xl p-8 md:p-12 fade-in slide-in-up animation-delay-300">
          <h3 className="text-2xl font-heading text-navy font-semibold mb-4">
            {storySection.solution.title}
          </h3>
          <p className="text-navy/80 font-body leading-relaxed max-w-3xl mx-auto">
            {storySection.solution.text}
          </p>
          <div className="mt-8 flex justify-center">
            <Image
              src={storySection.solution.imgURL}
              alt={storySection.solution.imgAlt}
              className="h-full rounded-lg shadow-md"
              width={600}
              height={600}
            />
          </div>
        </div>
      </PageLayout>

      {/* Vision & Mission */}
      <div className="bg-gray-soft">
        <PageLayout id="vision-n-mission">
          {/* Vision Block */}
          <div className="relative max-w-4xl mx-auto bg-electric/5 border border-electric/20 rounded-xl px-6 py-10 fade-in slide-in-up">
            <h2 className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electric text-white text-xs px-3 py-1 rounded-full shadow-sm uppercase tracking-wide font-bold">
              {visionNMissionSection.vision.title}
            </h2>
            <p className="text-center text-lg sm:text-xl font-body text-navy/80 leading-relaxed">
              {visionNMissionSection.vision.text}
            </p>
          </div>

          {/* Mission Subheading */}
          <div className="mt-20 text-center fade-in slide-in-up animation-delay-200">
            <SectionHeader
              title={visionNMissionSection.mission.title}
              subtitle={visionNMissionSection.mission.text}
            />
          </div>

          {/* Mission Principles Grid */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto fade-in slide-in-up animation-delay-300">
            {visionNMissionSection.mission.missionList.map(
              ({ icon, title, description, note }, index) => {
                const Icon = icon;
                return (
                  <div
                    key={index}
                    className="relative p-6 bg-white/70 backdrop-blur-lg border border-gray-300 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover-raise"
                  >
                    <div className="absolute -top-5 left-5 bg-electric/10 text-electric p-2 rounded-full">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-navy mb-3 pt-6">
                      {title}
                    </h3>
                    <p className="text-navy/80 text-sm font-body leading-relaxed mb-4">
                      {description}
                    </p>
                    <div className="text-teal text-sm font-medium flex items-center gap-2">
                      <FaCheckCircle className="text-teal" />
                      <span>{note}</span>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <div className="mt-20 text-center">
            <p className="text-navy/70 font-body text-base mb-3">
              {visionNMissionSection.cta.text}
            </p>
            <Button
              href={visionNMissionSection.cta.buttonHref}
              label={visionNMissionSection.cta.buttonLabel}
              variant="link"
              animate
            />
          </div>
        </PageLayout>
      </div>

      {/* Our Approach */}
      <PageLayout id="our-approach">
        <SectionHeader
          title="Our Approach"
          subtitle="We focus on what matters: useful AI, built for real people doing real work."
        />

        <div className="space-y-20 max-w-6xl mx-auto mt-16">
          {approachList.map((point, index) => {
            const Icon = point.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="group flex flex-col md:grid md:grid-cols-12 md:items-center gap-10 fade-in slide-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div
                  className={`col-span-7 ${
                    isEven ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-electric/10 rounded-full flex items-center justify-center transition duration-300 group-hover:bg-electric/20">
                      <Icon className="w-6 h-6 text-electric" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-navy tracking-tight">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-navy/80 font-body text-base leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div
                  className={`col-span-5 ${
                    isEven ? "md:order-2" : "md:order-1"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </PageLayout>

      {/* Values */}
      <div className="bg-gray-soft">
        <PageLayout id="our-values">
          <SectionHeader
            title="Our Values"
            subtitle="What guides every product we build and every conversation we have."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 fade-in slide-in-up">
            {valueList.map((value, index) => (
              <FeatureCard {...value} key={index} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Impact & Roadmap */}
      <PageLayout id="road-ahead">
        <SectionHeader
          title="The Road Ahead"
          subtitle="We’re building more than products: we’re building a movement to make AI truly useful, affordable, and empowering for every small business."
        />

        <div className="space-y-20 max-w-6xl mx-auto mt-16">
          {roadmapList.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center rounded-xl bg-gray-soft p-8 md:p-12 shadow fade-in slide-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div
                  className={`${
                    isEven ? "md:order-1" : "md:order-2"
                  } flex justify-center`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full rounded-lg shadow-md"
                    width={400}
                    height={400}
                  />
                </div>

                <div className={`${isEven ? "md:order-2" : "md:order-1"}`}>
                  <h3 className="text-2xl font-heading text-navy font-semibold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-navy/80 font-body text-base leading-relaxed mb-4">
                    {item.content}
                  </p>
                  {item.cta && (
                    <Button {...item.cta} variant="outline" animate />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center max-w-2xl mx-auto text-navy/80 text-base font-body fade-in slide-in-up animation-delay-300">
          Every small business deserves the power of AI.
          <br />
          We’re here to make that happen — one tool, one team, one win at a
          time.
          <div className="mt-6">
            <Button
              href="/investor-relations"
              label="Learn about our vision"
              variant="secondary"
              animate
            />
          </div>
        </div>
      </PageLayout>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
