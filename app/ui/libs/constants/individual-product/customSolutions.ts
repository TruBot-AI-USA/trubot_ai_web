import { ProductPageDataType } from "../../types/productPage";

const customSolutionsPageData: ProductPageDataType = {
  id: "custom",
  title: "Custom Development Services for Every Business",
  description:
    "Bring your ideas to life with tailored software, websites, and mobile applications built for scale, speed, and usability.",
  platforms: [
    {
      name: "Website Development",
      feature: "Responsive, brand-aligned websites with modern tech stacks",
      icon: "🌐",
    },
    {
      name: "Mobile App Development",
      feature: "Cross-platform mobile apps with intuitive UX",
      icon: "📱",
    },
    {
      name: "SDLC Support",
      feature: "Plan, build, test, and maintain scalable software systems",
      icon: "🛠️",
    },
    {
      name: "Custom Integrations",
      feature: "Tailored backend & frontend solutions for any platform",
      icon: "🔌",
    },
  ],
  steps: [
    "Define your business goals",
    "Collaborate on UI/UX & feature set",
    "Develop with agile methodologies",
    "Test, launch, and maintain with support",
  ],
  industries: [
    "Small Businesses",
    "Startups",
    "Agencies",
    "Healthcare",
    "Education",
    "Real Estate",
  ],
};

export { customSolutionsPageData };
