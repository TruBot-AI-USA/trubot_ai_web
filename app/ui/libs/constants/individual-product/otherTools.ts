import { ProductPageDataType } from "../../types/productPage";

const otherToolsPageData: ProductPageDataType = {
  id: "tools",
  title: "AI Utilities for Invoicing, Marketplaces & SME Growth",
  description:
    "A flexible stack of automation-first tools — from invoice generation to revenue tracking and AI marketplace access for small businesses.",
  platforms: [
    // Invoice Management
    {
      name: "Invoice Generator",
      feature: "Create branded, tax-compliant invoices in 60 seconds",
      icon: "🧾",
    },
    {
      name: "Recurring Invoicing",
      feature: "Automate subscriptions & retainers billing",
      icon: "🔁",
    },
    {
      name: "Payment Reminders",
      feature: "Auto-notify clients before and after due dates",
      icon: "⏰",
    },
    {
      name: "Revenue Tracker",
      feature: "Real-time insights on income, AR, and cash flow",
      icon: "📊",
    },

    // AI Marketplace
    {
      name: "AI Tools Marketplace",
      feature: "Browse plug-and-play AI tools for niche use cases",
      icon: "🧠",
    },
    {
      name: "Curated Listings",
      feature: "Verified apps sorted by industry and function",
      icon: "🗂️",
    },
    {
      name: "Compare & Install",
      feature: "Side-by-side comparisons and 1-click deployment",
      icon: "🔍",
    },

    // SME Partner Program
    {
      name: "Partner Dashboard",
      feature: "Manage client tools, billing & support from one place",
      icon: "📋",
    },
    {
      name: "Co-branded Tools",
      feature: "Offer white-label automation services under your brand",
      icon: "🏷️",
    },
    {
      name: "Affiliate Earnings",
      feature: "Earn commissions on tool adoption and renewals",
      icon: "💸",
    },
  ],
  steps: [
    "Select your automation need (billing, discovery, resale)",
    "Access the right tool or partner path",
    "Configure it in minutes",
    "Track performance and optimize",
  ],
  industries: [
    "Freelancers",
    "Consultants",
    "Agencies",
    "Startups",
    "Fintech",
    "Legal",
  ],
};

export { otherToolsPageData };
