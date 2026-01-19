import { ArrowRight } from "lucide-react";

import Button from "@/app/ui/components/shared/Button";

interface TabCardProps {
  title: string;
  description: string;
  solutions: string[];
  linkLabel: string;
  linkHref: string;
}

const TabCard = ({
  title,
  description,
  solutions,
  linkLabel,
  linkHref,
}: TabCardProps) => {
  const headingId = `tabcard-heading-${title
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  return (
    <article
      className="bg-light rounded-2xl p-8 shadow-md transition-all duration-500 fade-in slide-in-up"
      aria-labelledby={headingId}
    >
      <h3 id={headingId} className="text-2xl font-heading text-navy mb-4">
        {title}
      </h3>

      <p className="text-navy/70 font-body mb-6">{description}</p>

      <ul className="list-disc list-inside space-y-2 text-navy/80 font-body mb-8">
        {solutions.map((solution, idx) => (
          <li key={idx}>{solution}</li>
        ))}
      </ul>

      <Button
        href={linkHref}
        label={linkLabel}
        variant="ghost"
        animate
        iconRight={ArrowRight}
        iconAnimate
      />
    </article>
  );
};

export default TabCard;
