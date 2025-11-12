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

      {/* Annual Savings Banner */}
      {duration === "annual" && (
        <div className="mb-6 fade-in slide-in-up">
          <div className="relative max-w-2xl mx-auto bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl p-4 shadow-lg overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative flex items-center justify-center gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-white animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-white font-bold text-lg md:text-xl">
                  2 Months Free!
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <p className="text-white/90 text-sm md:text-base font-medium text-center">
                Save up to $400 when you choose annual billing
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Billing Toggle */}
      <div className="flex justify-center items-center gap-4 mb-10 fade-in slide-in-up">
        {[
          { key: "monthly", label: "Monthly Plans" },
          { key: "annual", label: "Annual Plans" },
        ].map((option) => {
          const isActive = duration === option.key;

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
        {plans.map((plan) => {
          // Calculate savings for annual plans
          const isAnnualPlan = duration === "annual";
          const monthlyPrice = isAnnualPlan
            ? plan.title.includes("Starter")
              ? 50
              : plan.title.includes("Pro")
              ? 100
              : plan.title.includes("Business")
              ? 200
              : 0
            : 0;
          const annualPrice = isAnnualPlan
            ? plan.title.includes("Starter")
              ? 500
              : plan.title.includes("Pro")
              ? 1000
              : plan.title.includes("Business")
              ? 2000
              : 0
            : 0;
          const savings =
            isAnnualPlan && monthlyPrice > 0
              ? monthlyPrice * 12 - annualPrice
              : 0;

          return (
            <div
              key={plan.title}
              className={`relative bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-all duration-300 flex flex-col ${
                plan.popular ? "border-blue-500 shadow-lg" : "border-gray-200"
              }`}
            >
              {/* Annual Savings Badge */}
              {isAnnualPlan && savings > 0 && (
                <div className="absolute -top-3 right-4 z-10">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Save ${savings}
                  </div>
                </div>
              )}

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
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
                <div className="flex flex-col items-center">
                  <span className={`text-2xl font-bold ${plan.color}`}>
                    {plan.price}
                  </span>
                  {isAnnualPlan && savings > 0 && (
                    <span className="text-xs text-gray-500 mt-1 line-through">
                      ${monthlyPrice * 12}/year
                    </span>
                  )}
                </div>
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
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Pricing;
