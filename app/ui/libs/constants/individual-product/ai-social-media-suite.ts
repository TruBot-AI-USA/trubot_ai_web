import {
  BarChart3,
  Brain,
  Clock3,
  Grid,
  Headset,
  LineChart,
  Megaphone,
  MessageCircle,
  Mic,
  Pencil,
  PlugZap,
  Settings2,
  Share2,
  ShoppingCart,
  Sparkles,
  Users,
} from "lucide-react";

const heroSection = {
  title: "AI-Powered Social Media Tools: Transform Your Digital Presence",
  subtitle:
    "Leverage the power of artificial intelligence to create engaging content, analyze trends, optimize engagement, and drive measurable results across all your social media channels.",
  primaryCTA: {
    label: "Join Waitlist",
    href: "/trusocial-waitlist",
  },
  secondaryCTA: {
    label: "Demo",
    href: "/demo",
  },
  icon: Sparkles,
};

const featureList = [
  {
    title: "AI Content Generation",
    subtitle: "From Ideas to Engaging Posts in Seconds",
    description:
      "Our AI content generator creates platform-optimized posts, captions, hashtags, and even images tailored to your brand voice and audience preferences—saving hours of creative work while improving engagement.",
    icon: Pencil,
  },
  {
    title: "Trend Analysis and Prediction",
    subtitle: "Stay Ahead of the Conversation",
    description:
      "Advanced AI algorithms analyze millions of social conversations in real-time to identify emerging trends relevant to your industry, allowing you to join conversations early and establish thought leadership.",
    icon: LineChart,
  },
  {
    title: "Engagement Optimization",
    subtitle: "Post at the Perfect Moment",
    description:
      "Our AI determines the optimal timing, content format, and messaging approach for each platform and audience segment, maximizing reach, engagement, and conversion rates.",
    icon: Clock3,
  },
  {
    title: "Comprehensive Analytics",
    subtitle: "Beyond Vanity Metrics to Business Impact",
    description:
      "Connect social media performance directly to business outcomes with AI-powered attribution models that track the customer journey from social engagement to conversion.",
    icon: BarChart3,
  },
  {
    title: "Automated Community Management",
    subtitle: "Responsive Engagement at Scale",
    description:
      "AI-powered response systems handle routine comments, questions, and messages across all platforms, ensuring timely engagement while escalating complex interactions to your team.",
    icon: MessageCircle,
  },
];

const useCaseList = [
  {
    icon: Users,
    title: "Content Marketing Teams",
    subtitle: "Amplify Your Creative Output",
    description:
      "Enable small marketing teams to produce consistent, high-quality content across multiple platforms without sacrificing creativity or brand voice.",
    results: [
      "75% reduction in content creation time",
      "40% increase in engagement rates",
      "60% more consistent posting schedule",
      "35% improvement in campaign performance",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce and Retail",
    subtitle: "Drive Sales Through Social Channels",
    description:
      "Convert social followers into customers with AI-optimized product showcases, targeted promotions, and seamless shopping experiences.",
    results: [
      "45% increase in click-through to product pages",
      "30% higher conversion rates from social traffic",
      "50% growth in social-attributed revenue",
      "25% increase in average order value",
    ],
  },
  {
    icon: Headset,
    title: "Customer Service Enhancement",
    subtitle: "Responsive Support Across All Channels",
    description:
      "Provide timely, helpful responses to customer inquiries on social platforms, improving satisfaction while reducing support costs.",
    results: [
      "90% of routine inquiries handled automatically",
      "Average response time reduced from hours to minutes",
      "40% increase in customer satisfaction scores",
      "55% reduction in social support costs",
    ],
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing Optimization",
    subtitle: "Maximize ROI on Influencer Partnerships",
    description:
      "Identify the right influencers, optimize campaign messaging, and accurately measure performance to improve influencer marketing effectiveness.",
    results: [
      "60% more accurate influencer selection",
      "35% higher engagement on influencer content",
      "50% improvement in campaign ROI measurement",
      "40% increase in conversion rates from influencer traffic",
    ],
  },
];

const techSpecList = [
  {
    title: "AI Technology",
    icon: Brain,
    items: [
      "Natural Language Generation: Creates human-like, brand-aligned content",
      "Computer Vision: Analyzes and generates visual content",
      "Predictive Analytics: Forecasts performance and identifies optimization opportunities",
      "Sentiment Analysis: Understands audience reactions and emotional responses",
    ],
  },
  {
    title: "Platform Support",
    icon: Share2,
    items: [
      "Major Networks: Facebook, Instagram, Twitter, LinkedIn, TikTok, Pinterest, YouTube",
      "Messaging Platforms: WhatsApp, Messenger, Telegram",
      "Emerging Channels: Automatic support for new platforms as they gain traction",
    ],
  },
  {
    title: "Integration Capabilities",
    icon: PlugZap,
    items: [
      "Marketing Tools: CRM, email, and automation platform support",
      "E-commerce Systems: Shopify, WooCommerce, Magento, etc.",
      "Analytics Solutions: Google Analytics, Adobe Analytics, and custom dashboards",
      "Content Management: Integration with CMS and DAM systems",
    ],
  },
  {
    title: "Customization and Control",
    icon: Settings2,
    items: [
      "Brand Voice Settings: Tune AI to match brand personality",
      "Approval Workflows: Custom review flows for generated content",
      "Compliance Tools: Checks for industry regulations",
      "Permission Levels: Granular access controls for teams",
    ],
  },
];

const pricingSection = {
  monthly: [
    {
      name: "Starter",
      price: "$29/month",
      features: [
        "Up to 100 invoices/month",
        "Basic automation",
        "Email support",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: false,
    },
    {
      name: "Growth",
      price: "$79/month",
      features: [
        "Up to 1,000 invoices/month",
        "Smart automation workflows",
        "Priority support",
        "Integration with QuickBooks",
      ],
      cta: "Start Free Trial",
      link: "/contact",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited invoices",
        "Advanced analytics",
        "Dedicated success manager",
        "API access and SLAs",
      ],
      cta: "Contact Sales",
      link: "/contact",
      popular: false,
    },
  ],
  yearly: [
    {
      name: "Starter",
      price: "$290/year",
      features: [
        "Up to 100 invoices/month",
        "Basic automation",
        "Email support",
      ],
      cta: "Get Started",
      link: "/contact",
      popular: false,
    },
    {
      name: "Growth",
      price: "$790/year",
      features: [
        "Up to 1,000 invoices/month",
        "Smart automation workflows",
        "Priority support",
        "Integration with QuickBooks",
      ],
      cta: "Start Free Trial",
      link: "/contact",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited invoices",
        "Advanced analytics",
        "Dedicated success manager",
        "API access and SLAs",
      ],
      cta: "Contact Sales",
      link: "/contact",
      popular: false,
    },
  ],
};

const caseStudyList = [
  {
    title: "Global Fashion Retailer",
    challenge:
      "Managing consistent content across 12 markets and 30+ social accounts while maintaining brand voice and driving e-commerce conversions.",
    solution:
      "Implemented our AI social media platform to centralize content creation, optimize posting schedules, and connect social engagement directly to purchase behavior.",
    results: [
      "65% reduction in content production time",
      "40% increase in engagement across all markets",
      "55% growth in social media-attributed revenue",
      "30% improvement in team efficiency",
    ],
    linkLabel: "Read Full Case Study",
    linkHref: "/contact",
  },
  {
    title: "828 Technology Company",
    challenge:
      "Generating technical yet engaging content consistently while demonstrating thought leadership in a competitive industry.",
    solution:
      "Utilized our AI content generation and trend analysis tools to create industry-specific content and join relevant conversations early.",
    results: [
      "80% increase in content output without adding staff",
      "45% higher engagement on technical topics",
      "60% growth in qualified leads from social channels",
      "Established as an industry thought leader based on social listening metrics",
    ],
    linkLabel: "Read Full Case Study",
    linkHref: "/contact",
  },
];

const faqSection = {
  title: "Frequently Asked Questions",
  subtitle:
    "Have questions about our AI-powered social media tools? We’ve got answers.",
  faqList: [
    {
      question: "How does the AI content generator maintain our brand voice?",
      answer:
        "Our AI is initially trained on your existing content, brand guidelines, and examples you provide during onboarding. It learns your unique tone, terminology, and style preferences. You can further refine the output through feedback, and the AI continuously improves based on which generated content you approve or modify.",
    },
    {
      question: "Can we schedule content approval workflows?",
      answer:
        "Yes, our platform offers customizable approval workflows that can include multiple team members and approval stages. You can set up different workflows based on content type, campaign, or platform to ensure the right stakeholders review content before it goes live.",
    },
    {
      question: "How accurate is the trend prediction feature?",
      answer:
        "Our trend prediction algorithms analyze millions of social media posts, engagement patterns, and topic velocity to identify emerging trends with approximately 85% accuracy. The system focuses on trends relevant to your industry and audience, filtering out noise to highlight real opportunities.",
    },
    {
      question: "What kind of analytics and reporting are available?",
      answer:
        "Beyond standard metrics like reach, engagement, and follower growth, our platform provides advanced analytics including sentiment analysis, audience psychographics, conversion attribution, and competitive benchmarking. Custom dashboards can be created to track your most important KPIs.",
    },
    {
      question:
        "How does the platform handle compliance for regulated industries?",
      answer:
        "For regulated industries like finance, healthcare, and alcohol, our platform includes customizable compliance checks that flag potential regulatory issues before content is published. You can set up industry-specific rules, restricted terms, and required disclosures to ensure all content meets compliance requirements.",
    },
  ],
};

const relatedProductList = [
  {
    icon: MessageCircle,
    title: "AI Chatbots",
    description:
      "Extend your social media strategy with intelligent chatbots that provide instant customer service across your digital channels.",
    link: "/products/ai-chatbots",
  },
  {
    icon: Mic,
    title: "AI Voice Bots",
    description:
      "Complement your social media presence with voice assistants that maintain your brand voice across audio touchpoints.",
    link: "/products/ai-voicebots",
  },
  {
    icon: Grid,
    title: "AI Marketplace",
    description:
      "Discover specialized social media enhancement tools from our partner ecosystem to further optimize your digital strategy.",
    link: "/products/ai-marketplace",
  },
];

const ctaSection = {
  title: "Ready to Revolutionize Your Social Media Strategy?",
  subtitle:
    "Join forward-thinking brands that are using AI to create more engaging content, identify emerging trends, and drive measurable business results from their social media efforts.",
  primaryCTA: {
    label: "Join Waitlist",
    href: "/trusocial-waitlist",
  },
  secondaryCTA: {
    label: "Demo",
    href: "/demo",
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
