import {
  Database,
  Zap,
  Users,
  Target,
  BrainCircuit,
  Clock,
  ShieldCheck,
  Building2,
  LineChart
} from "lucide-react";

export const heroSection = {
  badge: "AI-Powered Lead Generation",
  title: {
    main: "Transform Your Prospecting",
    highlight: "with TruLead",
  },
  subtitle:
    "Stop wasting hours on manual prospecting and outdated data. TruLead's AI-powered platform does the heavy lifting for you—automatically finding, qualifying, and enriching high-quality leads.",
  buttons: {
    primary: {
      label: "Start Finding Leads Free",
      href: "/sales",
    },
    secondary: {
      label: "See How It Works",
      href: "/demo",
    },
  },
  image: {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    alt: "TruLead Dashboard",
    width: 600,
    height: 500,
  },
  stats: [
    { value: "70%", label: "Time Saved" },
    { value: "98/100", label: "AI Insight Score" },
  ],
};

export const problemSolution = [
  {
    id: "problem",
    badge: "The Problem",
    title: "The Hunt for Quality Leads Is Broken",
    description: "Are you tired of:",
    imageSrc: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "Frustrated worker",
    reversed: false,
    features: [
      {
        title: "Endless Scrolling",
        description: "Wasting hours scrolling through LinkedIn and generic directories?",
        icon: Clock,
      },
      {
        title: "Low Quality Leads",
        description: "Cold-calling leads who aren't ready to buy?",
        icon: Users,
      },
      {
        title: "Wasted Budget",
        description: "Spending budget on contact lists filled with outdated information?",
        icon: Database,
      },
    ],
  },
  {
    id: "solution",
    badge: "The Solution",
    title: "TruLead Turns Prospecting from Chore into Strategic Advantage",
    description: "We built an intelligent platform where AI works as your personal research assistant. It doesn't just list leads—it understands them.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "Strategic Advantage",
    reversed: true,
    features: [
      {
        title: "10x Faster Research",
        description: "Automate the manual work of finding and vetting prospects.",
        icon: Zap,
      },
      {
        title: "95% Data Accuracy",
        description: "Real-time verification ensures you never bounce another email.",
        icon: ShieldCheck,
      },
      {
        title: "AI Workflows",
        description: "Let AI handle the initial outreach and qualification steps.",
        icon: BrainCircuit,
      },
    ],
  },
];

export const processSteps = {
  title: "Your 3-Step Path to Qualified Leads",
  subtitle: "From search to insight in minutes, not days.",
  steps: [
    {
      number: "01",
      title: "Set Your Target",
      description: "Tell our AI what you're looking for. Select an industry, location, or use keywords like 'FinTech startups in Berlin' or 'manufacturing companies using Salesforce.'",
      icon: Target,
      color: "text-blue-600 bg-blue-50",
    },
    {
      number: "02",
      title: "Let the AI Work Its Magic",
      description: "With one click, the TruLead AI Agent scours thousands of sources. It analyzes news, technographics, and hiring patterns to identify prospects with a high probability to buy.",
      icon: BrainCircuit,
      color: "text-purple-600 bg-purple-50",
    },
    {
      number: "03",
      title: "Act on Rich Insights",
      description: "Receive a curated list of leads, each with proprietary AI Insight Score, verified contacts, and key intelligence like company size, tech stack, and recent news.",
      icon: LineChart,
      color: "text-green-600 bg-green-50",
    },
  ],
};

export const featuresGrid = {
  title: "Why Sales Teams Love TruLead",
  subtitle: "Everything you need to transform prospecting into a competitive advantage.",
  features: [
    {
      title: "Think Like a Top Sales Rep",
      description: "Our AI Agent goes beyond filters. It scores leads based on multiple signals—like online activity and tech stack—and gives you a simple 0–100 score.",
      icon: BrainCircuit,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Deep Company Intelligence",
      description: "See the technologies a company uses, read their latest news, and understand their buying intent. Context is the new currency in sales.",
      icon: Building2,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Verified Contacts You Can Trust",
      description: "No more bouncing emails. TruLead fetches key decision-makers and, where possible, provides verified emails with an engagement likelihood.",
      icon: ShieldCheck,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Built for Teams & Scale",
      description: "Managers get visibility into activity and performance. Flexible subscription plans support solo users to enterprise-level teams.",
      icon: Users,
      color: "bg-orange-50 text-orange-600",
    },
  ],
};

export const testimonial = {
  quote: "TruLead cut our prospecting time by 70%. We're now having conversations with qualified leads on day one, not week three.",
  author: "Darshan Chobarkar",
  role: "Founder, ClothSphere Enterprises",
  rating: 5,
};

export const ctaSection = {
  title: "Ready to Fill Your Pipeline with Qualified Leads?",
  subtitle: "Join thousands of sales professionals who switched to intelligent prospecting.",
  features: [
    "Get 10 free lead credits—no credit card required",
    "Setup takes less than 5 minutes",
    "Cancel anytime with no hidden fees",
    "Access to full AI intelligence features"
  ],
  buttons: {
    primary: { label: "Start Your Free Trial", href: "/sales" },
    secondary: { label: "Book a Demo", href: "/demo" },
  },
};

export const faqList = [
  {
    question: "How accurate is the data?",
    answer: "We verify data in real-time, boasting a 95% accuracy rate for emails and phone numbers.",
  },
  {
    question: "Does it integrate with my CRM?",
    answer: "Yes! TruLead exports directly to Salesforce, HubSpot, Pipedrive, and offers a CSV export for any other tool.",
  },
  {
    question: "Can I filter by technology used?",
    answer: "Absolutely. You can search for companies using specific technologies (e.g., 'Shopify', 'AWS', 'HubSpot').",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, you get 10 free credits to try out the full platform features with no credit card required.",
  },
];