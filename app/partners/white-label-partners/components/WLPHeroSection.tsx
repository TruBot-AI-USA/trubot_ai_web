import { ElementType, FC } from "react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import Button from "@/app/ui/components/shared/Button";

interface WLPHeroSectionProps {
  heading: string;
  description: string;
  primaryCTA: {
    label: string;
    href: string;
    iconLeft?: ElementType;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  highlightCard?: {
    title: string;
    items: string[];
  };
}

const WLPHeroSection: FC<WLPHeroSectionProps> = ({
  heading,
  description,
  primaryCTA,
  secondaryCTA,
  highlightCard,
}) => {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-light via-white to-gray-soft">
      <PageLayout
        id="hero"
        className="relative z-10 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Column */}
        <div className="relative z-10 fade-in slide-in-left">
          <h1 className="text-5xl sm:text-6xl font-heading font-extrabold text-navy leading-tight mb-6">
            <span className="bg-gradient-to-r from-electric to-navy bg-clip-text text-transparent">
              {heading}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-navy/70 font-body mb-10">
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              href={primaryCTA.href}
              label={primaryCTA.label}
              variant="primary"
              iconLeft={primaryCTA.iconLeft}
              iconAnimate
              animate
            />
            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                label={secondaryCTA.label}
                variant="outline"
                animate
              />
            )}
          </div>
        </div>

        {/* Right Column */}
        {highlightCard && (
          <div className="relative z-10 bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all pulse-slow fade-in slide-in-right">
            <h3 className="text-navy font-heading text-xl font-semibold mb-4">
              {highlightCard.title}
            </h3>
            <ul className="space-y-3 text-navy/80 text-sm font-body">
              {highlightCard.items.map((item, index) => (
                <li key={index}>✔ {item}</li>
              ))}
            </ul>
          </div>
        )}
      </PageLayout>

      {/* Floating background blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric opacity-10 rounded-full blur-3xl float z-0" />
    </div>
  );
};

export default WLPHeroSection;
