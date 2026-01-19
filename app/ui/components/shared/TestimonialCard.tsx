import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const TestimonialCard = ({
  quote,
  name,
  title,
  company,
}: TestimonialCardProps) => {
  return (
    <figure
      className="bg-light rounded-xl shadow-lg p-8 text-center fade-in slide-in-up transition duration-700 ease-in-out"
      aria-label="Customer Testimonial"
    >
      <FaQuoteLeft
        className="text-electric text-3xl mb-4 mx-auto opacity-50"
        aria-hidden="true"
      />

      <blockquote className="text-lg text-navy/90 italic mb-6 font-body">
        “{quote}”
      </blockquote>

      <figcaption className="text-navy font-heading font-semibold text-base">
        {name}
        <div className="text-sm text-navy/70 font-light font-body">
          {title}, {company}
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
