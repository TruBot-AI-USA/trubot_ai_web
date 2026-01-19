import React from "react";
import PhoneInputBase from "react-phone-number-input";

import ErrorTooltip from "@/app/ui/components/form/ErrorTooltip";
import "react-phone-number-input/style.css";

interface PhoneInputProps {
  id: string;
  label?: string;
  error?: string;
  className?: string;
  value?: string;
  onChange?: (value?: string) => void;
  placeholder?: string;
  defaultCountry?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  id,
  label,
  error,
  className = "",
  value,
  onChange,
  placeholder = "Phone number",
}) => {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={
          label ? "block text-sm font-medium text-navy mb-1" : "sr-only"
        }
      >
        {label || "Phone Number"}
      </label>

      <PhoneInputBase
        id={id}
        value={value}
        onChange={(val) => onChange?.(val || undefined)}
        defaultCountry="US"
        international
        withCountryCallingCode
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error-tooltip` : undefined}
        className={`${error ? "error" : ""} ${className}`}
      />

      <ErrorTooltip error={error} inputId={id} />
    </div>
  );
};

PhoneInput.displayName = "PhoneInput";

export default PhoneInput;
