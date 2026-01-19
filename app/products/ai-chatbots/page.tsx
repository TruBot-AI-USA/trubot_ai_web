import TechSpecs from "./components/TechSpecs";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import UseCaseCard from "@/app/ui/components/shared/UseCaseCard";
import StoryCard from "@/app/ui/components/shared/StoryCard";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import CTASection from "@/app/ui/components/shared/CTASection";
import {
  heroSection,
  stepList,
  featureList,
  smeUseCaseList,
  reflectionList,
  integrationList,
  faqSection,
  relatedProductList,
  ctaSection,
} from "@/app/ui/libs/constants/individual-product/ai-chatbots";
import HorizontalTimeline from "@/app/ui/components/shared/HorizontalTimeline";
import { FaQuoteLeft } from "react-icons/fa6";
import TestimonialCard from "@/app/ui/components/shared/TestimonialCard";
import Button from "@/app/ui/components/shared/Button";

export const metadata = {
  title: "AI Chatbot Solutions | No-Code Builder for SMEs & Enterprises",
  description:
    "Build and deploy multilingual AI chatbots across WhatsApp, Messenger, and websites. TruBot AI's no-code chatbot builder enables omnichannel customer engagement and support automation.",
  keywords: [
    "AI Chatbot Solutions",
    "No-Code Chatbot Builder",
    "Multilingual Chatbots",
    "Omnichannel Customer Support",
    "AI-Powered Customer Engagement",
    "Chatbot for SMEs",
    "WhatsApp Business Chatbot",
    "Facebook Messenger Automation",
    "Lead Generation Chatbot",
    "Customer Support Automation",
  ],
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* What is AI Chatbot */}
      <div className="bg-gray-soft">
        <PageLayout id="what-is-chatbot">
          <SectionHeader
            title="What Exactly Is an AI Chatbot?"
            subtitle="Smarter than scripted bots — built to understand, engage, and automate."
          />

          {/* Description */}
          <div className="max-w-3xl mx-auto text-center text-navy/80 font-body text-lg leading-relaxed mb-20">
            <p className="mb-4">
              TruBot AI Chatbots are intelligent virtual assistants that
              instantly respond to customer queries, qualify leads, and resolve
              issues across platforms — all in real-time.
            </p>
            <p>
              They don’t just follow scripts — they understand intent, learn
              from interactions, and work 24/7 so your team can focus on growth,
              not repetitive tasks.
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {stepList.map((step, index) => (
              <HorizontalTimeline
                key={index}
                stepNumber={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
                delay={index * 150}
              />
            ))}
          </div>

          {/* Optional Quote */}
          <div className="mt-20 max-w-2xl mx-auto text-center">
            <div className="border-l-4 border-electric pl-4 text-navy/70 text-sm font-body italic flex gap-2 items-start">
              <FaQuoteLeft className="text-electric mt-1" />
              <p>
                “It felt like adding another teammate — one that never sleeps,
                never forgets, and always replies on time.”
                <br />
                <span className="block mt-1 font-semibold">
                  — Internal Demo Feedback, Sales Lead
                </span>
              </p>
            </div>
          </div>
        </PageLayout>
      </div>

      {/* Key Features */}
      <PageLayout
        id="chatbot-features"
        ariaLabelledby="chatbot-features-heading"
      >
        <SectionHeader
          title="Designed to automate customer conversations, qualify leads, and scale your support effortlessly."
          subtitle="Explore the powerful capabilities that set our multilingual, no-code AI chatbots apart."
          align="center"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featureList.map((feature, index) => (
            <FeatureCard key={index} index={index} {...feature} />
          ))}
        </div>
      </PageLayout>

      {/* SME Use Case */}
      <div className="bg-gray-soft">
        <PageLayout id="sme-use-cases">
          <SectionHeader
            title="Real-World Applications of TruBot AI Chatbots"
            subtitle="Empowering SMEs across industries to automate and enhance customer interactions."
          />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {smeUseCaseList.map((props, index) => (
              <UseCaseCard key={index} index={index} {...props} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Reflection */}
      <PageLayout id="chatbot-testimonials">
        <SectionHeader
          title="See What Early Users Are Saying"
          subtitle="Testimonials from businesses that have transformed their customer interactions with TruBot AI Chatbots."
        />

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {reflectionList.map((props, index) => (
            <TestimonialCard key={index} {...props} />
          ))}
        </div>
      </PageLayout>

      {/* Integration Supported */}
      <div className="bg-gray-soft">
        <PageLayout id="integrations">
          <SectionHeader
            title="Seamless Integrations"
            subtitle="Seamless Integrations"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-16">
            {integrationList.map((group, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all fade-in slide-in-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <h4 className="text-lg font-heading font-semibold text-navy mb-3">
                  {group.title}
                </h4>
                <p className="text-sm text-navy/70 font-body mb-4">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  {group.tools.map((tool, i) => {
                    const Icon = tool.icon;
                    return (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center group"
                        title={tool.tooltip || "Used by 70% of clients"}
                      >
                        <Icon className="text-electric text-2xl mb-1 group-hover:scale-110 transition-transform" />
                        <span className="text-xs text-navy/80 font-body">
                          {tool.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Optional Trust Note */}
          <p className="text-center mt-12 text-sm text-navy/60 font-body">
            All integrations are secure, compliant, and API-driven for maximum
            reliability.
          </p>
        </PageLayout>
      </div>

      {/* Related Products */}
      <PageLayout id="related-products">
        <SectionHeader
          title="Explore Our AI Solutions"
          subtitle="Complementary products to enhance your business operations."
        />

        <div className="grid gap-10 md:grid-cols-2 mt-16">
          {relatedProductList.map((props, index) => (
            <ProductCard key={index} {...props} animationDelay={index * 120} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-navy/70 font-body mb-2">
            Looking for the complete solution?
          </p>
          <Button
            href="/products"
            label="Explore All Products"
            variant="outline"
            animate
          />
        </div>
      </PageLayout>

      {/* FAQ Section */}
      <div className="bg-gray-soft" role="region" aria-labelledby="faq-heading">
        <FAQSection {...faqSection} id="faq-heading" />
      </div>

      {/* Case Study */}
      <PageLayout id="case-study">
        <SectionHeader
          title="Success Story: HealthFirst Clinic"
          subtitle="Enhancing Patient Engagement with TruBot AI Chatbots"
        />

        <div className="mt-16 grid gap-10 md:grid-cols-1 lg:grid-cols-1">
          <StoryCard
            title="HealthFirst Clinic's Digital Transformation"
            challenge="HealthFirst Clinic faced challenges with appointment scheduling and patient follow-ups, leading to missed appointments and decreased patient satisfaction."
            solution="Implemented TruBot AI Chatbots to automate appointment scheduling, send reminders, and handle common patient inquiries."
            results={[
              "40% reduction in missed appointments",
              "50% increase in patient satisfaction",
              "30% decrease in administrative workload",
            ]}
            linkLabel="Read Full Case Study"
            linkHref="/contact"
          />
        </div>
      </PageLayout>

      {/* Technical Specifications */}
      <div className="bg-gray-soft">
        <TechSpecs />
      </div>

      {/* Pricing Section - To be re-enabled */}
      {/*       <PricingSection />      */}

      {/* Demo Section - To be re-enabled */}
      {/*
      <div className="bg-gray-soft" ion" aria-labelledby="demo-heading">
         <PageLayout id="interactive-demo">
          <SectionHeader
            title="Interactive Chatbot Demo"
            subtitle="Experience our AI chatbot technology firsthand. Interact with our demo chatbot to see how it handles different types of inquiries, provides personalized responses, and creates engaging conversations."
            align="center"
          />

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            <div className="w-full md:w-1/2 text-center">
              <div className="float inline-block">
                <Image
                  src="/images/voice-bot-demo.png"
                  alt="AI Voice Bot Demo"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-md"
                />
              </div>
              <p className="mt-4 text-sm text-navy/80 font-body typing-effect max-w-xs mx-auto">
                “Hi there! I&apos;m your virtual assistant—ask me anything!”
              </p>
            </div>

            <div className="w-full md:w-1/3 text-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                animate
                label="Launch Interactive Demo"
                iconLeft={Bot}
                iconAnimate
                className="pulse-slow"
              />
            </div>
          </div>
        </PageLayout>
      </div> */}

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
