import { MdMail } from "react-icons/md";
import {
  Box,
  Calendar,
  Clock,
  Handshake,
  Lightbulb,
  MailOpen,
  Rocket,
  ShieldCheck,
  Target,
  UserRoundCheck,
} from "lucide-react";

import { meetLink } from "../site";

const heroSection = {
  text: "No pressure. No jargon. Just real help.",
  title: "You’re Almost There - Let’s Talk",
  subtitle:
    "Thanks for exploring TruBot AI. Whether you're ready to get started or have a few final questions, our sales team is here to help you make the best decision for your business. We’ll guide you through solutions that fit your exact needs.",
  primaryCTA: {
    href: "mailto:sales@trubotai.com",
    iconLeft: MdMail,
    label: "Email Us",
  },
  secondaryCTA: {
    href: meetLink,
    iconLeft: Calendar,
    label: "Schedule a Call",
  },
  image: {
    src: "/images/sales/conversation.png",
    alt: "Chat with sales",
  },
};

const stepList = [
  {
    title: "Reach Out",
    description:
      "Drop us an email or book a call. We’ll respond promptly and match you with the right specialist.",
    icon: MailOpen,
  },
  {
    title: "Talk to a Specialist",
    description:
      "You’ll have a quick, no-pressure conversation about your needs, goals, and use case. We’ll tailor a solution that fits — not upsell.",
    icon: UserRoundCheck,
  },
  {
    title: "Fast-Track Setup",
    description:
      "Once you’re ready, we’ll guide you through a streamlined onboarding process and get your AI solutions up and running.",
    icon: Rocket,
  },
];

const promiseSection = {
  title: "What You Can Expect From Our Sales Team",
  subtitle:
    "We know buying AI solutions can feel complex. That’s why we keep it human, helpful, and honest. When you connect with us, here’s what you can count on.",
  promiseList: [
    {
      icon: Handshake,
      title: "No Pressure, No Fluff",
      description:
        "We're here to guide, not push. Ask anything, we’ll give real answers, not sales scripts.",
    },
    {
      icon: Target,
      title: "Tailored, Not Templated",
      description:
        "We don’t do one-size-fits-all. You’ll get advice based on your use case, industry, and budget.",
    },
    {
      icon: Clock,
      title: "Fast and Responsive",
      description:
        "No long waits or back-and-forths. Expect quick replies and clear timelines.",
    },
    {
      icon: ShieldCheck,
      title: "Confidential & Respectful",
      description:
        "Your information stays private. We treat your inquiry with professionalism and care.",
    },
  ],
  image: {
    src: "/images/sales/sales-team-illustration.png",
    alt: "Sales Team Illustration",
  },
  btn: {
    href: "mailto:sales@trubotai.com",
    iconLeft: MdMail,
    label: "Email Us",
  },
};

const partnerSection = {
  img: {
    src: "/images/sales/collaboration-illustration.png",
    alt: "Collaboration Illustration",
  },
  title: "Looking to Collaborate Instead of Buy?",
  subtitlea:
    "If you're exploring ways to collaborate, not just purchase, we’ve got you covered. TruBot AI offers a range of flexible partner programs designed for agencies, resellers, service providers, and ecosystem allies.",
  subtitleb:
    "Whether you want to white-label our solutions, earn through referrals, or co-build in niche markets - let's talk.",
  btn: {
    href: "/partners",
    iconLeft: Handshake,
    label: "Explore Our Partner Programs",
  },
};

const exploreLinks = [
  {
    title: "Explore Products",
    description:
      "Learn more about TruChat, TruVoice, TruAgent, and our AI toolkit.",
    href: "/products",
    icon: Box,
  },
  {
    title: "Find a Solution",
    description:
      "Discover how TruBot AI adapts to your industry or business case.",
    href: "/solutions",
    icon: Lightbulb,
  },
  {
    title: "Contact Us",
    description: "Have a question that's not sales related? Get in touch.",
    href: "/contact",
    icon: MdMail,
  },
];

const ctaSection = {
  title: "Start Your AI Journey With Us",
  subtitle:
    "You’ve seen what TruBot AI can do, now let’s make it work for you. Whether you’re ready to launch or still finalizing your decision, we’re here to support every step forward. Reach out today and let’s shape your next-gen customer experience together.",
  primaryCTA: {
    label: "Email Us",
    href: "mailto:sales@trubotai.com",
  },
  secondaryCTA: {
    label: "Schedule a Call",
    href: meetLink,
  },
};

export {
  heroSection,
  stepList,
  promiseSection,
  partnerSection,
  exploreLinks,
  ctaSection,
};
