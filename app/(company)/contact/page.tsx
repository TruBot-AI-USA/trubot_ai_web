import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { MdMail } from "react-icons/md";
import { FaArrowRight, FaMapMarkerAlt, FaRobot } from "react-icons/fa";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import Button from "@/app/ui/components/shared/Button";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import ContactForm from "@/app/(crm-form)/contact-form/ContactForm";
import {
  heroSection,
  bookCallSection,
  contactDirectoryList,
  exploreLinks,
  locationList,
  faqSection,
  socialList,
  ctaSection,
} from "@/app/ui/libs/constants/company/contact";

export const metadata: Metadata = {
  title: "Contact TruBot AI | Reach Out to Our Team",
  description:
    "Get in touch with TruBot AI for inquiries, support, partnerships, or career opportunities. We're here to assist you.",
  keywords: [
    "TruBot AI contact",
    "contact TruBot AI",
    "TruBot AI support",
    "TruBot AI partnerships",
    "TruBot AI careers",
    "TruBot AI inquiries",
    "TruBot AI Pune",
    "TruBot AI email",
    "TruBot AI phone",
    "TruBot AI customer service",
  ],
  authors: [
    {
      name: "TruBot AI",
      url: "https://trubot.ai/contact",
    },
  ],
  creator: "TruBot AI",
  publisher: "TruBot AI",
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-navy via-dark to-black text-light min-h-screen flex items-center overflow-hidden">
        <PageLayout id="contact-hero" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center flex flex-col items-center justify-center">
              <div className="flex justify-center mb-8">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-20 h-20 rounded-full bg-electric/20 blur-2xl animate-pulse" />
                  <span className="absolute w-28 h-28 rounded-full bg-teal/10 blur-3xl animate-pulse" />
                  <FaRobot
                    size={64}
                    className="text-electric relative z-10 drop-shadow-lg"
                  />
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl font-heading font-extrabold leading-tight mb-6 bg-gradient-to-r from-electric to-teal bg-clip-text text-transparent drop-shadow-xl">
                {heroSection.title}
              </h1>

              <p className="text-xl text-light/80 font-body mb-10 max-w-xl mx-auto lg:mx-0 font-light">
                {heroSection.subtitle}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 fade-in scale-up animation-delay-300">
                <Button
                  {...heroSection.primaryCTA}
                  ariaLabel="Send an email to contact@trubotai.com"
                  variant="outline"
                  target="_blank"
                  animate
                  className="px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex justify-center w-full">
              <div className="w-full max-w-xl">
                <div className="bg-white/90 border border-electric/10 rounded-3xl shadow-2xl p-0 overflow-hidden backdrop-blur-lg">
                  {/* Form Body */}
                  <ContactForm className="!bg-transparent !shadow-none !border-none p-12 !m-0" />
                </div>
              </div>
            </div>
          </div>
        </PageLayout>

        {/* Starry Background */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-cover opacity-10 animate-fade-in" />
      </div>

      {/* Need a faster Reply? Book A Call */}
      <div className="bg-gray-soft">
        <PageLayout id="contact-book-call">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 fade-in slide-in-up">
            {/* Left: Illustration */}
            <div className="flex-1 flex justify-center">
              <Image
                src={bookCallSection.image.src}
                alt={bookCallSection.image.alt}
                width={400}
                height={400}
                className="w-full rounded-lg shadow-md"
              />
            </div>

            {/* Right: Text + CTA */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
                {bookCallSection.title}
              </h2>
              <p className="text-navy/80 font-body mb-6 text-lg">
                {bookCallSection.subtitle}
              </p>

              <Button
                {...bookCallSection.primaryCTA}
                ariaLabel="Schedule a call with TruBot AI"
                variant="primary"
                target="_blank"
                animate
              />
            </div>
          </div>
        </PageLayout>
      </div>

      {/* Contact Directory */}
      <PageLayout id="contact-directory">
        <SectionHeader
          title="Reach Out to the Right Team"
          subtitle="Connect directly with the department best suited to assist you."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {contactDirectoryList.map((contact, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl backdrop-blur bg-white/80 transition-all fade-in slide-in-up transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-electric/10 mr-3">
                  <contact.icon className="text-electric w-5 h-5" />
                </div>

                <h3 className="text-lg font-heading font-semibold text-navy">
                  {contact.title}
                </h3>
              </div>

              <p className="text-sm text-navy/80 font-body mb-4">
                {contact.description}
              </p>

              {contact.link ? (
                <Button
                  href={contact.link}
                  label="Learn More"
                  iconRight={ArrowRight}
                  variant="link"
                  className="pl-0"
                />
              ) : (
                <Button
                  href={`mailto:${contact.email}`}
                  iconLeft={MdMail}
                  label={contact.email}
                  variant="link"
                  target="_blank"
                  className="pl-0"
                />
              )}
            </div>
          ))}
        </div>

        <p className="text-sm text-navy/60 text-center mt-8 font-body">
          For sales and investment-related queries, please visit our
          <Button
            href="/sales"
            variant="link"
            label="Sales"
            className="inline pl-1 pr-1"
          />
          or
          <Button
            href="/investor-relations"
            variant="link"
            label="Investor Relations"
            className="inline pl-1 pr-1"
          />
          page.
        </p>
      </PageLayout>

      {/* Explore More */}
      <div className="bg-gray-soft">
        <PageLayout id="contact-explore-more">
          <SectionHeader
            title="Want to Explore More?"
            subtitle="Not ready to reach out just yet? Dive deeper into TruBot AI: learn how we work, what we build, and who we build it for."
          />

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {exploreLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group block p-6 rounded-3xl bg-light/90 border border-transparent backdrop-blur-md shadow transition-all hover:shadow-xl hover:scale-[1.02] hover:border-electric focus:outline-none fade-in slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-electric/10 group-hover:scale-110 transition-transform mr-4 shadow-inner">
                    <item.icon className="text-electric w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-navy group-hover:text-electric">
                    {item.label}
                  </h3>
                </div>
                <p className="text-sm text-navy/70 font-body leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              href="/demo"
              label="Book a Demo"
              variant="outline"
              animate
            />
          </div>
        </PageLayout>
      </div>

      {/* Global Offices */}
      <PageLayout id="global-offices">
        <SectionHeader
          title="Our Global Offices"
          subtitle="Discover our presence around the world."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {locationList.map((location, index) => (
            <div
              key={index}
              className="bg-light rounded-xl shadow-md hover:shadow-lg hover-scale fade-in slide-in-up overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <iframe
                src={location.iframeSrc}
                title={`Map of ${location.title}`}
                loading="lazy"
                className="w-full h-64 md:h-80 border-0"
                aria-label={`Map showing location of ${location.title}`}
                allowFullScreen
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FaMapMarkerAlt
                    className="text-electric"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-navy">
                    {location.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-navy/80 font-body">
                  {location.description}
                </p>
                <Button
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    location.title
                  )}`}
                  label="Open in Google Maps"
                  iconRight={FaArrowRight}
                  variant="link"
                  target="_blank"
                  className="pl-0"
                />
              </div>
            </div>
          ))}
        </div>
      </PageLayout>

      {/* FAQ */}
      <div role="region" className="bg-gray-soft">
        <FAQSection {...faqSection} />
      </div>

      {/* Social Link */}
      <PageLayout id="contact-social">
        <SectionHeader
          title="Stay Connected With TruBot AI"
          subtitle="We're building in public. Follow us for updates on what we're building, who we're building it for, and how we're shaping the future of AI."
        />

        {/* Social Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
          {socialList.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-soft/70 backdrop-blur p-6 rounded-2xl text-center shadow transition-all hover:shadow-xl hover:-translate-y-1 fade-in slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-electric/10 flex items-center justify-center text-electric text-2xl">
                <social.icon />
              </div>
              <h3 className="text-navy font-heading text-md font-semibold group-hover:text-electric">
                {social.label}
              </h3>
              <p className="text-sm text-navy/60 font-body mt-1">Follow us</p>
            </Link>
          ))}
        </div>

        {/* CTA Line */}
        <p className="text-sm text-navy/60 text-center mt-10 font-body fade-in animation-delay-400">
          Curious about our mission? Explore
          <Button
            href="/about"
            label="About Us"
            variant="link"
            className="inline pl-1 pr-1"
          />
          or get to know
          <Button
            href="/our-culture"
            label="Our Culture"
            variant="link"
            className="inline pl-1 pr-1"
          />
          .
        </p>
      </PageLayout>

      {/* CTA */}
      <div className="relative bg-gradient-to-br from-navy via-dark to-black text-light overflow-hidden">
        {/* Content wrapper with padding preserved */}
        <PageLayout
          id="contact-final-cta"
          className="relative z-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-electric to-teal bg-clip-text text-transparent">
            {ctaSection.title}
          </h2>
          <p className="text-light/80 font-body text-lg mb-12 max-w-xl mx-auto">
            {ctaSection.subtitle}
          </p>

          {/* Dual CTA Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            {ctaSection.boxList.map((cta, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-electric/30 rounded-2xl p-6 text-left max-w-xs hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <h3 className="text-electric text-sm mb-2 uppercase font-semibold tracking-wide">
                  {cta.title}
                </h3>
                <p className="text-light/90 mb-4 text-sm">{cta.subtitle}</p>
                <Button
                  href={cta.btn.href}
                  iconLeft={cta.btn.iconLeft}
                  label={cta.btn.label}
                  variant={cta.btn.variant as "primary" | "outline"}
                  target={cta.btn.target as "_blank"}
                  className="w-full"
                  animate
                />
              </div>
            ))}
          </div>

          {/* Optional CTA */}
          <p className="text-sm text-light/60 font-body mt-10">
            Or take a tour through our
            <Button
              href="/products"
              label="products"
              variant="link"
              className="inline pl-1 pr-1"
            />
            and
            <Button
              href="/solutions"
              label="solutions"
              variant="link"
              className="inline pl-1 pr-1"
            />
            to see what we&apos;re building.
          </p>
        </PageLayout>
      </div>
    </>
  );
};

export default Page;
