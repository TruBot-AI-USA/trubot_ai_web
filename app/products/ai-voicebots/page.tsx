import FeatureCard from "@/app/ui/components/shared/FeatureCard";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import UseCaseCard from "@/app/ui/components/shared/UseCaseCard";
import StoryCard from "@/app/ui/components/shared/StoryCard";
import FAQSection from "@/app/ui/components/shared/FAQSection";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import CTASection from "@/app/ui/components/shared/CTASection";
import TechSpecs from "./components/TechSpecs";
import {
  caseStudyList,
  faqSection,
  featureList,
  heroSection,
  relatedProductList,
  useCaseList,
  ctaSection,
} from "@/app/ui/libs/constants/individual-product/ai-voicebots";

export const metadata = {
  title: "AI Voicebot Solutions – TruBot AI",
  description:
    "Discover TruBot AI's voice automation platform. Our conversational AI voicebots support multilingual, secure, and natural speech experiences for customer service, call centers, and business automation.",
  keywords: [
    "AI Voicebot Solutions",
    "Natural Language Voice Assistants",
    "Multilingual Voicebots",
    "Voice AI for Customer Service",
    "AI-Powered Voice Automation",
    "Voicebot Integration Services",
    "Conversational AI Voicebots",
    "Voicebot for Call Centers",
    "AI Voice Assistant Technology",
    "TruBot AI Voicebot Features",
  ],
};

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection {...heroSection} />

      {/* Key Features */}
      <div className="bg-gray-soft">
        <PageLayout id="features">
          <SectionHeader
            title="Key Features"
            subtitle="Explore the intelligent features that make TruBot AI Voicebots ideal for natural language communication, multilingual support, and real-time automation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureList.map((feature, index) => (
              <FeatureCard key={index} index={index} {...feature} />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Use Cases */}
      <PageLayout id="use-cases">
        <SectionHeader
          title="Use Cases"
          subtitle="Discover how businesses use our voicebot technology to automate inbound calls, deliver self-service solutions, and improve support operations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {useCaseList.map((useCase, index) => (
            <UseCaseCard key={useCase.title} {...useCase} index={index} />
          ))}
        </div>
      </PageLayout>

      {/* Technical Specifications */}
      <div className="bg-gray-soft">
        <TechSpecs />
      </div>

      {/* Pricing to be added */}
      {/* Pricing */}
      {/* <PricingSection /> */}

      {/* Demo to be added */}
      {/* Demo */}
      {/* <div className="bg-gray-soft">
        <PageLayout id="interactive-demo">
          <SectionHeader
            title="Interactive Voice Bot Demo"
            subtitle="Experience our AI voice bot technology firsthand. Click below to interact with a demo voice bot that can answer questions about our platform, provide product information, and showcase key features."
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

      {/* Case Studies */}
      <PageLayout id="case-studies">
        <SectionHeader
          title="Customer Success Stories"
          subtitle="See how enterprises implemented TruBot AI Voicebots to improve efficiency and user experience."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudyList.map((story, index) => (
            <StoryCard
              key={index}
              title={story.client}
              challenge={story.challenge}
              solution={story.solution}
              results={story.results}
              linkLabel={story.linkLabel}
              linkHref={story.linkHref}
              delay={index * 100}
            />
          ))}
        </div>
      </PageLayout>

      {/* FAQs */}
      <div className="bg-gray-soft">
        <FAQSection {...faqSection} />
      </div>

      {/* Related Products */}
      <PageLayout id="related-products">
        <SectionHeader
          title="Related Products"
          subtitle="Explore our extended suite of conversational AI tools for customer engagement and voice automation."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
          {relatedProductList.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              animationDelay={index * 150}
            />
          ))}
        </div>
      </PageLayout>

      {/* Call To Action */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
