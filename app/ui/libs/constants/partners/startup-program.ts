import {
  Zap,
  Terminal,
  Rocket,
  BarChart,
  Ghost,
  ShieldOff,
  Sparkles,
  BarChart3,
  Repeat,
} from "lucide-react";
import { FaRocket } from "react-icons/fa6";

const heroSection = {
  title: "Launch Like a Legend.",
  subtitle:
    "A 12-week AI-powered program to 10X user acquisition, validate a $1M MVP in 90 days, and build unstoppable growth loops — powered by TruBot.",
  primaryCTA: { label: "Apply Now", href: "/sales" },
  secondaryCTA: { label: "Join Waitlist", href: "/contact" },
  icon: FaRocket,
};

const outcomeList = [
  "10X User Acquisition Velocity",
  "95%+ Retention via AI-Personalized Onboarding",
  "Viral Coefficient >1.5",
  "$1M MVP Validation in ≤90 Days",
];

const bluePrintList = [
  {
    title: "Pre-Launch (Weeks 1–3): Demand Engine Activation",
    icon: Zap,
    items: [
      'Trubot Command: "Generate a demand-capture system using:"',
      "• AI-mined niche pain points from 100+ forums",
      "• Automated LinkedIn & email outreach (30%+ conversion)",
      "• Viral waitlist with dynamic referral rewards",
      "🎯 Goal: 1,000+ waitlist signups in 21 days (70% organic)",
    ],
  },
  {
    title: "MVP Hacking (Weeks 4–6): From Idea to $25K Pre-Orders",
    icon: Terminal,
    items: [
      'Trubot Command: "Build a no-code MVP that:"',
      "• Auto-prioritizes features by demand signals",
      "• Embeds AI co-pilots for user onboarding",
      "• Triggers upsell prompts at “Aha!” moments",
      "💰 Goal: $25K MVP pre-orders by end of Week 6",
    ],
  },
  {
    title: "Growth Sprints (Weeks 7–9): Viral Loops Go Live",
    icon: Rocket,
    items: [
      'Trubot Command: "Design 3 self-replenishing growth engines:"',
      "1. User → Invite → AI-reward",
      "2. Content → AI-remixed → Signups",
      "3. API → Micro-Influencer Auto-Pitch",
      "📈 Goal: Viral coefficient >1.5, compounding growth",
    ],
  },
  {
    title: "Scale Systems (Weeks 10–12): Autopilot Optimization",
    icon: BarChart,
    items: [
      'Trubot Command: "Deploy AI to:"',
      "• A/B test pricing, page copy & UX 24/7",
      "• Auto-negotiate strategic partnerships",
      "• Generate weekly growth playbooks from data outliers",
      "🚀 Goal: 3 autonomous growth systems running by Week 12",
    ],
  },
];

const hackList = [
  {
    icon: Sparkles,
    title: "Atomic Networks",
    subtitle: "AI-crafted connector campaigns",
    description:
      "DM 17 ultra-connectors with meme-based AI hooks to trigger viral amplification inside niche founder networks.",
    results: [
      "Curated outreach via AI forum mining",
      "Meme-styled hooks auto-personalized",
      "Connector map built from 3rd-party APIs",
    ],
  },
  {
    icon: ShieldOff,
    title: "Anti-Churn AI",
    subtitle: "Auto win-backs on dip detection",
    description:
      "Detect churn signals and trigger dynamic re-engagements with personalized nudges, offers, or help flows.",
    results: [
      "Usage dips detected via AI heuristics",
      "Custom win-back messages auto-triggered",
      "Net retention >95% in test cohorts",
    ],
  },
  {
    icon: Ghost,
    title: "Dark Launch Mode",
    subtitle: "Test at 2%, scale winners fast",
    description:
      "Release new features to a controlled micro-segment, measure traction, and auto-scale winning flows.",
    results: [
      "Micro-launches segmented by user tags",
      "AI measures retention + engagement deltas",
      "Top performers scaled automatically",
    ],
  },
];

const metricsList = [
  {
    metric: "Waitlist Signups (Week 1)",
    goal: "1,000+ (70% organic)",
  },
  {
    metric: "MVP Pre-Orders (Week 6)",
    goal: "$25,000+",
  },
  {
    metric: "Virality Engines (Week 12)",
    goal: "3+ live",
  },
];

const criteriaList = [
  "Early-stage founders building with AI/automation",
  "Pre-seed to post-MVP stage startups",
  "SaaS, tools, B2B, consumer — all verticals welcome",
  "Ready to move fast, think big, and ship relentlessly",
];

const reasonList = [
  {
    name: "Precision Automation",
    provider: "Trubot handles execution. You lead the vision.",
    description:
      "Our AI agents automate 80% of repetitive tasks so you can focus on high-leverage decisions.",
    icon: Zap,
    tags: ["AI Ops", "Execution Engine"],
    link: "#",
  },
  {
    name: "Data-Driven Iteration",
    provider:
      "Real-time AI optimization from user behavior, forums, and conversions.",
    description:
      "Adapt faster than competitors by letting AI test and improve every growth lever 24/7.",
    icon: BarChart3,
    tags: ["Live Insights", "AI Optimization"],
    link: "#",
  },
  {
    name: "Scalable By Design",
    provider: "Growth loops compound. Systems build on each other.",
    description:
      "We build self-reinforcing systems — not just tactics. Every win powers the next.",
    icon: Repeat,
    tags: ["Growth Systems", "Compounding"],
    link: "#",
  },
];

const ctaSection = {
  title: "Ready to Build the Future?",
  subtitle:
    "Trubot Launch Accelerator — A program for founders obsessed with impact.",
  primaryCTA: { label: "Apply Now", href: "/sales" },
  secondaryCTA: {
    label: "Request the $1M Launch Blueprint",
    href: "mailto:contact@trubotai.com?subject=SCALE",
  },
};

export {
  heroSection,
  outcomeList,
  bluePrintList,
  hackList,
  metricsList,
  criteriaList,
  reasonList,
  ctaSection,
};
