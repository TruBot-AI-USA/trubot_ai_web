"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import Button from "./Button";

interface PartnershipType {
  title: string;
  subtitle: string;
  detail: string;
  requirements: string[];
  benefits: string[];
  ctaLabel?: string;
  ctaHref?: string;
  index?: number;
}

interface PartnershipAccordionProps {
  partnerships: PartnershipType[];
}

const PartnershipAccordion = ({ partnerships }: PartnershipAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {partnerships.map(
        (
          {
            title,
            subtitle,
            detail,
            requirements,
            benefits,
            ctaLabel,
            ctaHref,
            index,
          },
          idx
        ) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="bg-light border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Header */}
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full px-4 sm:px-6 py-4 flex flex-row sm:items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={isOpen}
                aria-controls={`partnership-content-${idx}`}
              >
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-0">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-navy mb-1 break-words">
                      {title}
                    </h3>
                    <p className="text-navy/70 font-body text-sm break-words">
                      {subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  <div className="flex align-center justify-center text-electric">
                    {isOpen ? (
                      <FaChevronDown className="pl-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200" />
                    ) : (
                      <FaChevronRight className="pl-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200" />
                    )}
                  </div>
                </div>
              </button>

              {/* Content */}
              <div
                id={`partnership-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-4 sm:space-y-6">
                  {/* Description */}
                  <div>
                    <p className="text-navy/80 font-body leading-relaxed text-sm sm:text-base">
                      {detail}
                    </p>
                  </div>

                  {/* Requirements and Benefits Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {/* Requirements */}
                    <div className="bg-gray-soft rounded-lg p-3 sm:p-4">
                      <h4 className="font-heading text-electric text-base sm:text-lg mb-3 font-semibold">
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {requirements.map((requirement, reqIndex) => (
                          <li
                            key={reqIndex}
                            className="flex items-start gap-2 text-xs sm:text-sm text-navy/80 font-body"
                          >
                            <span className="w-1.5 h-1.5 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                            <span className="break-words">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="bg-gray-soft rounded-lg p-3 sm:p-4">
                      <h4 className="font-heading text-electric text-base sm:text-lg mb-3 font-semibold">
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="flex items-start gap-2 text-xs sm:text-sm text-navy/80 font-body"
                          >
                            <span className="w-1.5 h-1.5 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                            <span className="break-words">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  {ctaLabel && ctaHref && (
                    <div className="text-center pt-4">
                      <Button
                        href={ctaHref}
                        label={ctaLabel}
                        variant="primary"
                        animate
                        className="w-full sm:w-auto"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default PartnershipAccordion;
