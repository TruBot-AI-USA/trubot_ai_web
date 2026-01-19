import { MdMail } from "react-icons/md";
import {
  Briefcase,
  Calendar,
  MessageCircleQuestion,
  MonitorPlay,
  UserRoundCheck,
} from "lucide-react";

import { meetLink } from "../site";

const heroSection = {
  trustBadge: "Trusted by forward-thinking SMEs across the US and India.",
  title: "Ready to See TruBot AI in Action?",
  subtitle:
    " You’ve explored our products, partners, and solutions. Now it’s time to go hands-on. Let us walk you through how TruBot AI can automate your customer interactions, cut response times, and drive real results — through chat, voice, or smart workflows.",
  subtitle2:
    "Whether you're a SaaS company, eCommerce brand, or a fast-growing service provider — we tailor every demo to your unique goals and challenges.",
  primaryCTA: {
    href: "mailto:info@trubotai.com",
    iconLeft: MdMail,
    label: "Email Us",
  },
  secondaryCTA: {
    href: meetLink,
    iconLeft: Calendar,
    label: "Schedule a Call",
  },
};

const demoFeatureList = [
  {
    icon: UserRoundCheck,
    title: "Personalized Walkthrough",
    description:
      "We tailor every session based on your goals, industry, and existing tools.",
  },
  {
    icon: MonitorPlay,
    title: "Live Product Tour",
    description:
      "See TruChat, TruVoice, and TruAgent in real time. Watch how they automate tasks and support customers seamlessly.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Q&A With Our Team",
    description:
      "Ask anything — our experts dive deep into your use case and share best practices.",
  },
  {
    icon: Briefcase,
    title: "AI Use Cases That Apply to You",
    description:
      "From SaaS to eCommerce, learn how similar teams use TruBot AI to save time and close more deals.",
  },
];

const clientTypeList = [
  {
    title: "SaaS Companies",
    description:
      "Cut down on support tickets. Respond instantly. Scale without growing headcount. Automate onboarding, FAQs, and account queries with our AI chatbots.",
    illustration: "/images/demo/saas.png",
    primaryHref: "/products/ai-chatbots",
    primaryLabel: "Chatbots",
    secondaryHref: "mailto:info@trubotai.com",
    secondaryLabel: "Book My Demo",
  },
  {
    title: "E‑commerce Stores",
    description:
      "Speed up lead response. Automate order tracking. Improve checkout conversions. Engage customers with proactive AI, from product questions to post‑purchase support.",
    illustration: "/images/demo/ecommerce.png",
    primaryHref: "/solutions#ecommerce",
    primaryLabel: "Solutions",
    secondaryHref: "mailto:info@trubotai.com",
    secondaryLabel: "Book My Demo",
  },
  {
    title: "Local Service Providers",
    description:
      "Stop missing calls. Automate bookings. Send smart reminders. Our AI voicebots work 24/7 to keep your calendar full and your customers happy.",
    illustration: "/images/demo/local-services.png",
    primaryHref: "/products/ai-voicebots",
    primaryLabel: "Voicebots",
    secondaryHref: "mailto:info@trubotai.com",
    secondaryLabel: "Book My Demo",
  },
  {
    title: "Digital Agencies",
    description:
      "Offer AI‑powered automation to your clients — under your brand. White‑label our solutions and expand your service portfolio effortlessly.",
    illustration: "/images/demo/digital-agencies.png",
    primaryHref: "/partners",
    primaryLabel: "Become a Partner",
    secondaryHref: "mailto:info@trubotai.com",
    secondaryLabel: "Book My Demo",
  },
];

const ctaSection = {
  title: "Let’s Talk AI",
  subtitle:
    "Still wondering how TruBot AI can transform your business? Let’s find out together — with a conversation tailored just for you. No sales pressure. Just smart insights and real solutions.",
  primaryCTA: {
    label: "Email Us",
    href: "mailto:info@trubotai.com",
  },
  secondaryCTA: {
    label: "Book a Call",
    href: meetLink,
  },
};

export { heroSection, demoFeatureList, clientTypeList, ctaSection };
