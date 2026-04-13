// app/ui/libs/constants/individual-product/truhealth.ts
import {
  MessageCircle,
  Mic,
  Calendar,
  Shield,
  Users,
  Heart,
  BarChart3,
  CheckCircle,
  Clock,
  TrendingUp,
  FileText,
  Bell,
  Video,
  Activity,
  Brain,
  Pill,
  Star,
  Award,
  Settings,
  Monitor,
} from "lucide-react";

export const heroSection = {
  badge: "AI-Powered Healthcare",
  title: {
    main: "Engage Customers with",
    highlight: "Chatbots & Voicebots for SMEs",
  },
  subtitle: "Automate responses, qualify leads, schedule appointments and more - without writing a single line of code.",
  buttons: {
    primary: {
      label: "Try Chatbot Demo",
      href: "/products/ai-chatbots",
    },
    secondary: {
      label: "Try Voicebot Demo",
      href: "/products/ai-voicebots",
    },
  },
  stats: [
    { value: ">90%", label: "Accuracy" },
    { value: "24/7", label: "Availability" },
    { value: "99.9%", label: "Uptime" },
  ],
  image: {
    src: "/images/truhealth/hero-dashboard.jpg",
    alt: "Healthcare AI Chatbot Interface",
    width: 600,
    height: 450,
  },
};

export const coreFeaturesList = [
  {
    icon: MessageCircle,
    title: "Multi-Modal Experience",
    description: "Seamless text and voice interactions in a single platform",
    iconColor: "bg-blue-100 text-blue-600",
  },
  {
    icon: Brain,
    title: "AI-Powered Diagnosis",
    description: "Preliminary symptom analysis and triage assistance",
    iconColor: "bg-green-100 text-green-600",
  },
  {
    icon: Calendar,
    title: "Smart Appointment Booking",
    description: "Automated scheduling with intelligent time optimization",
    iconColor: "bg-purple-100 text-purple-600",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security and full regulatory compliance",
    iconColor: "bg-teal-100 text-teal-600",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Prescription tracking and automated refill reminders",
    iconColor: "bg-orange-100 text-orange-600",
  },
  {
    icon: BarChart3,
    title: "Health Analytics",
    description: "Comprehensive insights into patient engagement and outcomes",
    iconColor: "bg-indigo-100 text-indigo-600",
  },
];

export const detailedFeatures = [
  {
    title: "AI-Powered Patient Engagement",
    description: "Intelligent chatbots provide instant responses to patient queries, schedule appointments, and offer 24/7 support.",
    features: [
      {
        icon: MessageCircle,
        title: "Smart Conversations",
        description: "Natural language understanding for medical queries",
      },
      {
        icon: Calendar,
        title: "Appointment Scheduling",
        description: "Automated booking with calendar integration",
      },
      {
        icon: Heart,
        title: "Patient Follow-ups",
        description: "Automated reminders and check-in messages",
      },
    ],
    imageSrc: "/images/truhealth/patient-engagement.jpg",
    imageAlt: "Patient Engagement Interface",
    color: "text-blue-600 bg-blue-100",
  },
  {
    title: "Voice-Enabled Healthcare Assistance",
    description: "Voicebots that understand medical terminology and provide hands-free assistance for patients and staff.",
    features: [
      {
        icon: Mic,
        title: "Voice Commands",
        description: "Hands-free operation for healthcare professionals",
      },
      {
        icon: Video,
        title: "Telehealth Integration",
        description: "Seamless connection with telemedicine platforms",
      },
      {
        icon: Shield,
        title: "HIPAA Compliant",
        description: "Secure voice data handling and encryption",
      },
    ],
    imageSrc: "/images/truhealth/voice-assistant.jpg",
    imageAlt: "Voice Assistant Interface",
    color: "text-purple-600 bg-purple-100",
  },
];

export const benefitsSection = {
  title: "Transform Customer Experience",
  benefits: [
    "Reduce response time for common customer inquiries",
    "Scale support without proportional headcount increase",
    "Maintain consistent quality across support channels",
    "Access real-time analytics on customer interactions",
    "Provide instant product information to sales and customers",
    "Test conversational UX before building native features",
    "Gather insights on common user questions",
    "Iterate quickly on AI assistant capabilities",
  ],
  imageSrc: "/images/truhealth/benefits-image.jpg",
  imageAlt: "Healthcare Team Collaboration",
};

export const activitySection = {
  badge: "Healthcare Operations",
  title: "Streamlined Clinical Workflows",
  subtitle: "Monitor daily operations, patient interactions, and staff efficiency with intelligent dashboards.",
  cards: [
    {
      icon: Activity,
      title: "Patient Assessments",
      description: "Comprehensive patient evaluation and documentation tools.",
      color: "bg-blue-100 text-blue-600",
      features: [
        "Digital health questionnaires",
        "Automated history taking",
        "Smart form completion",
        "Instant scoring and triage",
      ],
    },
    {
      icon: FileText,
      title: "Clinical Documentation",
      description: "Efficient note-taking and medical record management.",
      color: "bg-green-100 text-green-600",
      features: [
        "Voice-to-text transcription",
        "Template-based notes",
        "Auto-populated fields",
        "Quick sign-off workflows",
      ],
    },
    {
      icon: Users,
      title: "Care Coordination",
      description: "Seamless communication and task management for care teams.",
      color: "bg-purple-100 text-purple-600",
      features: [
        "Team messaging and alerts",
        "Task assignment and tracking",
        "Referral management",
        "Multi-disciplinary rounds",
      ],
    },
  ],
};

export const analyticsSection = {
  badge: "Healthcare Intelligence",
  title: "Advanced Health Analytics",
  subtitle: "Gain deep insights into patient health, practice performance, and population health trends.",
  cards: [
    {
      icon: TrendingUp,
      title: "Patient Health Analytics",
      color: "bg-gradient-to-br from-blue-600 to-cyan-500",
      metrics: [
        { label: "Active Patients", value: "2,847" },
        { label: "Avg. Wait Time", value: "8.2 min" },
        { label: "Patient Satisfaction", value: "96.5%" },
        { label: "Readmission Rate", value: "3.2%" },
      ],
    },
    {
      icon: BarChart3,
      title: "Practice Performance",
      color: "bg-gradient-to-br from-green-600 to-emerald-500",
      metrics: [
        { label: "Monthly Revenue", value: "$284K" },
        { label: "Appointment Fill Rate", value: "94%" },
        { label: "Staff Efficiency", value: "87%" },
        { label: "No-show Rate", value: "4.3%" },
      ],
    },
    {
      icon: Users,
      title: "Population Health",
      color: "bg-gradient-to-br from-purple-600 to-violet-500",
      metrics: [
        { label: "Chronic Conditions", value: "642" },
        { label: "Preventive Care", value: "78%" },
        { label: "Vaccination Rate", value: "92%" },
        { label: "Health Risk Score", value: "Medium" },
      ],
    },
  ],
  imageSrc: "/images/truhealth/analytics-dashboard.jpg",
  imageAlt: "Health Analytics Dashboard",
};

export const faqList = [
  {
    question: "Is TruHealth HIPAA compliant?",
    answer: "Yes, TruHealth is fully HIPAA compliant with enterprise-grade security measures including end-to-end encryption, secure data storage, and regular security audits to protect patient information.",
  },
  {
    question: "Can it integrate with existing EHR systems?",
    answer: "Absolutely. TruHealth integrates with major EHR systems including Epic, Cerner, Allscripts, and others through secure APIs and HL7/FHIR standards.",
  },
  {
    question: "How accurate is the medical information provided?",
    answer: "We use Retrieval Augmented Generation (RAG) technology with verified medical databases to ensure all information is accurate, up-to-date, and sourced from trusted medical resources.",
  },
  {
    question: "What languages are supported?",
    answer: "Our healthcare chatbots support multiple languages including English, Spanish, Mandarin, and more, with specialized medical terminology for each language.",
  },
  {
    question: "Can it handle emergency situations?",
    answer: "The system is programmed to recognize emergency keywords and immediately escalate to human staff or provide emergency contact information and guidance.",
  },
  {
    question: "How long does implementation take?",
    answer: "Typically 2-4 weeks, depending on integration requirements. We provide full support and training for your team throughout the process.",
  },
];

export const ctaSection = {
  title: "Ready to Transform Your Business?",
  subtitle: "Create exceptional customer experiences, reduce costs and drive business growth.",
  primaryCTA: {
    label: "Schedule Demo",
    href: "/demo",
  },
};