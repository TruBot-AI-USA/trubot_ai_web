import {
  Search,
  Package,
  Briefcase,
  ShoppingCart,
  DollarSign,
  Users,
  CheckCircle2,
  Settings,
  Monitor,
  Zap,
} from "lucide-react";

const heroSection = {
  badge: "Unified ERP Platform",
  title: {
    main: "One Platform to Run",
    highlight: "Your Entire Business",
  },
  subtitle:
    "Sell faster. Track inventory. Manage accounting. Control operations. TruERP brings CRM, ERP, Finance, HR, and Operations together in one unified, easy-to-use platform.",
  buttons: {
    primary: {
      label: "Book a Demo",
      href: "/demo",
    },
    secondary: {
      label: "Start Free Trial",
      href: "/sales",
    },
  },
  image: {
    src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80",
    alt: "Business dashboard on a laptop showing charts and inventory",
    width: 600,
    height: 500,
  },
  featureCards: [
    {
      icon: Settings,
      text: "ERP + CRM Unified",
    },
    {
      icon: Monitor,
      text: "Finance in Sync",
    },
    {
      icon: CheckCircle2,
      text: "Audit-Ready",
    },
  ],
};

const problemsList = [
  {
    title: "Disconnected Tools",
    description: "Multiple apps create messy workflows and missing data.",
  },
  {
    title: "Manual Processes",
    description: "Teams waste hours on tasks that should be automated.",
  },
  {
    title: "Data Duplication",
    description: "Different systems = repeated entries and errors.",
  },
  {
    title: "Poor Visibility",
    description: "Leaders can't make good decisions without real-time clarity.",
  },
];

const coreCapabilities = [
  {
    icon: Search,
    title: "Unified Workspace",
    description: "All modules accessible from a clean, intuitive workspace.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Real-time stock across warehouses with auto-updates.",
  },
  {
    icon: Briefcase,
    title: "Sales & CRM",
    description: "Quotes to invoices—no switching systems or re-entry.",
  },
  {
    icon: ShoppingCart,
    title: "Purchase Management",
    description: "POs, GRNs, supplier control, and auditable flows.",
  },
  {
    icon: DollarSign,
    title: "Accounting & Finance",
    description: "Ledger syncs instantly with every inventory & sales update.",
  },
  {
    icon: Users,
    title: "Human Resources",
    description: "Employee database, roles, and workflow integration.",
  },
];

const flowSteps = [
  "Quotation Creation",
  "Order Confirmation",
  "Invoice Generation",
  "Payment Recording",
  "Ledger & Stock Auto‑Update",
];

const industriesList = [
  {
    title: "Trading & Distribution",
    description:
      "Accurate stock, multi-warehouse visibility and scalable order management.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Service Businesses",
    description:
      "Project tracking, invoicing and client communications in one place.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Finance-Driven Organizations",
    description: "Real-time ledgers, reconciliations and audit-ready records.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Startups & Scale-ups",
    description: "Modular features that grow with your business.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Retailers",
    description: "POS-friendly flows and omni-channel inventory updates.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Manufacturing",
    description: "Inventory lots, BOMs and supply chain integrations.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
];

// TRUERP GLOBAL PRICING - EXACTLY LIKE TRUSOCIAL PATTERN
const pricingPlansMonthly = [
  {
    icon: Zap,
    title: "Free",
    description: "Perfect for trying out TruERP",
    price: "$0",
    features: [
      "7-10 day free trial",
      "Basic inventory tracking",
      "Up to 100 transactions",
      "Email support",
      "Single user",
    ],
    buttonLabel: "Start Free Trial",
    buttonVariant: "outline" as const,
    popular: false,
    color: "text-gray-600",
  },
  {
    icon: Package,
    title: "Pro",
    description: "For growing businesses",
    price: "$40/month",
    features: [
      "Everything in Free, plus:",
      "Advanced inventory management",
      "Unlimited transactions",
      "Multi-location support",
      "Basic analytics",
      "Priority email support",
      "API access",
    ],
    buttonLabel: "Start Free Trial",
    buttonVariant: "primary" as const,
    popular: true,
    color: "text-blue-600",
  },
  {
    icon: Briefcase,
    title: "Enterprise",
    description: "Tailored for large organizations",
    price: "Contact Sales",
    features: [
      "Everything in Pro, plus:",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom reporting",
      "On-premise option",
      "24/7 phone support",
    ],
    buttonLabel: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false,
    color: "text-purple-600",
  },
];

const pricingPlansAnnual = [
  {
    icon: Zap,
    title: "Free",
    description: "Perfect for trying out TruERP",
    price: "$0",
    features: [
      "7-10 day free trial",
      "Basic inventory tracking",
      "Up to 100 transactions",
      "Email support",
      "Single user",
    ],
    buttonLabel: "Start Free Trial",
    buttonVariant: "outline" as const,
    popular: false,
    color: "text-gray-600",
  },
  {
    icon: Package,
    title: "Pro",
    description: "For growing businesses",
    price: "$32/month",
    features: [
      "Everything in Free, plus:",
      "Advanced inventory management",
      "Unlimited transactions",
      "Multi-location support",
      "Basic analytics",
      "Priority email support",
      "API access",
    ],
    buttonLabel: "Start Free Trial",
    buttonVariant: "primary" as const,
    popular: true,
    color: "text-blue-600",
  },
  {
    icon: Briefcase,
    title: "Enterprise",
    description: "Tailored for large organizations",
    price: "Contact Sales",
    features: [
      "Everything in Pro, plus:",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom reporting",
      "On-premise option",
      "24/7 phone support",
    ],
    buttonLabel: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false,
    color: "text-purple-600",
  },
];

const ctaSection = {
  title: "Get Started with TruERP",
  subtitle:
    "Transform how your business operates—one system for sales, inventory, finance and HR.",
  primaryCTA: {
    label: "Schedule a Demo",
    href: "/demo",
  },
  secondaryCTA: {
    label: "Start Free Trial",
    href: "/sales",
  },
};

export {
  heroSection,
  problemsList,
  coreCapabilities,
  flowSteps,
  industriesList,
  pricingPlansMonthly,
  pricingPlansAnnual,
  ctaSection,
};