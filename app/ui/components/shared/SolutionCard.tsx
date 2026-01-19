import { ElementType } from "react";
import { ArrowRight } from "lucide-react";

import Button from "./Button";

interface SolutionCardProps {
  name: string;
  provider: string;
  description: string;
  icon: ElementType;
  tags: string[];
  link: string;
  bgColor?: string;
}

const SolutionCard = ({
  name,
  provider,
  description,
  icon: Icon,
  tags,
  link,
  bgColor = "bg-light",
}: SolutionCardProps) => {
  const headingId = `solution-${name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <article
      className={`rounded-xl p-6 flex flex-col items-start shadow-md hover:shadow-lg transition-shadow duration-300 fade-in slide-in-up ${bgColor}`}
      aria-labelledby={headingId}
    >
      <div className="w-12 h-12 mb-4 flex items-center justify-center bg-white rounded-full shadow">
        <Icon className="w-6 h-6 text-electric" aria-hidden="true" />
      </div>

      <h4
        id={headingId}
        className="text-lg font-heading font-semibold text-navy mb-1"
      >
        {name}
      </h4>
      <p className="text-sm text-navy/60 font-body mb-2">{provider}</p>
      <p className="text-navy/80 font-body mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4" aria-label="Solution Tags">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-electric/10 text-electric text-xs font-medium px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <Button
        href={link}
        variant="ghost"
        animate
        label="Learn More"
        iconRight={ArrowRight}
        iconAnimate
        aria-label={`Learn more about ${name} solution`}
      />
    </article>
  );
};

export default SolutionCard;
