import {
  Brain,
  Rocket,
  Layers,
  RefreshCw,
  Users,
  PlugZap,
  Settings,
  ShieldCheck,
  Cloud,
  CheckCircle,
} from "lucide-react";
import {
  FaTasks,
  FaCheckCircle,
  FaBalanceScale,
  FaCalendarCheck,
  FaRocket,
  FaShoppingCart,
  FaDropbox,
  FaGoogle,
  FaHubspot,
  FaShopify,
  FaWhatsapp,
  FaWpforms,
  FaFacebookMessenger,
  FaSalesforce,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaComments, FaRegCalendarCheck, FaRobot } from "react-icons/fa6";
import {
  SiZoho,
  SiCalendly,
  SiNotion,
  SiAirtable,
  SiWoocommerce,
  SiFresh,
} from "react-icons/si";

const heroSection = {
  title: "Let AI Agents Handle the Busy Work – So You Can Focus on Growth",
  subtitle:
    "TruBot AI Agents are autonomous, intelligent systems built to run repetitive business tasks — from lead follow-ups to appointment scheduling — without manual intervention.",
  primaryCTA: {
    label: "Book a Demo",
    href: "/demo",
  },
  secondaryCTA: {
    label: "Book a Consultation",
    href: "/sales",
  },
  icon: FaRobot,
};

const agentStepList = [
  {
    icon: FaRegCalendarCheck,
    title: "Input Received",
    description:
      "A user submits a request — like booking an appointment or filling out a form.",
  },
  {
    icon: FaTasks,
    title: "Agent in Action",
    description:
      "TruBot AI processes the input, checks data, and coordinates with tools automatically.",
  },
  {
    icon: FaCheckCircle,
    title: "Outcome Delivered",
    description:
      "Confirmation sent, CRM updated, and reminders scheduled — without human help.",
  },
];

const featureList = [
  {
    icon: Brain,
    title: "Context-Aware Intelligence",
    subtitle: "Understands Before It Acts",
    description:
      "TruBot AI Agents analyze user inputs, previous interactions, and business context to make smart decisions — not just follow scripts.",
  },
  {
    icon: Rocket,
    title: "Goal-Driven Autonomy",
    subtitle: "Focuses on Outcomes, Not Steps",
    description:
      "Unlike rule-based bots, our agents align with your business goals and independently choose the best way to get the job done.",
  },
  {
    icon: Layers,
    title: "Plug-and-Play Integrations",
    subtitle: "Fits Right Into Your Stack",
    description:
      "Easily connect with tools like HubSpot, WhatsApp, Calendly, and CRMs using our pre-built connectors and API-ready setup.",
  },
  {
    icon: RefreshCw,
    title: "Self-Improving Behavior",
    subtitle: "Gets Better with Every Task",
    description:
      "Our agents learn from real-world usage to refine how they work — continuously adapting to improve accuracy, timing, and relevance.",
  },
  {
    icon: Users,
    title: "Human + AI Collaboration",
    subtitle: "Stay in Control When It Matters",
    description:
      "Route sensitive decisions through human approval, or jump in anytime — perfect for teams that want oversight without micromanaging.",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Task Execution",
    subtitle: "From Trigger to Completion",
    description:
      "From form fills to follow-ups, TruBot agents handle full workflows — not just responses — saving your team hours each week.",
  },
];

const smeUseCaseList = [
  {
    icon: FaCalendarCheck,
    title: "Healthcare Clinics",
    subtitle: "Keep Schedules Full and Patients Informed — Automatically",
    description:
      "TruBot AI Agents act as your front desk assistant — sending reminders, handling reschedules, and answering basic patient queries 24/7.",
    results: [
      "Reminds patients via WhatsApp or SMS",
      "Handles rescheduling and cancellations",
      "Reduces no-shows by 40%+ in one month",
    ],
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce Stores",
    subtitle: "Automate Your Support Without Losing the Human Touch",
    description:
      "Plug into your store and messaging tools to handle repetitive queries during high-volume moments, instantly.",
    results: [
      "Tracks orders, returns, and payments",
      "24/7 responses via WhatsApp or web chat",
      "Saves 20+ support hours weekly",
    ],
  },
  {
    icon: FaRocket,
    title: "SaaS & Tech Startups",
    subtitle: "Never Lose a Lead Because You Responded Too Late",
    description:
      "Speed wins. TruBot qualifies leads, schedules demos, and initiates onboarding instantly after deal closure.",
    results: [
      "Books calendar demos in real-time",
      "Increases conversion by 25%",
      "Delivers instant lead follow-up",
    ],
  },
  {
    icon: FaBalanceScale,
    title: "Legal & Financial Services",
    subtitle: "Cut Admin Work, Focus on Clients",
    description:
      "Automates intake, compliance, and document collection — freeing your experts to focus on high-value cases.",
    results: [
      "Securely captures client data",
      "Answers FAQs on processes/regulations",
      "Saves 12+ hours/week on admin",
    ],
  },
];

const reflectionList = [
  {
    quote:
      "It feels like we’ve hired a virtual operations manager. Tasks get done in the background, without follow-ups.",
    name: "Internal Team Member",
    title: "Operations",
    company: "TruBot AI",
  },
  {
    quote:
      "I no longer worry about leads going cold. The AI agent follows up faster than I ever could.",
    name: "Pilot Program Participant",
    title: "SaaS Founder",
    company: "—",
  },
  {
    quote:
      "We use our own agents to handle 70% of daily inquiries. It's the first thing we open in the morning.",
    name: "TruBot AI Support Team",
    title: "Internal Team",
    company: "TruBot AI",
  },
];

const integrationList = [
  {
    title: "CRM & Customer Management",
    description:
      "Keep your pipelines updated and leads nurtured — automatically.",
    tools: [
      { name: "HubSpot", icon: FaHubspot, tooltip: "Connect in 1 click" },
      { name: "Salesforce", icon: FaSalesforce },
      { name: "Zoho CRM", icon: SiZoho },
    ],
  },
  {
    title: "Messaging & Engagement",
    description: "Engage customers 24/7 on the platforms they already use.",
    tools: [
      { name: "WhatsApp Business", icon: FaWhatsapp },
      { name: "Messenger", icon: FaFacebookMessenger },
      { name: "Chat Widgets", icon: FaWpforms },
    ],
  },
  {
    title: "Calendars & Scheduling",
    description:
      "Let agents book, reschedule, and confirm appointments on your behalf.",
    tools: [
      { name: "Google Calendar", icon: FaGoogle },
      { name: "Calendly", icon: SiCalendly },
    ],
  },
  {
    title: "Documentation & Forms",
    description:
      "Use agents to collect and structure information without backend logic.",
    tools: [
      { name: "Google Forms", icon: FaWpforms },
      { name: "Notion", icon: SiNotion },
      { name: "Typeform", icon: FaWpforms },
    ],
  },
  {
    title: "Productivity & Storage",
    description:
      "Log interactions, create records, or deliver outputs instantly.",
    tools: [
      { name: "Google Sheets", icon: FaGoogle },
      { name: "Airtable", icon: SiAirtable },
      { name: "Dropbox", icon: FaDropbox },
    ],
  },
  {
    title: "E-commerce & Support",
    description: "Automate post-sale support, returns, and order updates.",
    tools: [
      { name: "Shopify", icon: FaShopify },
      { name: "WooCommerce", icon: SiWoocommerce },
      { name: "Freshdesk", icon: SiFresh },
    ],
  },
];

const relatedProductList = [
  {
    icon: FaComments,
    title: "TruChat – AI-Powered Chatbots",
    description:
      "Automate 24/7 conversations with leads and customers on your website, WhatsApp, and more.",
    link: "/products/ai-chatbots",
  },
  {
    icon: FaPhoneAlt,
    title: "TruVoice – AI Voice Assistants",
    description:
      "Let voice agents handle calls, reminders, and scheduling in real-time — just like a human receptionist.",
    link: "/products/ai-voicebots",
  },
];

const faqSection = {
  title: "Got Questions? We’ve Got Answers.",
  subtitle:
    "Here are some of the most common things people ask us before getting started with TruBot AI Agents.",
  faqList: [
    {
      question:
        "How is an AI Agent different from a chatbot or automation tool?",
      answer:
        "AI Agents don’t just respond — they act. While chatbots wait for prompts and automation tools follow rules, AI Agents understand goals, make decisions, and complete multi-step tasks end to end.",
    },
    {
      question: "Do I need coding or technical knowledge to use this?",
      answer:
        "Not at all. TruBot AI Agents are no-code friendly. You can set goals, connect tools, and launch agents through simple guided flows.",
    },
    {
      question: "What tools can I integrate TruBot AI Agents with?",
      answer:
        "We support integrations with CRMs (like HubSpot, Salesforce), WhatsApp, Calendly, Google Sheets, Shopify, and more — with new connectors added regularly.",
    },
    {
      question: "Is it secure and compliant?",
      answer:
        "Yes. We are GDPR-compliant and follow industry-standard practices for encryption, data control, and user privacy — ideal for SMEs in regulated sectors.",
    },
    {
      question: "Can I monitor or override what an AI Agent is doing?",
      answer:
        "Absolutely. You can track every action in real-time, approve sensitive steps manually, and fine-tune how your agent behaves over time.",
    },
    {
      question: "What kind of support do I get during setup?",
      answer:
        "Our onboarding team is available to help via WhatsApp, email, or call. We also offer 1:1 demo sessions and pre-built templates to make setup fast and frictionless.",
    },
  ],
};

const caseStudyList = [
  {
    title: "Healthcare Clinic Operations",
    challenge:
      "Front-desk staff overwhelmed with appointment scheduling, follow-ups, and patient queries.",
    solution:
      "TruBot AI Agent manages appointment reminders, automates reschedules, and handles FAQs across WhatsApp and Google Calendar.",
    results: [
      "45% reduction in no-show rates",
      "70% fewer front-desk calls",
      "3x faster response to patient queries",
    ],
    linkLabel: "Look Full Scenario",
    linkHref: "/contact",
  },
  {
    title: "E-commerce Post-Sale Support",
    challenge:
      "Customer service flooded with order status and return-related inquiries during peak sales.",
    solution:
      "AI Agent provides order tracking, return assistance, and proactive updates — all without human intervention.",
    results: [
      "80% of queries resolved automatically",
      "Average response time reduced to under 2 minutes",
      "30% increase in post-purchase satisfaction",
    ],
    linkLabel: "Look Full Scenario",
    linkHref: "/contact",
  },
];

const techSpecList = [
  {
    icon: PlugZap,
    title: "Integration Capabilities",
    items: [
      "RESTful APIs and webhook support for seamless integration",
      "Ready-to-use connectors for Salesforce, SAP, Oracle, and more",
      "Professional services for custom integrations",
    ],
  },
  {
    icon: Settings,
    title: "Customization Options",
    items: [
      "No-code UI for quick setup by business users",
      "Low-code visual workflow builder for custom processes",
      "Full SDK access for deep developer control",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security and Compliance",
    items: [
      "SOC 2 Type II, ISO 27001, and GDPR compliant",
      "End-to-end encryption and fine-grained access control",
      "Complete audit trails for all agent activity",
    ],
  },
  {
    icon: Cloud,
    title: "Deployment Options",
    items: [
      "Fully managed SaaS (cloud-hosted) with 99.9% uptime",
      "Private cloud deployment in your own environment",
      "On-premises option for high-security use cases",
    ],
  },
];

const ctaSection = {
  title: "Let an AI Agent Start Working for You Today",
  subtitle:
    "No code. No hassle. Just results. Get started with a smart agent that handles tasks while you focus on growing your business.",
  primaryCTA: {
    label: "Book a Demo",
    href: "/demo",
  },
  secondaryCTA: {
    label: "Book a Consultation",
    href: "/sales",
  },
};

const pricingSection = {
  monthly: [
    {
      name: "Starter",
      price: "$1,500/month",
      features: [
        "Up to 5 AI agents",
        "1,000 agent tasks per month",
        "Standard integrations",
        "Email support",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: false,
    },
    {
      name: "Professional",
      price: "$4,500/month",
      features: [
        "Up to 20 AI agents",
        "10,000 agent tasks per month",
        "Advanced integrations",
        "Priority support",
        "Custom agent training",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited AI agents",
        "Unlimited agent tasks",
        "All integrations",
        "24/7 dedicated support",
        "Custom development",
        "On-premises option",
      ],
      cta: "Contact Sales",
      link: "/contact",
      popular: false,
    },
  ],
  yearly: [
    {
      name: "Starter",
      price: "$15,000/year",
      features: [
        "Up to 5 AI agents",
        "12,000 agent tasks/year",
        "Standard integrations",
        "Priority email support",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: false,
    },
    {
      name: "Professional",
      price: "$45,000/year",
      features: [
        "Up to 20 AI agents",
        "120,000 agent tasks/year",
        "All integrations",
        "Priority support",
        "Custom agent training",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited AI agents",
        "Unlimited tasks",
        "All integrations",
        "24/7 dedicated support",
        "Custom development",
        "On-premises option",
      ],
      cta: "Contact Sales",
      link: "/contact",
      popular: false,
    },
  ],
};

export {
  heroSection,
  agentStepList,
  featureList,
  smeUseCaseList,
  integrationList,
  reflectionList,
  techSpecList,
  pricingSection,
  caseStudyList,
  faqSection,
  relatedProductList,
  ctaSection,
};
