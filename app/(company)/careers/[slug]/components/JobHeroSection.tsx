import { FC } from "react";
import { MdMail } from "react-icons/md";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import Button from "@/app/ui/components/shared/Button";

interface JobHeroSectionProps {
  title: string;
  location: string;
  type: string;
  shortDescription: string;
  applyHref?: string;
}

const JobHeroSection: FC<JobHeroSectionProps> = ({
  title,
  location,
  type,
  shortDescription,
  applyHref = "#apply",
}) => {
  return (
    <div
      id="job-hero"
      role="region"
      aria-labelledby="job-hero-heading"
      aria-describedby="job-hero-description"
      className="relative bg-gradient-to-br from-electric to-navy py-24 px-6 overflow-hidden"
    >
      <PageLayout className="text-center relative z-10">
        <div className="max-w-4xl mx-auto fade-in text-light slide-in-up">
          <h1
            id="job-hero-heading"
            className="text-5xl md:text-6xl font-heading font-extrabold mb-6"
          >
            {title}
          </h1>

          <div className="flex justify-center gap-4 mb-4 text-sm font-medium">
            <span className="flex items-center bg-light/10 px-4 py-1 rounded-full">
              <FaMapMarkerAlt className="mr-2 text-light/80" />
              {location}
            </span>

            <span className="flex items-center bg-light/10 px-4 py-1 rounded-full">
              <FaClock className="mr-2 text-light/80" />
              {type}
            </span>
          </div>

          <p
            id="job-hero-description"
            className="text-lg md:text-xl text-light/90 mb-8 max-w-2xl mx-auto font-body"
          >
            {shortDescription}
          </p>

          <Button
            href={applyHref}
            iconLeft={MdMail}
            label="Apply Now"
            aria-label={`Apply now for ${title} position`}
            variant="teal"
            target="_blank"
            animate
          />
        </div>
      </PageLayout>
    </div>
  );
};

export default JobHeroSection;
