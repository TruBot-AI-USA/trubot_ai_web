import {
  LucideShieldCheck,
  LucideZap,
  LucidePuzzle,
  LucideWorkflow,
  LucideSearchCheck,
  BrainCircuit,
} from "lucide-react";
import {
  FaBullhorn,
  FaChartLine,
  FaCogs,
  FaDollarSign,
  FaGlobe,
  FaHandshake,
  FaMagic,
  FaPlug,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaTools,
  FaUpload,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import {
  FaBrain,
  FaIndustry,
  FaLightbulb,
  FaRobot,
  FaTruck,
} from "react-icons/fa6";

const heroSection = {
  title: "Intelligent AI Agents",
  subtitle:
    "Harness the power of autonomous AI agents that can reason, plan, and execute complex tasks with minimal human intervention.",
  primaryCTA: { label: "Book a Demo", href: "/demo" },
  secondaryCTA: { label: "Book a Consultation", href: "/sales" },
  icon: BrainCircuit,
};

const featureList = [
  {
    title: "Curated AI Solution Ecosystem",
    description:
      "Every solution undergoes rigorous technical and security evaluation to ensure top-tier quality and business value.",
    icon: LucideSearchCheck,
  },
  {
    title: "Seamless Integration Framework",
    description:
      "Connect effortlessly with your existing systems, reducing technical barriers and speeding up deployment.",
    icon: LucideWorkflow,
  },
  {
    title: "Unified Security Standards",
    description:
      "All solutions meet strict compliance and data protection protocols to ensure enterprise-level security.",
    icon: LucideShieldCheck,
  },
  {
    title: "Intelligent Recommendation Engine",
    description:
      "Receive personalized solution suggestions based on your environment, goals, and business needs.",
    icon: LucideZap,
  },
  {
    title: "Streamlined Procurement",
    description:
      "Simplified contracts and transparent pricing cut procurement time from months to days.",
    icon: LucidePuzzle,
  },
];

const solutionCategoryList = [
  {
    title: "Industry-Specific Solutions",
    description:
      "Discover AI tools crafted for your industry's unique challenges and opportunities.",
    solutions: [
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Retail",
      "Professional Services",
      "Technology",
      "Government",
    ],
    linkLabel: "Browse Industry Solutions",
    linkHref: "/solutions",
    icon: FaIndustry,
  },
  {
    title: "Functional Solutions",
    description:
      "Solve business challenges with AI solutions tailored to marketing, HR, sales, and more.",
    solutions: [
      "Marketing Automation",
      "Customer Support",
      "Sales Optimization",
      "Human Resources",
      "Supply Chain",
      "Compliance & Risk",
    ],
    linkLabel: "Browse Functional Solutions",
    linkHref: "/solutions",
    icon: FaCogs,
  },
  {
    title: "Technical Solutions",
    description:
      "Unlock powerful AI infrastructure with advanced tools in NLP, Vision, MLOps and more.",
    solutions: [
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Generative AI",
      "AI Model Monitoring",
      "ML Infrastructure",
    ],
    linkLabel: "Browse Technical Solutions",
    linkHref: "/solutions",
    icon: FaBrain,
  },
];

const buyStepList = [
  {
    title: "Explore Curated AI Solutions",
    description:
      "Browse a wide selection of rigorously vetted, enterprise-ready AI tools by use case, industry, or capability.",
    icon: FaSearch,
  },
  {
    title: "Get Personalized Recommendations",
    description:
      "Leverage our AI matching engine to find solutions that align with your tech stack, goals, and needs.",
    icon: FaMagic,
  },
  {
    title: "Deploy & Integrate Seamlessly",
    description:
      "Quickly test and integrate AI tools into your environment using our universal integration framework.",
    icon: FaPlug,
  },
  {
    title: "Purchase & Scale with Confidence",
    description:
      "Simplified procurement, transparent pricing, and secure contracts accelerate your buying cycle.",
    icon: FaHandshake,
  },
];
const providerStepList = [
  {
    title: "Apply to List Your Solution",
    description:
      "Submit your AI product for inclusion in the marketplace. We evaluate all solutions for security and quality.",
    icon: FaUpload,
  },
  {
    title: "Complete Technical Review",
    description:
      "Our team conducts a thorough technical and compliance assessment to ensure enterprise readiness.",
    icon: FaShieldAlt,
  },
  {
    title: "Publish & Reach Buyers",
    description:
      "Get listed, featured, and discoverable by enterprise buyers with matching recommendations.",
    icon: FaBullhorn,
  },
  {
    title: "Accelerate Adoption & Revenue",
    description:
      "Streamline sales, scale distribution, and shorten procurement cycles with built-in support and visibility.",
    icon: FaChartLine,
  },
];

const solutionList = [
  {
    name: "Enterprise AI Assistant",
    provider: "Cognitive Systems",
    description:
      "An intelligent AI assistant that integrates with your enterprise systems to automate complex workflows, answer employee questions, and improve productivity across your organization.",
    icon: FaRobot,
    tags: ["Productivity", "Automation", "Enterprise"],
    link: "/solutions",
    bgColor: "bg-blue-100",
  },
  {
    name: "Predictive Maintenance Suite",
    provider: "Industrial Intelligence",
    description:
      "Advanced AI that predicts equipment failures before they happen, optimizes maintenance schedules, and extends asset lifespans in manufacturing and industrial environments.",
    icon: FaTools,
    tags: ["Manufacturing", "Maintenance", "AI"],
    link: "/solutions",
    bgColor: "bg-green-100",
  },
  {
    name: "Customer Journey Optimizer",
    provider: "ExperienceAI",
    description:
      "AI-powered customer journey mapping and optimization that identifies friction points, personalizes interactions, and increases conversion rates across all customer touchpoints.",
    icon: FaUserFriends,
    tags: ["Customer Experience", "Marketing", "Analytics"],
    link: "/solutions",
    bgColor: "bg-yellow-100",
  },
  {
    name: "Supply Chain Intelligence",
    provider: "LogisticsMind",
    description:
      "End-to-end supply chain optimization using AI to forecast demand, identify risks, optimize inventory, and improve logistics efficiency.",
    icon: FaTruck,
    tags: ["Supply Chain", "Logistics", "Optimization"],
    link: "/solutions",
    bgColor: "bg-purple-100",
  },
];

const benefitList = [
  {
    audience: "Enterprises",
    subtitle: "Transform Your Business with Confidence",
    benefits: [
      {
        icon: FaShieldAlt,
        text: "Reduced Risk: Pre-vetted solutions meeting enterprise standards",
      },
      {
        icon: FaRocket,
        text: "Faster Implementation: 60% shorter deployment time",
      },
      {
        icon: FaDollarSign,
        text: "Cost Efficiency: Transparent pricing and competitive dynamics",
      },
      {
        icon: FaCogs,
        text: "Simplified Management: Unified billing and support",
      },
      {
        icon: FaGlobe,
        text: "Future-Proof Strategy: Evolving ecosystem of AI technologies",
      },
    ],
  },
  {
    audience: "SMEs",
    subtitle: "Enterprise-Grade AI, Accessible to All",
    benefits: [
      {
        icon: FaDollarSign,
        text: "Affordable Access: Flexible pricing models",
      },
      { icon: FaCogs, text: "Reduced Complexity: Simplified implementation" },
      {
        icon: FaRocket,
        text: "Scalable Growth: Expand as your business grows",
      },
      {
        icon: FaUsers,
        text: "Expert Guidance: Tailored recommendations and support",
      },
      {
        icon: FaChartLine,
        text: "Competitive Advantage: Leverage powerful AI tools",
      },
    ],
  },
  {
    audience: "Solution Providers",
    subtitle: "Accelerate Your Go-to-Market Strategy",
    benefits: [
      {
        icon: FaGlobe,
        text: "Expanded Reach: Access to a global customer base",
      },
      {
        icon: FaHandshake,
        text: "Reduced Sales Cycle: Streamlined procurement process",
      },
      {
        icon: FaShieldAlt,
        text: "Enhanced Credibility: Association with a trusted marketplace",
      },
      {
        icon: FaCogs,
        text: "Technical Support: Integration assistance and ongoing support",
      },
      {
        icon: FaRocket,
        text: "Marketing Amplification: Co-marketing opportunities",
      },
    ],
  },
];

const testimonialList = [
  {
    quote:
      "The AI Marketplace transformed our approach to technology adoption. Instead of spending months evaluating vendors and negotiating contracts, we found and implemented three AI solutions in just weeks. The pre-vetted security and seamless integration saved our IT team countless hours.",
    name: "Jennifer Chen",
    title: "CIO",
    company: "Global Financial Services Corporation",
  },
  {
    quote:
      "As a growing business, we never thought we'd have access to the same AI capabilities as larger competitors. The marketplace made enterprise-grade AI affordable and approachable for our team, helping us compete effectively despite our size.",
    name: "Michael Rodriguez",
    title: "CEO",
    company: "Regional Manufacturing Company",
  },
  {
    quote:
      "Joining the marketplace has been transformative for our business. We've seen a 300% increase in qualified leads and a 40% shorter sales cycle. The integration framework also helped us improve our product's deployment process for all customers.",
    name: "Sarah Johnson",
    title: "Founder",
    company: "AI Analytics Startup",
  },
];

const faqSection = {
  title: "Frequently Asked Questions",
  subtitle: "Everything you need to know about the AI Marketplace",
  faqList: [
    {
      question: "How are solutions vetted for the marketplace?",
      answer:
        "All solutions undergo a comprehensive evaluation process that includes technical assessment, security review, performance testing, and customer reference checks. Only solutions that meet our strict standards for quality, security, and business value are accepted into the marketplace.",
    },
    {
      question: "What types of integration support are available?",
      answer:
        "Our marketplace provides standardized APIs, pre-built connectors for common business systems, detailed integration documentation, and technical support from both our team and solution providers. For complex integrations, we offer professional services to ensure smooth implementation.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Each solution provider sets their own pricing, which is transparently displayed on their marketplace listing. We support various pricing models including subscription, usage-based, and one-time purchases. All billing is centralized through our platform for simplified administration.",
    },
    {
      question: "Can solutions be customized for specific business needs?",
      answer:
        "Yes, many solutions offer customization options directly through the marketplace. For more extensive customization needs, you can connect with solution providers for tailored implementations while still maintaining the benefits of our marketplace framework.",
    },
    {
      question: "What support is available after purchase?",
      answer:
        "All marketplace solutions include standard support directly from the solution provider. We also offer a unified support portal where you can manage all your support requests in one place. Premium support options are available for mission-critical implementations.",
    },
  ],
};

const relatedProductList = [
  {
    title: "AI Agents",
    description:
      "Enhance marketplace solutions with intelligent AI agents that can automate complex workflows across multiple systems.",
    icon: FaRobot,
    link: "/products",
  },
  {
    title: "Strategic Sourcing for SMEs",
    description:
      "Get personalized guidance on selecting and implementing the right AI solutions for your small or medium-sized business.",
    icon: FaLightbulb,
    link: "/products",
  },
  {
    title: "Partner Program",
    description:
      "Join our ecosystem as a solution provider and accelerate your business growth through our marketplace platform.",
    icon: FaHandshake,
    link: "/products",
  },
];

const ctaSection = {
  title: "Ready to Transform Your Business with AI?",
  subtitle:
    "Explore our curated marketplace of enterprise-grade AI solutions and find the perfect tools to drive innovation, efficiency, and growth for your organization.",
  primaryCTA: { label: "Book a Demo", href: "/demo" },
  secondaryCTA: { label: "Book a Consultation", href: "/sales" },
};

export {
  heroSection,
  featureList,
  solutionCategoryList,
  buyStepList,
  providerStepList,
  solutionList,
  benefitList,
  testimonialList,
  faqSection,
  relatedProductList,
  ctaSection,
};
