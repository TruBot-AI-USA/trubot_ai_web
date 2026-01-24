import PageLayout from "../ui/components/shared/PageLayout";
import ProductCard from "../ui/components/shared/ProductCard";
import HeroSection from "../ui/components/shared/HeroSection";
import CTASection from "../ui/components/shared/CTASection";
import {
  heroSection,
  productList,
  ctaSection,
} from "../ui/libs/constants/products";

export const metadata = {
  title: "Products – TruBot AI",
  description:
    "Explore TruBot AI’s suite of AI chatbot solutions, no-code builders, and automation tools for customer engagement.",
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

      {/* Product List */}
      <PageLayout id="products">
        <div className="space-y-20">
          {productList.map((group) => (
            <div
              key={group.id}
              className="fade-in slide-in-up"
              aria-labelledby={`group-${group.id}`}
            >
              <h3
                id={`group-${group.id}`}
                className="text-2xl font-bold text-navy mb-6 text-center"
              >
                {group.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.items.map((product) => (
                  <ProductCard
                    key={product.name}
                    title={product.name}
                    description={product.description}
                    link={product.href}
                    icon={product.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageLayout>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
