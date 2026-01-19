import { meetLink } from "../site";

const heroSection = {
  title: "Apply to Partner Program",
  subtitle:
    "Join our thriving partner ecosystem and accelerate your growth in the AI market. Explore our partnership types and programs on the main partners page, then complete the application below. Our partnership team will review your submission within 5 business days.",
  primaryCTA: {
    label: "Back to Partners",
    href: "/partners",
  },
  secondaryCTA: {
    label: "Schedule a Call",
    href: meetLink,
  },
};

const formSection = {
  title: "Partner Application",
  subtitle: "Tell us about your organization and partnership goals.",
  partnershipList: [
    { value: "", label: "Select partnership type" },
    {
      value: "white-label",
      label: "White Label Partner",
    },

    {
      value: "implementation-partner",
      label: "Implementation Partner",
    },
    {
      value: "technology-partner",
      label: "Technology Partner",
    },
    { value: "strategic", label: "Strategic Partner" },
    { value: "sales", label: "Sales Partner" },
    { value: "startup-program", label: "Startup Program" },
    { value: "royalty-program", label: "Royalty Program" },
    {
      value: "reseller-program",
      label: "Reseller Program",
    },
  ],
};

const nextStepSection = {
  title: "What Happens Next?",
  subtitle: "Here's what to expect after submitting your application.",
  stepList: [
    {
      title: "Application Review",
      description:
        "Our partnership team reviews your application within 5 business days and assesses fit for our programs.",
      icon: undefined,
    },
    {
      title: "Partnership Discussion",
      description:
        "We schedule a call to discuss mutual opportunities, technical requirements, and partnership structure.",
      icon: undefined,
    },
    {
      title: "Onboarding Process",
      description:
        "Complete partnership agreement, access partner portal, and begin your partnership journey with ongoing support.",
      icon: undefined,
    },
  ],
};

const ctaSection = {
  title: "Want to talk to our team?",
  subtitle:
    "Book a call or explore our solutions to see how TruBot AI can help your business grow.",
  primaryCTA: {
    label: "Book a Call",
    href: meetLink,
  },
  secondaryCTA: {
    label: "Explore Solutions",
    href: "/solutions",
  },
};

export { heroSection, formSection, nextStepSection, ctaSection };
