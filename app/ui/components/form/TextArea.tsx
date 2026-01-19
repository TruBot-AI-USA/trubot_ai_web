import React, { forwardRef, TextareaHTMLAttributes, ElementType } from "react";

import ErrorTooltip from "@/app/ui/components/form/ErrorTooltip";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
  icon?: ElementType;
  error?: string;
  className?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, label, icon: Icon, error, className = "", ...textareaProps }, ref) => {
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
            className={`absolute ${
              label ? "top-10" : "top-3"
            } left-0 pl-3 flex items-start pointer-events-none`}
          >
            <Icon className="h-5 w-5 text-gray-400 mt-1" />
          </div>
        )}
        <textarea
          id={id}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error-tooltip` : undefined}
          className={`w-full py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent transition-all duration-200 resize-none ${
            Icon ? "pl-10" : ""
          } ${error ? "pr-10 border-coral" : ""} ${className}`}
          rows={4}
          role="textbox"
          {...textareaProps}
        />
        <ErrorTooltip error={error} inputId={id} />
      </div>
    );
  }
);
TextArea.displayName = "TextArea";

export default TextArea;
