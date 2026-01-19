import React, { forwardRef, InputHTMLAttributes, ElementType } from "react";

import ErrorTooltip from "@/app/ui/components/form/ErrorTooltip";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  icon?: ElementType;
  error?: string;
  className?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, label, icon: Icon, error, className = "", ...inputProps }, ref) => {
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
        {Icon && (
          <div
            className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none${
              label ? " top-5" : ""
            }`}
          >
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          id={id}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error-tooltip` : undefined}
          className={`w-full py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent transition-all duration-200 ${
            Icon ? "pl-10" : ""
          } ${error ? "pr-10 border-coral" : ""} ${className}`}
          role="textbox"
          {...inputProps}
        />
        <ErrorTooltip error={error} inputId={id} />
      </div>
    );
  }
);
TextInput.displayName = "TextInput";

export default TextInput;
