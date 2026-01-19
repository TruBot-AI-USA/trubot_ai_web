import { MdMail } from "react-icons/md";
import { FaTrophy } from "react-icons/fa6";
import { FaExchangeAlt, FaHandshake, FaMoneyBillAlt } from "react-icons/fa";
import {
  MessageSquareOff,
  Clock10,
  FileText,
  MicOff,
  Bot,
  BrainCircuit,
  Mic,
  ClipboardCheck,
  Handshake,
  Wallet,
  Calendar,
} from "lucide-react";

import { meetLink } from "../site";

const heroSection = {
  title: "Empower Your SME with AI — Earn. Trade. Thrive.",
  subtitle:
    "Tired of missed leads, manual tasks, and delayed responses? TruBot AI helps small businesses work smarter — with ready-to-deploy chatbots, voice bots, and automation tools that scale with you, not against you.",
  tagline:
    "Pay just 10% on successful sales — no hidden fees, no lock-ins. → You grow, we grow — simple.",
  primaryCTA: {
    href: "mailto:info@trubotai.com",
    label: "Email Us",
    iconLeft: MdMail,
  },
  secondaryCTA: {
    href: "/demo",
    label: "Book a Demo",
    iconLeft: Calendar,
  },
  thirdCTA: {
    href: "/contact",
    label: "Contact Our Team",
    iconLeft: FaHandshake,
  },
  image: {
    src: "/images/sme-empowerment/sme-empowerment-hero.png",
    alt: "Team collaboration illustration",
  },
};

const painPointList = [
  {
    icon: MessageSquareOff,
    title: "Missed Chat",
    message: "“Hi, I’m interested in your services...”",
    color: "teal",
    delay: 0,
  },
  {
    icon: Clock10,
    title: "Invoice Reminder",
    message: "“Reminder: Send invoice to ACME Inc.”",
    color: "coral",
    delay: 120,
  },
  {
    icon: MicOff,
    title: "Missed Call",
    message: "“+1 800 555 tried calling you.”",
    color: "electric",
    delay: 240,
  },
  {
    icon: FileText,
    title: "Draft Contract",
    message: "“Still not sent to Legal.”",
    color: "navy",
    delay: 360,
  },
];

const productList = [
  {
    icon: Bot,
    title: "TruChat",
    description:
      "Automate FAQs, capture leads, and assist visitors instantly — even while you sleep.",
    link: "/products/ai-chatbots",
    delay: 0,
  },
  {
    icon: Mic,
    title: "TruVoice",
    description:
      "Handle incoming calls, book appointments, and follow up — no agents required.",
    link: "/products/ai-voicebots",
    delay: 120,
  },
  {
    icon: BrainCircuit,
    title: "TruAgent",
    description:
      "Automate admin: from follow-ups and invoice sends to reminders and reports.",
    link: "/products/ai-agents",
    delay: 240,
  },
];

const stepList = [
  {
    title: "Enroll",
    description:
      "Subscribe to any TruBot AI product and activate your SME Empowerment profile. Your journey starts with one smart decision — choosing growth.",
    icon: ClipboardCheck,
    glow: true,
    delay: 0,
  },
  {
    title: "Connect",
    description:
      "Get instant access to 1,000+ like-minded SMEs and industry peers for high-value trade partnerships. Build your own AI-powered partner network — from day one.",
    icon: Handshake,
    glow: false,
    delay: 150,
  },
  {
    title: "Earn",
    description:
      "Get listed, get discovered, and close peer-to-peer deals faster. Grow revenue, visibility, and credibility in the SME ecosystem.",
    icon: Wallet,
    glow: false,
    delay: 300,
  },
];

const industryList = [
  {
    title: "E-commerce",
    description:
      "Real-time support for product queries, order tracking, and returns.",
    benefit: "Respond faster, convert more.",
    imgAlt: "E-commerce Illustration",
    imgSrc: "/images/sme-empowerment/ecommerce-business.png",
    reverse: false,
    delay: 0,
  },
  {
    title: "Healthcare",
    description:
      "Book appointments, send reminders, and handle patient questions effortlessly.",
    benefit: "Book & follow up like a pro.",
    imgAlt: "Healthcare Illustration",
    imgSrc: "/images/sme-empowerment/healthcare-business.png",
    reverse: true,
    delay: 150,
  },
  {
    title: "Legal & Finance",
    description:
      "Automate client intake, FAQs, and follow-up on documents or invoices.",
    benefit: "Automate your paperwork.",
    imgAlt: "Legal/Finance Illustration",
    imgSrc: "/images/sme-empowerment/legal-finance-business.png",
    reverse: false,
    delay: 300,
  },
  {
    title: "Trades & Home Services",
    description:
      "Capture leads, schedule jobs, and send reminders — even while you’re on-site.",
    benefit: "Never miss a job — even on the move.",
    imgAlt: "Trades & Services Illustration",
    imgSrc: "/images/sme-empowerment/trades-services-business.png",
    reverse: true,
    delay: 450,
  },
];

const benefitList = [
  {
    audience: "Reciprocal Selling",
    subtitle: "Create new demand by participating in a win-win sales loop.",
    icon: FaExchangeAlt,
    benefits: [
      { icon: FaExchangeAlt, text: "Earn from peer purchases" },
      { icon: FaExchangeAlt, text: "Grow by helping others grow" },
    ],
  },
  {
    audience: "Zero Overhead",
    subtitle: "No upfront fees—only pay when you profit.",
    icon: FaMoneyBillAlt,
    benefits: [
      { icon: FaMoneyBillAlt, text: "Only 10% commission on your sales" },
      { icon: FaMoneyBillAlt, text: "No subscriptions or lock-ins" },
    ],
  },
  {
    audience: "Leaderboard Bonuses",
    subtitle: "Get visibility and funding exposure for top sellers.",
    icon: FaTrophy,
    benefits: [
      { icon: FaTrophy, text: "Featured to investors & VCs" },
      { icon: FaTrophy, text: "Recognition drives demand" },
    ],
  },
];

const ctaSection = {
  title:
    "Still wondering if AI is the right fit for your business? Let’s talk.",
  subtitle:
    "Join the Empower Partner Program today and turn every partnership into profit.",
  primaryCTA: {
    label: "Email Us",
    href: "mailto:info@trubotai.com",
  },
  secondaryCTA: {
    label: "Book a Meet",
    href: meetLink,
  },
};

export {
  heroSection,
  painPointList,
  productList,
  stepList,
  industryList,
  benefitList,
  ctaSection,
};
