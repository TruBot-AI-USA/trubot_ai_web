import React, { forwardRef, SelectHTMLAttributes } from "react";

import ErrorTooltip from "@/app/ui/components/form/ErrorTooltip";

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}

const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  ({ id, label, error, className = "", children, ...selectProps }, ref) => {
    return (
      <div className="relative">
        <label
          htmlFor={id}
          className={
            label ? "block text-sm font-medium text-navy mb-1" : "sr-only"
          }
        >
          {label || id}
        </label>
        <select
          id={id}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error-tooltip` : undefined}
          className={`w-full py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent transition-all duration-200 bg-white ${
            error ? "pr-10 border-coral" : ""
          } ${className}`}
          {...selectProps}
        >
          {children}
        </select>
        <ErrorTooltip error={error} inputId={id} />
      </div>
    );
  }
);
SelectInput.displayName = "SelectInput";

export default SelectInput;
