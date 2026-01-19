"use client";

import { useState } from "react";

import ExpandableSpecCard from "@/app/ui/components/shared/ExpandableSpecCard";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import { bluePrintList } from "@/app/ui/libs/constants/partners/startup-program";

const BluePrintTimeLine = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageLayout id="blueprint">
      <SectionHeader
        title="The 12-Week Blueprint"
        subtitle="Each phase is precision-built to unlock exponential growth."
      />
      <div className="space-y-4 mt-10">
        {bluePrintList.map((block, index) => (
          <ExpandableSpecCard
            key={index}
            icon={block.icon}
            title={block.title}
            items={block.items}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
            index={index}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default BluePrintTimeLine;
