import { MdMail } from "react-icons/md";
import { ArrowRight } from "lucide-react";
import {
  FaBrain,
  FaCalendarAlt,
  FaChartLine,
  FaClipboardCheck,
  FaCoins,
  FaFlask,
  FaGlobe,
  FaRocket,
  FaStopwatch,
} from "react-icons/fa";

import jobListData from "./jobListData";

const heroSection = {
  tagline: "Equity-first. Remote-ready. Real-world problems.",
  title: "Build the Future of AI With Us.",
  subtitle:
    "At TruBot AI, we’re not just building tools, we’re building the infrastructure for a smarter, faster world of work. Join a team that’s redefining business communication through AI-powered automation, and make a real impact from day one.",
  primaryCTA: {
    label: "View Open Roles",
    href: "#job-listing",
    iconRight: ArrowRight,
  },
  secondaryCTA: {
    label: "Reach Out",
    href: "mailto:careers@trubotai.com",
    iconLeft: MdMail,
  },
  image: {
    src: "/images/careers/ai-team-illustration.png",
    alt: "AI Team Illustration",
  },
};

const principleList = [
  {
    icon: FaFlask,
    title: "Real Work, Real Tasks",
    description:
      "We don't do abstract puzzles or panel interviews. Every candidate completes a role-specific challenge. The kind of work you'd be doing here day to day.",
  },
  {
    icon: FaChartLine,
    title: "Trial First, Titles Later",
    description:
      "We begin with a 3–6 month trial: unpaid and fully integrated with the team. It’s your time to explore the role, make real impact, and decide if we’re the right fit for you.",
  },
  {
    icon: FaCoins,
    title: "Equity from Day One",
    description:
      "We don’t wait to 'see how you do' before offering equity. From Day 1 of your trial, you're earning a stake in the company.",
  },
  {
    icon: FaGlobe,
    title: "Remote, Flexible, Transparent",
    description:
      "We operate async and remote-first. No micromanagement, no rigid hours. We share KPIs, salary bands, and performance feedback every 30 days.",
  },
];

const stepList = [
  {
    icon: FaFlask,
    title: "Role-Specific Challenge",
    description:
      "Forget multiple-choice tests or whiteboards. We’ll send you a challenge that reflects the actual problems we’re solving — and what you’ll be doing if you join. Each challenge is tailored to the role and your experience level.",
  },
  {
    icon: FaChartLine,
    title: "Trial Phase (3–6 Months)",
    description:
      "You’ll join the team on a trial basis — unpaid, with equity from day one. You'll work on real tasks, contribute to team outcomes, and get a sense of our work culture, speed, and expectations. It’s the ultimate mutual test drive.",
  },
  {
    icon: FaRocket,
    title: "Full-Time Offer + Scale with Us",
    description:
      "Once you prove your fit — by delivering value and aligning with our pace — we’ll extend a full-time offer. You’ll get clarity on role expectations, salary bands, and equity expansion options.",
  },
];

const afterStepList = [
  {
    icon: FaClipboardCheck,
    title: "We Review & Respond (Fast)",
    description:
      "We go through every application manually. If it’s a fit, you’ll hear from us within 3–5 business days with next steps. If not, we’ll still let you know.",
  },
  {
    icon: FaBrain,
    title: "You Get a Role-Specific Challenge",
    description:
      "You’ll receive a task that reflects what you’d actually be working on: build, strategize, pitch, or plan. We respect your time. Challenges are scoped for 3–5 hours max.",
  },
  {
    icon: FaRocket,
    title: "Trial → Feedback → Offer",
    description:
      "If the task goes well, we’ll invite you to join on a unpaid trial. You’ll ship with the team, get feedback every 30 days, and receive a full-time offer if we align.",
  },
];

const summaryList = [
  {
    icon: FaCalendarAlt,
    label: "Response Time",
    value: "3–5 business days",
  },
  {
    icon: FaStopwatch,
    label: "Challenge Time Commitment",
    value: "3–5 hours",
  },
  {
    icon: FaCoins,
    label: "Trial",
    value: "Unpaid with equity from Day 1",
  },
  {
    icon: FaChartLine,
    label: "Offer",
    value: "Includes salary + equity + growth path",
  },
];

const jobList = [...jobListData];

const ctaSection = {
  title: "Let’s Build the Future of Work. Together.",
  subtitle:
    "Whether you’re an engineer who ships fast, a strategist who sees around corners, or a generalist who just gets stuff done, there’s space for you at TruBot AI. We’re solving meaningful problems with AI, and we’re doing it with speed, transparency, and shared ownership. If that sounds like your kind of place, we’d love to meet you.",
  primaryCTA: {
    label: "Apply for a Role",
    href: "#job-listing",
  },
  secondaryCTA: {
    label: "Learn How We Work",
    href: "#how-we-hire",
  },
};

export {
  heroSection,
  principleList,
  stepList,
  afterStepList,
  summaryList,
  jobList,
  ctaSection,
};
