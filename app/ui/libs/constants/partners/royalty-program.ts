import RoyaltyIllustration from "@/app/ui/components/IconComponents/RoyaltyIllustration";
import {
  FaFlask,
  FaUserAlt,
  FaRocket,
  FaDollarSign,
  FaKey,
  FaCheckCircle,
  FaHandshake,
  FaPiggyBank,
} from "react-icons/fa";

const heroSection = {
  title: "The Royalty Program",
  subtitle: "No Upfront Costs — We Only Win When You Do",
  primaryCTA: {
    label: "Get Your Free Growth Audit",
    href: "/sales",
  },
  secondaryCTA: { label: "Apply Now", href: "/contact" },
  icon: RoyaltyIllustration,
};

const audienceList = [
  {
    title: "Startups with MVPs",
    description: "You’ve built something real, but growth is stalled",
    icon: FaFlask,
  },
  {
    title: "Solopreneurs & Indie Makers",
    description: "You build. We sell. Focus on what you do best.",
    icon: FaUserAlt,
  },
  {
    title: "Go-to-Market Ready",
    description: "Your product is ready. Now let's get it into hands.",
    icon: FaRocket,
  },
];

const stepList = [
  {
    title: "You Hand Us the Keys",
    description: "We take over sales, outreach, and revenue generation",
    icon: FaKey,
  },
  {
    title: "You Earn as We Deliver",
    description: "We will pay you royalty for your product",
    icon: FaDollarSign,
  },
  {
    title: "We Scale Together",
    description: "From cold outreach to closing deals, we fuel your growth",
    icon: FaRocket,
  },
];

const productFitList = [
  "SaaS, apps, digital tools, or physical products",
  "B2B or B2C offerings with clear market demand",
  "Fully built and ready to sell today (not in beta or “coming soon”)",
];

const loveList = {
  audience: "Why Founders Love It",
  subtitle: "Built for simplicity, success, and focus",
  benefits: [
    {
      icon: FaCheckCircle,
      text: "No more hustle-for-hustle's-sake – Let us handle the grind while you focus on product",
    },
    {
      icon: FaPiggyBank,
      text: "Preserve your runway – Zero upfront costs, unlike traditional agencies",
    },
    {
      icon: FaHandshake,
      text: "Shared success – We only win when you do",
    },
  ],
};

const ctaSection = {
  title: "Apply Now — Limited to 5 New Partners This Quarter",
  subtitle:
    "If you have a product and need real revenue—not vague “exposure”—let’s talk.",
  primaryCTA: {
    label: "Get Your Free Growth Audit",
    href: "/sales",
  },
  secondaryCTA: {
    label: "Apply Now",
    href: "/contact",
  },
};

export {
  heroSection,
  audienceList,
  stepList,
  productFitList,
  loveList,
  ctaSection,
};
