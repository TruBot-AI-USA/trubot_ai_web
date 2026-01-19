import { ArrowRight } from "lucide-react";

import Button from "@/app/ui/components/shared/Button";

interface ProductCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
  animationDelay?: number;
}

const ProductCard = ({
  icon: Icon,
  title,
  description,
  link,
  animationDelay = 0,
}: ProductCardProps) => {
  const headingId = `product-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <article
      className="bg-light rounded-lg p-6 shadow-md hover:shadow-lg hover-scale transition-all duration-300 fade-in slide-in-up"
      style={{ animationDelay: `${animationDelay}ms` }}
      aria-labelledby={headingId}
    >
      <div className="mb-4 w-12 h-12 rounded-full bg-electric/10 flex items-center justify-center">
        <Icon className="text-electric w-6 h-6" aria-hidden="true" />
      </div>

      <h3
        id={headingId}
        className="text-navy font-heading text-lg font-semibold mb-2"
      >
        {title}
      </h3>
      <p className="text-navy/80 font-body text-sm mb-4">{description}</p>
      <Button
        href={link}
        variant="ghost"
        animate
        label="Learn More"
        iconRight={ArrowRight}
        iconAnimate
        aria-label={`Learn more about ${title}`}
      />
    </article>
  );
};

export default ProductCard;
