import {
  FaFileAlt,
  FaExchangeAlt,
  FaShieldAlt,
  FaBrain,
  FaCloud,
  FaPlug,
} from "react-icons/fa";
import {
  FaBuilding,
  FaChartLine,
  FaComments,
  FaGavel,
  FaGlobe,
  FaLock,
  FaMoneyBillWave,
  FaRobot,
  FaStore,
} from "react-icons/fa6";

const heroSection = {
  title: "AI-Powered Invoice Management: Beyond Automation to Intelligence",
  subtitle:
    "Transform your accounts payable operations with our intelligent invoice management solution that captures data, matches invoices, detects fraud, and optimizes payments—all with minimal human intervention.",
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

const featureList = [
  {
    title: "Intelligent Data Capture",
    subtitle: "Beyond Traditional OCR",
    description:
      "Our AI-driven data extraction technology accurately captures information from invoices in any format—including handwritten, scanned, or digital—with 99.5% accuracy, eliminating manual data entry.",
    icon: FaFileAlt,
  },
  {
    title: "Automated Invoice Matching",
    subtitle: "Effortless 2-Way and 3-Way Matching",
    description:
      "Automatically match invoices with purchase orders and receiving documents, handling exceptions intelligently and routing only true discrepancies for human review.",
    icon: FaExchangeAlt,
  },
  {
    title: "Fraud Detection and Prevention",
    subtitle: "Proactive Protection",
    description:
      "Advanced AI algorithms identify suspicious patterns, duplicate invoices, and potential fraud attempts before payments are processed, protecting your organization from financial loss.",
    icon: FaShieldAlt,
  },
  {
    title: "Payment Optimization",
    subtitle: "Strategic Cash Flow Management",
    description:
      "Analyze payment terms, identify early payment discount opportunities, and optimize payment timing to maximize cash flow and capture available discounts.",
    icon: FaMoneyBillWave,
  },
  {
    title: "Compliance Management",
    subtitle: "Stay Compliant Automatically",
    description:
      "Ensure adherence to tax regulations, accounting standards, and internal policies with automated compliance checks and comprehensive audit trails.",
    icon: FaGavel,
  },
];

const useCaseList = [
  {
    icon: FaBuilding,
    title: "Enterprise Accounts Payable",
    subtitle: "Transform High-Volume Invoice Processing",
    description:
      "Streamline operations for organizations processing thousands of monthly invoices across multiple entities, currencies, and tax jurisdictions.",
    results: [
      "90% reduction in manual processing time",
      "80% decrease in processing costs",
      "99.5% data capture accuracy",
      "45% faster approval cycles",
    ],
  },
  {
    icon: FaChartLine,
    title: "Small and Medium Business Efficiency",
    subtitle: "Enterprise-Grade AP for Growing Companies",
    description:
      "Enable smaller finance teams to handle growing invoice volumes without adding headcount, while improving accuracy and control.",
    results: [
      "75% reduction in time spent on invoice processing",
      "65% decrease in late payment penalties",
      "40% improvement in staff productivity",
      "Scalable solution that grows with your business",
    ],
  },
  {
    icon: FaGlobe,
    title: "Global Operations Management",
    subtitle: "Unified Processing Across Borders",
    description:
      "Centralize and standardize invoice processing across international operations, handling multiple languages, currencies, and compliance requirements.",
    results: [
      "Standardized processes across 20+ countries",
      "60% reduction in global processing costs",
      "100% compliance with local tax regulations",
      "Real-time visibility into global AP operations",
    ],
  },
  {
    icon: FaShieldAlt,
    title: "Audit and Compliance",
    subtitle: "Simplify Audit Preparation and Compliance",
    description:
      "Maintain comprehensive audit trails, documentation, and controls that simplify audit preparation and ensure regulatory compliance.",
    results: [
      "85% reduction in audit preparation time",
      "100% documentation completeness",
      "70% fewer audit findings",
      "Continuous compliance monitoring",
    ],
  },
];

const techSpecList = [
  {
    title: "AI Technology",
    icon: FaBrain,
    items: [
      "Advanced OCR and NLP: 99.5% accuracy in data extraction from any invoice format",
      "Machine Learning Models: Continuously improving accuracy through supervised and unsupervised learning",
      "Anomaly Detection: Sophisticated algorithms to identify exceptions and potential fraud",
      "Predictive Analytics: Cash flow forecasting and payment optimization",
    ],
  },
  {
    title: "Integration Capabilities",
    icon: FaPlug,
    items: [
      "ERP Systems: Pre-built connectors for SAP, Oracle, Microsoft Dynamics, NetSuite, and more",
      "Accounting Software: Seamless integration with QuickBooks, Xero, Sage, and other platforms",
      "Payment Systems: Connect with banks, payment processors, and P-card systems",
      "Document Management: Integration with major document management and storage solutions",
    ],
  },
  {
    title: "Deployment Options",
    icon: FaCloud,
    items: [
      "Cloud-Based SaaS: Fully managed solution with 99.9% uptime guarantee",
      "Private Cloud: Dedicated instance in your cloud environment",
      "On-Premises: Available for organizations with specific security requirements",
    ],
  },
  {
    title: "Security and Compliance",
    icon: FaLock,
    items: [
      "Enterprise-Grade Security: SOC 1, SOC 2, ISO 27001 certified",
      "Regulatory Compliance: GDPR, CCPA, and industry-specific regulations",
      "Role-Based Access Control: Granular permissions and approval workflows",
      "Audit Trails: Comprehensive logging of all system activities",
    ],
  },
];

const pricingSection = {
  monthly: [
    {
      name: "Essentials",
      price: "$1,500/month",
      features: [
        "Up to 1,000 invoices per month",
        "Automated data capture and validation",
        "Basic 2-way matching",
        "Standard integrations",
        "Email support",
      ],
      cta: "Get Started",
      link: "/contact",
    },
    {
      name: "Professional",
      price: "$3,500/month",
      features: [
        "Up to 5,000 invoices per month",
        "Advanced data capture with line-item extraction",
        "2-way and 3-way matching",
        "Fraud detection",
        "Payment optimization",
        "Priority support",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited invoice volume",
        "Full feature set",
        "Custom integrations",
        "Dedicated success manager",
        "24/7 premium support",
        "Multi-entity and global capabilities",
      ],
      cta: "Contact Sales",
      link: "/contact",
    },
  ],
  yearly: [
    {
      name: "Essentials",
      price: "$15,000/year",
      features: [
        "Up to 1,000 invoices per month",
        "Automated data capture and validation",
        "Basic 2-way matching",
        "Standard integrations",
        "Email support",
      ],
      cta: "Get Started",
      link: "/contact",
    },
    {
      name: "Professional",
      price: "$35,000/year",
      features: [
        "Up to 5,000 invoices per month",
        "Advanced data capture with line-item extraction",
        "2-way and 3-way matching",
        "Fraud detection",
        "Payment optimization",
        "Priority support",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited invoice volume",
        "Full feature set",
        "Custom integrations",
        "Dedicated success manager",
        "24/7 premium support",
        "Multi-entity and global capabilities",
      ],
      cta: "Contact Sales",
      link: "/contact",
    },
  ],
};

const roiSection = {
  title: "Calculate Your Potential Savings",
  description:
    "Use our interactive calculator to estimate the time and cost savings your organization could achieve by implementing our invoice management solution.",
  solutions: [
    "80% reduction in processing costs",
    "90% decrease in processing time",
    "95% fewer payment errors",
    "100% capture of early payment discounts",
  ],
  linkLabel: "Interactive ROI Calculator",
  linkHref: "/contact",
};

const caseStudyList = [
  {
    title: "Global Manufacturing Company",
    challenge:
      "Processing 50,000+ monthly invoices across 30 countries with inconsistent formats, languages, and compliance requirements.",
    solution:
      "Implemented our AI-powered invoice management solution with custom integrations to their SAP system and localized compliance rules.",
    results: [
      "85% reduction in processing costs",
      "95% straight-through processing rate",
      "$3.2M annual savings in early payment discounts",
      "100% compliance with local tax regulations",
      "Finance team refocused on strategic initiatives",
    ],
    linkLabel: "Read Full Case Study",
    linkHref: "/contact",
  },
  {
    title: "Mid-Size Healthcare Provider",
    challenge:
      "Small AP team struggling with growing invoice volume and complex healthcare compliance requirements.",
    solution:
      "Deployed our cloud-based invoice management solution with healthcare-specific compliance features and integration with their EHR system.",
    results: [
      "70% reduction in processing time",
      "99.8% accuracy in data capture",
      "60% decrease in late payment penalties",
      "Maintained compliance with healthcare regulations",
      "Scaled operations without adding headcount",
    ],
    linkLabel: "Read Full Case Study",
    linkHref: "/contact",
  },
];

const faqSection = {
  title: "Frequently Asked Questions",
  subtitle:
    "Find quick answers to the most common questions about our invoice management solution.",
  faqList: [
    {
      question:
        "How does your solution compare to traditional OCR-based systems?",
      answer:
        "Unlike traditional OCR systems that simply extract text from images, our AI-powered solution understands document context, learns from corrections, and continuously improves its accuracy. It can handle unstructured documents, varying formats, and even handwritten notes with significantly higher accuracy than conventional OCR.",
    },
    {
      question: "What ERP systems do you integrate with?",
      answer:
        "We offer pre-built integrations with major ERP systems including SAP, Oracle, Microsoft Dynamics, NetSuite, and many others. Our flexible API architecture also allows for custom integrations with virtually any ERP or accounting system.",
    },
    {
      question: "How long does implementation typically take?",
      answer:
        "Basic implementation can be completed in 4–6 weeks, with more complex integrations taking 8–12 weeks. Our implementation team works closely with your finance and IT departments to ensure a smooth transition with minimal disruption to your operations.",
    },
    {
      question: "How do you ensure data security and compliance?",
      answer:
        "We maintain the highest security standards with SOC 1, SOC 2, and ISO 27001 certifications. All data is encrypted both in transit and at rest, and we provide comprehensive audit trails for all system activities. Our solution is designed to comply with major regulations including GDPR, CCPA, and industry-specific requirements.",
    },
    {
      question:
        "Can the system handle invoices in multiple languages and currencies?",
      answer:
        "Yes, our solution supports multiple languages and currencies, making it ideal for global organizations. The AI can extract data from invoices in any language and automatically convert currencies using up-to-date exchange rates for consolidated reporting.",
    },
  ],
};

const relatedProductList = [
  {
    icon: FaRobot,
    title: "AI Agents",
    description:
      "Extend your invoice management capabilities with autonomous AI agents that can handle complex financial workflows and decision-making.",
    link: "/products/ai-agents",
  },
  {
    icon: FaComments,
    title: "AI Chatbots",
    description:
      "Provide your vendors and internal teams with instant access to invoice status, payment information, and support through intelligent chatbots.",
    link: "/products/ai-chatbots",
  },
  {
    icon: FaStore,
    title: "AI Marketplace",
    description:
      "Discover complementary financial management solutions in our AI Marketplace to further enhance your finance operations.",
    link: "/products/ai-marketplace",
  },
];

const ctaSection = {
  title: "Ready to Transform Your Invoice Processing?",
  subtitle:
    "Join thousands of organizations that have revolutionized their accounts payable operations, reduced costs, and improved accuracy with our AI-powered invoice management solution.",
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
  useCaseList,
  techSpecList,
  pricingSection,
  roiSection,
  caseStudyList,
  faqSection,
  relatedProductList,
  ctaSection,
};
