"use client";

import { useState } from "react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import PricingCard from "@/app/ui/components/shared/PricingCard";
import { pricingSection } from "@/app/ui/libs/constants/individual-product/ai-chatbots";

const PricingSection = () => {
  const [duration, setDuration] = useState<"monthly" | "yearly">("monthly");
  const plans = pricingSection[duration];

  return (
    <PageLayout id="pricing" ariaLabelledby="pricing-heading">
      <SectionHeader
        title="Flexible AI Chatbot Pricing Options"
        subtitle="Choose a plan that fits your business—monthly or annually."
      />

      {/* Toggle Billing Option */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          type="button"
          onClick={() => setDuration("monthly")}
          aria-pressed={duration === "monthly"}
          aria-controls="pricing-options"
          aria-label="Switch to monthly billing"
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all fade-in scale-up animation-delay-100 ${
            duration === "monthly"
              ? "bg-electric text-white shadow"
              : "bg-white text-navy border border-electric"
          }`}
        >
          Monthly Billing
        </button>
        <button
          type="button"
          onClick={() => setDuration("yearly")}
          aria-pressed={duration === "yearly"}
          aria-controls="pricing-options"
          aria-label="Switch to yearly billing"
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all fade-in scale-up animation-delay-200 ${
            duration === "yearly"
              ? "bg-electric text-white shadow"
              : "bg-white text-navy border border-electric"
          }`}
        >
          Yearly Billing
        </button>
      </div>

      {/* Plan Cards */}
      <div
        id="pricing-options"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {plans.map((plan, index) => (
          <PricingCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            features={plan.features}
            cta={plan.cta}
            link={plan.link}
            popular={plan.popular}
            index={index}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default PricingSection;
