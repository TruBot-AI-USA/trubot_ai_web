import { BrainCircuit } from "lucide-react";
import {
  FaSearch,
  FaBalanceScale,
  FaUserShield,
  FaTools,
  FaSyncAlt,
  FaChartLine,
  FaClipboardList,
  FaCompass,
  FaCog,
  FaMoneyCheckAlt,
  FaUsers,
  FaCheckCircle,
  FaCalculator,
  FaClipboardCheck,
  FaMapMarkedAlt,
  FaUserTie,
  FaCodeBranch,
  FaHandshake,
  FaStore,
} from "react-icons/fa";

const heroSection = {
  title: "Strategic AI Sourcing for Small and Medium Enterprises",
  subtitle:
    "Find, compare, and implement the perfect AI solutions for your business needs with our intelligent buying aggregator platform designed specifically for SMEs.",
  primaryCTA: {
    label: "Book a Demo",
    href: "/demo",
  },
  secondaryCTA: {
    label: "Book a Consultation",
    href: "/sales",
  },
  icon: BrainCircuit,
};

const featureList = [
  {
    title: "AI Solution Matchmaking",
    subtitle: "Find Your Perfect AI Fit",
    description:
      "Our intelligent recommendation engine analyzes your business needs, technical environment, and budget to suggest the most suitable AI solutions from hundreds of vetted providers.",
    icon: FaSearch,
  },
  {
    title: "Simplified Comparison",
    subtitle: "Beyond Feature Checklists",
    description:
      "Compare AI solutions based on what matters most to your business—implementation time, total cost of ownership, integration requirements, and real-world performance metrics.",
    icon: FaBalanceScale,
  },
  {
    title: "Vendor-Neutral Guidance",
    subtitle: "Unbiased Recommendations",
    description:
      "Receive objective advice from our AI experts who prioritize your business outcomes, not vendor commissions. Our transparent business model ensures you get the best solution for your needs.",
    icon: FaUserShield,
  },
  {
    title: "SME-Friendly Implementation",
    subtitle: "Designed for Your Resources",
    description:
      "All recommended solutions include implementation roadmaps tailored to SME resources and capabilities, with clear guidance on technical requirements and internal expertise needed.",
    icon: FaTools,
  },
  {
    title: "Ongoing Optimization",
    subtitle: "Continuous Value Improvement",
    description:
      "Our platform monitors your AI solution performance and suggests optimizations, upgrades, or alternatives as your business evolves and new technologies emerge.",
    icon: FaSyncAlt,
  },
];

const stepList = [
  {
    title: "Assess Your Needs",
    description:
      "Complete our comprehensive assessment to evaluate your business needs, technical environment, data readiness, and team capabilities. Our AI analyzes your responses to create a personalized roadmap.",
    icon: FaClipboardList,
  },
  {
    title: "Explore Curated Solutions",
    description:
      "Receive tailored recommendations from our extensive catalog of pre-vetted AI solutions specifically suited to SME requirements and constraints.",
    icon: FaCompass,
  },
  {
    title: "Compare and Select",
    description:
      "Use our interactive comparison tools to evaluate solutions based on features, cost, implementation complexity, and customer reviews from businesses similar to yours.",
    icon: FaBalanceScale,
  },
  {
    title: "Implementation Support",
    description:
      "Access step-by-step implementation guides, technical documentation, and expert support to ensure successful deployment with minimal disruption.",
    icon: FaTools,
  },
  {
    title: "Measure and Optimize",
    description:
      "Track performance metrics, identify improvement opportunities, and receive ongoing recommendations to enhance your AI investments over time.",
    icon: FaChartLine,
  },
];

const solutionList = [
  {
    title: "Business Operations",
    description:
      "Discover AI solutions that automate routine tasks, optimize workflows, and improve operational efficiency across your organization.",
    solutions: [
      "Intelligent Document Processing",
      "Workflow Automation",
      "Resource Planning Optimization",
      "Meeting Transcription and Summarization",
    ],
    linkLabel: "Explore Operations Solutions",
    linkHref: "/solutions",
    icon: FaCog,
  },
  {
    title: "Customer Experience",
    description:
      "Enhance customer interactions, personalize experiences, and improve satisfaction with AI-powered customer experience solutions.",
    solutions: [
      "Customer Service Automation",
      "Personalization Engines",
      "Voice and Chat Assistants",
      "Customer Journey Analytics",
    ],
    linkLabel: "Explore Customer Experience Solutions",
    linkHref: "/solutions",
    icon: FaUsers,
  },
  {
    title: "Sales and Marketing",
    description:
      "Identify opportunities, optimize campaigns, and convert more prospects with AI solutions designed for SME sales and marketing teams.",
    solutions: [
      "Lead Scoring and Qualification",
      "Content Generation and Optimization",
      "Market Intelligence",
      "Conversion Rate Optimization",
    ],
    linkLabel: "Explore Sales and Marketing Solutions",
    linkHref: "/solutions",
    icon: FaChartLine,
  },
  {
    title: "Financial Management",
    description:
      "Improve financial operations, reduce costs, and make better decisions with AI-powered financial management tools.",
    solutions: [
      "Accounts Payable Automation",
      "Cash Flow Forecasting",
      "Expense Management",
      "Financial Planning and Analysis",
    ],
    linkLabel: "Explore Financial Solutions",
    linkHref: "/solutions",
    icon: FaMoneyCheckAlt,
  },
];

const benefitList = [
  {
    audience: "Reduced Risk",
    subtitle: "Confidence in Your AI Investments",
    benefits: [
      {
        icon: FaCheckCircle,
        text: "Rigorous evaluation of all solutions for security, reliability, and SME suitability",
      },
      {
        icon: FaCheckCircle,
        text: "Minimized implementation failure and technical risk",
      },
    ],
  },
  {
    audience: "Cost Efficiency",
    subtitle: "Enterprise Capabilities at SME Prices",
    benefits: [
      {
        icon: FaCheckCircle,
        text: "Access to negotiated pricing and exclusive SME packages",
      },
      {
        icon: FaCheckCircle,
        text: "Transparent total cost of ownership calculations",
      },
    ],
  },
  {
    audience: "Time Savings",
    subtitle: "From Months to Days",
    benefits: [
      {
        icon: FaCheckCircle,
        text: "Shorten selection process with pre-vetted options",
      },
      {
        icon: FaCheckCircle,
        text: "Streamlined comparison tools for fast decision-making",
      },
    ],
  },
  {
    audience: "Expertise On Demand",
    subtitle: "AI Guidance When You Need It",
    benefits: [
      {
        icon: FaCheckCircle,
        text: "On-demand advisory services from AI specialists",
      },
      { icon: FaCheckCircle, text: "Implementation support tailored to SMEs" },
    ],
  },
  {
    audience: "Future-Proof Strategy",
    subtitle: "Stay Ahead of the Curve",
    benefits: [
      {
        icon: FaCheckCircle,
        text: "Continuous recommendations as your business evolves",
      },
      { icon: FaCheckCircle, text: "Keep up with emerging AI technologies" },
    ],
  },
];

const storyList = [
  {
    title: "Regional Manufacturing Company",
    challenge:
      "Needed to improve production efficiency and quality control but lacked technical expertise to evaluate AI solutions.",
    solution:
      "Used our platform to identify and implement a computer vision quality inspection system and predictive maintenance solution tailored to their equipment and budget.",
    results: [
      "35% reduction in quality defects",
      "40% decrease in unplanned downtime",
      "6-month ROI on both solutions",
      "Implementation completed with existing IT staff",
    ],
    linkLabel: "Read Full Story",
    linkHref: "/contact",
  },
  {
    title: "Professional Services Firm",
    challenge:
      "Wanted to automate document processing and client communication but was overwhelmed by the number of AI options available.",
    solution:
      "Our platform recommended a document intelligence solution and client communication assistant that integrated with their existing systems.",
    results: [
      "70% reduction in document processing time",
      "45% improvement in response time to client inquiries",
      "$150,000 annual cost savings",
      "Deployed both solutions in under 30 days",
    ],
    linkLabel: "Read Full Story",
    linkHref: "/contact",
  },
  {
    title: "E-commerce Retailer",
    challenge:
      "Needed to personalize customer experiences and optimize inventory but had limited data science capabilities.",
    solution:
      "Our platform matched them with a customer personalization engine and inventory optimization solution designed for SME e-commerce businesses.",
    results: [
      "28% increase in average order value",
      "35% reduction in stockouts",
      "22% improvement in customer retention",
      "Implementation completed without hiring data scientists",
    ],
    linkLabel: "Read Full Story",
    linkHref: "/contact",
  },
];

const guideList = [
  {
    icon: FaClipboardCheck,
    title: "AI Readiness Assessment",
    description:
      "Evaluate your organization's AI readiness across key dimensions including data maturity, technical infrastructure, team capabilities, and business processes.",
    link: "/contact",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Implementation Roadmaps",
    description:
      "Receive customized implementation plans that break down the process into manageable steps aligned with your resources and capabilities.",
    link: "/contact",
  },
  {
    icon: FaCalculator,
    title: "ROI Calculators",
    description:
      "Use our interactive tools to estimate potential returns, costs, and payback periods for different AI solutions based on your specific business metrics.",
    link: "/contact",
  },
  {
    icon: FaUserTie,
    title: "Expert Consultations",
    description:
      "Schedule one-on-one sessions with our AI specialists to discuss your specific challenges, opportunities, and implementation questions.",
    link: "/contact",
  },
];

const faqSection = {
  title: "Frequently Asked Questions",
  subtitle:
    "Have more questions? Here are the answers to what SMEs like you often ask.",
  faqList: [
    {
      question: "How is this different from going directly to AI vendors?",
      answer:
        "Our platform provides vendor-neutral recommendations based on your specific needs, not sales incentives. We evaluate hundreds of solutions against consistent criteria, saving you countless hours of research. Additionally, we negotiate SME-friendly pricing and terms that may not be available through direct purchasing.",
    },
    {
      question: "Do I need technical expertise to use your platform?",
      answer:
        "No. Our platform is designed specifically for SMEs without extensive technical resources. We provide clear, jargon-free guidance and recommend solutions that match your current technical capabilities. For implementation, we offer step-by-step instructions and support tailored to non-technical teams.",
    },
    {
      question: "How do you ensure the quality of recommended solutions?",
      answer:
        "Every solution in our catalog undergoes a rigorous evaluation process that includes security assessment, performance testing, SME suitability review, and verification of customer references. We continuously monitor solution performance and customer feedback to maintain quality standards.",
    },
    {
      question: "What if I'm not sure what AI solutions my business needs?",
      answer:
        "Our AI readiness assessment and consultation services help you identify the most valuable opportunities for AI in your specific business. We focus on practical applications that deliver measurable ROI rather than implementing technology for its own sake.",
    },
    {
      question: "How long does implementation typically take?",
      answer:
        "Implementation timelines vary by solution complexity and your organization's readiness. Most SME-focused solutions in our catalog can be implemented in 2–8 weeks. Each recommendation includes an estimated implementation timeline based on your specific circumstances.",
    },
  ],
};

const relatedProductList = [
  {
    icon: FaHandshake,
    title: "Partner Program for SMEs",
    description:
      "Join our ecosystem as a solution provider specializing in SME implementations and expand your business reach.",
    link: "/products/partner-program-sme",
  },
  {
    icon: FaStore,
    title: "AI Marketplace",
    description:
      "Explore our full catalog of AI solutions for enterprises and SMEs across all industries and functions.",
    link: "/products/ai-marketplace",
  },
  {
    icon: FaCodeBranch,
    title: "Custom AI Development",
    description:
      "For unique business challenges that require tailored solutions beyond off-the-shelf options.",
    link: "/products/custom",
  },
];

const ctaSection = {
  title: "Begin Your AI Transformation Journey",
  subtitle:
    "Join thousands of SMEs that have successfully implemented AI solutions to improve efficiency, enhance customer experiences, and drive growth with our strategic sourcing platform.",
  primaryCTA: {
    label: "Book a Demo",
    href: "/demo",
  },
  secondaryCTA: {
    label: "Book a Consultation",
    href: "/sales",
  },
};

export {
  heroSection,
  featureList,
  stepList,
  solutionList,
  benefitList,
  storyList,
  guideList,
  faqSection,
  relatedProductList,
  ctaSection,
};
