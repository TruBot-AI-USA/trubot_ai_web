import {
  Mail,
  Users,
  TrendingUp,
  Calendar,
  FileText,
  BarChart3,
  MessageSquare,
  Zap,
  CheckCircle2,
  PieChart,
  Shield,
  Target,
  UserCheck,
  Settings,
  Clock,
  Bell,
  Filter,
} from "lucide-react";

export const heroSection = {
  badge: "The Complete CRM Solution",
  title: {
    main: "Transform Your Sales Process",
    highlight: "with TruCRM",
  },
  subtitle:
    "Streamline your entire sales pipeline from lead generation to closing deals. Manage customers, track opportunities, and boost team productivity all in one place.",
  buttons: {
    primary: {
      label: "Book a Demo",
      href: "/demo",
      variant: "white" as const,
    },
    secondary: {
      label: "Book a Consultation",
      href: "/sales",
      variant: "outline-white" as const,
    },
  },
  image: {
    // Team meeting image
    src: "/images/hero-section.jpg",
    alt: "Sales Team Collaborating",
    width: 600,
    height: 500,
  },
  stats: [
    { value: "500K+", label: "Active Users" },
    { value: "98%", label: "User Satisfaction" },
    { value: "Online/Offline", label: "Customer Support" },
  ],
};

export const coreFeaturesList = [
  {
    icon: Target,
    iconColor: "bg-purple-50 text-purple-500",
    title: "Lead Management",
    description: "Capture and nurture leads effectively",
  },
  {
    icon: Zap,
    iconColor: "bg-yellow-50 text-yellow-500",
    title: "Opportunity Tracking",
    description: "Track sales opportunities through the pipeline",
  },
  {
    icon: Mail,
    iconColor: "bg-blue-50 text-blue-500",
    title: "Campaign Management",
    description: "Seamlessly campaign setup directly from CRM",
  },
  {
    icon: Users,
    iconColor: "bg-green-50 text-green-500",
    title: "Customer Management",
    description: "Complete 360° view of your customers",
  },
  {
    icon: Calendar,
    iconColor: "bg-red-50 text-red-500",
    title: "Activity Management",
    description: "Organize and track all sales activities",
  },
  {
    icon: MessageSquare,
    iconColor: "bg-pink-50 text-pink-500",
    title: "Team Collaboration",
    description: "Work together seamlessly as a team",
  },
  {
    icon: FileText,
    iconColor: "bg-teal-50 text-teal-500",
    title: "Quotations Management",
    description: "Create and Manage sales Quotations",
  },
  {
    icon: BarChart3,
    iconColor: "bg-indigo-50 text-indigo-500",
    title: "Reports & Analytics",
    description: "Gain insights with powerful sales funnel and analytics",
  },
  
];

export const detailedFeatures = [
  {
    id: "email-integration",
    badge: "Email Communication Management",
    title: "Seamless Email Communication Management",
    description:
      "Connect your email accounts and communicate with leads and customers directly from True CRM. Track all conversations in one centralized platform.",
    // Person using phone/laptop
    imageSrc: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "Email Sync Interface",
    reversed: false, 
    features: [
      {
        title: "Easy Email Setup",
        description: "Connect Gmail, Outlook, or any IMAP/SMTP email account in minutes.",
        icon: Settings,
      },
      {
        title: "Send Emails from CRM",
        description: "Compose and send personalized emails with templates and automated follow-ups.",
        icon: Mail,
      },
      {
        title: "Track Email Activity",
        description: "Monitor opens, clicks, and replies. Get real-time notifications.",
        icon: Bell,
      },
    ],
  },
  {
    id: "lead-generation",
    badge: "Lead Generation",
    title: "Capture & Manage Leads Effortlessly",
    description:
      "Capture leads and score them automatically, and nurture them through your sales pipeline with intelligent workflows.",
    // Note: This image source is not used because we are coding the card, but keeping it for fallback
    imageSrc: "", 
    imageAlt: "Lead Pipeline Dashboard",
    reversed: true, 
    features: [
      {
        title: "Multi-Channel Lead Capture",
        description: "Capture leads from web forms, email, social media, and manual entry.",
        icon: Users,
      },
      {
        title: "Automatic Lead Scoring",
        description: "AI-powered scoring helps prioritize the most promising leads.",
        icon: Target,
      },
      {
        title: "Smart Lead Assignment",
        description: "Automatically assign leads to the right sales reps based on territory.",
        icon: Filter,
      },
      {
        title: "Lead Nurturing Campaigns",
        description: "Create automated email sequences to nurture leads through the funnel.",
        icon: TrendingUp,
      },
    ],
  },
  {
    id: "opportunity-management",
    badge: "Opportunity Management",
    title: "Track Every Opportunity to Closing",
    description:
      "Visualize your sales pipeline, forecast revenue accurately, and never miss a deal. Track opportunities from first contact to closed-won.",
    // Hand stacking blocks (Growth concept)
    imageSrc: "/images/opportunity-management.jpg",
    imageAlt: "Sales Pipeline Visualization",
    reversed: false, 
    features: [
      {
        title: "Visual Pipeline Management",
        description: "Drag-and-drop interface to move deals through stages.",
        icon: BarChart3,
      },
      {
        title: "Revenue Forecasting",
        description: "Predict future revenue with AI-powered forecasting.",
        icon: PieChart,
      },
      {
        title: "Deal Stage Tracking",
        description: "Customize stages to match your sales process.",
        icon: Clock,
      },
      {
        title: "Deal Health Alerts",
        description: "Get notified about at-risk deals immediately.",
        icon: Shield,
      },
    ],
  },
  {
    id: "customer-management",
    badge: "Customer Management",
    title: "Complete 360° Customer View",
    description:
      "Store all customer information in one place. Access contact details, interaction history, preferences, and purchase records instantly.",
    // Professional woman on call
    imageSrc: "/images/customermanagement.jpg",
    imageAlt: "Customer Profile View",
    reversed: true, 
    features: [
      {
        title: "Unified Customer Profiles",
        description: "Centralized database with complete customer information.",
        icon: UserCheck,
      },
      {
        title: "Interaction History",
        description: "Timeline of every call, email, meeting, and transaction.",
        icon: Clock,
      },
      {
        title: "Document Management",
        description: "Store contracts and proposals attached to customer records.",
        icon: FileText,
      },
      {
        title: "Customer Segmentation",
        description: "Segment customers by value, industry, or behavior.",
        icon: Users,
      },
    ],
  },
];

export const activitySection = {
  badge: "Activity Management",
  title: "Keep Your Sales Team Organized & Productive",
  subtitle: "Manage all sales activities, schedule meetings, set reminders, and ensure nothing falls through the cracks.",
  cards: [
    {
      title: "Unified Calendar",
      description: "View all meetings, calls, and tasks in one calendar. Sync with Google Calendar and Outlook.",
      features: ["Team calendar sharing", "Meeting scheduling", "Calendar sync"],
      icon: Calendar,
      color: "text-orange-600 bg-orange-50", // Changed to Orange/Peach
    },
    {
      title: "Task Management",
      description: "Create, assign, and track tasks. Set priorities and due dates. Get automated reminders.",
      features: ["Task automation", "Priority levels", "Task templates"],
      icon: CheckCircle2,
      color: "text-blue-600 bg-blue-50", // Blue
    },
    {
      title: "Smart Reminders",
      description: "Never miss a follow-up. Get intelligent reminders based on customer engagement.",
      features: ["Automatic follow-ups", "Email & push alerts", "Custom reminders"],
      icon: Bell,
      color: "text-purple-600 bg-purple-50", // Purple
    },
  ]
};

export const quotesSection = {
  badge: "Sales Documents",
  title: "Create Professional Quotations & Sales Orders",
  description: "Generate branded quotes in seconds, track their status, and convert them to sales orders with a single click.",
  features: [
    { title: "Quick Quote Generation", description: "Create professional quotes with your branding.", icon: FileText, color: "text-green-600" },
    { title: "Dynamic Pricing & Discounts", description: "Apply volume discounts and custom terms.", icon: Zap, color: "text-green-600" },
    { title: "E-Signature Integration", description: "Send quotes for electronic signature.", icon: CheckCircle2, color: "text-green-600" },
    { title: "Quote to Order Conversion", description: "Convert approved quotes to sales orders instantly.", icon: CheckCircle2, color: "text-green-600" },
  ]
};

export const analyticsSection = {
  badge: "Reports & Analytics",
  title: "Make Data-Driven Decisions with Powerful Analytics",
  subtitle: "Get real-time insights into your sales performance. Track KPIs, analyze trends, and generate custom reports.",
  imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  features: [
     { title: "Performance Tracking", description: "Monitor individual and team performance metrics.", icon: BarChart3 },
     { title: "Advanced Filtering", description: "Slice and dice data by any field or criteria.", icon: Filter },
     { title: "Scheduled Reports", description: "Automated reports delivered to your inbox.", icon: Clock },
     { title: "Export & Share", description: "Export to PDF, Excel, or CSV instantly.", icon: FileText },
  ],
  cards: [
    {
      title: "Sales Dashboard",
      icon: BarChart3,
      metrics: [
        { label: "Revenue MTD", value: "$485K" },
        { label: "Deals Closed", value: "42" },
        { label: "Win Rate", value: "68%" },
      ],
      color: "bg-blue-600 text-white",
    },
    {
      title: "Custom Reports",
      icon: PieChart,
      metrics: [
        { label: "Saved Reports", value: "24" },
        { label: "Scheduled", value: "8" },
        { label: "Shared", value: "12" },
      ],
      color: "bg-purple-600 text-white",
    },
    {
      title: "Forecasting",
      icon: TrendingUp,
      metrics: [
        { label: "Next Quarter", value: "$1.8M" },
        { label: "Confidence", value: "87%" },
        { label: "Growth", value: "+23%" },
      ],
      color: "bg-red-600 text-white",
    }
  ]
};

export const faqList = [
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial with full access to all features so you can experience True CRM before committing.",
  },
  {
    question: "Can I import my existing data?",
    answer: "Absolutely. We provide easy-to-use import tools for contacts, leads, and deals from CSV files or other CRM platforms.",
  },
  {
    question: "Does True CRM integrate with other tools?",
    answer: "Yes, we integrate with popular tools like Gmail, Outlook, Slack, Zoom, and many marketing automation platforms.",
  },
  {
    question: "Is my data secure?",
    answer: "Your security is our top priority. We use enterprise-grade encryption and comply with global data privacy regulations.",
  },
];

export const ctaSection = {
  title: "Ready to Transform Your Sales Process?",
  subtitle: "Join thousands of sales teams who have increased their productivity and closed more deals with TruCRM.",
  primaryCTA: {
    label: "Book a Demo",
    href: "/demo",
  },
};