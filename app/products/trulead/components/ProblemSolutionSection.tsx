import Image from "next/image";
import { ElementType } from "react";

interface Feature {
  icon: ElementType;
  title: string;
  description: string;
}

interface ProblemSolutionSectionProps {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: Feature[];
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

const ProblemSolutionSection = ({
  id,
  badge,
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  reversed = false,
}: ProblemSolutionSectionProps) => {
  const isProblem = id === "problem";

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-16 ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <span
          className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
            isProblem
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {badge}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
          {title}
        </h2>
        <p className="text-lg text-gray-600">{description}</p>

        <div className="space-y-4 pt-4">
          {features.map((feat, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100"
            >
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                  isProblem
                    ? "bg-red-50 text-red-500"
                    : "bg-green-50 text-green-500"
                }`}
              >
                <feat.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  {feat.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Side */}
      <div className="flex-1 w-full relative">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionSection;
