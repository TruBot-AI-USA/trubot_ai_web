import { FaRocket } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import {
  LuBadgeDollarSign,
  LuBrainCircuit,
  LuCalendarClock,
  LuClock,
  LuGlobe,
  LuHeartHandshake,
  LuLaptop,
  LuLightbulb,
  LuNetwork,
  LuPercent,
  LuPuzzle,
  LuRocket,
  LuShieldCheck,
  LuTarget,
  LuUser,
  LuUserCheck,
  LuWand,
  LuZap,
} from "react-icons/lu";

const heroSection = {
  title: "Work That Matters. People Who Care.",
  subtitle:
    "At TruBot AI, we’re building more than just products, we’re creating the infrastructure for small and medium businesses to grow faster, smarter, and stronger. Together, we’re paving the path to financial freedom within five years and setting the foundation for generational wealth.",
  primaryCTA: {
    label: "Explore Open Roles",
    href: "/careers",
    iconLeft: FaRocket,
  },
  secondaryCTA: {
    label: "Just say Hello",
    href: "/contact",
    iconLeft: LuUser,
  },
  text: " Not sure where you fit in yet? That’s okay. We’re always open to meeting curious minds.",
  image: {
    src: "/images/our-culture/teamwork-illustration.png",
    alt: "Team collaboration illustration",
  },
};

const culturePillarList = [
  {
    icon: LuZap,
    title: "Fast & Focused",
    description:
      "We build what solves real problems, move quickly, and iterate even faster.",
  },
  {
    icon: LuWand,
    title: "Idea-First, Ego-Free",
    description: "The best idea wins regardless of who says it.",
  },
  {
    icon: LuHeartHandshake,
    title: "Respect & Transparency",
    description:
      "We speak honestly and trust each other to do the right thing.",
  },
  {
    icon: LuLightbulb,
    title: "Innovation Every Day",
    description: "We always ask: 'What can we do better?'",
  },
  {
    icon: FiTool,
    title: "Real Ownership",
    description: "If you’re here, we trust you to own your work.",
  },
  {
    icon: LuTarget,
    title: "Impact-Driven",
    description: "Your work directly helps SMEs grow smarter.",
  },
];

const highlightList = [
  {
    icon: LuLaptop,
    title: "Remote-First, Always",
    description: "Work from anywhere, collaborate in real-time or async.",
  },
  {
    icon: LuCalendarClock,
    title: "Weekly Demos",
    description: "We share wins, test builds, and celebrate experiments.",
  },
  {
    icon: LuClock,
    title: "Goal-Oriented, Not Clock-Oriented",
    description: "We care about outcomes, not hours.",
  },
  {
    icon: LuUserCheck,
    title: "AI Builders at Heart",
    description:
      "Every team member contributes to products like AI Agents and Voicebots.",
  },
];

const roadmapList = [
  {
    icon: LuNetwork,
    title: "Interconnected Ecosystem",
    description:
      "Our vision is a unified AI suite where chat, voice, agents, and automation work seamlessly together.",
  },
  {
    icon: LuGlobe,
    title: "Global Reach, Local Impact",
    description:
      "From around the globe, we’re designing solutions that scale globally but feel personalized locally.",
  },
  {
    icon: LuPuzzle,
    title: "Built with Partnerships",
    description:
      "Our growth is fueled by partners—see our work with SME Empowerment and White-Label Partners.",
  },
  {
    icon: LuBrainCircuit,
    title: "Always Evolving",
    description:
      "We don’t settle. Every iteration, every release is a step toward smarter, faster, and more human-centered AI.",
  },
];

const perkList = [
  {
    audience: "4-Day Work Week",
    subtitle: "Because burnout doesn’t build billion dollar products.",
    benefits: [
      { icon: LuCalendarClock, text: "Every Friday off — seriously" },
      { icon: LuZap, text: "Maximize output, minimize burnout" },
    ],
  },
  {
    audience: "Base Equity for Everyone",
    subtitle: "Be an owner, not just an employee.",
    benefits: [
      { icon: LuBadgeDollarSign, text: "Equity from day one" },
      { icon: LuPercent, text: "Transparent comp & vesting" },
    ],
  },
  {
    audience: "Top 1% Employer",
    subtitle: "Culture of innovation, not bureaucracy.",
    benefits: [
      { icon: LuShieldCheck, text: "Zero micro-management" },
      { icon: LuRocket, text: "Mission-driven teams" },
    ],
  },
];

const ctaSection = {
  title: "Let’s Build the Future of Work — Together",
  subtitle:
    "At TruBot AI, we're rethinking what it means to work, build, and grow in a world powered by AI. Whether you're an engineer, designer, operator, or just someone who loves solving problems, we'd love to connect.",
  primaryCTA: {
    label: "Explore Careers",
    href: "/careers",
  },
  secondaryCTA: {
    label: "Email Us",
    href: "mailto:careers@trubotai.com",
  },
};

export {
  heroSection,
  culturePillarList,
  highlightList,
  roadmapList,
  perkList,
  ctaSection,
};
