import { FaQuoteLeft } from "react-icons/fa6";

import TechSpecs from "./components/TechSpecs";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import Button from "@/app/ui/components/shared/Button";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import UseCaseCard from "@/app/ui/components/shared/UseCaseCard";
import StoryCard from "@/app/ui/components/shared/StoryCard";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import HorizontalTimeline from "@/app/ui/components/shared/HorizontalTimeline";
import TestimonialCard from "@/app/ui/components/shared/TestimonialCard";
import CTASection from "@/app/ui/components/shared/CTASection";
import {
  heroSection,
  agentStepList,
  featureList,
  smeUseCaseList,
  integrationList,
  reflectionList,
  caseStudyList,
  faqSection,
  relatedProductList,
  ctaSection,
} from "@/app/ui/libs/constants/individual-product/ai-agents";

export const metadata = {
  title: "AI Agents for Businesses | Intelligent Process Automation",
  description:
    "TruBot AI Agents automate workflows, enhance decision-making, and boost efficiency using conversational and cognitive intelligence. Explore real-world use cases and technical specs.",
  keywords: [
    "AI Agents for Businesses",
    "Intelligent Process Automation",
    "AI Workflow Automation",
    "Autonomous AI Agents",
    "Cognitive AI Solutions",
    "Enterprise AI Agents",
    "AI Task Automation",
    "Customer Support Agents",
    "AI Agents for SMEs",
    "AI Agent Platform",
  ],
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* What is AI Agent */}
      <div className="bg-gray-soft">
        <PageLayout id="what-is-agent">
          <SectionHeader
            title="What Exactly Is an AI Agent?"
            subtitle="Not just a chatbot — a digital teammate that gets things done, autonomously."
          />

          {/* Description */}
          <div className="max-w-3xl mx-auto text-center text-navy/80 font-body text-lg leading-relaxed mb-20">
            <p className="mb-4">
              TruBot AI Agents are always-on assistants that qualify leads,
              follow up, reschedule appointments, and integrate across tools —
              all without manual help.
            </p>
            <p>
              They adapt to context, learn from data, and execute tasks
              instantly — so your team can focus on what matters.
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {agentStepList.map((step, index) => (
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
                “It’s like hiring a full-time ops assistant who never sleeps —
                but costs less than your coffee budget.”
                <br />
                <span className="block mt-1 font-semibold">
                  — Internal Pilot User, Operations Team
                </span>
              </p>
            </div>
          </div>
        </PageLayout>
      </div>

      {/* Key Features */}
      <PageLayout id="features">
        <SectionHeader
          title="Smart Features That Power Your Autonomous Workforce"
          subtitle="Designed to think, act, and improve — TruBot AI Agents are built for modern SMEs who demand more than basic automation."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featureList.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </PageLayout>

      {/* SME Use Case */}
      <div className="bg-gray-soft">
        <PageLayout id="real-use-cases">
          <SectionHeader
            title="AI Agents That Deliver Where It Matters Most"
            subtitle="TruBot AI Agents aren’t just smart — they’re practical. They automate what slows your team down, in real industries with real wins."
          />

          <div className="grid gap-10 md:grid-cols-2 mt-16">
            {smeUseCaseList.map((props, index) => (
              <UseCaseCard key={index} index={index} {...props} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Reflection */}
      <PageLayout id="reflections">
        <SectionHeader
          title="See What Early Users Are Saying"
          subtitle="We may be early in our journey, but our AI Agents are already making a difference — internally and with pilot users. Here’s what people are noticing."
        />

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {reflectionList.map((props, index) => (
            <TestimonialCard key={index} {...props} />
          ))}
        </div>
      </PageLayout>

      {/* Integrations Supported */}
      <div className="bg-gray-soft">
        <PageLayout id="integrations">
          <SectionHeader
            title="Plug-and-Play Integrations That Fit Right In"
            subtitle="TruBot AI Agents integrate seamlessly with your favorite platforms — no friction, no overhaul. From CRMs to calendars, we connect and get to work instantly."
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
          title="Power Up Your Stack With These TruBot Products"
          subtitle="Combine AI Agents with our other powerful tools for even smarter workflows."
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

      {/* Case Studies */}
      <PageLayout id="impact-stories">
        <SectionHeader
          title="See the Impact Before It Happens"
          subtitle="Here’s how TruBot AI Agents are designed to transform real business operations — based on internal simulations and early-stage testing."
        />

        <div className="grid gap-10 md:grid-cols-2 mt-16">
          {caseStudyList.map((props, index) => (
            <StoryCard key={index} delay={index * 100} {...props} />
          ))}
        </div>

        <p className="text-center text-sm text-navy/60 font-body mt-10 max-w-xl mx-auto">
          These are modeled scenarios based on internal workflows and early
          pilot testing. Individual outcomes may vary.
        </p>
      </PageLayout>

      {/* Technical Specifications */}
      <div className="bg-gray-soft">
        <TechSpecs />
      </div>

      {/* Final CTA */}
      <CTASection {...ctaSection} />

      {/* Pricing Section (to enable later) */}
      {/* <Pricing /> */}
    </>
  );
};

export default Page;
