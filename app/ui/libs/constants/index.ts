import {
  FaRobot,
  FaComments,
  FaCogs,
  FaRocket,
  FaFileInvoice,
  FaPhone,
  FaShareAlt,
  FaShieldAlt,
  FaBalanceScale,
  FaChartLine,
  FaGraduationCap,
  FaStore,
  FaUserMd,
  FaWrench,
  FaClock,
  FaPlug,
  FaUserCheck,
} from "react-icons/fa";

const benefitList = [
  {
    icon: FaRobot,
    title: "Work Smarter, Not Harder",
    subtitle: "AI That Handles the Busywork",
    description:
      "Automate repetitive tasks, complex decisions, and customer queries so your team can focus on strategy, not screens.",
  },
  {
    icon: FaComments,
    title: "Always-On Conversations",
    subtitle: "Engage Customers 24/7 Across Channels",
    description:
      "Whether it's voice, chat, or WhatsApp — TruBot never sleeps. Delight users with real-time, intelligent conversations anytime.",
  },
  {
    icon: FaCogs,
    title: "Less Chaos, More Flow",
    subtitle: "Streamline Operations Without a Learning Curve",
    description:
      "From support tickets to invoice automation, TruBot removes operational bottlenecks with no-code integration and smooth onboarding.",
  },
  {
    icon: FaRocket,
    title: "Future-Proof Your Business",
    subtitle: "AI That Grows With You",
    description:
      "Start small, scale fast. TruBot is built for modern SMEs—modular, multilingual, and ready to evolve with your goals.",
  },
];

const productList = [
  {
    icon: FaComments,
    title: "TruChat – AI Chatbots",
    description:
      "Turn conversations into conversions. Deploy chatbots on your website, WhatsApp, or social media to handle support and leads 24/7.",
    link: "/products/ai-chatbots",
  },
  {
    icon: FaPhone,
    title: "TruVoice – AI Voice Bots",
    description:
      "Let your business talk. TruVoice answers calls, books appointments, and guides customers — all through natural voice interaction.",
    link: "/products/ai-voicebots",
  },
  {
    icon: FaRobot,
    title: "TruAgent – AI Agents",
    description:
      "Your smartest employee. TruAgent automates end-to-end tasks like form follow-ups, CRM updates, and data syncing — no dev needed.",
    link: "/products/ai-agents",
  },
  {
    icon: FaCogs,
    title: "TrueRP – ERP System",
    description:
      "Run your entire business in one place. Unified ERP platform bringing CRM, Finance, HR, and Operations together.",
    link: "/products/truerp",
  },
  {
    icon: FaFileInvoice,
    title: "TruFinance – Invoice Automation",
    description:
      "Let AI chase payments, detect fraud, and auto-generate invoices. TruFinance keeps your cashflow healthy and your team focused.",
    link: "/products/smart-invoice-processing",
  },
  {
    icon: FaShareAlt,
    title: "TruSocial – Social Media Tools",
    description:
      "Never miss a trend. Create posts, detect what's working, and engage your audience with AI-powered content optimization.",
    link: "/products/ai-social-media-suite",
  },
  {
    icon: FaShieldAlt,
    title: "TruWatch – AI Surveillance",
    description:
      "Monitor smarter, not harder. TruWatch uses AI to detect unusual behavior, send real-time alerts, and keep your premises secure — without constant human supervision.",
    link: "/products/ai-powered-surveillance",
  },
];

const useCaseList = [
  {
    icon: FaStore,
    title: "E-commerce & Retail",
    subtitle: "AI Chat & Voice Support for Online Stores",
    description:
      "Handle product inquiries, automate order tracking, and resolve return requests without human intervention.",
    results: [
      "Reduce support tickets by 60%",
      "Automate 90% of order status queries",
      "Boost cart recovery with smart nudges",
    ],
  },
  {
    icon: FaUserMd,
    title: "Healthcare & Clinics",
    subtitle: "Appointment Booking and 24/7 Assistance",
    description:
      "Offer patients instant appointment scheduling, automated reminders, and answers to common health queries.",
    results: [
      "Lower no-shows with automated reminders",
      "Cut admin call load by 70%",
      "Support multilingual patient queries",
    ],
  },
  {
    icon: FaGraduationCap,
    title: "EdTech & Coaching Platforms",
    subtitle: "Student Query Resolution with Chatbots",
    description:
      "Answer common questions about courses, pricing, and deadlines using intelligent chat and voice bots.",
    results: [
      "Handle 100+ student queries/day automatically",
      "Engage students in real time",
      "Enable 24/7 info access across platforms",
    ],
  },
  {
    icon: FaWrench,
    title: "Local Services (HVAC, Electricians, Plumbers)",
    subtitle: "Never Miss a Job with After-Hours Bots",
    description:
      "Capture leads and bookings after-hours with voice/chat AI, and send job reminders without lifting a finger.",
    results: [
      "Capture leads 24/7 even when you're offline",
      "Cut missed calls by 80%",
      "Automate service reminders",
    ],
  },
  {
    icon: FaChartLine,
    title: "Marketing Agencies & SaaS",
    subtitle: "Lead Qualification & Demo Booking",
    description:
      "Let bots qualify leads, answer FAQs, and book discovery calls — all before your team steps in.",
    results: [
      "Filter low-intent leads with AI",
      "Auto-book 15-min demos on Calendly",
      "Reduce response delay to <5s",
    ],
  },
  {
    icon: FaBalanceScale,
    title: "Legal & Financial Services",
    subtitle: "Client Intake and Document Support",
    description:
      "Offer AI-guided client onboarding, schedule consultations, and share case status securely via bot.",
    results: [
      "Automate document collection flows",
      "Book client calls without human help",
      "Answer repetitive legal/claim FAQs instantly",
    ],
  },
];

const stepList = [
  {
    icon: FaRobot,
    title: "Choose What You Want to Automate",
    description:
      "Pick a use case that fits your workflow — be it customer support, call handling, lead capture, or invoice reminders. TruBot AI is designed to match your business, not the other way around.",
  },
  {
    icon: FaPlug,
    title: "Set It Up Without Writing a Single Line of Code",
    description:
      "Use our guided interface to connect platforms like WhatsApp, your website, or phone calls. Choose templates or customize your bot flow visually. Go live in minutes.",
  },
  {
    icon: FaClock,
    title: "Let the Bots Work While You Sleep",
    description:
      "Your AI agents go live — handling customer queries, calls, or backend workflows 24/7. Track everything in your dashboard, improve with insights, and watch support load drop.",
  },
];

const reasonList = [
  {
    icon: FaRocket,
    title: "Operator-Led Development",
    description:
      "Founded by experienced startup operators, TruBot AI is built with real-world business automation insight.",
  },
  {
    icon: FaRobot,
    title: "Proven Performance",
    description:
      "Handled over 120 conversations during beta across five live bots in three industries — and growing.",
  },
  {
    icon: FaUserCheck,
    title: "User-Friendly Onboarding",
    description:
      "90% of test users completed setup in under 10 minutes, thanks to our guided, no-code interface.",
  },
];

const ctaSection = {
  title: "Start Automating with TruBot AI Today",
  subtitle:
    "No setup headaches. No hidden costs. Just powerful AI tools built for growing teams.",
  primaryCTA: {
    label: "Try for Free",
    href: "/demo",
  },
  secondaryCTA: {
    label: "Talk to Our Team",
    href: "/sales",
  },
};

export {
  benefitList,
  productList,
  useCaseList,
  stepList,
  reasonList,
  ctaSection,
};
