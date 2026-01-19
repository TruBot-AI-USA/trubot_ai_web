"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import ProductCard from "@/app/ui/components/shared/ProductCard";
import { productList } from "@/app/ui/libs/constants/partners/white-label-partners";

const ProductSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <PageLayout id="white-label-products">
      <SectionHeader
        title="What You Can White Label"
        subtitle="All products are fully modular and customizable under your brand."
      />

      <div className="relative">
        {/* Scroll Buttons */}
        <button
          className="hidden md:flex items-center justify-center absolute top-1/2 left-0 transform -translate-y-1/2 bg-white shadow-md hover:shadow-lg rounded-full w-10 h-10 z-10"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <FaChevronLeft className="text-electric" />
        </button>

        <button
          className="hidden md:flex items-center justify-center absolute top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-md hover:shadow-lg rounded-full w-10 h-10 z-10"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <FaChevronRight className="text-electric" />
        </button>

        {/* Scrollable Card Container */}
        <div className="overflow-x-auto -mx-4 px-4" ref={scrollRef}>
          <div className="flex space-x-6 md:space-x-8 snap-x snap-mandatory pb-6">
            {productList.map((product, index) => (
              <div
                key={index}
                className="snap-start shrink-0 w-[280px] sm:w-[320px]"
              >
                <ProductCard
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                  link={product.link}
                  animationDelay={index * 100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductSection;
