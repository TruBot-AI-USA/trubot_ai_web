"use client";

import { useState } from "react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import PricingCard from "@/app/ui/components/shared/PricingCard";
import { pricingSection } from "@/app/ui/libs/constants/individual-product/ai-social-media-suite";

const PricingSection = () => {
  const [duration, setDuration] = useState<"monthly" | "yearly">("monthly");
  const plans = pricingSection[duration];

  return (
    <PageLayout id="pricing" ariaLabelledby="pricing-heading">
      <SectionHeader
        title="Pricing Options"
        subtitle="Simple and scalable plans to fit your business needs"
      />

      {/* Billing Toggle */}
      <div className="flex justify-center gap-4 mb-10 fade-in slide-in-up">
        {["monthly", "yearly"].map((option) => {
          const label =
            option === "monthly" ? "Monthly Billing" : "Yearly Billing";
          const isActive = duration === option;

          return (
            <button
              key={option}
              onClick={() => setDuration(option as "monthly" | "yearly")}
              role="button"
              aria-pressed={isActive}
              className={`px-5 py-2 rounded-full text-sm font-medium font-body transition-all
                ${
                  isActive
                    ? "bg-electric text-light shadow"
                    : "bg-light text-electric border border-electric hover-glow"
                }
              `}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
