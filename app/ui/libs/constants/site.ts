const PlatformAI360List = [
  { href: "/products/trusocial", label: "TruSocial" },
  { href: "/products/trucrm", label: "TruCRM" },
  { href: "/products/trulead", label: "TruLead" },
  { href: "/products/TruChat&TruVoice", label: "TruChat & TruVoice" },
  { href: "/products/truerp", label: "TruERP" },  
  { href: "/products/ai-agents", label: "AI Agents" },
];
const PlatformAI720List = [  
  { href: "/products/ai-marketplace", label: "AI Marketplace" },
  {
    href: "/products/ai-powered-surveillance",
    label: "AI Powered Surveillance",
  },
  {
    href: "/products/smart-invoice-processing",
    label: "Smart Invoice Processing",
  },
  { href: "/products/software-aggregator", label: "Software Aggregator" },
  {
    href: "/products/intelligent-sourcing-platform",
    label: "Intelligent Sourcing Platform",
  },
];

const PlatformAI1080List: { href: string; label: string }[] = [
  // Coming soon
];

const DigitalAssetsList = [
  { label: "Accelerator" },
  { label: "AI LinkedIn Prompts Pack" },
  { label: "Architecture PRD" },
  { label: "Finance Templates" },
  { label: "Grant" },
  { label: "Investor" },  
  { label: "Leads (1M)" },
  { label: "Product PRDs" },
  { label: "Real Estate" },
];

const productLinkList = [
  { label: "Platform AI 360", submenu: PlatformAI360List },
   { label: "Platform AI 720", submenu: PlatformAI720List },
    { label: "Platform AI 1080", submenu: PlatformAI1080List },
    { label: "Digital Assets 360",  href: "/digitalAssets", submenu: DigitalAssetsList },
];

const solutionLinkList = [
  { label: "Retail & E-commerce" },
  { label: "Financial Services" },
  { label: "Healthcare" },
  { label: "Manufacturing" },
  { label: "Professional Services" },
];

const partnerLinkList = [
  { href: "/partners/white-label-partners", label: "White Label Partners" },
  { href: "/partners/implementation-partner", label: "Implementation Partner" },
  { href: "/partners/technology-partner", label: "Technology Partner" },
  { href: "/partners/strategic-partner", label: "Strategic Partner" },
  { href: "/partners/sales-partner", label: "Sales Partner" },
  { href: "/partners/startup-program", label: "Startup Program" },
  { href: "/partners/royalty-program", label: "Royalty Program" },
  { href: "/partners/reseller-program", label: "Reseller Program" },
];

const companyLinkList = [
  { href: "/about", label: "About" },
  { href: "/investor-relations", label: "Investor Relations" },
  { href: "/sme-empowerment", label: "SME Empowerment" },
  { href: "/mna", label: "M&A Opportunities" },
  { href: "/our-culture", label: "Our Culture" },
  { href: "/careers", label: "Join Our Team" },
  { href: "/contact", label: "Contact Us" },
];

const footerLinkList = [
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
];

const meetLink =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3GU3FqaXzxYUNEFvVUp1AAFUErY1k6klqKYNbU0X2tC7RZ_3AGQSuMjUeIeQ_4yCrjej7YLAEV";

export {
  productLinkList,
  solutionLinkList,
  partnerLinkList,
  companyLinkList,
  footerLinkList,
  meetLink,
};