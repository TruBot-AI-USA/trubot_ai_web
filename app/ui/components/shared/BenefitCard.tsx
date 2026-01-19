interface Benefit {
  icon: React.ElementType;
  text: string;
}

interface BenefitCardProps {
  audience: string;
  subtitle: string;
  benefits: Benefit[];
  bgClass?: string;
  index?: number;
}

const BenefitCard = ({
  audience,
  subtitle,
  benefits,
  bgClass = "bg-light",
  index = 0,
}: BenefitCardProps) => {
  return (
    <article
      className={`
        rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300
        fade-in slide-in-up ${bgClass}
      `}
      style={{ animationDelay: `${index * 100}ms` }}
      role="region"
      aria-labelledby={`benefit-heading-${index}`}
    >
      <h4
        id={`benefit-heading-${index}`}
        className="text-xl font-heading font-semibold text-navy mb-2"
      >
        {audience}
      </h4>
      <p className="text-sm text-navy/80 mb-4 font-body">{subtitle}</p>

      <ul className="space-y-3" role="list">
        {benefits.map((benefit, idx) => {
          const Icon = benefit.icon;
          return (
            <li
              key={idx}
              className="flex items-start text-navy font-body"
              role="listitem"
            >
              <Icon className="w-5 h-5 text-electric mt-1 mr-2 shrink-0" />
              <span>{benefit.text}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default BenefitCard;
