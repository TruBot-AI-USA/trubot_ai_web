import { FC } from "react";
import Link from "next/link";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

interface JobCardProps {
  id: string;
  title: string;
  location: string;
  type: string;
  href: string;
  index?: number;
}

const JobCard: FC<JobCardProps> = ({
  id,
  title,
  location,
  type,
  href,
  index = 0,
}) => {
  const typeColor = {
    "Full-Time / Part-Time": "bg-teal/10 text-teal",
    "Part-Time": "bg-electric/10 text-electric",
    Internship: "bg-coral/10 text-coral",
    "Part-Time / Advisory": "bg-navy/10 text-navy",
  }[type];

  const headingId = `job-${id}`;

  return (
    <article
      className={`
        relative bg-light border border-gray-200 rounded-xl p-6
        shadow-sm transition-all duration-300 ease-in-out
        hover:shadow-md hover:border-electric hover:-translate-y-1
        fade-in slide-in-up
      `}
      style={{ animationDelay: `${index * 100}ms` }}
      aria-labelledby={headingId}
    >
      {/* Badge */}
      <span
        className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${typeColor}`}
        aria-hidden="true"
      >
        {type}
      </span>

      {/* Title */}
      <h3
        id={headingId}
        className="text-xl font-heading font-semibold text-navy mb-4 mt-10"
      >
        {title}
      </h3>

      {/* Location */}
      <div className="flex items-center text-sm text-navy/70 font-body mb-6">
        <FaMapMarkerAlt className="mr-2 text-electric" aria-hidden="true" />
        <span>{location}</span>
      </div>

      {/* CTA */}
      <div className="flex justify-end">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-electric font-semibold font-body hover:gap-3 transition-all duration-300"
          aria-label={`View details for ${title} role`}
        >
          View Role
          <FaArrowRight className="text-electric text-sm" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export default JobCard;
