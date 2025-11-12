import ActionIcon from "@/app/ui/components/IconComponents/ActionIcon";
import AiVisionIcon from "@/app/ui/components/IconComponents/AiVisionIcon";
import AlertWaveIcon from "@/app/ui/components/IconComponents/AlertWaveIcon";
import AnalyzeIcon from "@/app/ui/components/IconComponents/AnalyzeIcon";
import CaptureIcon from "@/app/ui/components/IconComponents/CaptureIcon";
import IotFusionIcon from "@/app/ui/components/IconComponents/IotFusionIcon";
import LogicGridIcon from "@/app/ui/components/IconComponents/LogicGridIcon";
import ScalableStackIcon from "@/app/ui/components/IconComponents/ScalableStackIcon";
import SmartCamIcon from "@/app/ui/components/IconComponents/SmartCamIcon";
import {
  FaBolt,
  FaBrain,
  FaDragon,
  FaMicrochip,
  FaSatelliteDish,
  FaShieldAlt,
  FaUserFriends,
} from "react-icons/fa";

const heroSection = {
  title: "AI Surveillance System",
  subtitle: "Intelligent Real-Time Security for Homes & SMEs",
  primaryCTA: {
    label: "Book a Demo",
    href: "/demo",
  },
  secondaryCTA: {
    label: "Book a Consultation",
    href: "/sales",
  },
  icon: SmartCamIcon,
};

const capabilityList = [
  {
    title: "Real-Time Threat Detection",
    subtitle: "Vision + Audio Intelligence",
    description:
      "Continuously analyzes live video and audio feeds using AI to detect break-ins, loitering, or unrecognized individuals.",
    icon: AiVisionIcon,
  },
  {
    title: "Multi-Source IoT Fusion",
    subtitle: "Sensor Enhanced Accuracy",
    description:
      "Fuses camera footage with sensor inputs like motion or door/window triggers to improve detection and reduce false alarms.",
    icon: IotFusionIcon,
  },
  {
    title: "Smart Alerts",
    subtitle: "Context-Rich Notifications",
    description:
      "Sends real-time alerts like: “Garage breach detected – 3:15 AM – Unknown male silhouette” to any device or control hub.",
    icon: AlertWaveIcon,
  },
  {
    title: "Customizable Security Logic",
    subtitle: "You Define the Rules",
    description:
      "Set restricted hours, high-risk zones, and event-specific responses—like lights, alarms, or lockdowns.",
    icon: LogicGridIcon,
  },
  {
    title: "SME-Ready Scalability",
    subtitle: "Flexible Deployment",
    description:
      "Cloud-native and edge-enabled. Easily deploy across retail stores, offices, warehouses, and compact industrial units.",
    icon: ScalableStackIcon,
  },
];

const stepList = [
  {
    title: "Capture",
    description:
      "Cameras and smart sensors continuously stream data to the AI engine.",
    icon: CaptureIcon,
  },
  {
    title: "Analyze",
    description:
      "AI models detect real-time anomalies using object detection, facial recognition, and behavioral patterning.",
    icon: AnalyzeIcon,
  },
  {
    title: "Act",
    description:
      "Automated workflows trigger alerts or actions—sirens, door locks, or silent notifiers—based on detection type.",
    icon: ActionIcon,
  },
];

const benefitList = [
  {
    icon: FaBolt,
    text: "⚡ Zero Lag — Edge computing enables sub-second response times.",
  },
  {
    icon: FaBrain,
    text: "🧠 Adaptive Intelligence — Learns your environment to reduce false alarms.",
  },
  {
    icon: FaShieldAlt,
    text: "🔐 Privacy-First — On-device processing supports GDPR/CCPA compliance.",
  },
];

const foundationList = [
  {
    icon: FaMicrochip,
    title: "AI Frameworks",
    description:
      "Built using YOLO for vision detection and facial recognition.",
  },
  {
    icon: FaSatelliteDish,
    title: "Event Streaming",
    description:
      "Uses Kafka for high-throughput real-time alerts and triggers.",
  },
  {
    icon: FaDragon,
    title: "Sensor + Drone Extensibility",
    description: "Easily integrates with drone feeds and thermal cameras.",
  },
  {
    icon: FaUserFriends,
    title: "Crowd Analytics Ready",
    description:
      "Supports real-time density detection and crowd movement tracking.",
  },
];

const ctaSection = {
  title: "Get Started Today",
  subtitle:
    "Launch a proof-of-concept MVP within weeks. Ideal for integrators, providers, and SME partners.",
  primaryCTA: { label: "Book a Demo", href: "/demo" },
  secondaryCTA: { label: "Book a Consultation", href: "/sales" },
};

export {
  heroSection,
  capabilityList,
  stepList,
  benefitList,
  ctaSection,
  foundationList,
};
