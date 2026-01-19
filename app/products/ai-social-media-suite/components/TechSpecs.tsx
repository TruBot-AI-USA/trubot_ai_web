"use client";

import { useState } from "react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import ExpandableSpecCard from "@/app/ui/components/shared/ExpandableSpecCard";
import { techSpecList } from "@/app/ui/libs/constants/individual-product/ai-social-media-suite";

const TechSpecs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <PageLayout id="specifications" ariaLabelledby="specifications-heading">
      <SectionHeader
        title="Technical Specifications"
        subtitle="Built for power, flexibility, and seamless integration."
      />

      <div
        className="space-y-4"
        aria-label="Expandable technical specifications"
      >
        {techSpecList.map((spec, index) => (
          <ExpandableSpecCard
            key={index}
            {...spec}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => toggleCard(index)}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default TechSpecs;
