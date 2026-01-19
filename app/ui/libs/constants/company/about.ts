import { Sparkles, Share2, Layers, RefreshCw } from "lucide-react";
import {
  FaClock,
  FaDollarSign,
  FaTasks,
  FaPuzzlePiece,
  FaChartLine,
  FaBoxOpen,
  FaBullhorn,
  FaCogs,
  FaPhone,
  FaBolt,
  FaHeart,
  FaSyncAlt,
  FaHandsHelping,
  FaLightbulb,
  FaShieldAlt,
  FaUniversalAccess,
} from "react-icons/fa";

const heroSection = {
  tagline: "Empowering organizations with ethical, scalable AI",
  heading: "Pioneering the Future of AI for Business",
  subheading:
    "We're on a mission to make powerful AI solutions accessible, practical, and transformative for organizations of all sizes.",
  primaryCTA: { label: "Explore Our Solutions", href: "/solutions" },
  secondaryCTA: { label: "See Our Culture", href: "/our-culture" },
};

const problemWeSolveSection = {
  title: "You’re Doing It All. And It’s Getting Harder.",
  subtitle:
    "Running a business today means juggling everything: sales, support, operations, growth. Customers want instant replies. Tasks pile up. Your tools feel more like clutter than help. It’s exhausting. And it’s not sustainable.",
  problemList: [
    { icon: FaClock, text: "Missed leads from slow replies or late nights" },
    { icon: FaDollarSign, text: "Support costs rising faster than revenue" },
    { icon: FaTasks, text: "Repetitive admin work that never ends" },
    { icon: FaPuzzlePiece, text: "Tools that don’t connect or scale" },
    { icon: FaChartLine, text: "No time to actually grow" },
  ],
  floatingIconList: [
    { icon: FaBoxOpen, style: { top: "10%", left: "20%" } },
    { icon: FaBullhorn, style: { top: "0%", right: "20%" } },
    { icon: FaPhone, style: { top: "35%", right: "5%" } },
    { icon: FaCogs, style: { bottom: "15%", right: "20%" } },
    { icon: FaChartLine, style: { bottom: "0%", left: "20%" } },
  ],
};

const storySection = {
  title: "Our Story",
  subtitle:
    "From a shared vision in 2023 to empowering businesses with AI today.",
  beginning: {
    title: "The Beginning",
    text: "Our journey began in 2023 when a group of AI researchers, product thinkers, and startup veterans came together with a shared belief: AI should be simple and accessible to everyone. We had seen small businesses struggle with tools built for enterprises. We knew there had to be a better way.",
    imgURL: "/images/about/our-story-beginning.png",
    imgAlt: "Founding team illustration",
  },
  problem: {
    title: "The Problem We Solved",
    text: "Small and mid-sized teams were juggling everything on their own. Missed leads, long response times, scattered tools, and constant firefighting had become the norm. They didn’t need more dashboards. They needed support that actually worked in the background. That’s where we stepped in.",
    imgURL: "/images/about/our-story-problem.png",
    imgAlt: "Challenges faced by small businesses",
  },
  solution: {
    title: "Our Solution",
    text: "We built TruBot AI to give businesses practical tools that work out of the box. By integrating trusted AI products into a single platform, we make automation simple and useful. No learning curve. No wasted time. Just real help for the people building real businesses.",
    imgURL: "/images/about/our-story-solution.png",
    imgAlt: "TruBot AI platform visual",
  },
};

const visionNMissionSection = {
  vision: {
    title: "Our Vision",
    text: "We imagine a world where AI quietly powers every growing business helping small teams serve better, scale faster, and compete with confidence. A future where automation isn’t intimidating or exclusive. It’s just how modern businesses work smarter.",
  },
  mission: {
    title: "Our Mission in Action",
    text: "These principles guide everything we build and how we show up for the businesses we serve.",
    missionList: [
      {
        icon: FaBolt,
        title: "Making AI Accessible",
        description:
          "We believe every business should benefit from AI, not just the tech giants. That’s why we build tools anyone can use, without needing a background in data science or engineering.",
        note: "Built for clarity, not complexity.",
      },
      {
        icon: FaChartLine,
        title: "Ensuring Real-World Value",
        description:
          "AI is only useful if it solves a real business problem. We design every solution with practicality, impact, and ROI in mind so small teams can do more, with less.",
        note: "Created to make a measurable difference.",
      },
      {
        icon: FaHeart,
        title: "Ethical by Design",
        description:
          "AI should always serve people, not replace them. We’re committed to transparency, fairness, and human-first technology that helps teams work better, not harder.",
        note: "Focused on responsible innovation.",
      },
      {
        icon: FaSyncAlt,
        title: "Always Improving",
        description:
          "The AI world moves fast. We move with it. Our work is never done, we’re always listening, iterating, and turning new ideas into useful tools for the people who need them most.",
        note: "Progress that’s grounded in purpose.",
      },
    ],
  },
  cta: {
    text: "Curious how these values show up in our day-to-day?",
    buttonLabel: "Explore Our Culture",
    buttonHref: "/our-culture",
  },
};

const approachList = [
  {
    title: "Human-Centered AI",
    description:
      "We build every product with people in mind—not just data. Our AI tools are designed to boost human creativity, not replace it. That means less repetitive work, faster responses, and more time to focus on what humans do best.",
    icon: Sparkles,
  },
  {
    title: "Integrated Ecosystem",
    description:
      "Disconnected tools slow teams down. That’s why we bring everything together in one seamless system. So chatbots, voicebots, and automation work in sync. It’s all connected, all simplified, all built to save time.",
    icon: Share2,
  },
  {
    title: "SME-First Design",
    description:
      "We don’t build for billion-dollar tech teams. We build for the businesses doing it all with small teams and big goals. No technical background required. Just smart, accessible tools that work from day one.",
    icon: Layers,
  },
  {
    title: "Continuous Learning",
    description:
      "The more you use it, the better it gets. Our AI solutions learn from real usage and feedback, adapting over time to deliver smarter results as your business grows.",
    icon: RefreshCw,
  },
];

const valueList = [
  {
    title: "Empowerment Through Technology",
    subtitle: "Helping teams do more with less",
    description:
      "We build AI tools that give people their time back. From founders to support teams, we help small businesses work faster, smarter, and with more focus.",
    icon: FaHandsHelping,
  },
  {
    title: "Accessibility and Inclusion",
    subtitle: "AI that’s simple, not intimidating",
    description:
      "Every feature we build is made for usability and adoption. You don’t need a tech team to start using AI, just the willingness to grow.",
    icon: FaUniversalAccess,
  },
  {
    title: "Transparency and Trust",
    subtitle: "Open by default",
    description:
      "We communicate clearly about how our tools work and how your data is handled, no black boxes, no fine print, just mutual respect.",
    icon: FaShieldAlt,
  },
  {
    title: "Continuous Innovation",
    subtitle: "Always listening. Always improving.",
    description:
      "We improve our platform through real feedback. Our goal is progress that’s useful, practical, and shaped by the people who use it.",
    icon: FaLightbulb,
  },
];

const roadmapList = [
  {
    title: "The Foundation: Getting the Essentials Right",
    content:
      "We started by focusing on the core needs of growing teams: better conversations, faster workflows, and less manual effort. Our first set of tools: TruChat, TruVoice, and TruAgent are designed to tackle exactly that. They’re simple to adopt, powerful from day one, and built to work together.",
    image: "/images/about/roadmap-foundation.png",
    cta: { label: "See how they work", href: "/products" },
  },
  {
    title: "The Expansion: Connecting the Dots",
    content:
      "In the coming months, we’re adding tools that go even deeper: like smart invoicing, AI social media automation, and performance dashboards. We’re also rolling out our partner ecosystem, so agencies, startups, and service providers can deliver our tools under their own brand or integrate them into client workflows.",
    image: "/images/about/roadmap-expansion.png",
    cta: { label: "Explore partner programs", href: "/partners" },
  },
  {
    title: "The Mission: Redefining What Small Teams Can Do",
    content:
      "Our vision is to create the world’s simplest and most complete AI platform for small and mid-sized businesses. Beyond just tools, we want to create an ecosystem: a marketplace, an API layer, and a knowledge system, that empowers founders, support teams, and operators to work smarter than ever before.",
    image: "/images/about/roadmap-mission.png",
    cta: { label: "Talk to us", href: "/contact" },
  },
];

const ctaSection = {
  title: "Let’s Build the Future of Work Together",
  subtitle:
    "We’re on a mission to simplify AI for businesses that have too much to do and too few hands to do it. Whether you're an entrepreneur, a collaborator, or someone curious about what’s next, we’d love to connect.",
  primaryCTA: {
    label: "Join the journey",
    href: "/careers",
  },
  secondaryCTA: {
    label: "Let’s talk",
    href: "/contact",
  },
};

export {
  heroSection,
  problemWeSolveSection,
  storySection,
  visionNMissionSection,
  approachList,
  valueList,
  roadmapList,
  ctaSection,
};
