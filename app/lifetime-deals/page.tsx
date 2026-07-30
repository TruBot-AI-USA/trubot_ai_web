"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Check, ArrowRight, Shield, Cloud, RefreshCw, Users,
  Zap, Building2, MessageSquare, Gift, Clock,
  Infinity, PiggyBank, TrendingUp, Sparkles, Package,
  Cpu, HardDrive, Headphones, Puzzle, Plus, X, Mail,
  BarChart3, Database
} from "lucide-react";
import Button from "@/app/ui/components/shared/Button";

// ── Type Definitions ──
interface LTDProductTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  support: string;
  userLimit: string;
  downloadLimit: string;
  popular?: boolean;
  cta: string;
  available?: boolean;
}

interface LTDProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  bg: string;
  iconColor: string;
  tiers: LTDProductTier[];
}

// ── Products with Tiers ──
const ltdProducts: LTDProduct[] = [
  {
    id: "trulead",
    name: "TruLead",
    tagline: "Build Your Sales Pipeline Faster",
    description: "Access millions of B2B contacts with advanced filtering and export capabilities to accelerate prospecting and outreach.",
    icon: Zap,
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
    tiers: [
      {
        name: "Pro",
        price: "1250",
        description: "Full-power lead generation suite for high-volume sales teams and agencies.",
        features: [
          "Full access to complete B2B lead database",
          "AI-powered lead scoring",
          "Advanced filters & saved searches",
          "CSV, Excel & API export",
          "Unlimited downloads per month",
          "Up to 10 user seats",
          "CRM sync & automation",
          "Priority Email Support",
        ],
        support: "Priority Email Support",
        userLimit: "10 users",
        downloadLimit: "Unlimited",
        cta: "Buy Trulead",
      },
    ],
  },
  {
    id: "trucrm",
    name: "TruCRM",
    tagline: "Manage Every Customer Relationship",
    description: "A powerful CRM that helps you organize contacts, track deals, manage activities, and close more sales—all without monthly subscriptions.",
    icon: Users,
    bg: "bg-teal-100",
    iconColor: "text-teal-600",
    tiers: [
      {
        name: "Core CRM",
        price: "1250",
        description: "Complete CRM platform for teams that need a central place to manage contacts, deals, and pipeline.",
        features: [
          "Contact management",
          "Lead tracking",
          "Sales pipeline management",
          "Activity & task management",
          "Dashboard & analytics",
          "Up to 5 user seats",
          "Basic API access",
          "Email Support",
        ],
        support: "Email Support",
        userLimit: "5 users",
        downloadLimit: "Unlimited",
        cta: "Buy Core CRM",
      },
    ],
  },
  {
    id: "truerp",
    name: "TruERP",
    tagline: "Simplify Business Operations",
    description: "Manage inventory, suppliers, orders, invoicing, and business operations from a single platform.",
    icon: Building2,
    bg: "bg-amber-100",
    iconColor: "text-amber-600",
    tiers: [
      {
        name: "Core ERP",
        price: "1250",
        description: "Full-featured ERP system for businesses that need streamlined operations and financial management.",
        features: [
          "Inventory management",
          "Order management",
          "Invoicing & billing",
          "Supplier management",
          "Procurement",
          "Financial reports",
          "Up to 5 user seats",
          "Email Support",
        ],
        support: "Email Support",
        userLimit: "5 users",
        downloadLimit: "Unlimited",
        cta: "Buy Core ERP",
      },
    ],
  },
  {
    id: "trusocial",
    name: "TruSocial",
    tagline: "Schedule Content Like a Pro",
    description: "Plan, organize, and publish your social media content with an intuitive scheduling platform.",
    icon: MessageSquare,
    bg: "bg-pink-100",
    iconColor: "text-pink-600",
    tiers: [
      {
        name: "Scheduling Starter",
        price: "299",
        description: "Essential social media scheduling for individuals and small teams managing a few accounts.",
        features: [
          "Social media scheduling",
          "Content calendar view",
          "Publishing queue",
          "Basic analytics",
          "Up to 3 social accounts",
          "Single user seat",
        ],
        support: "Email Support",
        userLimit: "1 user",
        downloadLimit: "50 posts/month",
        cta: "Buy Scheduling Starter",
      },
      {
        name: "Scheduling Pro",
        price: "1250",
        description: "Advanced social media management for agencies and teams publishing at scale.",
        features: [
          "Social media scheduling & automation",
          "Advanced content calendar & planning",
          "Unlimited publishing queue",
          "Advanced analytics & reporting",
          "Multi-platform publishing (LinkedIn, X, FB, IG)",
          "Up to 10 social accounts",
          "Up to 5 user seats",
          "Priority Email Support",
        ],
        support: "Priority Email Support",
        userLimit: "5 users",
        downloadLimit: "Unlimited posts",
        popular: true,
        cta: "Buy Scheduling Pro",
      },
    ],
  },
];

// ── Bundle ──
const truSuiteBundle: LTDProduct & { bundleTier: LTDProductTier } = {
  id: "trusuite-bundle",
  name: "TruSuite Bundle",
  tagline: "Everything You Need to Grow Your Business",
  description: "Get all TruBotAI products in one complete bundle — TruLead, TruCRM, TruERP, and TruSocial — with shared infrastructure, unified dashboard, and premium support.",
  icon: Gift,
  bg: "bg-amber-100",
  iconColor: "text-amber-600",
  tiers: [],
  bundleTier: {
    name: "Bundle",
    available: false,
    price: "2499",
    description: "The complete TruBotAI ecosystem — all four products in one unified bundle at a massive discount compared to buying individually.",
    features: [
      "TruLead (your choice of tier)",
      "TruCRM — Core CRM",
      "TruERP — Core ERP",
      "TruSocial (your choice of tier)",
      "Unified Dashboard",
      "Single Sign-On (SSO)",
      "Shared User Seats across products",
      "Priority Email Support",
    ],
    support: "Priority Email Support",
    userLimit: "10 shared seats",
    downloadLimit: "Unified across products",
    cta: "Buy Bundle",
  },
};

// ── Why Choose cards ──
const whyChooseItems = [
  { icon: Clock, title: "Pay Once", desc: "Make a single payment and enjoy lifetime access to your selected product.", color: "from-blue-500 to-blue-600" },
  { icon: PiggyBank, title: "Save Thousands", desc: "Avoid recurring subscription fees and maximize long-term savings.", color: "from-green-500 to-green-600" },
  { icon: TrendingUp, title: "Built for Growing Businesses", desc: "Perfect for startups, agencies, consultants, and SMBs.", color: "from-purple-500 to-purple-600" },
  { icon: RefreshCw, title: "Future Updates Included", desc: "Receive future improvements and feature updates for your purchased Lifetime tier with additional cost.", color: "from-orange-500 to-orange-600" },
  { icon: Shield, title: "Secure & Reliable", desc: "Built on enterprise-grade cloud infrastructure with secure hosting.", color: "from-teal-500 to-teal-600" },
];

// ── Comparison data ──
const comparisonData = [
  { product: "TruLead", available: true, price: "$1,250", tiers: "Pro" },
  { product: "TruCRM", available: true, price: "$1,250", tiers: "Core CRM" },
  { product: "TruERP", available: true, price: "$1,250", tiers: "Core ERP" },
  { product: "TruSocial", available: true, price: "$299 - $1,250", tiers: "2 Tiers" },
  { product: "TruSuite Bundle", available: false, price: "Coming Soon", tiers: "All Products" },
];

// ── Add-ons ──
const addOns = [
  { icon: Cpu, label: "AI-powered features", desc: "Enhance your products with cutting-edge AI capabilities." },
  { icon: HardDrive, label: "Additional storage", desc: "Expand your storage capacity as your business grows." },
  { icon: Users, label: "Extra user seats", desc: "Add more team members to collaborate on your platform." },
  { icon: Package, label: "Usage credits", desc: "Top up your usage quotas for high-volume operations." },
  { icon: Headphones, label: "Premium support", desc: "Get priority support with faster response times." },
  { icon: Puzzle, label: "Advanced integrations", desc: "Connect with additional third-party tools and services." },
];

// ── FAQ ──
const faqs = [
  {
    q: "What does Lifetime Access mean?",
    a: "Lifetime access gives you ongoing use of your purchased Lifetime Deal plan with the features included in that tier. You pay once and use it for life — no recurring subscriptions for the core features of your purchased tier.",
  },
  {
    q: "Are AI features included?",
    a: "AI-powered capabilities (such as AI lead scoring, content generation, and advanced analytics) are available separately as optional paid add-ons. They are not included in the base Lifetime Deal tiers.",
  },
  {
    q: "What kind of support do I get?",
    a: "Support depends on the tier you purchase. Standard Email Support is included with Basic/Starter tiers, while Priority Email Support is included with Pro tiers and the TruSuite Bundle. Dedicated Email Support is available as a paid add-on.",
  },
  {
    q: "Can I upgrade to a higher tier later?",
    a: "Yes. You can upgrade to a higher tier within the same product or purchase additional paid add-ons whenever your business grows. You only pay the difference in price.",
  },
  {
    q: "Can I buy more than one Lifetime Deal?",
    a: "Absolutely. You can purchase individual products separately, or choose the TruSuite Bundle for the best overall value. If you need additional user seats or higher limits, paid add-ons are available.",
  },
  {
    q: "What's the difference between the tiers?",
    a: "Higher tiers include more features, higher user and download limits, and upgraded support. For example, TruLead Basic includes 500 downloads/month for 1 user, while TruLead Pro offers unlimited downloads for up to 10 users with AI scoring and Priority Email Support.",
  },
];

export default function LifetimeDealsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTiers, setSelectedTiers] = useState<Record<string, number>>({
    trulead: 0,
    trucrm: 0,
    truerp: 0,
    trusocial: 0,
  });

  const handleTierChange = (productId: string, tierIndex: number) => {
    setSelectedTiers((prev) => ({ ...prev, [productId]: tierIndex }));
  };

  return (
    <>
      {/* ════════════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white" />
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Limited badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-sm text-amber-700 mb-6"
            >
              <Sparkles size={14} className="text-amber-500" />
              <span className="font-semibold">Limited-Time Launch Offer</span>
              <span className="text-amber-500 font-bold">— Only 100 Deals Available</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#18352b] leading-tight">
              Own It Once.{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Use It for Life.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get lifetime access to selected TruBotAI products with a single one-time payment.
              No recurring subscriptions for core features. Designed for founders, agencies,
              sales teams, and growing businesses that want long-term value without monthly costs.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Button
                href="#products"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-7 py-3 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5">
                  Get Lifetime Access
                  <ArrowRight size={16} className="ml-1.5" />
                </Button>
              <Button
                href="#compare"
               className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-7 py-3 rounded-xl transition-all duration-200" label={""}>
                Compare Plans
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {[
                { icon: Check, label: "One-Time Payment" },
                { icon: Infinity, label: "Lifetime Access" },
                { icon: Cloud, label: "Secure Cloud Platform" },
                { icon: RefreshCw, label: "Future Product Updates" },
                { icon: Mail, label: "Email Support Included" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <item.icon size={13} className="text-green-600" />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ */}
      {/* PRODUCT CARDS */}
      {/* ════════════════════════════════════════════════ */}
      <section id="products" className="pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18352b]">
              Choose Your <span className="text-blue-600">Lifetime Deal</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Select the product that fits your business needs. One payment. Lifetime access.
            </p>
          </motion.div>

          {/* ── Product Cards Grid (one card per product with tier selector) ── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {ltdProducts.map((product, pIndex) => {
              const selectedIdx = selectedTiers[product.id] ?? 0;
              const selectedTier = product.tiers[selectedIdx];
              return (
                <motion.div
                  key={product.id}
                  id={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: pIndex * 0.1 }}
                  className="group bg-white border border-gray-200 rounded-2xl px-5 pt-5 pb-5 transition-all duration-300 flex flex-col h-full hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/8 hover:-translate-y-1.5"
                >
                  <div className="flex flex-col flex-1">
                    {/* Icon + Name */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`relative flex-shrink-0 w-12 h-12 rounded-2xl ${product.bg} flex items-center justify-center shadow-sm`}>
                        <product.icon size={26} className={product.iconColor} />
                      </div>
                      <div>
                        <h3 className="text-[17px] font-bold text-[#18352b]">{product.name}</h3>
                        <p className="text-xs text-gray-400 mt-0.5">{product.tagline}</p>
                      </div>
                    </div>

                    {/* Tier Selector (only show if multiple tiers) */}
                    {product.tiers.length > 1 && (
                      <div className="flex gap-1 mb-3 bg-gray-100 p-1 rounded-xl">
                        {product.tiers.map((tier, tIndex) => (
                          <button
                            key={tier.name}
                            onClick={() => handleTierChange(product.id, tIndex)}
                            className={`flex-1 text-[11px] font-semibold px-2 py-1.5 rounded-lg transition-all duration-200 ${
                              selectedIdx === tIndex
                                ? 'bg-white text-blue-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                          >
                            {tier.name}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      {selectedTier.description}
                    </p>

                    {/* Price */}
                    <div className="mb-3">
                      <div className="flex items-baseline gap-1.5 mb-1">
                        <span className="text-3xl font-extrabold text-blue-600">${selectedTier.price}</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] text-gray-400 font-medium">One-time payment · Lifetime access</span>
                        <span className="text-[10px] text-green-600 font-semibold flex items-center gap-1">
                          <PiggyBank size={11} />
                          Save thousands vs. monthly subscriptions
                        </span>
                      </div>
                    </div>

                    {/* Popular badge */}
                    {selectedTier.popular && (
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                          <Sparkles size={10} />
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Key details row */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-gray-50 rounded-lg px-3 py-2">
                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Users</span>
                        <p className="text-xs font-semibold text-[#18352b] mt-0.5">{selectedTier.userLimit}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg px-3 py-2">
                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Downloads</span>
                        <p className="text-xs font-semibold text-[#18352b] mt-0.5">{selectedTier.downloadLimit}</p>
                      </div>
                      <div className="col-span-2 bg-gray-50 rounded-lg px-3 py-2">
                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Support</span>
                        <p className="text-xs font-semibold text-[#18352b] mt-0.5">{selectedTier.support}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-5 flex-1">
                      {selectedTier.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <Check size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="http://portal.trubotai.com?ltd-deals=true"
                      className="inline-flex items-center justify-center gap-1.5 bg-blue-600 text-white text-sm font-bold px-4 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      {selectedTier.cta}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ═══ BUNDLE CARD ═══ */}
          <motion.div
            id="trusuite-bundle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="relative bg-gradient-to-br from-amber-50/40 to-white border-2 border-amber-300/50 rounded-2xl px-6 md:px-8 pt-6 pb-6 transition-all duration-300 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-200/20 hover:-translate-y-1.5 overflow-hidden">
              {/* Best Value tag */}
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-bl-xl shadow-sm">
                  🏆 Best Value
                </div>
              </div>

              <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-center">
                {/* Left: Info */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-md">
                      <Gift size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#18352b]">{truSuiteBundle.name}</h3>
                      <p className="text-xs text-amber-600 font-medium">{truSuiteBundle.tagline}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 max-w-xl">
                    {truSuiteBundle.description}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    {truSuiteBundle.bundleTier.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-1.5 text-xs text-gray-600">
                        <Check size={12} className="text-green-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Price + CTA */}
                <div className="md:col-span-2 flex flex-col items-start md:items-end justify-center gap-3">
                  <div className="text-left md:text-right">
                    <div className="flex items-baseline gap-1.5 mb-1 justify-start md:justify-end">
                      <span className="text-2xl md:text-1xl font-extrabold text-amber-600">
                        {truSuiteBundle.bundleTier.available === false ? "Coming Soon" : `$${truSuiteBundle.bundleTier.price}`}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 font-medium mb-3">One-time payment · Lifetime access</p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-xs text-green-700 font-medium mb-2">
                      <PiggyBank size={12} />
                      Save 50%+ vs. buying individually
                    </div>
                    <div className="space-y-1 mt-3">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Check size={12} className="text-green-500" />
                        <span><strong className="text-[#18352b]">Support:</strong> {truSuiteBundle.bundleTier.support}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Check size={12} className="text-green-500" />
                        <span><strong className="text-[#18352b]">Users:</strong> {truSuiteBundle.bundleTier.userLimit}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Check size={12} className="text-green-500" />
                        <span><strong className="text-[#18352b]">Downloads:</strong> {truSuiteBundle.bundleTier.downloadLimit}</span>
                      </div>
                    </div>
                  </div>
                  {truSuiteBundle.bundleTier.available === false ? (
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center justify-center gap-1.5 bg-gray-400 text-white text-sm font-bold px-6 py-3 rounded-xl cursor-not-allowed opacity-80 w-full md:w-auto"
                    >
                      {truSuiteBundle.bundleTier.cta}
                      <ArrowRight size={14} />
                    </button>
                  ) : (
                    <Link
                      href={`/verify?product=trusuite-bundle&type=ltd&price=${truSuiteBundle.bundleTier.price}`}
                      className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm font-bold px-6 py-3 rounded-xl hover:from-amber-600 hover:to-yellow-600 transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 w-full md:w-auto"
                    >
                      {truSuiteBundle.bundleTier.cta}
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ */}
      {/* WHY CHOOSE LIFETIME DEALS */}
      {/* ════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent" />
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18352b]">
              Why Choose <span className="text-blue-600">Lifetime Deals?</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Get the power of enterprise software without the recurring costs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {whyChooseItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="text-[#18352b] font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ */}
      {/* COMPARISON TABLE */}
      {/* ════════════════════════════════════════════════ */}
      <section id="compare" className="pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18352b]">
              Compare <span className="text-blue-600">Products</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-4 text-sm font-semibold text-[#18352b]">Product</th>
                  <th className="py-4 px-4 text-sm font-semibold text-[#18352b] text-center">Tiers</th>
                  <th className="py-4 px-4 text-sm font-semibold text-[#18352b] text-center">Lifetime Deal</th>
                  <th className="py-4 px-4 text-sm font-semibold text-[#18352b] text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <motion.tr
                    key={row.product}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`border-b border-gray-100 transition-colors hover:bg-blue-50/30 ${row.product === "TruSuite Bundle" ? "bg-amber-50/40" : ""}`}
                  >
                    <td className="py-4 px-4">
                      <span className={`text-sm font-medium ${row.product === "TruSuite Bundle" ? "text-amber-700" : "text-gray-800"}`}>
                        {row.product}
                        {row.product === "TruSuite Bundle" && (
                          <span className="ml-2 text-[10px] font-bold bg-amber-500 text-white px-1.5 py-0.5 rounded">Best Value</span>
                        )}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-xs text-gray-500 font-medium">{row.tiers}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.available ? (
                        <span className="inline-flex items-center gap-1 text-green-600 text-sm font-medium">
                          <Check size={16} />
                          Available
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-amber-500 text-sm font-medium">
                          <Clock size={14} />
                          Coming Soon
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="text-sm font-semibold text-[#18352b]">
                        {row.price}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ */}
      {/* WHAT'S INCLUDED */}
      {/* ════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-white to-blue-50/20" />
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-sm text-blue-700 mb-4">
              <Check size={14} className="text-blue-500" />
              <span className="font-medium">Every Deal Includes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18352b]">
              What&apos;s Included with Every{" "}
              <span className="text-blue-600">Lifetime Deal</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Every purchase comes with these core benefits — no hidden costs, no surprises.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* ── Included ── */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-6 w-1 bg-green-500 rounded-full" />
                <h3 className="text-lg font-bold text-[#18352b]">Included with Every Purchase</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { icon: Infinity, label: "Lifetime Access to Purchased Plan", desc: "Ongoing use of your purchased Lifetime tier with no expirations or renewals." },
                  { icon: Check, label: "One-Time Payment", desc: "A single payment locks in your access forever — no recurring fees or subscriptions." },
                  { icon: Cloud, label: "Secure Cloud Hosting", desc: "Enterprise-grade infrastructure with reliable, encrypted hosting included." },
                  { icon: RefreshCw, label: "Core Product Updates", desc: "Receive essential feature updates, security patches, and improvements at no extra cost." },
                  { icon: Package, label: "Access to Purchased Lifetime Tier", desc: "Full access to the specific Lifetime tier you purchased, including all its features." },
                  { icon: TrendingUp, label: "Upgrade Path for Premium Add-Ons", desc: "Optional upgrade path for premium add-ons when your business needs more power." },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-green-300 hover:shadow-lg hover:shadow-green-600/8 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-50/0 via-green-50/0 to-green-50/0 group-hover:from-green-50/40 group-hover:via-green-50/20 group-hover:to-green-50/0 transition-all duration-300 pointer-events-none" />

                    <div className="relative flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 shadow-md shadow-green-500/20 group-hover:shadow-lg group-hover:shadow-green-500/30 group-hover:scale-110 transition-all duration-300">
                        <item.icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-[#18352b] font-semibold text-base mb-1.5 group-hover:text-green-600 transition-colors duration-300">
                        {item.label}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full group-hover:w-3/4 transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Paid Add-ons ── */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-6 w-1 bg-amber-500 rounded-full" />
                <h3 className="text-lg font-bold text-[#18352b]">Available as Paid Add-ons</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Mail, label: "Dedicated Email Support", desc: "Available as a paid add-on — get priority email support with faster response times for your team." },
                  { icon: Sparkles, label: "Future Feature Enhancements", desc: "Available as a paid add-on — access to upcoming premium features and major version upgrades." },
                  { icon: Cpu, label: "AI Features", desc: "Unlock AI-powered capabilities like lead scoring, content generation, and analytics." },
                  { icon: HardDrive, label: "Additional Storage", desc: "Expand your storage capacity as your business data grows." },
                  { icon: Users, label: "Additional User Seats", desc: "Add more team members to collaborate across your platform." },
                  { icon: Database, label: "Usage Credits", desc: "Top up usage quotas for high-volume operations and data exports." },
                  { icon: Headphones, label: "Priority Support", desc: "White-glove support with dedicated SLAs and faster resolution times." },
                  { icon: BarChart3, label: "Premium Analytics", desc: "Advanced reporting dashboards and custom analytics for deeper insights." },
                  { icon: Puzzle, label: "Advanced Integrations", desc: "Connect with additional third-party tools, APIs, and enterprise systems." },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="group relative bg-white border border-gray-200 rounded-2xl p-5 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-600/8 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-50/0 via-amber-50/0 to-amber-50/0 group-hover:from-amber-50/40 group-hover:via-amber-50/10 group-hover:to-amber-50/0 transition-all duration-300 pointer-events-none" />

                    <div className="relative flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-3 shadow-md shadow-amber-500/20 group-hover:shadow-lg group-hover:shadow-amber-500/30 group-hover:scale-110 transition-all duration-300">
                        <item.icon size={20} className="text-white" />
                      </div>
                      <h4 className="text-sm font-semibold text-[#18352b] mb-1 group-hover:text-amber-600 transition-colors duration-300">
                        {item.label}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      <span className="inline-block mt-2 text-[9px] font-semibold uppercase tracking-wider text-amber-500 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Paid Add-on
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ */}
      {/* OPTIONAL ADD-ONS */}
      {/* ════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gray-50">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-sm text-amber-700 mb-4">
              <Package size={14} className="text-amber-500" />
              <span className="font-medium">Upgrade Anytime</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18352b]">
              Optional <span className="text-blue-600">Add-ons</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Enhance your Lifetime Deal anytime with optional upgrades — pay only for what you need.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {addOns.map((addon, i) => (
              <motion.div
                key={addon.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group relative bg-white border border-gray-200 rounded-2xl p-5 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-600/8 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-50/0 via-amber-50/0 to-amber-50/0 group-hover:from-amber-50/40 group-hover:via-amber-50/10 group-hover:to-amber-50/0 transition-all duration-300 pointer-events-none" />

                <div className="relative flex items-start gap-4">
                  {/* Icon with gradient background */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-amber-500/20 group-hover:shadow-lg group-hover:shadow-amber-500/30 group-hover:scale-110 transition-all duration-300">
                    <addon.icon size={20} className="text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="text-sm font-semibold text-[#18352b] group-hover:text-amber-600 transition-colors duration-300">
                        {addon.label}
                      </h4>
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-amber-500 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Optional
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {addon.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ */}
      {/* FAQ */}
      {/* ════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gray-50">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#18352b]">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div
                  className={`bg-white border border-gray-200 rounded-xl p-5 cursor-pointer transition-all duration-300 hover:border-blue-200 ${
                    openFaq === index ? "border-blue-300 shadow-sm" : ""
                  }`}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-gray-900 font-medium text-base md:text-lg pr-4">{faq.q}</h3>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      openFaq === index ? "bg-blue-100 text-blue-500" : "bg-gray-100 text-gray-400"
                    }`}>
                      {openFaq === index ? <X size={16} /> : <Plus size={16} />}
                    </div>
                  </div>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed pt-4 border-t border-gray-100 mt-4">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ */}
      {/* FINAL CTA */}
      {/* ════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#18352b] via-[#1a3d30] to-[#0f2a22] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />

        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white/80 mb-6">
              <Sparkles size={14} className="text-amber-400" />
              Limited-Time Offer
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Don&apos;t Miss This{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Limited-Time Offer
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-4 max-w-xl mx-auto">
              Join early adopters and secure lifetime access to TruBotAI before all Lifetime Deals are claimed.
            </p>
            <p className="text-sm text-amber-400 font-semibold mb-8">
              Only 100 Lifetime Deals Available
            </p>
            <Link href="#products">
              <Button as="button" className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-[#18352b] text-base font-bold px-8 py-4 rounded-xl shadow-xl shadow-amber-500/30 transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-0.5">
                Get Lifetime Access Today
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
