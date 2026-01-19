import {
  FaBalanceScale,
  FaBrain,
  FaBuilding,
  FaChartLine,
  FaCheckCircle,
  FaCogs,
  FaComments,
  FaExchangeAlt,
  FaFileInvoiceDollar,
  FaFlask,
  FaGlobe,
  FaHandshake,
  FaHandsHelping,
  FaHashtag,
  FaLightbulb,
  FaNetworkWired,
  FaPhoneAlt,
  FaRobot,
  FaRocket,
  FaUniversity,
  FaUsersCog,
  FaVideo,
  FaWpforms,
} from "react-icons/fa";

const heroSection = {
  title: "Collaborate to Innovate: Shaping the Future of AI Together",
  subtitle:
    "Join the TruBot AI Strategic Partner Program and collaborate with us to deliver cutting-edge AI chatbot and voice bot solutions to clients.",
  primaryCTA: { label: "Apply Now", href: "/contact" },
  secondaryCTA: { label: "Learn More", href: "/demo" },
  icon: FaHandshake,
};

const benefitList = [
  {
    icon: FaRobot,
    name: "Pioneering AI Solutions",
    provider: "TruBot R&D",
    description:
      "Access and integrate next-gen AI tools that redefine customer and business experiences.",
    tags: ["AI", "NLP", "Voice"],
    link: "#",
  },
  {
    icon: FaLightbulb,
    name: "Collaborative Innovation",
    provider: "Co-Lab Initiative",
    description:
      "Participate in joint R&D projects that push AI boundaries and explore new frontiers.",
    tags: ["Co-R&D", "Partnership", "Innovation"],
    link: "#",
  },
  {
    icon: FaGlobe,
    name: "Market Expansion",
    provider: "Partner Ecosystem",
    description:
      "Expand your reach via shared access to TruBot’s global partner and customer networks.",
    tags: ["Ecosystem", "Scale", "Reach"],
    link: "#",
  },
  {
    icon: FaBalanceScale,
    name: "Shared Vision",
    provider: "Ethical AI Foundation",
    description:
      "Align with a team dedicated to transformative, responsible AI development and deployment.",
    tags: ["Ethics", "Sustainability", "Impact"],
    link: "#",
  },
];

const audienceList = [
  {
    audience: "Technology Providers",
    subtitle: "Embed TruBot AI into your ecosystem for deeper AI engagement.",
    benefits: [
      { icon: FaNetworkWired, text: "API-first integration" },
      { icon: FaLightbulb, text: "Scalable modules" },
    ],
  },
  {
    audience: "Research Institutions",
    subtitle:
      "Collaborate on AI R&D with measurable academic + industry impact.",
    benefits: [
      { icon: FaUniversity, text: "Joint research grants" },
      { icon: FaRobot, text: "Model evaluation support" },
    ],
  },
  {
    audience: "Enterprises",
    subtitle: "Co-create customized AI for specific workflows and sectors.",
    benefits: [
      { icon: FaBuilding, text: "AI tailored to your industry" },
      { icon: FaCogs, text: "Enterprise-ready architecture" },
    ],
  },
  {
    audience: "Consulting Firms",
    subtitle: "Add AI implementation to your digital transformation roadmap.",
    benefits: [
      { icon: FaUsersCog, text: "Plug-in AI accelerators" },
      { icon: FaCheckCircle, text: "Sales + technical support" },
    ],
  },
];

const strategicBenefitList = [
  {
    icon: FaBrain,
    title: "Joint Innovation",
    subtitle: "Co-build AI of tomorrow",
    description:
      "Collaborate on novel solutions in conversational AI, automation, and machine learning.",
    results: ["Shared IP initiatives", "Pilot launches", "R&D cycles"],
  },
  {
    icon: FaExchangeAlt,
    title: "Resource Sharing",
    subtitle: "Access mutual intelligence",
    description:
      "Partners benefit from shared tools, datasets, and team expertise to accelerate innovation.",
    results: ["Data sandboxes", "Dev resources", "Advisory access"],
  },
  {
    icon: FaHandshake,
    title: "Brand Association",
    subtitle: "Partner with a rising AI leader",
    description:
      "Showcase your alignment with TruBot AI across marketing, product, and PR.",
    results: ["Joint releases", "Event co-hosting", "Logo placement"],
  },
  {
    icon: FaRocket,
    title: "Strategic Growth",
    subtitle: "Scale through synergy",
    description:
      "Unlock new markets and opportunities via our growing ecosystem and industry influence.",
    results: [
      "Cross-market exposure",
      "Vertical expansion",
      "Partner-only incentives",
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
    icon: FaWpforms,
    title: "Apply",
    description:
      "Fill out our strategic partnership application with your collaboration interests.",
  },
  {
    icon: FaHandsHelping,
    title: "Align",
    description:
      "Identify shared goals, areas for co-development, and partnership scope.",
  },
  {
    icon: FaFlask,
    title: "Collaborate",
    description:
      "Kick off joint initiatives — whether it’s research, product co-creation, or technical deployment.",
  },
  {
    icon: FaChartLine,
    title: "Grow",
    description:
      "Expand through shared success, brand elevation, and access to new markets.",
  },
];

const ctaSection = {
  title: "Ready to Partner with Us?",
  subtitle:
    "Take the next step in shaping the future of AI. Apply now to become a strategic partner with TruBot AI and embark on a journey of innovation and growth.",
  primaryCTA: {
    label: "Apply Now",
    href: "/contact",
  },
  secondaryCTA: {
    label: "Explore Benefits",
    href: "/demo",
  },
};

export {
  heroSection,
  benefitList,
  audienceList,
  strategicBenefitList,
  productList,
  stepList,
  ctaSection,
};
