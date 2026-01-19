"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

import { testimonialList } from "@/app/ui/libs/constants/individual-product/trusocial";

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const total = testimonialList.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-3xl">
        {/* Testimonial Card */}
        <div className="relative z-10 flex flex-col p-10 mt-10 text-center bg-white shadow-2xl md:p-14 rounded-3xl">
          <Quote className="mb-6 w-14 h-14 text-electric" />
          <blockquote className="mb-8 text-lg italic text-left text-navy">
            {testimonialList[index].text}
          </blockquote>

          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start">
              <div className="text-left">
                <div className="text-lg font-bold text-navy md:text-xl">
                  {testimonialList[index].name}
                </div>
                <div className="py-2 text-sm text-gray-500 md:text-base">
                  {testimonialList[index].role}
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonialList[index].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  {[...Array(5 - testimonialList[index].rating)].map((_, i) => (
                    <Star
                      key={`empty-${i}`}
                      className="w-5 h-5 text-gray-300"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button
                className="flex items-center justify-center w-10 h-10 transition bg-white rounded-full shadow-md text-electric hover:shadow-xl"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="flex items-center justify-center w-10 h-10 transition bg-white rounded-full shadow-md text-electric hover:shadow-xl"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        {/* Navigation & Dots */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="flex items-center gap-3 mt-2">
            {testimonialList.map((_, i) => (
              <span
                key={i}
                className={`inline-block w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index ? "bg-white" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
