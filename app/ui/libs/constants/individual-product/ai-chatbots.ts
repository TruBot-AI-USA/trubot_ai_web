import {
  Brain,
  MessageSquare,
  PlugZap,
  ShieldCheck,
  Sliders,
  Bot,
  BarChart2,
  Settings2,
} from "lucide-react";
import {
  FaShoppingBag,
  FaBalanceScale,
  FaTools,
  FaFacebookMessenger,
  FaGoogle,
  FaHubspot,
  FaSalesforce,
  FaSlack,
  FaWhatsapp,
  FaPhoneAlt,
  FaRobot,
} from "react-icons/fa";
import {
  FaBriefcase,
  FaChartBar,
  FaChartLine,
  FaClock,
  FaCode,
  FaComments,
  FaFilter,
  FaGlobe,
  FaStethoscope,
} from "react-icons/fa6";
import { MdSchedule } from "react-icons/md";
import { SiZoho, SiCalendly } from "react-icons/si";

const heroSection = {
  title: "Engage Customers Instantly with AI Chatbots Tailored for SMEs",
  subtitle:
    "Automate responses, qualify leads, and provide support around the clock—without writing a single line of code.",
  primaryCTA: {
    label: "Book a Demo",
    href: "/demo",
  },
  secondaryCTA: {
    label: "Book a Consultation",
    href: "/sales",
  },
  icon: Bot,
};

const stepList = [
  {
    icon: MessageSquare,
    title: "Customer Message Received",
    description:
      "A visitor asks a question on your website, WhatsApp, or social media platform.",
  },
  {
    icon: Brain,
    title: "TruBot Understands Intent",
    description:
      "Our AI chatbot interprets the query using smart logic, not fixed rules or keywords.",
  },
  {
    icon: Settings2,
    title: "Executes the Right Flow",
    description:
      "Whether it's answering a question, booking an appointment, or capturing a lead — TruBot takes action instantly.",
  },
  {
    icon: BarChart2,
    title: "Response Logged & Tracked",
    description:
      "All interactions are recorded with timestamps and insights available in your dashboard.",
  },
];

const featureList = [
  {
    icon: FaCode,
    title: "No-Code Bot Builder",
    subtitle: "Launch instantly without developers",
    description:
      "Launch a chatbot without writing a single line of code — perfect for fast-moving teams that need rapid deployment.",
  },
  {
    icon: FaGlobe,
    title: "Multilingual Support",
    subtitle: "Speak your customer’s language",
    description:
      "Engage customers in English, Hindi, or any preferred language with built-in translation support for broader reach.",
  },
  {
    icon: FaClock,
    title: "Instant Responses, 24/7",
    subtitle: "Always-on support, no breaks",
    description:
      "Reduces wait times and never misses a message — even after office hours or on weekends.",
  },
  {
    icon: FaComments,
    title: "Omnichannel Ready",
    subtitle: "WhatsApp, Instagram, Web & more",
    description:
      "Deploy chatbots across your website, WhatsApp, Instagram, and Facebook — all from one dashboard.",
  },
  {
    icon: FaFilter,
    title: "Lead Qualification Flows",
    subtitle: "Prioritize hot leads instantly",
    description:
      "Automatically qualify prospects based on responses and route high-intent leads directly to your sales team.",
  },
  {
    icon: FaChartBar,
    title: "Conversation Analytics",
    subtitle: "Improve with real insights",
    description:
      "Track engagement, spot drop-off points, and optimize flows using built-in analytics.",
  },
];

const smeUseCaseList = [
  {
    icon: FaShoppingBag,
    title: "E-commerce",
    subtitle: "Streamlining online retail operations.",
    description:
      "TruBot AI Chatbots assist e-commerce businesses by handling customer inquiries, processing orders, and providing product recommendations.",
    results: [
      "30% increase in customer engagement",
      "25% reduction in cart abandonment",
      "20% boost in sales conversions",
    ],
  },
  {
    icon: FaStethoscope,
    title: "Healthcare",
    subtitle: "Enhancing patient communication and appointment scheduling.",
    description:
      "Healthcare providers utilize TruBot AI Chatbots to schedule appointments, send reminders, and answer common patient queries.",
    results: [
      "40% decrease in no-show appointments",
      "50% improvement in patient satisfaction",
      "35% reduction in administrative workload",
    ],
  },
  {
    icon: FaBalanceScale,
    title: "Legal Services",
    subtitle: "Automating client intake and case updates.",
    description:
      "Law firms employ TruBot AI Chatbots to collect client information, schedule consultations, and provide case status updates.",
    results: [
      "60% faster client onboarding",
      "45% increase in lead conversion",
      "30% reduction in administrative tasks",
    ],
  },
  {
    icon: FaTools,
    title: "Home Services",
    subtitle: "Managing service requests and customer support.",
    description:
      "Home service providers use TruBot AI Chatbots to handle booking requests, provide service information, and gather customer feedback.",
    results: [
      "50% increase in booking efficiency",
      "40% improvement in customer satisfaction",
      "35% reduction in response time",
    ],
  },
  {
    icon: FaBriefcase,
    title: "Professional Services",
    subtitle: "Streamlining client communication and support.",
    description:
      "Consultants and agencies leverage TruBot AI Chatbots to manage client inquiries, schedule meetings, and deliver timely updates.",
    results: [
      "45% increase in client engagement",
      "30% reduction in response time",
      "25% improvement in client retention",
    ],
  },
  {
    icon: FaChartLine,
    title: "Financial Services",
    subtitle: "Automating client onboarding and transaction alerts.",
    description:
      "Banks, insurers, and finance firms use AI chatbots to streamline KYC, deliver policy reminders, and provide account updates in real time.",
    results: [
      "35% faster customer onboarding",
      "50% drop in support workload",
      "Improved SLA compliance with instant updates",
    ],
  },
];

const reflectionList = [
  {
    quote:
      "TruBot AI Chatbots have revolutionized our customer service. We've seen a significant drop in response times and an increase in customer satisfaction.",
    name: "Priya Sharma",
    title: "Customer Service Manager",
    company: "ShopEase",
  },
  {
    quote:
      "Implementing TruBot AI Chatbots was a game-changer for our appointment scheduling. Our no-show rates have decreased dramatically.",
    name: "Dr. Arjun Mehta",
    title: "Clinic Director",
    company: "HealthFirst Clinic",
  },
  {
    quote:
      "The efficiency and accuracy of TruBot AI Chatbots in handling client inquiries have allowed our team to focus on more complex tasks.",
    name: "Anjali Desai",
    title: "Operations Head",
    company: "LegalEdge",
  },
];

const integrationList = [
  {
    title: "CRM Systems",
    description:
      "Manage customer relationships effectively by integrating with leading CRM platforms.",
    tools: [
      { name: "Salesforce", icon: FaSalesforce, tooltip: "Connect in 1 click" },
      { name: "HubSpot", icon: FaHubspot },
      { name: "Zoho CRM", icon: SiZoho },
    ],
  },
  {
    title: "Communication Platforms",
    description:
      "Engage with customers across various channels through seamless integrations.",
    tools: [
      { name: "WhatsApp", icon: FaWhatsapp },
      { name: "Facebook Messenger", icon: FaFacebookMessenger },
      { name: "Slack", icon: FaSlack },
    ],
  },
  {
    title: "Scheduling Tools",
    description: "Simplify appointment booking and calendar management.",
    tools: [
      { name: "Google Calendar", icon: FaGoogle },
      { name: "Calendly", icon: SiCalendly },
      { name: "Acuity Scheduling", icon: MdSchedule },
    ],
  },
];

const relatedProductList = [
  {
    icon: FaRobot,
    title: "TruBot AI Agents",
    description:
      "Automate complex tasks and workflows with intelligent AI agents.",
    link: "/products/ai-agents",
  },
  {
    icon: FaPhoneAlt,
    title: "TruBot Voice Assistants",
    description:
      "Engage customers through natural voice interactions across various platforms.",
    link: "/products/ai-voicebots",
  },
];

const faqSection = {
  title: "Frequently Asked Questions",
  subtitle: "Answers to common queries about TruBot AI Chatbots.",
  faqList: [
    {
      question: "How easy is it to set up TruBot AI Chatbots?",
      answer:
        "Setting up TruBot AI Chatbots is straightforward with our no-code platform. You can have your chatbot up and running in minutes.",
    },
    {
      question: "Can TruBot AI Chatbots handle multiple languages?",
      answer:
        "Yes, our chatbots support multiple languages, allowing you to engage with a diverse customer base.",
    },
    {
      question: "Do I need technical expertise to use TruBot AI Chatbots?",
      answer:
        "No technical expertise is required. Our intuitive interface makes it easy for anyone to create and manage chatbots.",
    },
    {
      question: "Can I integrate TruBot AI Chatbots with my existing tools?",
      answer:
        "Absolutely. TruBot AI Chatbots offer seamless integrations with various CRM systems, communication platforms, and scheduling tools.",
    },
    {
      question: "Is there customer support available?",
      answer:
        "Yes, our support team is available 24/7 to assist you with any questions or issues.",
    },
  ],
};

const techSpecList = [
  {
    icon: MessageSquare,
    title: "Conversational AI Technology",
    items: [
      "Natural Language Processing: State-of-the-art NLP with 95%+ intent recognition accuracy",
      "Context Management: Maintains conversation context across multiple turns and sessions",
      "Sentiment Analysis: Real-time emotion detection to adapt tone and responses",
      "Multi-language Support: 30+ languages with native-level understanding",
    ],
  },
  {
    icon: PlugZap,
    title: "Integration Capabilities",
    items: [
      "Website Integration: Simple JavaScript snippet or WordPress plugin",
      "Mobile SDK: Native SDKs for iOS and Android applications",
      "Messaging Platforms: Facebook Messenger, WhatsApp, Telegram, and more",
      "Business Systems: Connect to CRM, e-commerce, ticketing, and knowledge base systems",
    ],
  },
  {
    icon: Sliders,
    title: "Customization Options",
    items: [
      "Visual Builder: No-code conversation designer for business users",
      "Advanced Customization: Developer tools for complex use cases",
      "Appearance Editor: Brand-aligned visual customization",
      "Analytics Dashboard: Comprehensive insights and performance metrics",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security and Compliance",
    items: [
      "Enterprise-grade Security: SOC 2 Type II certified",
      "Data Protection: GDPR and CCPA compliant",
      "Encryption: End-to-end encryption for all conversations",
      "Data Residency: Regional hosting options for regulatory compliance",
    ],
  },
];

const pricingSection = {
  monthly: [
    {
      name: "Starter",
      price: "$800/month",
      features: [
        "Up to 5,000 conversations",
        "5 standard chatbot templates",
        "Basic customization",
        "Business hours support",
        "Standard analytics",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: false,
    },
    {
      name: "Professional",
      price: "$2,500/month",
      features: [
        "Up to 25,000 conversations",
        "Unlimited custom chatbots",
        "Advanced customization",
        "24/7 priority support",
        "Advanced analytics",
        "A/B testing capabilities",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited conversations",
        "Custom development",
        "Dedicated success manager",
        "Premium support SLA",
        "Full analytics suite",
        "On-premises deployment option",
      ],
      cta: "Contact Sales",
      link: "/contact",
      popular: false,
    },
  ],
  yearly: [
    {
      name: "Starter",
      price: "$720/month (billed annually)",
      features: [
        "Up to 5,000 conversations",
        "5 standard chatbot templates",
        "Basic customization",
        "Business hours support",
        "Standard analytics",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: false,
    },
    {
      name: "Professional",
      price: "$2,250/month (billed annually)",
      features: [
        "Up to 25,000 conversations",
        "Unlimited custom chatbots",
        "Advanced customization",
        "24/7 priority support",
        "Advanced analytics",
        "A/B testing capabilities",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited conversations",
        "Custom development",
        "Dedicated success manager",
        "Premium support SLA",
        "Full analytics suite",
        "On-premises deployment option",
      ],
      cta: "Contact Sales",
      link: "/contact",
      popular: false,
    },
  ],
};

const ctaSection = {
  title: "Ready to Transform Customer Engagement with Intelligent Chatbots?",
  subtitle:
    "Join thousands of forward-thinking companies using our AI chatbots to deliver exceptional customer experiences, generate qualified leads, and drive business growth.",
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
  stepList,
  featureList,
  smeUseCaseList,
  reflectionList,
  integrationList,
  techSpecList,
  pricingSection,
  faqSection,
  relatedProductList,
  ctaSection,
};
