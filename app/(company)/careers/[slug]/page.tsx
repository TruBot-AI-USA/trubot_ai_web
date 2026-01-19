import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaClock } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import { careerPagesMap } from "@/app/ui/libs/constants/company/individual-career";
import { CareerPageDataType } from "@/app/ui/libs/types/careerPage";
import JobHeroSection from "./components/JobHeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";
import CheckList from "@/app/ui/components/shared/CheckList";

export async function generateStaticParams() {
  return Object.keys(careerPagesMap).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = careerPagesMap[slug] as CareerPageDataType;

  return {
    title: `${data?.title} – TruBot AI`,
    description: data?.shortDescription,
    keywords: [
      "TruBot AI Careers",
      `${data?.title} Job Opening`,
      `Remote ${data?.title} Role`,
      `AI Job at TruBot AI`,
      "AI Hiring",
      "Join TruBot AI",
      "Tech Startup Jobs",
      "Open Roles at TruBot",
      "AI startup careers",
      "Artificial intelligence jobs",
      "Remote AI jobs",
      "Machine learning engineer position",
      "AI developer opportunities",
      "Tech startup job openings",
      "AI research roles",
      "Data scientist positions",
      "Join AI startup team",
      "Innovative AI company hiring",
    ],
  };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = careerPagesMap[slug] as CareerPageDataType;

  if (!data) return notFound();

  const {
    title,
    location,
    type,
    shortDescription,
    about,
    roleIntro,
    responsibilities,
    qualifications,
    benefits,
    applyInstructions,
    applyEmail,
    workingHours,
    compensation,
  } = data;

  const emailSubject = `Application for ${title}`;
  const mailtoLink = `mailto:${applyEmail}?subject=${encodeURIComponent(
    emailSubject
  )}`;

  return (
    <>
      {/* Hero */}
      <JobHeroSection
        title={title}
        location={location}
        type={type}
        shortDescription={shortDescription}
        applyHref={mailtoLink}
      />

      {/* Who We Are */}
      <PageLayout
        id="about-trubot-ai"
        maxWidth="narrow"
        padding="none"
        className="mb-12 pt-16 md:pt-20 px-4 md:px-0 fade-in slide-in-up animation-delay-300"
      >
        <SectionHeader title="Who are we?" subtitle={about} align="left" />
      </PageLayout>

      {/* Who We are Looking For */}
      <PageLayout
        id="role-intro"
        maxWidth="narrow"
        padding="none"
        className="mb-12 px-4 md:px-0 fade-in slide-in-up animation-delay-300"
      >
        <SectionHeader
          title="Who are we looking for?"
          subtitle={roleIntro}
          align="left"
        />

        <blockquote className="mt-6 italic text-navy/70 font-body border-l-4 border-electric pl-4">
          “This role isn’t just about operations, it’s about shaping the future
          of AI-driven business.”
        </blockquote>

        <p className="mt-4 text-sm text-navy/60 font-body">
          Curious about how we work? Learn more about
          <Button
            href="/our-culture"
            label="our culture"
            variant="link"
            className="inline pl-1 pr-1"
          />
          .
        </p>
      </PageLayout>

      {/* Responsibilities */}
      <PageLayout
        id="responsibilities"
        maxWidth="narrow"
        padding="none"
        className="mb-12 px-4 md:px-0 fade-in slide-in-up animation-delay-300"
      >
        <SectionHeader title="Responsibilities" align="left" />
        <CheckList items={responsibilities} />
      </PageLayout>

      {/* Qualifications */}
      <PageLayout
        id="qualifications"
        maxWidth="narrow"
        padding="none"
        className="mb-12 px-4 md:px-0 fade-in slide-in-up animation-delay-300"
      >
        <SectionHeader title="Qualifications & Attributes" align="left" />
        <CheckList items={qualifications} />
      </PageLayout>

      {/* Why Join Us */}
      <PageLayout
        id="benefits"
        maxWidth="narrow"
        padding="none"
        className="mb-12 px-4 md:px-0 fade-in slide-in-up animation-delay-300"
      >
        <SectionHeader title="Why Join Us?" align="left" />
        <CheckList items={benefits} />
      </PageLayout>

      {/* Working Hours */}
      {workingHours && (
        <PageLayout
          id="working-hours"
          maxWidth="narrow"
          padding="none"
          className="mb-12 px-4 md:px-0 fade-in slide-in-up animation-delay-300"
        >
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <FaClock className="text-electric text-lg mr-3" />
              <h2 className="text-2xl font-heading font-semibold text-navy">
                Working Hours
              </h2>
            </div>

            <p className="text-navy/80 font-body text-base leading-relaxed">
              {workingHours} We encourage asynchronous productivity with regular
              syncs.
            </p>
          </div>
        </PageLayout>
      )}

      {/* Compensation */}
      {compensation && (
        <PageLayout
          id="compensation"
          maxWidth="narrow"
          padding="none"
          className="mb-12 px-4 md:px-0 fade-in slide-in-up animation-delay-300"
        >
          <SectionHeader
            title="Compensation"
            subtitle={compensation}
            align="left"
          />

          <p className="mt-4 text-sm text-navy/60 font-body">
            Have questions about our compensation structure?
            <Button
              href="/contact"
              label="Contact Us"
              variant="link"
              className="inline pl-1 pr-1"
            />
            - We are happy to chat.
          </p>
        </PageLayout>
      )}

      {/* Apply CTA */}
      <PageLayout id="apply">
        <SectionHeader title="Ready to Apply?" subtitle={applyInstructions} />

        <p className="text-base text-center text-navy/70 mb-8 font-body max-w-2xl mx-auto">
          We don’t just hire for resumes — we hire for ambition, alignment, and
          energy.
        </p>

        <div className="mt-8 text-center">
          <Button
            href={mailtoLink}
            iconLeft={MdMail}
            label="Apply via Email"
            aria-label={`Apply for ${title} role via email`}
            variant="teal"
            target="_blank"
            animate
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 text-sm mt-4">
          <Button
            href="/careers#job-listing"
            label="Browse all openings"
            variant="link"
            className="inline pl-1 pr-1"
          />

          <Button
            href="/contact"
            label="Have questions? Contact us"
            variant="link"
            className="inline pl-1 pr-1"
          />
        </div>
      </PageLayout>
    </>
  );
};

export default Page;
