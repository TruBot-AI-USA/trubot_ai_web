import { ElementType } from "react";

import Button from "./Button";

interface TierCardProps {
  title: string;
  subtitle: string;
  detail?: string;
  requirements: string[];
  benefits: string[];
  ctaLabel?: string;
  ctaHref?: string;
  icon?: ElementType;
  index?: number;
  bgClass?: string;
  highlight?: boolean;
  badge?: string;
}

const TierCard = ({
  title,
  subtitle,
  detail,
  requirements,
  benefits,
  ctaLabel,
  ctaHref,
  icon: Icon,
  index = 0,
  bgClass = "bg-light",
  highlight = false,
  badge,
}: TierCardProps) => {
  const delayStyle = {
    animationDelay: `${index * 150}ms`,
  };

  return (
    <article
      className={`
        relative rounded-xl p-8 shadow-md transition-all fade-in slide-in-up hover-scale hover-glow
        ${highlight ? "border-2 border-yellow-400 bg-yellow-50" : bgClass}
      `}
      style={delayStyle}
      aria-labelledby={`tier-title-${index}`}
    >
      {/* Optional Badge */}
      {badge && (
        <span
          className="absolute top-4 right-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
          aria-label={`Badge: ${badge}`}
        >
          {badge}
        </span>
      )}

      {/* Optional Icon */}
      {Icon && (
        <div className="mb-4 flex justify-center">
          <Icon className="w-10 h-10 text-electric" aria-hidden="true" />
        </div>
      )}

      {/* Title & Subtitle */}
      <div className="mb-6 text-center">
        <h3
          id={`tier-title-${index}`}
          className="text-2xl font-heading font-bold text-navy mb-1"
        >
          {title}
        </h3>
        <p className="text-navy/80 font-body mb-2">{subtitle}</p>
        {detail && <p className="text-navy/70 font-body">{detail}</p>}
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h4 className="font-heading text-electric text-lg mb-2">
          Requirements
        </h4>
        <ul className="list-disc list-inside space-y-2 text-sm text-navy/80 font-body">
          {requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="mb-8">
        <h4 className="font-heading text-electric text-lg mb-2">Benefits</h4>
        <ul className="list-disc list-inside space-y-2 text-sm text-navy/80 font-body">
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      {ctaLabel && ctaHref && (
        <div className="text-center">
          <Button
            href={ctaHref}
            label={ctaLabel}
            variant="primary"
            animate
            ariaLabel={`Call to action: ${ctaLabel}`}
          />
        </div>
      )}
    </article>
  );
};

export default TierCard;
