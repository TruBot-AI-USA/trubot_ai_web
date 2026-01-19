import {
  FaBullhorn,
  FaChalkboardTeacher,
  FaChartLine,
  FaClipboardList,
  FaCodeBranch,
  FaComments,
  FaCubes,
  FaDollarSign,
  FaFileInvoiceDollar,
  FaGraduationCap,
  FaHandshake,
  FaHashtag,
  FaHeartbeat,
  FaMapMarkerAlt,
  FaMoneyCheckAlt,
  FaPhoneAlt,
  FaRobot,
  FaRocket,
  FaStore,
  FaTools,
  FaUserShield,
  FaVideo,
} from "react-icons/fa";

const heroSection = {
  title: "Empower Businesses with AI-Driven Solutions",
  subtitle:
    "Join the TruBot AI Reseller Partner Program and offer cutting-edge AI chatbot and voice bot solutions to your clients.",
  primaryCTA: { label: "Apply Now", href: "/contact" },
  secondaryCTA: { label: "Learn More", href: "/demo" },
  icon: FaHandshake,
};

const featureList = [
  {
    icon: FaTools,
    title: "Market-Validated Products",
    description: "Leverage AI tools with proven demand and results.",
  },
  {
    icon: FaUserShield,
    title: "Dedicated Support",
    description: "From onboarding to scaling, we’re with you at every step.",
  },
  {
    icon: FaHandshake,
    title: "Flexible Models",
    description: "Choose a partnership plan that fits your business goals.",
  },
];

const audienceList = [
  {
    icon: FaBullhorn,
    audience: "Digital Marketing Agencies",
    subtitle: "Enhance your offerings with AI-powered engagement tools.",
    benefits: [
      { icon: FaBullhorn, text: "Boost campaign performance" },
      { icon: FaBullhorn, text: "Automate client communication" },
    ],
  },
  {
    icon: FaCodeBranch,
    audience: "SaaS Companies",
    subtitle: "Expand your platform’s capabilities with white-label AI bots.",
    benefits: [
      { icon: FaCodeBranch, text: "Integrate seamlessly" },
      { icon: FaCodeBranch, text: "Upsell with automation" },
    ],
  },
  {
    icon: FaStore,
    audience: "E-commerce Businesses",
    subtitle: "Offer instant support and boost sales conversions.",
    benefits: [
      { icon: FaStore, text: "24/7 customer interaction" },
      { icon: FaStore, text: "Reduce cart abandonment" },
    ],
  },
  {
    icon: FaMapMarkerAlt,
    audience: "Local Service Providers",
    subtitle: "Grow local reach with voice & chat AI tools.",
    benefits: [
      { icon: FaMapMarkerAlt, text: "Handle inquiries 24/7" },
      { icon: FaMapMarkerAlt, text: "Improve lead capture" },
    ],
  },
  {
    icon: FaMoneyCheckAlt,
    audience: "Financial Services & Insurance",
    subtitle: "Offer secure, automated client interactions.",
    benefits: [
      { icon: FaMoneyCheckAlt, text: "Fraud alerts" },
      { icon: FaMoneyCheckAlt, text: "Client onboarding automation" },
    ],
  },
  {
    icon: FaHeartbeat,
    audience: "Healthcare Providers",
    subtitle: "Simplify appointments and patient support.",
    benefits: [
      { icon: FaHeartbeat, text: "Book visits via AI bots" },
      { icon: FaHeartbeat, text: "Answer common health queries" },
    ],
  },
];

const benefitList = [
  {
    icon: FaDollarSign,
    title: "Recurring Revenue",
    subtitle: "Earn while you scale.",
    description:
      "Generate consistent income through client subscriptions and upsells.",
    results: [
      "Monthly commissions",
      "Passive income growth",
      "No cap on earnings",
    ],
  },
  {
    icon: FaCubes,
    title: "Scalable Solutions",
    subtitle: "From startups to enterprises.",
    description:
      "Offer tools that fit every business size and scale with your clients.",
    results: [
      "Serve multiple industries",
      "Flexible deployment",
      "High usage tolerance",
    ],
  },
  {
    icon: FaGraduationCap,
    title: "Comprehensive Training",
    subtitle: "We train you to win.",
    description:
      "Access onboarding sessions, product demos, and expert playbooks.",
    results: [
      "Live demos & support",
      "Reseller portal access",
      "Sales pitch scripts",
    ],
  },
  {
    icon: FaBullhorn,
    title: "Marketing Support",
    subtitle: "Sell smarter, not harder.",
    description:
      "Boost your sales with co-branded marketing assets and strategies.",
    results: [
      "Case studies & flyers",
      "Email & ad templates",
      "Campaign planning help",
    ],
  },
];

const productList = [
  {
    icon: FaComments,
    title: "TruChat",
    description:
      "AI-powered chatbots for websites, WhatsApp, and social platforms.",
    link: "/products/ai-chatbots",
  },
  {
    icon: FaPhoneAlt,
    title: "TruVoice",
    description:
      "Voice bots that handle calls, bookings, and customer inquiries.",
    link: "/products/ai-voicebots",
  },
  {
    icon: FaRobot,
    title: "TruAgent",
    description: "Automate CRM tasks, follow-ups, and business workflows.",
    link: "/products/ai-agents",
  },
  {
    icon: FaFileInvoiceDollar,
    title: "TruFinance",
    description: "Automated invoicing, reminders, and fraud detection.",
    link: "/products/smart-invoice-processing",
  },
  {
    icon: FaHashtag,
    title: "TruSocial",
    description: "Create content, detect trends, and grow social engagement.",
    link: "/products/ai-social-media-suite",
  },
  {
    icon: FaVideo,
    title: "TruWatch",
    description: "AI surveillance system for real-time monitoring and alerts.",
    link: "/products/ai-powered-surveillance",
  },
];

const stepList = [
  {
    stepNumber: 1,
    title: "Apply",
    description: "Fill out our reseller application form and get started.",
    icon: FaClipboardList,
  },
  {
    stepNumber: 2,
    title: "Onboard",
    description: "Get trained and gain access to the reseller portal.",
    icon: FaChalkboardTeacher,
  },
  {
    stepNumber: 3,
    title: "Sell",
    description: "Start offering TruBot AI solutions and earning commissions.",
    icon: FaRocket,
  },
  {
    stepNumber: 4,
    title: "Grow",
    description: "Expand your offerings with our continuous support.",
    icon: FaChartLine,
  },
];

const ctaSection = {
  title: "Ready to Partner with TruBot AI?",
  subtitle:
    "Join a global community of forward-thinking resellers bringing AI to businesses everywhere.",
  primaryCTA: { label: "Apply Now", href: "/contact" },
  secondaryCTA: { label: "Learn More", href: "/demo" },
};

export {
  heroSection,
  featureList,
  audienceList,
  benefitList,
  productList,
  stepList,
  ctaSection,
};
