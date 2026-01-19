import {
  FaTools,
  FaCogs,
  FaBullhorn,
  FaCloud,
  FaHandsHelping,
  FaMoneyCheckAlt,
  FaShoppingCart,
  FaStethoscope,
  FaChalkboardTeacher,
  FaChartBar,
  FaRedoAlt,
  FaComments,
  FaFileInvoiceDollar,
  FaHashtag,
  FaPhoneAlt,
  FaRobot,
  FaVideo,
  FaChartLine,
  FaRocket,
  FaWpforms,
} from "react-icons/fa";
import { FaHandshake, FaTags, FaUserShield } from "react-icons/fa6";

const heroSection = {
  title: "Empower Businesses with Seamless AI Integration",
  subtitle:
    "Join the TruBot AI Implementation Partner Program and collaborate with us to deliver cutting-edge AI chatbot and voice bot solutions to clients.",
  primaryCTA: { label: "Apply Now", href: "/contact" },
  secondaryCTA: { label: "Learn More", href: "/demo" },
  icon: FaHandshake,
};

const benefitList = [
  {
    icon: FaTools,
    title: "Market-Validated Products",
    description:
      "Leverage our suite of AI tools, including chatbots, voice bots, and automation solutions.",
  },
  {
    icon: FaUserShield,
    title: "Dedicated Support",
    description:
      "Our team will assist with onboarding, training, and ongoing support.",
  },
  {
    icon: FaCogs,
    title: "Flexible Partnership Models",
    description: "We offer models tailored to your business goals.",
  },
];

const audienceList = [
  {
    audience: "Digital Marketing Agencies",
    subtitle: "Enhance your offering with AI-driven engagement tools.",
    benefits: [
      { icon: FaBullhorn, text: "Campaign automation" },
      { icon: FaTags, text: "Client branding options" },
    ],
  },
  {
    audience: "SaaS Companies",
    subtitle: "Integrate AI seamlessly into your platform or services.",
    benefits: [
      { icon: FaCloud, text: "API and SDK access" },
      { icon: FaCogs, text: "Platform extensibility" },
    ],
  },
  {
    audience: "E-commerce Businesses",
    subtitle: "Convert more with conversational shopping bots.",
    benefits: [
      { icon: FaShoppingCart, text: "Cart recovery bots" },
      { icon: FaTags, text: "Upsell automation" },
    ],
  },
  {
    audience: "Local Service Providers",
    subtitle: "Automate scheduling, reminders, and queries.",
    benefits: [
      { icon: FaHandsHelping, text: "24/7 customer support" },
      { icon: FaCogs, text: "Easy setup" },
    ],
  },
  {
    audience: "Financial Services & Insurance",
    subtitle: "Streamline client interaction with secure AI bots.",
    benefits: [
      { icon: FaMoneyCheckAlt, text: "Compliance-ready" },
      { icon: FaTags, text: "Risk alerts" },
    ],
  },
  {
    audience: "Healthcare Providers",
    subtitle: "Empower patient care with AI-based scheduling and triage.",
    benefits: [
      { icon: FaStethoscope, text: "Patient triage bots" },
      { icon: FaCogs, text: "HIPAA-aware integrations" },
    ],
  },
];

const partnerBenefitList = [
  {
    icon: FaRedoAlt,
    title: "Recurring Revenue",
    subtitle: "Build consistent income streams",
    description:
      "Earn commissions on every implementation, renewal, and upsell — turning one-time clients into recurring value.",
    results: ["High margins", "Tiered incentives", "Zero overhead"],
  },
  {
    icon: FaChartBar,
    title: "Scalable Solutions",
    subtitle: "Grow with confidence",
    description:
      "From small businesses to enterprises, TruBot AI adapts to your clients’ size and needs with ease.",
    results: [
      "No-code tools",
      "APIs for power users",
      "Works across industries",
    ],
  },
  {
    icon: FaChalkboardTeacher,
    title: "Comprehensive Training",
    subtitle: "Stay ahead of the curve",
    description:
      "We equip partners with everything they need to implement, manage, and support AI deployments confidently.",
    results: ["Interactive docs", "Live onboarding", "Partner knowledge base"],
  },
  {
    icon: FaBullhorn,
    title: "Marketing Support",
    subtitle: "Boost your visibility",
    description:
      "Get co-branded landing pages, ad templates, and creative collateral to support your go-to-market efforts.",
    results: ["Launch campaigns", "Social banners", "Co-hosted webinars"],
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
      "Submit the implementation partner form with your business details and goals.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Onboard",
    description:
      "Complete our training and gain access to the dedicated partner portal.",
  },
  {
    icon: FaRocket,
    title: "Implement",
    description:
      "Start deploying AI solutions for your clients with full support from our team.",
  },
  {
    icon: FaChartLine,
    title: "Grow",
    description:
      "Scale your services and revenue with continuous updates and partner incentives.",
  },
];

const ctaSection = {
  title: "Ready to Partner with Us?",
  subtitle:
    "Take the next step in growing your business with TruBot AI. Apply now to become an implementation partner and offer innovative AI solutions to your clients.",
  primaryCTA: {
    label: "Apply Now",
    href: "/contact",
  },
  secondaryCTA: {
    label: "Explore the Benefits",
    href: "/demo",
  },
};

export {
  heroSection,
  benefitList,
  audienceList,
  partnerBenefitList,
  productList,
  stepList,
  ctaSection,
};
