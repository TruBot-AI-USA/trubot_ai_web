import {
  Globe,
  Mic,
  UserCog,
  Video,
  Mail,
  Search,
  UsersRound,
  MessageCircle,
  Monitor,
  Smartphone,
  Code2,
  Wand2,
  FileCheck2,
  Store,
  Layers3,
  Zap,
  BarChart3,
  Target
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaMicrosoft,
  FaRobot,
  FaTelegram,
  FaWhatsapp,
  FaWordpress,
} from "react-icons/fa6";
import { SiShopify, SiWoocommerce, SiSquarespace } from "react-icons/si";

const heroSection = {
  title: "All-in-One AI Solutions for Modern Businesses",
  subtitle:
    "Discover chatbots, voice bots, smart agents, and automation tools — built to accelerate growth across every industry. No complexity, just results.",
  primaryCTA: { label: "Explore Use Cases", href: "/solutions" },
  secondaryCTA: { label: "Contact Sales", href: "/contact" },
  icon: FaRobot,
};

const productList = [
  {
    id: "business-apps",
    title: "Business Applications",
    items: [
      {
        name: "TruCRM",
        description:
          "The complete CRM solution. Streamline sales, manage customers, and close more deals with AI-driven insights.",
        href: "/products/trucrm",
        icon: BarChart3,
      },
      {
        name: "TruLead",
        description:
          "AI-powered lead generation. Find, qualify, and enrich high-quality leads automatically.",
        href: "/products/trulead",
        icon: Target,
      },
      {
        name: "TrueRP",
        description:
          "Enterprise resource planning solution powered by AI for seamless business operations and automation.",
        href: "/products/truerp",
        icon: Layers3,
      },
    ],
  },
  {
    id: "chatbots",
    title: "AI Chatbots",
    items: [
      {
        name: "Instagram Chatbot",
        description:
          "Automate DMs, comment replies, lead capture, and 24/7 support to maximize Instagram engagement.",
        href: "/products/ai-chatbots",
        icon: FaInstagram,
      },
      {
        name: "WhatsApp Chatbot",
        description:
          "Reply automation, bookings, FAQs, and bulk messaging for seamless communication.",
        href: "/products/ai-chatbots",
        icon: FaWhatsapp,
      },
      {
        name: "Facebook Chatbot",
        description:
          "Automate replies, promotions, and lead generation to grow your Facebook presence.",
        href: "/products/ai-chatbots",
        icon: FaFacebook,
      },
      {
        name: "Telegram Chatbot",
        description:
          "Handle bookings, file sharing, lead capture, and real-time notifications.",
        href: "/products/ai-chatbots",
        icon: FaTelegram,
      },
      {
        name: "Website Chatbot",
        description:
          "Capture leads, drive sales, and provide 24/7 customer support through your website.",
        href: "/products/ai-chatbots",
        icon: Globe,
      },
      {
        name: "WordPress Chatbot",
        description:
          "Live chat, surveys, appointment scheduling, and lead capture for WordPress sites.",
        href: "/products/ai-chatbots",
        icon: FaWordpress,
      },
      {
        name: "Microsoft Teams Chatbot",
        description:
          "Boost internal collaboration and automate meeting workflows in Teams.",
        href: "/products/ai-chatbots",
        icon: FaMicrosoft,
      },
      {
        name: "Shopify Chatbot",
        description:
          "Automate order updates, cart recovery, and customer support for Shopify stores.",
        href: "/products/ai-chatbots",
        icon: SiShopify,
      },
      {
        name: "WooCommerce Chatbot",
        description:
          "Deliver personalized shopping experiences and 24/7 support on WooCommerce.",
        href: "/products/ai-chatbots",
        icon: SiWoocommerce,
      },
      {
        name: "Squarespace Chatbot",
        description:
          "Streamline lead generation, appointment booking, and service inquiries.",
        href: "/products/ai-chatbots",
        icon: SiSquarespace,
      },
    ],
  },
  {
    id: "voice",
    title: "Voice AI",
    items: [
      {
        name: "Voice Bots",
        description:
          "Voice-enable customer support and lead workflows for hands-free engagement.",
        href: "/products/ai-voicebots",
        icon: Mic,
      },
      {
        name: "Voice Agents",
        description:
          "Coming Soon – AI-powered voice interactions that streamline operations.",
        href: "/products/ai-voicebots",
        icon: Mic,
      },
      {
        name: "Voice-enabled Chatbots",
        description:
          "Coming Soon – Merge chat and voice for a seamless user experience.",
        href: "/products/ai-voicebots",
        icon: Mic,
      },
      {
        name: "Voice Assistant Apps",
        description:
          "Coming Soon – Build custom AI voice apps tailored to your brand.",
        href: "/products/ai-voicebots",
        icon: Mic,
      },
    ],
  },
  {
    id: "agents",
    title: "AI Agents (In Progress)",
    items: [
      {
        name: "Sales Agent",
        description:
          "Automate customer engagement, follow-ups, and drive faster conversions.",
        href: "/products/ai-agents",
        icon: UserCog,
      },
      {
        name: "Marketing Agent",
        description:
          "Optimize campaigns with AI-driven marketing flows for higher ROI.",
        href: "/products/ai-agents",
        icon: UserCog,
      },
      {
        name: "Customer Support Agent",
        description:
          "Coming Soon – Automate and enhance customer support operations.",
        href: "/products/ai-agents",
        icon: UserCog,
      },
      {
        name: "Shopping Agent",
        description:
          "Coming Soon – Personalized AI shopping assistants for e-commerce.",
        href: "/products/ai-agents",
        icon: UserCog,
      },
      {
        name: "Multi-Agents",
        description:
          "Coming Soon – Manage multiple AI agents across different workflows.",
        href: "/products/ai-agents",
        icon: UserCog,
      },
      {
        name: "AI Agent Studio",
        description:
          "Coming Soon – Build, train, and deploy your own custom AI agents.",
        href: "/products/ai-agents",
        icon: UserCog,
      },
    ],
  },
  {
    id: "media",
    title: "Social Media & SEO Tools",
    items: [
      {
        name: "Short-Form Videos",
        description:
          "Create engaging, thumb-stopping videos to grow your brand reach.",
        href: "/products/social-media-tools",
        icon: Video,
      },
      {
        name: "Email Design",
        description:
          "Craft responsive, visually stunning emails that boost conversions.",
        href: "/products/social-media-tools",
        icon: Mail,
      },
      {
        name: "SEO Backlinks",
        description:
          "Build quality backlinks to improve domain authority and Google rankings.",
        href: "/products/social-media-tools",
        icon: Search,
      },
      {
        name: "UGC Videos",
        description:
          "Coming Soon – Tap into user-generated content to boost authenticity.",
        href: "/products/social-media-tools",
        icon: UsersRound,
      },
      {
        name: "SEO Blog Posts",
        description:
          "Publish optimized blog articles that drive organic traffic.",
        href: "/products/social-media-tools",
        icon: Search,
      },
      {
        name: "Review Management",
        description:
          "Monitor, manage, and improve online reviews across platforms.",
        href: "/products/social-media-tools",
        icon: MessageCircle,
      },
      {
        name: "Instagram Growth",
        description:
          "Boost your Instagram following and engagement with strategic automation.",
        href: "/products/social-media-tools",
        icon: FaInstagram,
      },
      {
        name: "Meta Ads Management",
        description:
          "Coming Soon – Run optimized Meta (Facebook & Instagram) ad campaigns.",
        href: "/products/social-media-tools",
        icon: Monitor,
      },
    ],
  },
  {
    id: "custom",
    title: "Custom Development",
    items: [
      {
        name: "Website Development",
        description:
          "Design and launch responsive, conversion-focused websites.",
        href: "/products/custom",
        icon: Globe,
      },
      {
        name: "Mobile App Development",
        description:
          "Create cross-platform mobile apps for iOS and Android users.",
        href: "/products/custom",
        icon: Smartphone,
      },
      {
        name: "Software Development Lifecycle",
        description:
          "Plan, build, and scale enterprise-grade software with full lifecycle management.",
        href: "/products/custom",
        icon: Code2,
      },
      {
        name: "Custom Solutions",
        description:
          "Develop tailor-made digital products built to your business needs.",
        href: "/products/custom",
        icon: Wand2,
      },
    ],
  },
  {
    id: "others",
    title: "Other Tools",
    items: [
      {
        name: "Invoice Management Bot",
        description:
          "Automate invoices, reminders, and collections to accelerate cash flow.",
        href: "/products/tools",
        icon: FileCheck2,
      },
      {
        name: "AI Marketplace",
        description: "Explore and integrate third-party AI solutions easily.",
        href: "/products/tools",
        icon: Store,
      },
      {
        name: "SME AI Product Aggregator",
        description:
          "Discover curated AI tools built specifically for small businesses.",
        href: "/products/partner-program-sme",
        icon: Layers3,
      },
      {
        name: "AI Automation",
        description:
          "Orchestrate complex workflows with custom AI automation bots.",
        href: "/products/tools",
        icon: Zap,
      },
    ],
  },
];

const ctaSection = {
  title: "Not Sure What Fits Best?",
  subtitle:
    "Our team can help you find the right chatbot, voice bot, or automation tool to match your business goals.",
  primaryCTA: { label: "Talk to Our Team", href: "/contact" },
  secondaryCTA: { label: "Explore Use Cases", href: "/solutions" },
};

export { heroSection, productList, ctaSection };