import { MdMail } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import {
  BrainCog,
  Handshake,
  Rocket,
  Leaf,
  PieChart,
  Shuffle,
  MessageSquare,
  BarChart,
  FileSignature,
  FolderSearch,
  AlertTriangle,
  Boxes,
  Code2,
  Database,
  DollarSign,
  FileCheck,
  FileText,
  Scale,
  Server,
  ShieldCheck,
  Users,
  UsersRound,
  Wallet,
  Calendar,
} from "lucide-react";

import { meetLink } from "../site";

const heroSection = {
  title: "Sell Your B2B SaaS or Hosting Company for 100X Returns",
  subtitle:
    "We acquire companies with $10M–$100M revenue. Stay onboard with equity, or exit fully.",
  bullets: [
    "Quick, clean exits",
    "Flexible deal structures",
    "Continued product growth",
  ],
  primaryCTA: {
    label: "Schedule a Call",
    href: meetLink,
    iconLeft: Calendar,
  },
  secondaryCTA: {
    label: "Email Us",
    href: "mailto:acquisitions@trubotai.com",
    iconLeft: MdMail,
  },
  img: {
    src: "/images/mna/mna-hero.png",
    alt: "SaaS Business",
  },
};

const benefitList = [
  {
    icon: BrainCog,
    title: "AI-Powered Future, Not Corporate Red Tape",
    description:
      "We're building an AI-first suite for SMEs. Your product doesn’t get buried; it gets enhanced and brought to life with automation and intelligence.",
  },
  {
    icon: Handshake,
    title: "Founder-Friendly Approach",
    description:
      "We’re flexible, transparent, and easy to talk to. Whether you want a clean break or a continued role post-acquisition, we’ll shape a deal that works for you.",
  },
  {
    icon: Rocket,
    title: "Speed + Simplicity",
    description:
      "No VC drama. No unnecessary due diligence marathons. We move fast, respect your time, and value your journey.",
  },
  {
    icon: Leaf,
    title: "Your Legacy Lives On",
    description:
      "We don’t flip-and-forget. We’re here to scale your product and keep its value alive within our growing platform. That means long-term relevance and impact.",
  },
];

const dealStructureList = [
  {
    icon: BsCash,
    title: "Buyouts",
    summary: "3–5x EBITDA payouts · Fast close, clean transition",
    position: "top-left",
  },
  {
    icon: PieChart,
    title: "Equity Rollover",
    summary: "Retain 10–30% equity · Benefit from AI-driven expansion",
    position: "top-right",
  },
  {
    icon: Shuffle,
    title: "Cross-Sell Synergies",
    summary: "Synergy-based growth · Higher LTV via bundling",
    position: "bottom",
  },
];

const stepList = [
  {
    title: "Let’s Talk.",
    label: "Discovery Call",
    description:
      "We hop on a quick call to understand your business, your goals, and whether we’re a fit. No pitch decks. No pressure.",
    icon: MessageSquare,
    cta: {
      label: "Schedule a Call",
      href: meetLink,
    },
  },
  {
    title: "Transparent & Thoughtful.",
    label: "Business Review & Deal Exploration",
    description:
      "We’ll ask for a basic business overview—revenue, churn, customer types, product details and propose a structure based on your needs.",
    icon: BarChart,
  },
  {
    title: "Organized, Not Overwhelming.",
    label: "Due Diligence (Streamlined)",
    description:
      "We use a simple checklist and secure data room to review key metrics. We’re not looking for perfection; just clarity.",
    icon: FolderSearch,
  },
  {
    title: "Deal on the Table.",
    label: "LOI & Negotiation",
    description:
      "Once aligned, we present a Letter of Intent (LOI) outlining the structure, timelines, and next steps. Open, collaborative negotiation.",
    icon: FileSignature,
  },
  {
    title: "Welcome to the Family.",
    label: "Signing & Transition",
    description:
      "After agreement, we move to contracts, onboarding, and product integration. We’ll work with you to retain value and ensure a smooth transfer.",
    icon: Handshake,
  },
  {
    title: "Continued Growth Together.",
    label: "Post-Acquisition Support",
    description:
      "Whether you stay involved or not, we commit to nurturing your product within our ecosystem. You can count on us to protect what you’ve built.",
    icon: Rocket,
  },
];

const checkList = [
  {
    icon: FileText,
    title: "Basic P&L for last 12–24 months",
    category: "Financials",
  },
  { icon: BarChart, title: "MRR / ARR breakdown", category: "Financials" },
  {
    icon: Wallet,
    title: "Major expenses & profit margin",
    category: "Financials",
  },
  {
    icon: Users,
    title: "Active customer count",
    category: "Customer Metrics",
  },
  {
    icon: DollarSign,
    title: "Average deal size or subscription plan",
    category: "Customer Metrics",
  },
  {
    icon: Code2,
    title: "Overview of core architecture",
    category: "Tech Stack & Product",
  },
  {
    icon: Boxes,
    title: "Any third-party dependencies",
    category: "Tech Stack & Product",
  },
  {
    icon: Server,
    title: "Hosting/infra details (if applicable)",
    category: "Tech Stack & Product",
  },
  {
    icon: FileCheck,
    title: "Company incorporation docs",
    category: "Legal & Admin",
  },
  {
    icon: Scale,
    title: "Outstanding contracts or liabilities",
    category: "Legal & Admin",
  },
  {
    icon: UsersRound,
    title: "Employee/contractor agreements",
    category: "Legal & Admin",
  },
  {
    icon: ShieldCheck,
    title: "GDPR or privacy compliance",
    category: "Data & Compliance",
  },
  {
    icon: Database,
    title: "User data handling policies",
    category: "Data & Compliance",
  },
  {
    icon: AlertTriangle,
    title: "Any known legal risks",
    category: "Data & Compliance",
  },
];

const ctaSection = {
  title: "Ready for a Strategic Exit or Growth Partnership?",
  subtitle:
    "Submit your company details or reach out to explore how TruBot AI can elevate your legacy.",
  primaryCTA: {
    label: "Submit Your Company",
    href: "mailto:acquisitions@trubotai.com?subject=M&A%20Interest",
  },
  secondaryCTA: { label: "Schedule a Call", href: meetLink },
};

export {
  heroSection,
  benefitList,
  dealStructureList,
  stepList,
  checkList,
  ctaSection,
};
