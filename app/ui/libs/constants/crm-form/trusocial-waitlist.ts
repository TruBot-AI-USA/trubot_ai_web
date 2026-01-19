import { User, Mail, Building, Briefcase } from "lucide-react";

const inputList = [
  {
    id: "firstName",
    label: "First name",
    icon: User,
    placeholder: "First name",
    type: "text",
    required: true,
  },
  {
    id: "lastName",
    label: "Last name",
    icon: User,
    placeholder: "Last name",
    type: "text",
    required: true,
  },
  {
    id: "email",
    label: "Email",
    icon: Mail,
    placeholder: "your@email.com",
    type: "email",
    required: true,
  },
  {
    id: "mobile",
    label: "Mobile number",
    placeholder: "Mobile number",
    type: "text",
    required: false,
  },
  {
    id: "companyName",
    label: "Company name",
    icon: Building,
    placeholder: "Company name",
    type: "text",
    required: false,
  },
  {
    id: "jobTitle",
    label: "Job title",
    icon: Briefcase,
    placeholder: "Job title",
    type: "text",
    required: false,
  },
  {
    id: "socialMediaNeeds",
    label: "What's your primary social media need? *",
    type: "select",
    required: true,
    options: [
      "Content creation and scheduling",
      "Multi-platform posting",
      "Analytics and reporting",
      "Engagement management",
      "Just getting started with social media",
    ],
  },
];

export { inputList };
