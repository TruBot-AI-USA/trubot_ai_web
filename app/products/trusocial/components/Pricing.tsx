"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";
import {
  pricingPlansMonthly,
  pricingPlansAnnual,
} from "@/app/ui/libs/constants/individual-product/trusocial";

const Pricing = () => {
  const [duration, setDuration] = useState<"monthly" | "annual">("monthly");
  const plans =
    duration === "monthly" ? pricingPlansMonthly : pricingPlansAnnual;

  return (
    <PageLayout id="pricing" className="mx-auto">
      <SectionHeader
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that fits your needs. Start with our free plan or upgrade anytime."
      />

      {/* Billing Toggle */}
      <div className="flex justify-center items-center gap-4 mb-10 fade-in slide-in-up">
        {[
          { key: "monthly", label: "Monthly Plans" },
          { key: "annual", label: "Annual Plans" },
        ].map((option) => {
          const isActive = duration === option.key;
          const isAnnual = option.key === "annual";

          return (
            <div key={option.key} className="relative inline-flex items-center">
              <button
                onClick={() => setDuration(option.key as "monthly" | "annual")}
                role="button"
                aria-pressed={isActive}
                className={`px-5 py-2 rounded-full text-sm font-medium font-body transition-all ${
                  isActive
                    ? "bg-electric text-light shadow"
                    : "bg-light text-electric border border-electric hover-glow"
                }`}
              >
                {option.label}
              </button>
              {isAnnual && isActive && (
                <span className="ml-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap">
                  2 Months Free!
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Pricing Cards */}
      <div
        className={`grid gap-6 mt-12 ${
          duration === "annual"
            ? "md:grid-cols-2 lg:grid-cols-3"
            : "md:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`relative bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-all duration-300 flex flex-col ${
              plan.popular ? "border-blue-500 shadow-lg" : "border-gray-200"
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              </div>
            )}

            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 mb-4 mx-auto rounded-lg bg-gray-50">
              <plan.icon className={`w-6 h-6 ${plan.color}`} />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
              {plan.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-xs mb-4 text-center leading-relaxed">
              {plan.description}
            </p>

            {/* Price */}
            <div className="text-center mb-4">
              <span className={`text-2xl font-bold ${plan.color}`}>
                {plan.price}
              </span>
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-6 flex-grow">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-xs text-gray-600"
                >
                  <svg
                    className="w-3 h-3 text-green-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <Button
              href="https://trusocial.trubotai.com/auth/signup"
              label={plan.buttonLabel}
              variant={plan.buttonVariant}
              iconRight={ArrowRight}
              className="w-full text-sm py-2 mt-auto"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Pricing;
