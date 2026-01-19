"use client";

import { useState } from "react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import ExpandableSpecCard from "@/app/ui/components/shared/ExpandableSpecCard";
import { techSpecList } from "@/app/ui/libs/constants/individual-product/ai-chatbots";

const TechSpecs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <PageLayout id="technical-specs" ariaLabelledby="technical-specs-heading">
      <SectionHeader
        title="Technical Specifications"
        subtitle="Robust and scalable features to meet your business needs."
        align="center"
      />

      <div className="space-y-4">
        {techSpecList.map((card, index) => (
          <ExpandableSpecCard
            key={index}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
            {...card}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default TechSpecs;
