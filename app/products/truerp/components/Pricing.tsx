"use client";

import { useState } from "react";
import { ArrowRight, Briefcase, Package, Globe } from "lucide-react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";

type ButtonVariant = "link" | "submit" | "primary" | "secondary" | "outline" | "ghost" | "coral" | "teal" | undefined;

// Global Plans
const globalPlansMonthly = [
  {
    title: "Free",
    price: "$0",
    billingPeriod: "forever",
    description: "Perfect for trying out TruERP",
    target: "Freelancers / Small Startups",
    icon: Package,
    color: "text-gray-600",
    buttonLabel: "Start Free Trial",
    buttonVariant: "outline" as ButtonVariant,
    buttonHref: "/sales",
    popular: false,
    features: [
      "7-10 day free trial",
      "Basic inventory tracking",
      "Up to 100 transactions",
      "Email support",
      "Single user",
    ],
    users: "1 user",
  },
  {
    title: "Pro",
    price: "$40/month",
    billingPeriod: "per month",
    description: "For growing businesses",
    target: "Freelancers / Small Startups, Growing SMEs, Mid-Market Corporations",
    icon: Globe,
    color: "text-blue-600",
    buttonLabel: "Start Free Trial",
    buttonVariant: "primary" as ButtonVariant,
    buttonHref: "/sales",
    popular: true,
    annualDiscount: "20% OFF",
    features: [
      "Everything in Free, plus:",
      "Advanced inventory management",
      "Unlimited transactions",
      "Multi-location support",
      "Basic analytics",
      "Priority email support",
      "API access",
    ],
    users: "Up to 5 users",
  },
  {
    title: "Enterprise",
    price: "Contact Sales",
    billingPeriod: "custom",
    description: "Tailored for large operations",
    target: "Custom",
    icon: Briefcase,
    color: "text-purple-600",
    buttonLabel: "Contact Sales",
    buttonVariant: "outline" as ButtonVariant,
    buttonHref: "/demo",
    popular: false,
    features: [
      "Everything in Pro, plus:",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom reporting",
      "On-premise option",
      "24/7 phone support",
    ],
    users: "Unlimited users",
  },
];

const globalPlansAnnual = [
  {
    title: "Free",
    price: "$0",
    billingPeriod: "forever",
    description: "Perfect for trying out TruERP",
    target: "Freelancers / Small Startups",
    icon: Package,
    color: "text-gray-600",
    buttonLabel: "Start Free Trial",
    buttonVariant: "outline" as ButtonVariant,
    buttonHref: "/sales",
    popular: false,
    features: [
      "7-10 day free trial",
      "Basic inventory tracking",
      "Up to 100 transactions",
      "Email support",
      "Single user",
    ],
    users: "1 user",
  },
  {
    title: "Pro",
    price: "$32/month",
    billingPeriod: "per month, billed annually",
    description: "For growing businesses",
    target: "Freelancers / Small Startups, Growing SMEs, Mid-Market Corporations",
    icon: Globe,
    color: "text-blue-600",
    buttonLabel: "Start Free Trial",
    buttonVariant: "primary" as ButtonVariant,
    buttonHref: "/sales",
    popular: true,
    annualDiscount: "20% OFF",
    features: [
      "Everything in Free, plus:",
      "Advanced inventory management",
      "Unlimited transactions",
      "Multi-location support",
      "Basic analytics",
      "Priority email support",
      "API access",
    ],
    users: "Up to 5 users",
  },
  {
    title: "Enterprise",
    price: "Contact Sales",
    billingPeriod: "custom",
    description: "Tailored for large operations",
    target: "Custom",
    icon: Briefcase,
    color: "text-purple-600",
    buttonLabel: "Contact Sales",
    buttonVariant: "outline" as ButtonVariant,
    buttonHref: "/demo",
    popular: false,
    features: [
      "Everything in Pro, plus:",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom reporting",
      "On-premise option",
      "24/7 phone support",
    ],
    users: "Unlimited users",
  },
];

const Pricing = () => {
  const [duration, setDuration] = useState<"monthly" | "annual">("annual");
  const plans = duration === "annual" ? globalPlansAnnual : globalPlansMonthly;

  return (
    <PageLayout id="pricing" className="mx-auto">
      <SectionHeader
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that fits your needs. Start with our 7-10 day free trial."
      />

      {/* Annual Savings Banner */}
      {duration === "annual" && (
        <div className="mb-6 fade-in slide-in-up">
          <div className="relative max-w-2xl mx-auto bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl p-4 shadow-lg overflow-hidden">
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
                  Save 20% Annually!
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <p className="text-white/90 text-sm md:text-base font-medium text-center">
                Best value for growing businesses
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Billing Toggle */}
      <div className="flex justify-center items-center gap-4 mb-10 fade-in slide-in-up">
        {[
          { key: "monthly", label: "Monthly Billing" },
          { key: "annual", label: "Annual Billing (Save 20%)" },
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
      <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => {
          const isAnnualPlan = duration === "annual";
          const isProPlan = plan.title === "Pro";
          
          // Calculate savings
          const monthlyPrice = 40;
          const annualPrice = 384;
          const savings = monthlyPrice * 12 - annualPrice;
          const savingsFormatted = `$${savings}/year`;

          return (
            <div
              key={plan.title}
              className={`relative bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-all duration-300 flex flex-col ${
                plan.popular ? "border-blue-500 shadow-lg ring-2 ring-blue-100" : "border-gray-200"
              }`}
            >
              {/* Global Badge */}
              <div className="absolute -top-3 left-4 z-10">
                <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  🌏 Global
                </div>
              </div>

              {/* Annual Savings Badge */}
              {isAnnualPlan && isProPlan && savings > 0 && (
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
                    Save {savingsFormatted}
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
              <h3 className="text-lg font-semibold text-gray-900 mb-1 text-center">
                {plan.title}
              </h3>

              {/* Target Audience */}
              <p className="text-gray-500 text-xs mb-3 text-center font-medium line-clamp-2">
                {plan.target}
              </p>

              {/* Description */}
              <p className="text-gray-500 text-xs mb-4 text-center leading-relaxed">
                {plan.description}
              </p>

              {/* Price */}
              <div className="text-center mb-4">
                <div className="flex flex-col items-center">
                  {plan.price === "Contact Sales" ? (
                    <>
                      <span className={`text-xl font-bold ${plan.color}`}>
                        {plan.price}
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        Custom pricing for your needs
                      </span>
                    </>
                  ) : (
                    <>
                      <span className={`text-3xl font-bold ${plan.color}`}>
                        {plan.price}
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        {plan.billingPeriod}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Discount Tags - Only for Pro */}
              {isProPlan && (
                <div className="flex justify-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                    20% annual discount
                  </span>
                </div>
              )}

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-xs text-gray-600"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-green-500 mr-2 flex-shrink-0"
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

              {/* Users Info */}
              {plan.users && (
                <div className="text-xs text-gray-500 mb-4 text-center border-t pt-3">
                  <span className="font-medium">👥 {plan.users}</span>
                </div>
              )}

              {/* Button */}
              <Button
                href={plan.buttonHref}
                label={plan.buttonLabel}
                variant={plan.buttonVariant}
                iconRight={plan.buttonLabel !== "Contact Sales" ? ArrowRight : undefined}
                className="w-full text-sm py-2.5 mt-auto"
              />
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Pricing;