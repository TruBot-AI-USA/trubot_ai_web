import React from "react";
import { AlertCircle } from "lucide-react";

interface ErrorTooltipProps {
  error?: string;
  inputId: string;
  className?: string;
}

const ErrorTooltip: React.FC<ErrorTooltipProps> = ({
  error,
  inputId,
  className = "",
}) => {
  if (!error) return null;
  const tooltipId = `${inputId}-error-tooltip`;
  return (
    <div
      className={`absolute inset-y-0 right-3 flex items-center group ${className}`}
    >
      <AlertCircle
        className="h-5 w-5 text-coral cursor-pointer"
        aria-describedby={tooltipId}
        tabIndex={0}
      />
      <div
        id={tooltipId}
        role="tooltip"
        className="absolute left-1/2 top-full mt-2 z-20 w-max min-w-[180px] max-w-xs px-3 py-2 bg-coral text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-200"
        style={{ transform: "translateX(-50%)" }}
      >
        {error}
      </div>
    </div>
  );
};

export default ErrorTooltip;
