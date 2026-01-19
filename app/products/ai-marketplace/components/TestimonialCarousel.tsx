"use client";

import { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaRegCircle,
} from "react-icons/fa";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import TestimonialCard from "@/app/ui/components/shared/TestimonialCard";
import { testimonialList } from "@/app/ui/libs/constants/individual-product/ai-marketplace";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialList.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonialList.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialList.length);
  };

  return (
    <PageLayout id="testimonials">
      <SectionHeader
        title="What Our Customers Say"
        subtitle="Real feedback from enterprises, SMEs, and solution providers"
      />

      <div className="mt-12 relative max-w-3xl mx-auto">
        <TestimonialCard {...testimonialList[activeIndex]} />

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="bg-white/70 p-2 rounded-full shadow hover:shadow-md transition"
          >
            <FaChevronLeft className="w-5 h-5 text-navy hover:text-electric" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="bg-white/70 p-2 rounded-full shadow hover:shadow-md transition"
          >
            <FaChevronRight className="w-5 h-5 text-navy hover:text-electric" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div
          className="flex justify-center mt-6 space-x-2"
          role="tablist"
          aria-label="Testimonial navigation"
        >
          {testimonialList.map((_, idx) => {
            const isActive = idx === activeIndex;
            const Icon = isActive ? FaCircle : FaRegCircle;

            return (
              <button
                key={`dot-${idx}`}
                className="p-1"
                aria-label={`Go to testimonial ${idx + 1}`}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(idx)}
              >
                <Icon
                  className={`${
                    isActive
                      ? "text-electric"
                      : "text-navy/40 hover:text-electric"
                  } w-3 h-3 transition`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default TestimonialCarousel;
