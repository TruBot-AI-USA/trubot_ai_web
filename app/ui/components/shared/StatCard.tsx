import { ElementType, ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | ReactNode;
  subtitle?: string | ReactNode;
  icon?: ElementType;
  iconBgColor?: string;
  iconColor?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const StatCard = ({
  label,
  value,
  subtitle,
  icon: Icon,
  iconBgColor = "bg-blue-50",
  iconColor = "text-blue-600",
  className = "",
  size = "md",
}: StatCardProps) => {
  const sizeClasses = {
    sm: "p-3 text-xs",
    md: "p-4 text-sm",
    lg: "p-6 text-base",
  };

  const valueSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-lg border border-gray-100 ${sizeClasses[size]} ${className}`}
    >
      {Icon && (
        <div
          className={`${iconBgColor} ${iconColor} p-2 rounded-lg w-fit mb-2`}
        >
          <Icon size={size === "sm" ? 14 : size === "md" ? 16 : 20} />
        </div>
      )}
      <p className="text-gray-500 font-bold uppercase tracking-wide mb-2">
        {label}
      </p>
      <div className={`font-bold text-gray-900 ${valueSizeClasses[size]} mb-1`}>
        {value}
      </div>
      {subtitle && (
        <div className="text-xs text-gray-500 font-medium">{subtitle}</div>
      )}
    </div>
  );
};

export default StatCard;
