"use client";

import { useState } from "react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import TabCard from "@/app/ui/components/shared/TabCard";
import { solutionList } from "@/app/ui/libs/constants/individual-product/intelligent-sourcing-platform";

const SolutionCategoriesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <PageLayout id="solution-categories">
      <SectionHeader
        title="AI Solution Categories for SMEs"
        subtitle="Browse intelligent AI solutions built to solve functional business needs in sales, marketing, HR, finance, and customer support."
      />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {solutionList.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`tab-panel-${index}`}
            id={`tab-${index}`}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300 font-body focus:outline-none focus:ring-2 focus:ring-electric
              ${
                activeTab === index
                  ? "bg-electric text-light shadow-md"
                  : "bg-white border border-gray-300 text-navy hover:bg-gray-100"
              }
            `}
          >
            <span className="text-lg" aria-hidden="true">
              {category.icon && category.icon({})}
            </span>
            <span className="hidden sm:inline">{category.title}</span>
          </button>
        ))}
      </div>

      {/* Active Tab Panel */}
      <div
        id={`tab-panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        <TabCard
          title={solutionList[activeTab].title}
          description={solutionList[activeTab].description}
          solutions={solutionList[activeTab].solutions}
          linkLabel={solutionList[activeTab].linkLabel}
          linkHref={solutionList[activeTab].linkHref}
        />
      </div>
    </PageLayout>
  );
};

export default SolutionCategoriesTabs;
