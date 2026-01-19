import { MdEmail } from "react-icons/md";
import {
  Brain,
  Calendar,
  DoorOpen,
  Handshake,
  Layers3,
  MessageCircle,
  Target,
  TrendingUp,
} from "lucide-react";

import { meetLink } from "../site";

const heroSection = {
  title: "  100X Your Investment with TruBot AI’s Multi-Product Powerhouse",
  subtitle:
    " Tap into a $1.8T market through AI products already delivering measurable results to real businesses.",
  primaryCTA: {
    label: "Schedule a Call",
    href: meetLink,
    iconLeft: Calendar,
  },
  secondaryCTA: {
    label: "Email Us",
    href: "mailto:investors@trubotai.com",
    iconLeft: MdEmail,
  },
  text: "Early believers in practical AI will shape the next decade of business growth. Let’s build it together.",
};

const featureList = [
  {
    title: "Proven Product-Market Fit",
    text: "Every product in our suite is solving real business critical problems from AI chat to invoice automation. We focus only on tools with traction, which means less risk and more clarity for growth.",
    image: "/images/investor-relations/pmf-illustration.png",
    alt: "Product-market fit visual",
    links: [
      { href: "/products", label: "Explore our AI Suite" },
      { href: "/products/ai-chatbots", label: "See TruChat in Action" },
    ],
  },
  {
    title: "Rapid Go-to-Market Model",
    text: "Our integration first strategy enables fast deployment and cross-industry scaling. By assembling instead of building from scratch, we reduce time-to-market and unlock compounding momentum.",
    image: "/images/investor-relations/gtm-illustration.png",
    alt: "Go-to-market visual",
  },
  {
    title: "Built for the Real Market",
    text: "We serve the underserved. While others chase enterprises, we’re tapping the real opportunity: small and mid-sized businesses eager for automation. The TAM is $1.8T and we’re priced to penetrate it.",
    image: "/images/investor-relations/market-tailwinds.png",
    alt: "SME market opportunity visual",
    links: [{ href: "/solutions", label: "Solutions" }],
  },
  {
    title: "Partner Led Scalability",
    text: "Our white label, reseller, and strategic partner models unlock distribution without bloating internal ops. This keeps our CAC low, margins high, and growth scalable.",
    image: "/images/investor-relations/partnership-scale.png",
    alt: "Partnership network visual",
    links: [{ href: "/partners", label: "See All Partner Programs" }],
  },
];

const differentiatorList = [
  {
    title: "We don’t start from scratch. We start from what works.",
    description:
      "TruBot AI integrates underutilized, validated AI tools into live products faster than the typical build-from-scratch model.",
    solutions: [
      "Launch-ready tech with traction",
      "Faster ROI, less engineering guesswork",
    ],
  },
  {
    title: "We scale through leverage, not just headcount.",
    description:
      "Growth comes from white-label alliances and partner networks, not bloated internal teams.",
    solutions: [
      "White-label & reseller programs",
      "Partner-first go-to-market model",
    ],
  },
  {
    title: "We prioritize outcomes over complexity.",
    description:
      "Every tool we ship solves a clear SME problem. No fluff. No distraction. Just results.",
    solutions: [
      "Built for business impact, not novelty",
      "Automation that pays for itself",
    ],
  },
  {
    title: "We move fast but never at the cost of substance.",
    description:
      "We start from proven tech. Our value is smart packaging, tight UX, and going live fast not taking risks.",
    solutions: [
      "Pre-vetted tools, real customer value",
      "Zero-to-scale readiness",
    ],
  },
];

const apartList = [
  {
    icon: Brain,
    title: "AI Focused on Usefulness",
    text: "Real-world tools for SMEs, not flashy prototypes.",
    position: "top-0 left-[10%]",
  },
  {
    icon: Handshake,
    title: "Plug-and-Play Partnerships",
    text: "Launch-ready for resellers, partners, and operators.",
    position: "top-[20%] right-[6%]",
  },
  {
    icon: MessageCircle,
    title: "Human-First Automation",
    text: "Simple, intuitive workflows. No friction. No clutter.",
    position: "bottom-[16%] left-[4%]",
  },
  {
    icon: DoorOpen,
    title: "Open for Collaboration",
    text: "Built for those who believe in what’s next.",
    position: "bottom-0 right-[10%]",
  },
];

const snapshotSection = {
  title: "Investor Snapshot",
  subtitle: "Strategic signals that make TruBot AI a compelling opportunity.",
  snapshotList: [
    {
      icon: TrendingUp,
      title: "M&A Friendly Growth Potential",
      highlight: "6–12× revenue multiples",
      description:
        "AI SaaS platforms in B2B see strong acquisition activity especially when bundled across SME verticals.",
    },
    {
      icon: Layers3,
      title: "Multiproduct Cross-Sell Advantage",
      highlight: "40–60% higher valuations",
      description:
        "Validated products with embedded cross-sell increase value compounding across the stack.",
    },
    {
      icon: Target,
      title: "High-Margin, High-Retention Markets",
      highlight: "Healthcare, eCom, Finance",
      description:
        "We focus on LTV-rich, recurring sectors with limited AI saturation and strong renewal cycles.",
    },
  ],
  primaryCTA: {
    label: "Schedule a Call",
    href: meetLink,
    iconLeft: Calendar,
  },
};

const ctaSection = {
  title: "Let’s Build the Future of Work Together",
  subtitle:
    "We’re not just building AI products. We’re building the infrastructure for smarter business everywhere.",
  primaryCTA: {
    label: "Email Us",
    href: "mailto:investors@trubotai.com",
  },
  secondaryCTA: { label: "Contact Us", href: "/contact" },
};

export {
  heroSection,
  featureList,
  differentiatorList,
  apartList,
  snapshotSection,
  ctaSection,
};
