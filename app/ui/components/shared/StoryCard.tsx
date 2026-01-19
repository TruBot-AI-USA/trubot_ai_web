import Link from "next/link";
import {
  FaBullseye,
  FaLightbulb,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

interface StoryCardProps {
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  linkLabel: string;
  linkHref: string;
  delay?: number;
}

const StoryCard = ({
  title,
  challenge,
  solution,
  results,
  linkLabel,
  linkHref,
  delay = 0,
}: StoryCardProps) => {
  const titleId = `storycard-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <article
      className={`flex flex-col justify-between bg-light border border-gray-200 rounded-2xl p-8 
        shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300
        fade-in slide-in-up`}
      style={{ animationDelay: `${delay}ms` }}
      aria-labelledby={titleId}
    >
      {/* Title */}
      <header className="space-y-2">
        <h3
          id={titleId}
          className="text-2xl font-bold text-navy font-heading text-center"
        >
          {title}
        </h3>
      </header>

      {/* Main Story Content */}
      <section className="space-y-6" aria-label="Case Study Details">
        {/* Challenge */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <FaBullseye className="text-electric" aria-hidden="true" />
            <h4 className="font-semibold text-navy font-heading">Challenge:</h4>
          </div>
          <p className="text-navy/80 text-sm leading-relaxed font-body">
            {challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <FaLightbulb className="text-electric" aria-hidden="true" />
            <h4 className="font-semibold text-navy font-heading">Solution:</h4>
          </div>
          <p className="text-navy/80 text-sm leading-relaxed font-body">
            {solution}
          </p>
        </div>

        {/* Results */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <FaChartLine className="text-electric" aria-hidden="true" />
            <h4 className="font-semibold text-navy font-heading">Results:</h4>
          </div>
          <ul className="list-disc list-inside text-sm text-navy/80 font-body space-y-1">
            {results.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <footer className="pt-6 text-center">
        <Link
          href={linkHref}
          aria-label={`Read the full story: ${title}`}
          className="inline-flex items-center gap-2 text-electric font-semibold hover:gap-3 transition-all font-body"
        >
          {linkLabel}
          <FaArrowRight className="text-electric" aria-hidden="true" />
        </Link>
      </footer>
    </article>
  );
};

export default StoryCard;
