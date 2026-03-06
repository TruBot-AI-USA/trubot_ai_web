// app/ui/components/individual-product/trulead/components/Pricing.tsx
"use client";

import { useState } from "react";
import { ArrowRight, Users, Target, Zap, Star, Crown, CheckCircle } from "lucide-react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";

type ButtonVariant = "link" | "submit" | "primary" | "secondary" | "outline" | "ghost" | "coral" | "teal" | undefined;

const plans = [
  {
    name: "Free",
    price: {
      monthly: "$0",
      annual: "$0"
    },
    billingPeriod: "forever",
    description: "Perfect for getting started with lead generation",
    icon: Users,
    color: "text-gray-600",
    iconBg: "bg-gray-100",
    buttonLabel: "Get Started",
    buttonVariant: "outline" as ButtonVariant,
    buttonHref: "/signup",
    popular: false,
    features: [
      "Verified leads",
      "Intent data",
      "AI scoring",
      "5 lead analyses/month",
    ],
    credits: "10 credits",
    users: "1 user",
  },
  {
    name: "Starter",
    price: {
      monthly: "$49",
      annual: "$42"
    },
    billingPeriod: "/month",
    description: "For growing teams ready to scale",
    icon: Target,
    color: "text-blue-600",
    iconBg: "bg-blue-100",
    buttonLabel: "Start Free Trial",
    buttonVariant: "primary" as ButtonVariant,
    buttonHref: "/signup",
    popular: false,
    savings: "15.14% OFF",
    features: [
      "Everything in Free, plus:",
      "Advanced filters",
      "50 lead analyses/month",
      "Lead scoring",
    ],
    credits: "100 credits",
    users: "2 users",
  },
  {
    name: "Pro",
    price: {
      monthly: "$99",
      annual: "$83"
    },
    billingPeriod: "/month",
    description: "For professional sales teams",
    icon: Zap,
    color: "text-purple-600",
    iconBg: "bg-purple-100",
    buttonLabel: "Start Free Trial",
    buttonVariant: "primary" as ButtonVariant,
    buttonHref: "/signup",
    popular: true,
    savings: "15.91% OFF",
    features: [
      "Everything in Starter, plus:",
      "Email/phone verification",
      "TruCRM sync",
      "150 lead analyses/month",
      "Most Popular",
    ],
    credits: "300 credits",
    users: "5+ users",
  },
  {
    name: "Business",
    price: {
      monthly: "$239",
      annual: "$200"
    },
    billingPeriod: "/month",
    description: "For scaling businesses",
    icon: Star,
    color: "text-orange-600",
    iconBg: "bg-orange-100",
    buttonLabel: "Start Free Trial",
    buttonVariant: "primary" as ButtonVariant,
    buttonHref: "/signup",
    popular: false,
    savings: "16.35% OFF",
    features: [
      "Everything in Pro, plus:",
      "Priority support",
      "SLA guarantee",
      "250 lead analyses/month",
      "Advanced scoring",
    ],
    credits: "500 credits",
    users: "10+ users",
  },
  {
    name: "Enterprise",
    price: {
      monthly: "Contact Sales",
      annual: "Contact Sales"
    },
    billingPeriod: "",
    description: "For large organizations with custom needs",
    icon: Crown,
    color: "text-amber-600",
    iconBg: "bg-amber-100",
    buttonLabel: "Contact Sales",
    buttonVariant: "outline" as ButtonVariant,
    buttonHref: "/contact",
    popular: false,
    features: [
      "Everything in Business, plus:",
      "Custom AI scoring models",
      "Unlimited analyses",
      "Dedicated support",
      "Custom integrations",
    ],
    credits: "Custom credits",
    users: "Custom users",
  },
];

const Pricing = () => {
  const [duration, setDuration] = useState<"monthly" | "annual">("annual");

  // Calculate max savings for the banner
  const maxSavings = "16%";

  return (
    <div id="pricing" className="bg-white py-16">
      <PageLayout className="mx-auto max-w-7xl">
        <SectionHeader
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that fits your needs. Start with our free tier and scale as you grow."
        />

        {/* Annual Savings Banner */}
        {duration === "annual" && (
          <div className="mb-8 fade-in slide-in-up">
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
                    Save up to {maxSavings} Annually!
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
        <div className="flex justify-center items-center gap-4 mb-12 fade-in slide-in-up">
          {[
            { key: "monthly", label: "Monthly Billing" },
            { key: "annual", label: "Annual Billing (Save up to 16%)" },
          ].map((option) => {
            const isActive = duration === option.key;

            return (
              <div key={option.key} className="relative inline-flex items-center">
                <button
                  onClick={() => setDuration(option.key as "monthly" | "annual")}
                  role="button"
                  aria-pressed={isActive}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#1034A6] text-white shadow-md"
                      : "bg-white text-[#1034A6] border border-[#1034A6]/30 hover:bg-blue-50"
                  }`}
                >
                  {option.label}
                </button>
              </div>
            );
          })}
        </div>

        {/* Pricing Cards - Made wider with better spacing */}
        <div className="grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {plans.map((plan) => {
            const isAnnualPlan = duration === "annual";
            const price = isAnnualPlan ? plan.price.annual : plan.price.monthly;
            const showSavings = isAnnualPlan && plan.savings && plan.name !== "Free" && plan.name !== "Enterprise";
            const isProPlan = plan.name === "Pro";

            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-sm border p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full min-w-[220px] ${
                  plan.popular 
                    ? "border-[#1034A6] shadow-lg ring-2 ring-[#1034A6]/10 scale-105 z-10" 
                    : "border-gray-200 hover:border-[#1034A6]/30"
                }`}
              >
                {/* Badge Container - Better spacing */}
                <div className="relative h-12 mb-2">
                  {/* Global Badge - Left */}
                  <div className="absolute -top-3 left-0">
                    <div className="bg-[#1034A6] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 whitespace-nowrap">
                      🌏 Global
                    </div>
                  </div>

                  {/* Savings Badge - Right */}
                  {showSavings && (
                    <div className="absolute -top-3 right-0">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 whitespace-nowrap">
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
                        {plan.savings}
                      </div>
                    </div>
                  )}
                </div>

                {/* Popular Badge - Centered above */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-[#1034A6] text-white px-4 py-1.5 rounded-full text-xs font-medium shadow-md whitespace-nowrap">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`flex items-center justify-center w-14 h-14 mb-5 mx-auto rounded-xl ${plan.iconBg} mt-2`}>
                  <plan.icon className={`w-7 h-7 ${plan.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-xs mb-4 text-center leading-relaxed min-h-[32px]">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="text-center mb-4">
                  {price === "Contact Sales" ? (
                    <div className="flex flex-col items-center">
                      <span className={`text-2xl font-bold ${plan.color}`}>
                        {price}
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        Custom pricing
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="flex items-end justify-center gap-1">
                        <span className={`text-3xl font-bold ${plan.color}`}>
                          {price}
                        </span>
                        {plan.billingPeriod && (
                          <span className="text-sm text-gray-500 mb-1">
                            {plan.billingPeriod}
                          </span>
                        )}
                      </div>
                      {isAnnualPlan && isProPlan && (
                        <span className="text-xs text-green-600 font-medium mt-1">
                          Save $192/year
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Credits */}
                <div className="text-center mb-3">
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.credits}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-xs text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Users Info */}
                {plan.users && (
                  <div className="text-xs text-gray-500 mb-5 text-center border-t pt-4">
                    <span className="font-medium">👥 {plan.users}</span>
                  </div>
                )}

                {/* Button */}
                <Button
                  href={plan.buttonHref}
                  label={plan.buttonLabel}
                  variant={plan.buttonVariant}
                  iconRight={plan.buttonLabel !== "Contact Sales" ? ArrowRight : undefined}
                  className={`w-full text-sm py-3 mt-auto ${
                    plan.buttonVariant === "primary" 
                      ? "!bg-[#1034A6] hover:!bg-[#0c2b85] !text-white" 
                      : "!border-[#1034A6] !text-[#1034A6] hover:!bg-blue-50"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            All plans include a 7-10 day free trial. No credit card required.
          </p>
        </div>
      </PageLayout>
    </div>
  );
};

export default Pricing;