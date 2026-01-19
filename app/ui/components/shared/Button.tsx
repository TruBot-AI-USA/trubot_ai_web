import Link from "next/link";
import { ElementType } from "react";

interface ButtonProps {
  href?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  rounded?: "md" | "lg" | "full";
  className?: string;
  as?: "button" | "link";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  animate?: boolean;
  ariaLabel?: string;
  iconLeft?: ElementType;
  iconRight?: ElementType;
  iconAnimate?: boolean;
  label: string;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | "coral"
    | "teal"
    | "submit";
  disabled?: boolean;
  target?: "_blank" | "_self";
  rel?: string;
}

const Button = ({
  href = "#",
  children,
  size = "md",
  rounded = "lg",
  className = "",
  as = "link",
  onClick,
  type = "button",
  fullWidth = false,
  animate = false,
  ariaLabel,
  iconLeft: IconLeft,
  iconRight: IconRight,
  iconAnimate = false,
  label,
  variant = "primary",
  disabled = false,
  target = "_self",
  rel,
}: ButtonProps) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const roundedClasses = {
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const variantClasses = {
    primary: "bg-electric text-light hover:bg-electric/80 hover-glow",
    secondary: "bg-navy text-light hover:bg-navy/90 hover-raise",
    outline:
      "border border-electric text-electric hover:bg-gray-soft hover-scale",
    ghost: "text-electric bg-transparent hover:bg-teal/10 hover-glow",
    link: "text-electric bg-transparent hover:text-teal hover-raise",
    coral: "bg-coral text-light hover:bg-coral/80 hover-glow",
    teal: "bg-teal text-light hover:bg-teal/80 hover-glow",
    submit:
      "bg-gradient-to-r from-electric to-teal text-light hover:shadow-xl transition-all duration-200 shadow-lg",
  };

  const iconClass = `h-5 w-5 ${iconAnimate ? "float" : ""}`;

  const baseButtonClass = `
    inline-flex items-center justify-center font-semibold font-body
    transition focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2
  `;

  const buttonClass = `
    ${baseButtonClass}
    ${sizeClasses[size]}
    ${roundedClasses[rounded]}
    ${variantClasses[variant]}
    ${fullWidth ? "w-full" : ""}
    ${animate ? "fade-in scale-up" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `;

  const content = (
    <>
      {IconLeft && <IconLeft className={`mr-2 ${iconClass}`} />}
      {label}
      {children}
      {IconRight && <IconRight className={`ml-2 ${iconClass}`} />}
    </>
  );

  if (as === "button") {
    return (
      <button
        type={type}
        onClick={disabled ? undefined : onClick}
        className={buttonClass}
        aria-label={ariaLabel || label}
        aria-disabled={disabled}
        role="button"
        tabIndex={disabled ? -1 : 0}
        disabled={disabled}
      >
        {content}
      </button>
    );
  }

  // If disabled link, fallback to <span>
  if (disabled) {
    return (
      <span
        className={buttonClass}
        aria-label={ariaLabel || label}
        aria-disabled="true"
        role="link"
        tabIndex={-1}
      >
        {content}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={buttonClass}
      aria-label={ariaLabel || label}
      role="button"
      tabIndex={disabled ? -1 : 0}
      target={target}
      rel={target === "_blank" ? rel || "noopener noreferrer" : undefined}
    >
      {content}
    </Link>
  );
};

export default Button;
