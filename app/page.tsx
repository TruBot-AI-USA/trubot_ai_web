import MainHero from "./ui/components/landing/MainHero";
import PageLayout from "./ui/components/shared/PageLayout";
import SectionHeader from "./ui/components/shared/SectionHeader";
import Button from "./ui/components/shared/Button";
import FeatureCard from "./ui/components/shared/FeatureCard";
import ProductCard from "./ui/components/shared/ProductCard";
import UseCaseCard from "./ui/components/shared/UseCaseCard";
import VerticalTimeline from "./ui/components/shared/VerticalTimeline";
import CTASection from "./ui/components/shared/CTASection";
import {
  benefitList,
  productList,
  useCaseList,
  stepList,
  reasonList,
  ctaSection,
} from "./ui/libs/constants";

export const metadata = {
  title: "AI Chatbot Solutions for SMEs | TruBot AI",
  description:
    "AI chatbot solutions for small and medium businesses. No-code chatbot builder for WhatsApp, Messenger & websites. Automate customer support & lead generation.",
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
      <MainHero />

      {/* Benefit */}
      <div className="bg-gray-soft">
        <PageLayout id="key-benefits">
          <SectionHeader
            title="Why Choose TruBot AI?"
            subtitle="Empower your business with intelligent automation tailored for SMEs."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefitList.map((benefit, idx) => (
              <FeatureCard
                key={idx}
                icon={benefit.icon}
                title={benefit.title}
                subtitle={benefit.subtitle}
                description={benefit.description}
                index={idx}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Products */}
      <PageLayout id="products">
        <SectionHeader
          title="Meet the Bots That Run Your Business"
          subtitle="Each product is designed to solve a specific pain point — whether it's handling chats, calls, or complex business processes."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productList.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
              link={product.link}
              animationDelay={index * 100}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center fade-in slide-in-up animation-delay-500">
          <p className="text-lg text-navy font-body mb-4">
            Not sure which product fits your workflow?
          </p>

          <Button
            href="/contact"
            label="Get a Personalized Demo"
            variant="primary"
            animate
          />
        </div>
      </PageLayout>

      {/* Use Cases */}
      <div className="bg-gray-soft">
        <PageLayout id="use-cases">
          <SectionHeader
            title="Smart Use Cases for Every Industry"
            subtitle="Whether you're running a local clinic or scaling a global SaaS business, TruBot AI adapts to your industry and unlocks instant automation results."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCaseList.map((props, index) => (
              <UseCaseCard key={index} index={index} {...props} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              href="/sales"
              variant="primary"
              animate
              label="Get a Personalized Demo"
            />
          </div>
        </PageLayout>
      </div>

      {/* Steps */}
      <PageLayout id="how-it-works">
        <SectionHeader
          title="How TruBot AI Works"
          subtitle="From setup to success — here’s how you go from zero to automated in just a few minutes."
        />

        <div className="mt-12 max-w-3xl mx-auto">
          <VerticalTimeline title="" steps={stepList} animationOffset={100} />
        </div>

        <div className="text-center mt-12 flex flex-col md:flex-row justify-center gap-4">
          <Button href="/demo" variant="primary" animate label="Try TruBot" />
          <Button
            href="/sales"
            variant="outline"
            animate
            label="Talk to Our Team"
          />
        </div>
      </PageLayout>

      {/* Trust Section */}
      <div className="bg-gray-soft">
        <PageLayout id="why-trubot">
          <SectionHeader
            title="Why Businesses Choose TruBot AI"
            subtitle="At TruBot AI, we're committed to delivering reliable and efficient automation solutions tailored for growing businesses."
          />

          {/* Feature Grid using FeatureCard */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reasonList.map((reason, index) => (
              <FeatureCard
                key={index}
                icon={reason.icon}
                title={reason.title}
                description={reason.description}
                index={index}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
