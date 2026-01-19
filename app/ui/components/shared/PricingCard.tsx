import Button from "@/app/ui/components/shared/Button";

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  cta: string;
  link: string;
  popular?: boolean;
  index?: number;
}

const PricingCard = ({
  name,
  price,
  features,
  cta,
  link,
  popular = false,
  index = 0,
}: PricingCardProps) => {
  const headingId = `pricing-plan-${name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <article
      className={`relative rounded-xl p-6 transition-all transform fade-in slide-in-up hover-scale hover-glow ${
        popular ? "bg-electric text-white" : "bg-light border border-gray-200"
      }`}
      style={{ animationDelay: `${index * 120}ms` }}
      aria-labelledby={headingId}
    >
      {popular && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-light text-electric text-xs font-bold px-3 py-1 rounded-full shadow"
          aria-hidden="true"
        >
          Most Popular
        </div>
      )}

      <h3
        id={headingId}
        className={`text-2xl font-heading font-bold mb-2 ${
          popular ? "text-white" : "text-navy"
        }`}
      >
        {name}
      </h3>

      <p
        className={`text-lg font-body font-semibold mb-4 ${
          popular ? "text-white" : "text-electric"
        }`}
      >
        {price}
      </p>

      <ul
        className={`list-disc list-inside text-sm font-body mb-6 space-y-1 ${
          popular ? "text-white/90" : "text-navy/70"
        }`}
      >
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      <div className="transition hover-scale hover-glow">
        <Button
          href={link}
          variant={popular ? "secondary" : "primary"}
          fullWidth
          animate
          label={cta}
          aria-label={`Select the ${name} plan for ${price}`}
        />
      </div>
    </article>
  );
};

export default PricingCard;
