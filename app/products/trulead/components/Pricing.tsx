"use client";

import { useState } from "react";
import { ArrowRight, Users, Target, Zap, Star, Crown, CheckCircle } from "lucide-react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";

type ButtonVariant =
  | "link"
  | "submit"
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "coral"
  | "teal"
  | undefined;

const plans = [
  {
    name: "Free",
    price: { monthly: "$0", annual: "$0" },
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
      "Basic Lead Discovery",
      "Basic Filters",
      "Lead Analysis Limit: 5",
    ],
    credits: "10 credits",
    users: "1 user",
  },
  {
    name: "Starter",
    price: { monthly: "$49", annual: "$42" },
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
      "Basic Lead Discovery",
      "Advanced Lead Discovery",
      "Basic Filters",
      "Advanced Filters",
      "Lead Analysis Limit: 25",
      "Export to CSV",
      "Lead Scoring",
      "Priority Email Support",
    ],
    credits: "100 credits",
    users: "2 users",
  },
  {
    name: "Pro",
    price: { monthly: "$99", annual: "$83" },
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
      "Basic Lead Discovery",
      "Advanced Lead Discovery",
      "Basic Filters",
      "Advanced Filters",
      "Lead Analysis Limit: 50",
      "Export to CSV",
      "Email & Phone Verification",
      "Sync to TruCRM",
      "Lead Scoring",
      "Priority Email Support",
      "SLA Based Support",
    ],
    credits: "300 credits",
    users: "5+ users",
  },
  {
    name: "Business",
    price: { monthly: "$239", annual: "$200" },
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
      "Basic Lead Discovery",
      "Advanced Lead Discovery",
      "Basic Filters",
      "Advanced Filters",
      "Export to CSV",
      "Email & Phone Verification",
      "Sync to TruCRM",
      "Lead Scoring",
      "Priority Email Support",
      "SLA Based Support",
    ],
    credits: "500 credits",
    users: "10+ users",
  },
  {
    name: "Enterprise",
    price: {
      monthly: "Contact Sales",
      annual: "Contact Sales",
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
      "Basic Lead Discovery",
      "Advanced Lead Discovery",
      "Basic Filters",
      "Advanced Filters",
      "Export to CSV",
      "Sync to TruCRM",
      "Lead Scoring",
      "Priority Email Support",
    ],
    credits: "Custom credits",
    users: "Custom users",
  },
];

const Pricing = () => {
  const [duration, setDuration] = useState<"monthly" | "annual">("annual");

  return (
    <div id="pricing" className="bg-white py-16">
      <PageLayout className="mx-auto max-w-7xl">
        <SectionHeader
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that fits your needs."
        />

        <div className="grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {plans.map((plan) => {
            const isAnnualPlan = duration === "annual";
            const price = isAnnualPlan ? plan.price.annual : plan.price.monthly;

            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-sm border p-6 flex flex-col h-full min-w-[220px] ${
                  plan.popular
                    ? "border-[#1034A6] shadow-lg ring-2 ring-[#1034A6]/10 scale-105 z-10"
                    : "border-gray-200"
                }`}
              >
                {/* GLOBAL */}
                <div className="absolute -top-3 left-0">
                  <div className="bg-[#1034A6] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    🌏 Global
                  </div>
                </div>

                {/* ICON */}
                <div className={`flex items-center justify-center w-14 h-14 mb-5 mx-auto rounded-xl ${plan.iconBg} mt-2`}>
                  <plan.icon className={`w-7 h-7 ${plan.color}`} />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">
                  {plan.name}
                </h3>

                {/* PRICE */}
                <div className="text-center mb-4">
                  <span className={`text-3xl font-bold ${plan.color}`}>
                    {price}
                  </span>
                </div>

                {/* FEATURES (ONLY YES FEATURES NOW) */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* USERS */}
                <div className="text-xs text-gray-500 mb-5 text-center border-t pt-4">
                  👥 {plan.users}
                </div>

                {/* BUTTON */}
                <Button
                  href={plan.buttonHref}
                  label={plan.buttonLabel}
                  variant={plan.buttonVariant}
                  iconRight={ArrowRight}
                  className="w-full text-sm py-3 mt-auto"
                />
              </div>
            );
          })}
        </div>
      </PageLayout>
    </div>
  );
};

export default Pricing;