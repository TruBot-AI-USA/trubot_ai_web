import {
  Accessibility,
  Bot,
  Globe,
  Headphones,
  MessageCircle,
  Mic,
  Plug,
  Settings,
  Share2,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Smile,
} from "lucide-react";

const heroSection = {
  title:
    "AI Voice Bots: Natural Conversations for Exceptional Customer Experiences",
  subtitle:
    "Engage your customers with intelligent voice assistants that understand context, recognize emotions, and provide hands-free convenience across all touchpoints.",
  primaryCTA: {
    label: "Book a Demo",
    href: "/demo",
  },
  secondaryCTA: {
    label: "Book a Consultation",
    href: "/sales",
  },
  icon: Mic,
};

const featureList = [
  {
    icon: Mic,
    title: "Natural Language Understanding",
    description:
      "Our AI voice bots understand natural speech patterns, dialects, and even industry-specific terminology, allowing for fluid, human-like interactions.",
  },
  {
    icon: Smile,
    title: "Emotional Intelligence",
    description:
      "Advanced sentiment analysis enables our voice bots to detect emotions, adjust tone accordingly, and respond with appropriate empathy.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description:
      "Support customers worldwide with voice bots that speak over 40 languages and understand regional accents and expressions.",
  },
  {
    icon: Share2,
    title: "Omnichannel Deployment",
    description:
      "Deploy the same voice assistant across phone systems, mobile apps, smart speakers, and IoT devices for a consistent brand experience.",
  },
  {
    icon: Shield,
    title: "Voice Authentication",
    description:
      "Implement biometric voice authentication to verify customer identities securely and effortlessly, eliminating the need for passwords.",
  },
];

const useCaseList = [
  {
    icon: Headphones,
    title: "Customer Service",
    subtitle: "24/7 Voice Support Without the Wait",
    description:
      "Voice bots handle common inquiries, troubleshoot issues, and process requests around the clock, reducing wait times and freeing human agents to focus on complex cases.",
    results: [
      "85% of routine inquiries resolved without human intervention",
      "Average wait time reduced from 8 minutes to under 10 seconds",
      "40% reduction in support costs while improving satisfaction scores",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Sales and Conversions",
    subtitle: "Guide Customers Through the Buying Journey",
    description:
      "From product discovery to checkout, voice bots help customers find what they need, answer questions, and complete purchases using only their voice.",
    results: [
      "30% increase in conversion rates for voice-assisted shopping",
      "25% higher average order value through personalized recommendations",
      "45% reduction in cart abandonment",
    ],
  },
  {
    icon: Accessibility,
    title: "Accessibility and Inclusion",
    subtitle: "Make Your Services Available to Everyone",
    description:
      "Voice interfaces remove barriers for customers with visual impairments, limited mobility, or literacy challenges, expanding your market reach and demonstrating commitment to inclusion.",
    results: [
      "40% increase in engagement from previously underserved customer segments",
      "Compliance with accessibility regulations",
      "Enhanced brand reputation for inclusive design",
    ],
  },
  {
    icon: Settings,
    title: "Operational Efficiency",
    subtitle: "Hands-Free Productivity for Your Team",
    description:
      "Enable employees to access information, update records, and complete tasks using voice commands while working, driving, or handling equipment.",
    results: [
      "35% productivity improvement in warehouse operations",
      "50% reduction in data entry errors",
      "25% time savings for field service technicians",
    ],
  },
];

const techSpecList = [
  {
    icon: Mic,
    title: "Voice Technology",
    description:
      "Advanced capabilities ensuring natural and responsive voice interactions.",
    points: [
      "Advanced Speech Recognition: 98.5% accuracy even in noisy environments",
      "Natural Text-to-Speech: Lifelike voices with customizable characteristics",
      "Real-time Processing: <100ms response time for natural conversation flow",
    ],
  },
  {
    icon: Plug,
    title: "Integration Capabilities",
    description: "Seamless integration across various platforms and devices.",
    points: [
      "Telephony Systems: Seamless integration with existing IVR and call center platforms",
      "Digital Channels: Deploy across websites, mobile apps, and messaging platforms",
      "Smart Devices: Compatible with Amazon Alexa, Google Assistant, and custom IoT devices",
      "Business Systems: Connect to CRM, ERP, and other enterprise applications",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Robust security measures ensuring data protection and compliance.",
    points: [
      "Data Protection: End-to-end encryption for all voice interactions",
      "Compliance Ready: GDPR, HIPAA, PCI-DSS, and other regulatory frameworks",
      "Privacy Controls: Granular settings for data retention and usage",
    ],
  },
];

const pricingSection = {
  monthly: [
    {
      name: "Starter",
      price: "$1,200/month",
      features: [
        "Up to 5,000 voice interactions",
        "5 standard conversation flows",
        "Business hours support",
        "Basic analytics",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: false,
    },
    {
      name: "Business",
      price: "$3,500/month",
      features: [
        "Up to 25,000 voice interactions",
        "Unlimited conversation flows",
        "24/7 priority support",
        "Advanced analytics",
        "Custom voice personality",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited voice interactions",
        "Custom integration development",
        "Dedicated success manager",
        "Full analytics suite",
        "Multiple voice personalities",
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
      price: "$12,000/year",
      features: [
        "Up to 60,000 voice interactions/year",
        "5 standard conversation flows",
        "Business hours support",
        "Basic analytics",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: false,
    },
    {
      name: "Business",
      price: "$35,000/year",
      features: [
        "Up to 300,000 voice interactions/year",
        "Unlimited conversation flows",
        "24/7 priority support",
        "Advanced analytics",
        "Custom voice personality",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited voice interactions",
        "Custom integration development",
        "Dedicated success manager",
        "Full analytics suite",
        "Multiple voice personalities",
        "On-premises deployment option",
      ],
      cta: "Contact Sales",
      link: "/contact",
      popular: false,
    },
  ],
};

const caseStudyList = [
  {
    client: "National Insurance Provider",
    challenge:
      "High call volumes leading to long wait times and customer frustration, particularly during peak periods.",
    solution:
      "Implemented AI voice bots to handle policy inquiries, claims status updates, and basic policy changes, with seamless escalation to human agents when needed.",
    results: [
      "70% of routine inquiries handled by voice bots",
      "Average call wait time reduced from 12 minutes to under 30 seconds",
      "Customer satisfaction increased by 45%",
      "$3.2M annual cost savings",
    ],
    linkLabel: "Read Full Story",
    linkHref: "/contact",
  },
  {
    client: "E-commerce Retailer",
    challenge:
      "Limited customer service hours and high volume of order status and return inquiries.",
    solution:
      "Deployed voice bots across phone systems and mobile app to provide 24/7 order tracking, return processing, and product information.",
    results: [
      "24/7 customer service coverage without additional staffing",
      "60% of customer inquiries resolved through voice channel",
      "35% increase in mobile app engagement",
      "28% reduction in return processing costs",
    ],
    linkLabel: "Read Full Story",
    linkHref: "/contact",
  },
];

const faqSection = {
  title: "Frequently Asked Questions",
  subtitle:
    "Find answers to the most common questions about our AI Voice Bots.",
  faqList: [
    {
      question: "How accurate is the voice recognition technology?",
      answer:
        "Our voice recognition technology achieves 98.5% accuracy even in challenging environments with background noise. The system continuously learns from interactions to improve recognition of different accents, dialects, and industry-specific terminology.",
    },
    {
      question: "Can the voice bot be customized to match our brand voice?",
      answer:
        "Absolutely. We offer extensive customization options for voice personality, including tone, pace, accent, and speaking style. Our voice design team works with you to create a voice that authentically represents your brand identity.",
    },
    {
      question:
        "How does the voice bot handle complex or unexpected questions?",
      answer:
        "Our voice bots use advanced contextual understanding to handle a wide range of inquiries. For situations beyond their capabilities, we implement seamless escalation protocols to transfer customers to human agents, along with the full conversation context for continuity.",
    },
    {
      question: "What languages are supported?",
      answer:
        "Our platform currently supports over 40 languages and regional dialects, with new languages added regularly. Each language includes natural text-to-speech voices and comprehensive language understanding capabilities.",
    },
    {
      question: "How do you ensure customer privacy and data security?",
      answer:
        "We implement end-to-end encryption for all voice interactions, strict access controls, and configurable data retention policies. Our platform is compliant with major regulations including GDPR, HIPAA, and PCI-DSS, and undergoes regular security audits.",
    },
  ],
};

const relatedProductList = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Extend your voice bot capabilities with autonomous AI agents that can perform complex tasks and make decisions across your business systems.",
    link: "/products/ai-agents",
  },
  {
    icon: MessageCircle,
    title: "AI Chatbots",
    description:
      "Complement your voice strategy with intelligent chatbots for a consistent experience across text-based channels.",
    link: "/products/ai-chatbots",
  },
  {
    icon: Share2,
    title: "Social Media Tools",
    description:
      "Integrate voice capabilities into your social media strategy for a unified customer experience across all touchpoints.",
    link: "/products/social-media-tools",
  },
];

const ctaSection = {
  title: "Ready to Transform Customer Experiences with Voice AI?",
  subtitle:
    "Join forward-thinking companies already using our voice technology to create exceptional customer experiences, reduce costs, and drive business growth.",
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
  caseStudyList,
  faqSection,
  relatedProductList,
  ctaSection,
};
