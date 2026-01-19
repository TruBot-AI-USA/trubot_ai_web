import {
  FaBullhorn,
  FaChalkboardTeacher,
  FaChartLine,
  FaCloud,
  FaCode,
  FaCogs,
  FaComments,
  FaDollarSign,
  FaFileInvoiceDollar,
  FaHandshake,
  FaHashtag,
  FaHeadset,
  FaPhoneAlt,
  FaPlug,
  FaProjectDiagram,
  FaRobot,
  FaRocket,
  FaServer,
  FaStar,
  FaTools,
  FaVideo,
  FaWpforms,
} from "react-icons/fa";

const heroSection = {
  title: "Collaborate to Innovate",
  subtitle:
    "Empowering Businesses with AI-Driven Solutions. Join our Technology Partner Program and grow with TruBot AI.",
  primaryCTA: { label: "Join the Program", href: "/contact" },
  secondaryCTA: { label: "Learn More", href: "/demo" },
  icon: FaCogs,
};

const advantageList = [
  {
    icon: FaRobot,
    name: "Advanced AI Capabilities",
    provider: "TruBot AI Core",
    description:
      "Access cutting-edge AI tools including chatbots, voice bots, and automation systems ready for enterprise integration.",
    tags: ["AI", "NLP", "Bots"],
    link: "#",
  },
  {
    icon: FaPlug,
    name: "Seamless Integration",
    provider: "TruBot SDK + API",
    description:
      "Use our powerful APIs and SDKs to easily integrate with your platforms, products, and services.",
    tags: ["API", "SDK", "DevTools"],
    link: "#",
  },
  {
    icon: FaHeadset,
    name: "Dedicated Support",
    provider: "Partner Engineering",
    description:
      "Work with our onboarding and support teams to ensure seamless deployment and maintenance.",
    tags: ["Tech Support", "Training", "Onboarding"],
    link: "#",
  },
  {
    icon: FaBullhorn,
    name: "Co-Marketing Opportunities",
    provider: "Growth Division",
    description:
      "Join forces for events, content, and campaigns that increase your visibility and generate leads.",
    tags: ["Marketing", "Partnerships", "Co-Branding"],
    link: "#",
  },
];

const partnerList = [
  {
    audience: "Software Vendors",
    subtitle: "Enhance your platform with AI capabilities.",
    benefits: [
      { icon: FaCode, text: "API-ready AI tools" },
      { icon: FaServer, text: "Reliable and scalable architecture" },
    ],
  },
  {
    audience: "OEMs",
    subtitle: "Embed AI into your hardware solutions.",
    benefits: [
      { icon: FaProjectDiagram, text: "Embedded voice/chat interfaces" },
      { icon: FaCode, text: "Low-latency AI models" },
    ],
  },
  {
    audience: "Cloud Platforms",
    subtitle: "Offer AI as a value-add in your ecosystem.",
    benefits: [
      { icon: FaCloud, text: "SaaS-compatible AI modules" },
      { icon: FaCode, text: "Multi-tenant deployments" },
    ],
  },
  {
    audience: "System Integrators",
    subtitle: "Deliver smart automation for enterprise clients.",
    benefits: [
      { icon: FaProjectDiagram, text: "Custom AI workflows" },
      { icon: FaServer, text: "Enterprise integrations" },
    ],
  },
];

const benefitList = [
  {
    icon: FaRocket,
    title: "Innovation Acceleration",
    subtitle: "Speed up development cycles",
    description:
      "Leverage TruBot AI’s ready-to-integrate solutions to build faster and smarter.",
    results: ["Pre-built modules", "Quick onboarding", "Agile-ready SDKs"],
  },
  {
    icon: FaStar,
    title: "Market Differentiation",
    subtitle: "Stand out with AI-first offerings",
    description:
      "Add sophisticated AI to your product lineup to gain a competitive edge.",
    results: ["Smart features", "Conversational UI", "Voice automation"],
  },
  {
    icon: FaDollarSign,
    title: "Revenue Growth",
    subtitle: "Unlock monetization opportunities",
    description:
      "Earn new revenue via implementation services, resale, or integration upsells.",
    results: [
      "Licensing models",
      "Channel partner incentives",
      "Upsell-ready tools",
    ],
  },
  {
    icon: FaTools,
    title: "Technical Enablement",
    subtitle: "Full-stack developer support",
    description:
      "Access extensive docs, engineering guidance, and implementation templates.",
    results: ["API playground", "Code samples", "Priority support"],
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
    icon: FaWpforms,
    title: "Apply",
    description:
      "Submit the technology partner application form with basic company details.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Onboard",
    description:
      "Complete technical training and gain access to developer documentation and partner resources.",
  },
  {
    icon: FaPlug,
    title: "Integrate",
    description:
      "Use our SDKs and APIs to embed TruBot AI features into your platform.",
  },
  {
    icon: FaHandshake,
    title: "Collaborate",
    description:
      "Join co-marketing and go-to-market initiatives to maximize exposure and impact.",
  },
  {
    icon: FaChartLine,
    title: "Grow",
    description:
      "Scale your reach and offering with continuous technical support and product updates.",
  },
];

const ctaSection = {
  title: "Ready to Partner with Us?",
  subtitle:
    "Take the next step in growing your business with TruBot AI. Apply now to become a technology partner and start offering innovative AI solutions to your clients.",
  primaryCTA: {
    label: "Apply Now",
    href: "/contact",
  },
  secondaryCTA: {
    label: "View Product Suite",
    href: "/demo",
  },
};

export {
  heroSection,
  advantageList,
  partnerList,
  benefitList,
  productList,
  stepList,
  ctaSection,
};
