import {
  FaDollarSign,
  FaPaintBrush,
  FaHandshake,
  FaChartLine,
  FaClock,
  FaFileInvoice,
  FaPhoneAlt,
  FaRobot,
  FaShareAlt,
  FaBullhorn,
  FaCubes,
  FaLaptopCode,
  FaPlug,
  FaClipboardCheck,
  FaPalette,
  FaRocket,
  FaChartBar,
  FaGlobe,
  FaHeadset,
  FaTools,
} from "react-icons/fa";
import { FaComments } from "react-icons/fa6";

const heroSection = {
  heading: "Launch Your Own AI Chatbot Platform",
  description:
    "Become a TruBot AI White Label Partner and resell industry-proven AI chatbots, voice bots, and automation tools—fully rebranded as your own.",
  primaryCTA: {
    label: "Become a Partner",
    href: "/contact",
    iconLeft: FaHandshake,
  },
  secondaryCTA: {
    label: "Request Free Demo",
    href: "/contact",
  },
  highlightCard: {
    title: "Why Partners Choose Us:",
    items: [
      "No development costs",
      "Fully brandable platform",
      "Flexible pricing & billing",
      "Priority partner support",
      "Launch in days, not months",
    ],
  },
};

const featureList = [
  {
    icon: FaDollarSign,
    title: "Skip Development Costs",
    description:
      "No need to hire engineers or invest in R&D. Our platform is ready to deploy.",
  },
  {
    icon: FaPaintBrush,
    title: "Fully Brandable Platform",
    description:
      "Use your own domain, logo, and messaging. It's your product, powered by us.",
  },
  {
    icon: FaHandshake,
    title: "Comprehensive Support",
    description:
      "We help you with sales enablement, onboarding, and partner-first support.",
  },
  {
    icon: FaChartLine,
    title: "Flexible Pricing & Billing",
    description:
      "You decide how to price, bill, and serve your customers. Total flexibility.",
  },
  {
    icon: FaClock,
    title: "Faster Time to Market",
    description: "Launch your own branded AI platform in days—not months.",
  },
];

const productList = [
  {
    icon: FaComments,
    title: "TruChat",
    description: "Smart Chatbots for Websites & WhatsApp",
    link: "/products/ai-chatbot",
  },
  {
    icon: FaPhoneAlt,
    title: "TruVoice",
    description: "AI-Powered Voice Bots for Call Automation",
    link: "/products/ai-voicebot",
  },
  {
    icon: FaRobot,
    title: "TruAgent",
    description: "Advanced AI Agents for Lead Gen & Support",
    link: "/products/ai-agent",
  },
  {
    icon: FaFileInvoice,
    title: "TruInvoice",
    description: "Automated Invoicing & Follow-ups",
    link: "/products/invoice-management-solutions",
  },
  {
    icon: FaShareAlt,
    title: "TruSocial",
    description: "Social Media Engagement Bots",
    link: "/products/social-media-tool",
  },
];

const personaList = [
  {
    audience: "Digital Marketing Agencies",
    subtitle: "Add chatbots to client packages effortlessly.",
    benefits: [
      {
        icon: FaBullhorn,
        text: "Offer AI chat, voice & automation in campaigns",
      },
    ],
  },
  {
    audience: "SaaS Startups",
    subtitle: "Increase LTV with built-in AI services.",
    benefits: [
      { icon: FaCubes, text: "Upsell white-labeled AI as core feature" },
    ],
  },
  {
    audience: "IT Consultants",
    subtitle: "Offer complete AI automation suites.",
    benefits: [
      { icon: FaLaptopCode, text: "Deliver ready-made tools to clients" },
    ],
  },
  {
    audience: "CRM & ERP Providers",
    subtitle: "Embed TruBot AI features into your ecosystem.",
    benefits: [
      { icon: FaPlug, text: "Seamless API integration into existing stack" },
    ],
  },
];

const stepList = [
  {
    icon: FaClipboardCheck,
    title: "Apply to Become a Partner",
    description:
      "We’ll evaluate your use case and onboard you within 48 hours.",
  },
  {
    icon: FaPalette,
    title: "Rebrand Your Platform",
    description:
      "Use your domain, logo, and color scheme. Customize messaging and UI.",
  },
  {
    icon: FaRocket,
    title: "Start Selling & Scaling",
    description:
      "Onboard your clients, set your prices, and grow your AI revenue.",
  },
];

const highlightList = [
  {
    icon: FaTools,
    name: "Pre-validated Tools",
    provider: "Built for PMF",
    description: "Our products already have strong product-market fit.",
    tags: ["Tried & Tested"],
    link: "/solutions",
  },
  {
    icon: FaGlobe,
    name: "Multi-region Compatibility",
    provider: "Global Ready",
    description: "Serve clients in the US, India, and other global markets.",
    tags: ["US", "India", "Asia"],
    link: "/solutions",
  },
  {
    icon: FaPlug,
    name: "Easy Integrations",
    provider: "API & Embed",
    description: "Connect easily with CRMs like HubSpot, Salesforce, and more.",
    tags: ["CRM Ready", "API"],
    link: "/solutions",
  },
  {
    icon: FaChartBar,
    name: "Analytics Dashboard",
    provider: "Real-Time Insights",
    description:
      "Track performance, engagement, and ROI with built-in dashboards.",
    tags: ["Reports", "Engagement"],
    link: "/solutions",
  },
  {
    icon: FaHeadset,
    name: "24/7 Partner Support",
    provider: "Always On",
    description:
      "Get dedicated Slack & email support from our partner success team.",
    tags: ["Dedicated Team", "Priority"],
    link: "/contact",
  },
];

const testinomialList = [
  {
    quote:
      "We launched a fully branded chatbot service in 3 days. TruBot AI’s support and tools made it incredibly easy.",
    name: "Raj B.",
    title: "Founder",
    company: "MarTech Agency",
  },
  {
    quote:
      "The white-label voice bots helped us reduce call handling time for our clients by 50%. Highly recommended.",
    name: "Meghan T.",
    title: "SaaS Consultant",
    company: "NextWave Solutions",
  },
];

const faqSection = {
  title: "White Label Partner FAQ",
  subtitle:
    "Everything you need to know before launching your white-labeled AI platform.",
  faqList: [
    {
      question: "Can I use my own domain and branding?",
      answer:
        "Yes, you get full control over branding, logos, domains, and styling.",
    },
    {
      question: "Who handles hosting and infrastructure?",
      answer:
        "We manage everything. You focus on sales and client relationships.",
    },
    {
      question: "Is there a minimum number of clients required?",
      answer: "No. Start with 1 client or 100—scale at your pace.",
    },
    {
      question: "Do I need to know coding?",
      answer: "Not at all. Our platform is 100% no-code and partner-ready.",
    },
    {
      question:
        "Can I integrate TruBot AI tools into my existing SaaS platform?",
      answer: "Absolutely! We provide APIs and embeddable components.",
    },
  ],
};

const ctaSection = {
  title: "Ready to Partner?",
  subtitle:
    "Unlock a new revenue stream with AI-driven tools trusted by businesses worldwide.",
  primaryCTA: {
    label: "Apply Now",
    href: "/contact",
  },
  secondaryCTA: {
    label: "Request a Demo",
    href: "/contact",
  },
};

export {
  heroSection,
  featureList,
  productList,
  personaList,
  stepList,
  highlightList,
  testinomialList,
  faqSection,
  ctaSection,
};
