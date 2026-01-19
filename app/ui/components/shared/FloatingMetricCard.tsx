import { ElementType, ReactNode } from "react";

interface FloatingMetricCardProps {
  label: string;
  value: string | ReactNode;
  subtitle?: string;
  icon?: ElementType;
  iconColor?: string;
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const FloatingMetricCard = ({
  label,
  value,
  subtitle,
  icon: Icon,
  iconColor = "text-blue-600",
  className = "",
  position = "bottom-left",
}: FloatingMetricCardProps) => {
  const positionClasses = {
    "top-left": "top-8 -left-8",
    "top-right": "top-8 -right-8",
    "bottom-left": "bottom-8 -left-8",
    "bottom-right": "bottom-8 -right-8",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block ${className}`}
    >
      {Icon && (
        <div className={`${iconColor} mb-2`}>
          <Icon size={16} />
        </div>
      )}
      <p className="text-gray-500 text-xs font-bold uppercase tracking-wide mb-2">
        {label}
      </p>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      {subtitle && (
        <div className="text-xs text-gray-500 font-medium">{subtitle}</div>
      )}
    </div>
  );
};

export default FloatingMetricCard;
