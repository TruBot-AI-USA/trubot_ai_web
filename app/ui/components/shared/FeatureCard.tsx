import { ElementType } from "react";

interface FeatureCardProps {
  title: string;
  subtitle?: string;
  description: string;
  icon: ElementType;
  index?: number;
}

const FeatureCard = ({
  title,
  subtitle,
  description,
  icon: Icon,
  index = 0,
}: FeatureCardProps) => {
  const delayStyle = {
    animationDelay: `${index * 120}ms`,
  };

  const titleId = `feature-title-${index}`;

  return (
    <article
      role="article"
      aria-labelledby={titleId}
      className={`
        rounded-xl p-6 transition-all shadow
        fade-in slide-in-up hover-glow
        bg-light
      `}
      style={delayStyle}
    >
      <div className="flex items-start space-x-4 mb-4">
        <div
          className="bg-electric/10 text-electric p-2 rounded-full shrink-0"
          aria-hidden="true"
        >
          <Icon size={28} />
        </div>
        <div>
          <h3
            id={titleId}
            className="text-lg font-semibold text-navy font-heading mb-1"
          >
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-navy/60 font-body">{subtitle}</p>
          )}
        </div>
      </div>

      <hr className="my-3 border-gray-200" />

      <p className="text-sm text-navy/70 leading-relaxed font-body">
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;
