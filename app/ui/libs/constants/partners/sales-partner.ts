import {
  FaCalendarCheck,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaCloud,
  FaCodeBranch,
  FaCogs,
  FaComments,
  FaDollarSign,
  FaFileInvoiceDollar,
  FaFireAlt,
  FaHandshake,
  FaHashtag,
  FaHeadset,
  FaLaptopHouse,
  FaMoneyBillWave,
  FaMousePointer,
  FaPhoneAlt,
  FaProjectDiagram,
  FaRobot,
  FaRocket,
  FaServer,
  FaSitemap,
  FaSlidersH,
  FaSyncAlt,
  FaUserCheck,
  FaUserTie,
  FaVideo,
  FaWpforms,
} from "react-icons/fa";

const heroSection = {
  title: "Empower Your Business with AI-Driven Solutions",
  subtitle:
    "Join the TruBot AI Sales Partner Program and unlock new revenue streams by delivering cutting-edge AI chatbot and voice bot solutions to clients.",
  primaryCTA: { label: "Apply Now", href: "/contact" },
  secondaryCTA: { label: "Learn More", href: "/demo" },
  icon: FaHandshake,
};

const benefitList = [
  {
    icon: FaCheckCircle,
    title: "Market-Validated Products",
    description:
      "Sell solutions that are proven in the market with real ROI and client success stories.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Lucrative Commission Model",
    description:
      "Earn industry-leading commissions on every successful deal, upsell, or renewal.",
  },
  {
    icon: FaFireAlt,
    title: "AI Solutions in Demand",
    description:
      "Ride the AI wave with offerings that solve urgent business problems across industries.",
  },
  {
    icon: FaSlidersH,
    title: "Flexible Sales Cycle",
    description:
      "Close deals your way — whether bundling products or selling standalone AI tools.",
  },
  {
    icon: FaHeadset,
    title: "Priority Support",
    description:
      "Access sales kits, fast onboarding, and a dedicated partner success manager.",
  },
];

const audienceList = [
  {
    audience: "Freelance Sales Experts",
    subtitle: "Independent professionals looking to expand into AI.",
    benefits: [
      { icon: FaUserTie, text: "Sell without needing a dev team" },
      { icon: FaMoneyBillWave, text: "Earn high-ticket commissions" },
    ],
  },
  {
    audience: "Digital Transformation Consultants",
    subtitle: "Advisors who want AI in their client toolkit.",
    benefits: [
      { icon: FaProjectDiagram, text: "Bundle AI with transformation offers" },
      { icon: FaCheckCircle, text: "Access white-label materials" },
    ],
  },
  {
    audience: "System Integrators",
    subtitle: "Add AI chat and voice into your implementation stack.",
    benefits: [
      { icon: FaSyncAlt, text: "Connect to CRMs and ERPs" },
      { icon: FaCogs, text: "Offer setup & customization" },
    ],
  },
  {
    audience: "CRM/ERP Resellers",
    subtitle: "Enhance existing platforms with AI capabilities.",
    benefits: [
      { icon: FaCloud, text: "Plug-and-play AI integrations" },
      { icon: FaServer, text: "Enable intelligent workflows" },
    ],
  },
  {
    audience: "ISVs with Client Base",
    subtitle: "Expand your offering with AI tools built to scale.",
    benefits: [
      { icon: FaLaptopHouse, text: "Fast setup for your clients" },
      { icon: FaRocket, text: "Upsell-ready automation" },
    ],
  },
];

const productList = [
  {
    icon: FaComments,
    title: "TruChat",
    description:
      "AI-powered chatbots for websites, WhatsApp, and social platforms.",
    link: "/products/ai-chatbots",
  },
  {
    icon: FaPhoneAlt,
    title: "TruVoice",
    description:
      "Voice bots that handle calls, bookings, and customer inquiries.",
    link: "/products/ai-voicebots",
  },
  {
    icon: FaRobot,
    title: "TruAgent",
    description: "Automate CRM tasks, follow-ups, and business workflows.",
    link: "/products/ai-agents",
  },
  {
    icon: FaFileInvoiceDollar,
    title: "TruFinance",
    description: "Automated invoicing, reminders, and fraud detection.",
    link: "/products/smart-invoice-processing",
  },
  {
    icon: FaHashtag,
    title: "TruSocial",
    description: "Create content, detect trends, and grow social engagement.",
    link: "/products/ai-social-media-suite",
  },
  {
    icon: FaVideo,
    title: "TruWatch",
    description: "AI surveillance system for real-time monitoring and alerts.",
    link: "/products/ai-powered-surveillance",
  },
];

const stepList = [
  {
    icon: FaWpforms,
    title: "Apply",
    description: "Submit your Sales Partner Application to express interest.",
  },
  {
    icon: FaUserCheck,
    title: "Get Approved",
    description:
      "We'll evaluate your background and fit for the go-to-market strategy.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Onboard",
    description:
      "Access pitch decks, sales kits, product demos, and training resources.",
  },
  {
    icon: FaHandshake,
    title: "Sell",
    description:
      "Start closing deals with our support at every step of the sales cycle.",
  },
  {
    icon: FaDollarSign,
    title: "Earn",
    description:
      "Earn direct commissions and bonuses on every successful sale.",
  },
];

const featureList = [
  {
    icon: FaCodeBranch,
    title: "API-First Architecture",
    subtitle: "Flexible Integration",
    description:
      "TruBot connects seamlessly with CRMs, ERPs, and third-party platforms.",
    results: ["CRM + ERP ready", "Webhook support", "Custom integrations"],
  },
  {
    icon: FaSitemap,
    title: "Vertical Use Cases",
    subtitle: "Tailored AI Solutions",
    description:
      "Industry-specific bots for finance, healthcare, e-commerce, and more.",
    results: ["Pre-trained intents", "Quick setup", "Relevant messaging"],
  },
  {
    icon: FaMousePointer,
    title: "No Dev Required",
    subtitle: "Drag & Drop Builder",
    description:
      "Launch AI experiences without writing a line of code — perfect for demos.",
    results: ["Sales-friendly", "Client DIY", "Instant deployments"],
  },
  {
    icon: FaCalendarCheck,
    title: "Active Partner Enablement",
    subtitle: "Ongoing Success",
    description: "Get monthly updates, deal support, webinars, and playbooks.",
    results: ["Sales insights", "Feature previews", "Coaching support"],
  },
];

const ctaSection = {
  title: "Ready to Grow With Us?",
  subtitle:
    "If you’re passionate about driving innovation and want to empower businesses with AI, TruBot AI’s Sales Partner Program is your launchpad. Apply now and let’s scale success together.",
  primaryCTA: {
    label: "Apply Now",
    href: "/contact",
  },
  secondaryCTA: {
    label: "Explore the Product Suite",
    href: "/products",
  },
};

export {
  heroSection,
  benefitList,
  audienceList,
  productList,
  stepList,
  featureList,
  ctaSection,
};
