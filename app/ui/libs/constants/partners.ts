import {
  FaBullhorn,
  FaChalkboardTeacher,
  FaChartLine,
  FaCogs,
  FaFileAlt,
  FaGraduationCap,
  FaHandshake,
  FaSearch,
  FaTools,
} from "react-icons/fa";
import {
  Cog,
  Crown,
  Handshake,
  Lightbulb,
  Rocket,
  Search,
  Shield,
  Star,
  Store,
  Users,
} from "lucide-react";

import { meetLink } from "./site";

const heroSection = {
  title: "Partner with TruBot AI: Accelerate Your Growth in the AI Ecosystem",
  subtitle:
    "Join our thriving partner network to expand your market reach, access new SME customers, and collaborate on innovative AI solutions. Whether you're a technology provider, service consultant, or growth-focused business, discover how our partnership programs can drive mutual success.",
  primaryCTA: { label: "Apply to Partner Program", href: "/partners/apply" },
  secondaryCTA: {
    label: "Book a Consultation",
    href: meetLink,
  },
  icon: FaHandshake,
};

const benefitList = [
  {
    icon: Search,
    title: "Expanded Market Reach",
    description:
      "Gain immediate access to thousands of SMEs through our marketplace and strategic sourcing platform, reducing customer acquisition costs by up to 60%.",
  },
  {
    icon: Handshake,
    title: "Co-Marketing Opportunities",
    description:
      "Leverage joint campaigns, success stories, and events to amplify your brand visibility and increase market presence.",
  },
  {
    icon: Cog,
    title: "Technical Integration Support",
    description:
      "Get dedicated help integrating your solution for seamless customer experiences and lower implementation barriers.",
  },
  {
    icon: Users,
    title: "Business Development Resources",
    description:
      "Access sales tools, lead generation programs, and support built specifically for AI vendors targeting SMEs.",
  },
  {
    icon: Lightbulb,
    title: "Product Development Insights",
    description:
      "Leverage market intelligence and customer feedback to refine your product roadmap and meet real SME needs.",
  },
  {
    icon: Shield,
    title: "Trusted Partnership Network",
    description:
      "Join a curated network of innovative AI companies committed to empowering SMEs with cutting-edge solutions.",
  },
];

const partnerList = [
  {
    title: "White Label Partners",
    subtitle: "For Technology Providers & Agencies",
    detail:
      "Perfect for companies wanting to offer AI solutions under their own brand. Ideal for agencies, MSPs, and technology providers.",
    requirements: [
      "Established customer base and market presence",
      "Technical capability to integrate and customize solutions",
      "Commitment to customer support excellence",
      "Minimum annual revenue requirements",
    ],
    benefits: [
      "Full white-label solution with your branding",
      "Customizable pricing and packaging",
      "Dedicated technical support team",
      "Marketing and sales enablement resources",
      "Revenue sharing model",
    ],
    ctaLabel: "Learn More",
    ctaHref: "/partners/white-label-partners",
  },
  {
    title: "Implementation Partners",
    subtitle: "For Service Providers & Consultants",
    detail:
      "Designed for consulting firms, system integrators, and service providers who help SMEs implement and optimize AI solutions.",
    requirements: [
      "Proven expertise in AI implementation for SMEs",
      "Certified technical staff and delivery capabilities",
      "Documented customer success stories",
      "Commitment to our implementation standards",
    ],
    benefits: [
      "Access to implementation opportunities",
      "Technical training and certification programs",
      "Joint proposal development support",
      "Marketing support and co-branding",
      "Preferred pricing on our solutions",
    ],
    ctaLabel: "Learn More",
    ctaHref: "/partners/implementation-partner",
  },
  {
    title: "Technology Partners",
    subtitle: "For Infrastructure & Platform Providers",
    detail:
      "For companies providing underlying technology, infrastructure, or platforms that support AI solution development and deployment.",
    requirements: [
      "Enterprise-grade technology with SME adaptability",
      "Scalable infrastructure or platform capabilities",
      "Commitment to security and reliability standards",
      "Technical documentation and support resources",
    ],
    benefits: [
      "Technical integration certification",
      "Joint solution development opportunities",
      "Reference architecture publication",
      "Co-marketing and innovation collaboration",
      "Early access to new features",
    ],
    ctaLabel: "Learn More",
    ctaHref: "/partners/technology-partner",
  },
  {
    title: "Strategic Partners",
    subtitle: "For Industry Leaders & Innovators",
    detail:
      "For established companies looking to expand their AI capabilities and market presence through strategic collaboration.",
    requirements: [
      "Strong market position and brand recognition",
      "Complementary technology or service offerings",
      "Commitment to long-term partnership",
      "Executive sponsorship and dedicated resources",
    ],
    benefits: [
      "Strategic co-development opportunities",
      "Exclusive market access and joint ventures",
      "Executive-level relationship management",
      "Custom partnership agreements",
      "Priority access to new technologies",
    ],
    ctaLabel: "Learn More",
    ctaHref: "/partners/strategic-partner",
  },
  {
    title: "Sales Partners",
    subtitle: "For Sales Organizations & Resellers",
    detail:
      "For sales organizations, resellers, and channel partners who want to add AI solutions to their portfolio.",
    requirements: [
      "Established sales channels and customer relationships",
      "Proven track record in technology sales",
      "Dedicated sales and support resources",
      "Commitment to customer success",
    ],
    benefits: [
      "Competitive commission structures",
      "Sales training and enablement programs",
      "Marketing and lead generation support",
      "Technical pre-sales assistance",
      "Customer success partnership",
    ],
    ctaLabel: "Learn More",
    ctaHref: "/partners/sales-partner",
  },
];

const programList = [
  {
    title: "Startup Program",
    subtitle: "For Early-Stage AI Companies",
    detail:
      "Designed for innovative AI startups looking to establish market presence and accelerate growth.",
    requirements: [
      "Innovative AI solution with market potential",
      "Minimum viable product (MVP) ready",
      "Founding team with relevant expertise",
      "Commitment to SME market focus",
    ],
    benefits: [
      "Free marketplace listing and promotion",
      "Technical integration support",
      "Mentorship and business guidance",
      "Access to SME customer base",
      "Reduced partnership fees",
    ],
    ctaLabel: "Learn More",
    ctaHref: "/partners/startup-program",
  },
  {
    title: "Royalty Program",
    subtitle: "For Revenue-Sharing Partnerships",
    detail:
      "For partners who want to earn ongoing revenue through customer success and retention.",
    requirements: [
      "Proven solution with customer success",
      "Strong customer support capabilities",
      "Regular customer engagement",
      "Performance-based partnership model",
    ],
    benefits: [
      "Ongoing revenue sharing model",
      "Customer success partnership",
      "Joint account management",
      "Performance-based incentives",
      "Long-term relationship focus",
    ],
    ctaLabel: "Learn More",
    ctaHref: "/partners/royalty-program",
  },
  {
    title: "Reseller Program",
    subtitle: "For Channel Partners & Distributors",
    detail:
      "For organizations that want to resell our AI solutions as part of their service portfolio.",
    requirements: [
      "Established reseller or distribution network",
      "Technical sales and support capabilities",
      "Customer relationship management",
      "Commitment to solution expertise",
    ],
    benefits: [
      "Competitive reseller margins",
      "Comprehensive sales training",
      "Marketing and lead generation support",
      "Technical pre-sales assistance",
      "Dedicated partner manager",
    ],
    ctaLabel: "Learn More",
    ctaHref: "/partners/reseller-program",
  },
];

const programTiersList = [
  {
    title: "Registered Partner",
    subtitle: "Getting Started",
    detail:
      "Perfect for new partners looking to establish their relationship with TruBot AI and access basic partnership benefits.",
    requirements: [
      "Completed partner application",
      "Signed partner agreement",
      "Basic solution verification",
      "Initial training completion",
    ],
    benefits: [
      "Basic marketplace listing",
      "Partner portal access",
      "Self-service resources",
      "Standard commission structure",
      "Email support",
    ],
    ctaLabel: "Apply Now",
    ctaHref: "/partners/apply",
    icon: Handshake,
  },
  {
    title: "Silver Partner",
    subtitle: "Building Momentum",
    detail:
      "For partners who have demonstrated commitment and are ready to scale their partnership with enhanced benefits.",
    requirements: [
      "5+ successful customer implementations",
      "Completed technical integration",
      "Partner certification",
      "Quarterly business reviews",
      "Customer satisfaction score >80%",
    ],
    benefits: [
      "Enhanced marketplace visibility",
      "Lead sharing program access",
      "Co-marketing opportunities",
      "Increased commission structure",
      "Technical integration support",
      "Dedicated partner manager",
    ],
    ctaLabel: "Apply Now",
    ctaHref: "/partners/apply",
    icon: Star,
  },
  {
    title: "Gold Partner",
    subtitle: "Strategic Collaboration",
    detail:
      "Our highest tier for partners who have proven their value and are ready for strategic collaboration and maximum benefits.",
    requirements: [
      "15+ successful customer implementations",
      "Customer satisfaction score >90%",
      "Joint business plan",
      "Executive sponsorship",
      "Annual business reviews",
      "Proven revenue growth",
    ],
    benefits: [
      "Premium marketplace placement",
      "Dedicated partner manager",
      "Joint marketing campaigns",
      "Advanced lead generation",
      "Highest commission structure",
      "Early access to new features",
      "Executive relationship management",
    ],
    highlight: true,
    badge: "Most Popular",
    ctaLabel: "Apply Now",
    ctaHref: "/partners/apply",
    icon: Crown,
  },
];

const stepList = [
  {
    stepNumber: 1,
    title: "Apply",
    description:
      "Complete our partner application form with your business details and partnership goals. Our team reviews applications within 5 business days.",
    icon: FaFileAlt,
  },
  {
    stepNumber: 2,
    title: "Evaluate",
    description:
      "We assess your fit for our partnership programs and discuss mutual opportunities for growth and collaboration.",
    icon: FaSearch,
  },
  {
    stepNumber: 3,
    title: "Onboard",
    description:
      "Access our partner portal, complete training modules, and collaborate on integration and go-to-market planning.",
    icon: FaChalkboardTeacher,
  },
  {
    stepNumber: 4,
    title: "Launch",
    description:
      "Create your marketplace listing, prepare joint marketing materials, and activate your go-to-market strategy.",
    icon: Rocket,
  },
  {
    stepNumber: 5,
    title: "Grow",
    description:
      "Leverage program benefits, expand your market reach, and progress through partnership tiers for increased rewards.",
    icon: FaChartLine,
  },
];

const successFrameworkList = [
  {
    icon: FaTools,
    title: "Partner Portal",
    description:
      "Access comprehensive sales tools, marketing materials, technical documentation, training resources, and lead management—all in one centralized platform.",
  },
  {
    icon: FaGraduationCap,
    title: "Training & Certification",
    description:
      "Complete certification paths for sales, technical, and implementation teams to validate your expertise and unlock additional benefits.",
  },
  {
    icon: FaBullhorn,
    title: "Marketing Support",
    description:
      "Access co-branded templates, campaign materials, customer success frameworks, and social content to amplify your marketing efforts.",
  },
  {
    icon: FaCogs,
    title: "Technical Integration",
    description:
      "Get dedicated technical support for seamless integration, API documentation, sample code, and best practices to streamline implementation.",
  },
];

const applicationProcessList = [
  {
    icon: FaFileAlt,
    title: "Submit Application",
    description:
      "Complete our comprehensive partner application form with your business details and partnership objectives.",
  },
  {
    icon: FaSearch,
    title: "Evaluation Process",
    description:
      "Our partnership team reviews your application and conducts initial discussions within 5 business days.",
  },
  {
    icon: FaHandshake,
    title: "Partnership Agreement",
    description:
      "Sign our partnership agreement and complete the onboarding process to access our partner ecosystem.",
  },
  {
    icon: Rocket,
    title: "Launch & Grow",
    description:
      "Access partner resources, complete training, and begin your partnership journey with ongoing support.",
  },
];

const faqSection = {
  title: "Frequently Asked Questions",
  subtitle: "Everything you need to know before joining our partner program.",
  faqList: [
    {
      question:
        "What are the costs associated with joining the partner program?",
      answer:
        "There are no upfront fees for most partnership types. We operate on a shared success model with commission structures based on customer acquisition and retention, which vary by tier and solution category. Some programs may have minimum requirements or performance expectations.",
    },
    {
      question: "How long does the application and onboarding process take?",
      answer:
        "The complete process typically takes 4–6 weeks, including application review, agreement signing, technical integration, and marketplace listing setup. This timeline may be faster for simple integrations or existing partners.",
    },
    {
      question: "What technical requirements must my solution meet?",
      answer:
        "Requirements vary by partnership type, but generally include API-based integration capabilities, SSO support, data exchange standards, security compliance, and performance metrics. Full technical specifications are shared during the onboarding process.",
    },
    {
      question: "How do you generate leads for partners?",
      answer:
        "We generate leads through our AI marketplace, strategic sourcing platform, marketing campaigns, industry events, and direct sales activities. Leads are distributed based on partnership tier, solution category, and performance metrics.",
    },
    {
      question:
        "Can we maintain our direct sales channels while participating in your program?",
      answer:
        "Absolutely. Our partner program is designed to complement your existing sales strategy, not replace it. There are no exclusivity requirements, and we encourage partners to maintain their direct customer relationships.",
    },
    {
      question: "What support do you provide to partners?",
      answer:
        "We provide comprehensive support including technical integration assistance, marketing materials, sales training, lead generation, customer success support, and dedicated partner management. Support levels vary by partnership tier.",
    },
  ],
};

const relatedProductList = [
  {
    icon: Store,
    title: "Our Products",
    description:
      "Explore our comprehensive suite of AI solutions designed specifically for SMEs and their unique business challenges.",
    link: "/products",
    animationDelay: 0,
  },
  {
    icon: Search,
    title: "Solutions",
    description:
      "Discover how our AI solutions address specific industry challenges and business needs across different sectors.",
    link: "/solutions",
    animationDelay: 150,
  },
  {
    icon: Handshake,
    title: "About TruBot AI",
    description:
      "Learn about our mission, values, and commitment to empowering SMEs with cutting-edge AI technology.",
    link: "/about",
    animationDelay: 300,
  },
];

const ctaSection = {
  title: "Ready to Accelerate Your Growth with TruBot AI?",
  subtitle:
    "Join our thriving partner ecosystem and gain access to new markets, customers, and opportunities. Whether you're a technology provider, service consultant, or growth-focused business, discover how our partnership programs can drive mutual success in the AI ecosystem.",
  primaryCTA: {
    label: "Apply to Partner Program",
    href: "/partners/apply",
  },
  secondaryCTA: {
    label: "Schedule a Consultation",
    href: meetLink,
  },
};

export {
  heroSection,
  benefitList,
  partnerList,
  programList,
  programTiersList,
  stepList,
  successFrameworkList,
  applicationProcessList,
  faqSection,
  relatedProductList,
  ctaSection,
};
