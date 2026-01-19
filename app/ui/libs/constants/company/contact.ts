import { MdMail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaFacebookF, FaYoutube } from "react-icons/fa";
import {
  Activity,
  Bot,
  Briefcase,
  Calendar,
  FolderKanban,
  HandHelping,
  Headset,
  Heart,
  Info,
  Megaphone,
  Users,
} from "lucide-react";

import { meetLink } from "../site";

const heroSection = {
  title: "Let’s Build Something with AI",
  subtitle:
    "Have a question, proposal, or looking to explore TruBot AI? Whether you’re a startup founder, enterprise team, or curious explorer — let’s connect and start a conversation.",
  primaryCTA: {
    label: "Email Us",
    href: "mailto:contact@trubotai.com",
    iconLeft: MdMail,
  },
};

const bookCallSection = {
  title: "Need a Faster Reply?",
  subtitle:
    "Skip the email queue — book a quick discovery call with our team and get the answers you need, faster.",
  primaryCTA: {
    label: "Schedule a Call",
    href: meetLink,
    iconLeft: Calendar,
  },
  image: {
    src: "/images/contact/book-call-illustration.png",
    alt: "Schedule a call",
  },
};

const contactDirectoryList = [
  {
    icon: MdMail,
    title: "General Enquiries",
    description:
      "Not sure where to start? We’ll route your message to the right person.",
    email: "contact@trubotai.com",
  },
  {
    icon: Headset,
    title: "Support Team",
    description:
      "For help with our products or services, our support team is here to assist.",
    email: "support@trubotai.com",
  },
  {
    icon: Briefcase,
    title: "Careers",
    description: "Explore opportunities to build the future of AI with us.",
    email: "careers@trubotai.com",
    link: "/careers",
  },
  {
    icon: Users,
    title: "Partnerships & M&A",
    description: "Interested in partnering or exploring M&A opportunities?",
    email: "acquisition@trubotai.com",
    link: "/mna",
  },
  {
    icon: Info,
    title: "Company Information",
    description: "For background info, press inquiries, or media kits.",
    email: "info@trubotai.com",
  },
  {
    icon: Megaphone,
    title: "Press & Media",
    description:
      "For media inquiries, speaker invites, or social collaborations.",
    email: "socials@trubotai.com",
  },
];

const exploreLinks = [
  {
    icon: Users,
    label: "About Us",
    href: "/about",
    description:
      "Learn about our mission, values, and the people behind TruBot AI.",
  },
  {
    icon: Bot,
    label: "Our Products",
    href: "/products",
    description:
      "Explore powerful AI tools designed to transform your workflows.",
  },
  {
    icon: Activity,
    label: "Solutions",
    href: "/solutions",
    description:
      "Discover how TruBot AI solves real-world business challenges.",
  },
  {
    icon: HandHelping,
    label: "Partners",
    href: "/partners",
    description: "Learn how we collaborate with teams and scale together.",
  },
  {
    icon: Heart,
    label: "Our Culture",
    href: "/our-culture",
    description:
      "Inside TruBot AI — what we value, how we work, and why it matters.",
  },
  {
    icon: FolderKanban,
    label: "Careers",
    href: "/careers",
    description:
      "Join the team building the next era of AI. Explore open roles.",
  },
];

const locationList = [
  {
    title: "Florida, USA",
    description:
      "Our North American office driving AI innovation and client success across the US and Canada.",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580568.1949590673!2d-83.91955728010085!3d28.78973868809425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20USA!5e0!3m2!1sen!2sin!4v1744794685108!5m2!1sen!2sin",
  },
  {
    title: "Chennai, India",
    description:
      "Our Asia-Pacific hub delivering AI solutions and support to businesses across India and Southeast Asia.",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1313126384!2d80.0438591397053!3d13.047473315886025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1744794552916!5m2!1sen!2sin",
  },
];

const faqSection = {
  title: "Frequently Asked Questions",
  subtitle:
    "Here are some of the most common things people ask before reaching out.",
  faqList: [
    {
      question: "How soon can I expect a reply after reaching out?",
      answer:
        "We usually respond within 24 hours on weekdays. For urgent inquiries, you can book a call with us directly.",
    },
    {
      question: "Do I need technical knowledge to use TruBot AI?",
      answer:
        "Not at all. Our solutions are built to be intuitive and easy to use, even for non-technical teams. We also offer onboarding support.",
    },
    {
      question: "Do you offer implementation services?",
      answer:
        "Yes, we provide implementation support for all our solutions. The level of support varies by product and plan. Contact our sales team for specific details related to your needs.",
    },
    {
      question: "Can I request a product demo?",
      answer:
        "Yes! You can book a live demo via our 'Book a Call' section to schedule one.",
    },
    {
      question: "Do you offer partnerships or reseller options?",
      answer:
        "Yes, we’re open to both white-label and co-branded partnerships. Reach out to acquisition@trubotai.com or visit the Partners page.",
    },
    {
      question: "How quickly can we implement your solutions?",
      answer:
        "Implementation timelines vary by solution and your organization's readiness. Many of our solutions can be implemented in as little as 2–4 weeks, while more complex enterprise deployments may take 8–12 weeks. Our team can provide a more accurate timeline after understanding your specific requirements.",
    },
    {
      question: "Do you offer custom solutions or only pre-built products?",
      answer:
        "While we offer a comprehensive suite of pre-built AI solutions, we understand that some businesses have unique requirements. Our enterprise plans include customization options, and we can develop tailored solutions for specific use cases. Contact our sales team to discuss your custom needs.",
    },
  ],
};

const socialList = [
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCykytJyGUvapijemVYYp62w",
    platform: "youtube",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/trubotai",
  },
  {
    icon: FaXTwitter,
    label: "X (formerly Twitter)",
    href: "https://x.com/TruBot_AI_",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61576272191046",
  },
];

const ctaSection = {
  title: "Still Thinking? Let’s Keep in Touch",
  subtitle:
    "Whether you're ready to dive in or just browsing — we’d love to hear from you. Pick your pace, and let’s connect.",
  boxList: [
    {
      title: "Stay in Touch",
      subtitle: "Reach out anytime. We’re just an email away.",
      btn: {
        href: "mailto:contact@trubotai.com",
        target: "_blank",
        label: "Email Us",
        iconLeft: MdMail,
        variant: "primary",
      },
    },
    {
      title: "Let’s Talk",
      subtitle: "Book a quick discovery call and chat with our team.",
      btn: {
        href: meetLink,
        target: "_blank",
        label: "Schedule a Call",
        iconLeft: Calendar,
        variant: "outline",
      },
    },
  ],
};

export {
  heroSection,
  bookCallSection,
  contactDirectoryList,
  exploreLinks,
  locationList,
  faqSection,
  socialList,
  ctaSection,
};
