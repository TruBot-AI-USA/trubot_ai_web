"use client";

import { useState } from "react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import TabCard from "@/app/ui/components/shared/TabCard";
import { solutionCategoryList } from "@/app/ui/libs/constants/individual-product/ai-marketplace";

const SolutionCategoriesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <PageLayout id="solution-categories">
      <SectionHeader
        title="Solution Categories"
        subtitle="Whether you're seeking industry-tailored AI, functional capabilities, or technical excellence—our Marketplace has it all."
      />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {solutionCategoryList.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300 font-body
              ${
                activeTab === index
                  ? "bg-electric text-light shadow-md"
                  : "bg-white border border-gray-300 text-navy hover:bg-gray-100"
              }
            `}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`category-tab-${index}`}
            id={`tab-${index}`}
          >
            <span className="text-lg">
              {category.icon && category.icon({})}
            </span>
            <span className="hidden sm:inline">{category.title}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        id={`category-tab-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        <TabCard
          title={solutionCategoryList[activeTab].title}
          description={solutionCategoryList[activeTab].description}
          solutions={solutionCategoryList[activeTab].solutions}
          linkLabel={solutionCategoryList[activeTab].linkLabel}
          linkHref={solutionCategoryList[activeTab].linkHref}
        />
      </div>
    </PageLayout>
  );
};

export default SolutionCategoriesTabs;
