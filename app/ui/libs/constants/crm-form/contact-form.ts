import { User, Mail, Phone, MessageSquare } from "lucide-react";

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
    label: "Last Name",
    icon: User,
    placeholder: "Last Nname",
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
    icon: Phone,
    placeholder: "Mobile number",
    type: "text",
    required: false,
  },
  {
    id: "message",
    label: "How can we help you",
    icon: MessageSquare,
    placeholder: "Tell us how we can help you...",
    type: "textarea",
    required: true,
  },
];

export { inputList };
