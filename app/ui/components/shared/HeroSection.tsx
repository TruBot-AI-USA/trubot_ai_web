import { FC, ElementType } from "react";

import PageLayout from "./PageLayout";
import Button from "./Button";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  alignment?: "left" | "center" | "right";
  className?: string;
  icon?: ElementType;
}

const isExternalLink = (href: string) => {
  return (
    href.startsWith("mailto:") || href.startsWith("https://calendar.google.com")
  );
};

const HeroSection: FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  alignment = "left",
  className = "",
  icon: Icon,
}) => {
  const textAlignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const contentAlignment = textAlignMap[alignment];
  const hasIcon = Boolean(Icon);
  const titleId = "hero-title";

  return (
    <div className={`relative ${className}`}>
      <PageLayout
        id="hero"
        aria-labelledby={titleId}
        className={`relative z-10 ${
          hasIcon
            ? "grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            : "flex flex-col items-center"
        }`}
      >
        {/* Content */}
        <div className={`${contentAlignment} fade-in slide-in-up`}>
          <h1
            id={titleId}
            className="text-5xl sm:text-6xl font-heading font-extrabold text-navy leading-tight mb-6"
          >
            <span className="bg-gradient-to-r from-electric to-navy bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {subtitle && (
            <p className="text-lg sm:text-xl text-navy/70 max-w-xl mx-auto md:mx-0 mb-10 fade-in slide-in-up animation-delay-200">
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap md:justify-start justify-center gap-4 fade-in scale-up animation-delay-300">
            {primaryCTA && (
              <Button
                href={primaryCTA.href}
                variant="primary"
                animate
                label={primaryCTA.label}
                target={isExternalLink(primaryCTA.href) ? "_blank" : "_self"}
              />
            )}
            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant="outline"
                animate
                label={secondaryCTA.label}
                target={isExternalLink(secondaryCTA.href) ? "_blank" : "_self"}
              />
            )}
          </div>
        </div>

        {/* Optional Icon */}
        {hasIcon && (
          <div
            className="hidden md:flex justify-center float"
            aria-hidden="true"
          >
            {Icon && <Icon size={120} className="text-electric opacity-80" />}
          </div>
        )}
      </PageLayout>

      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-electric opacity-10 rounded-full blur-3xl pointer-events-none z-0" />
    </div>
  );
};

export default HeroSection;
