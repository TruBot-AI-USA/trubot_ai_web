"use client";

import { useState } from "react";

import PageLayout from "./PageLayout";
import SectionHeader from "./SectionHeader";
import AccordionItem from "./AccordionItem";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  faqList: FAQItem[];
}

const FAQSection = ({
  id = "faq",
  title,
  subtitle,
  faqList,
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <PageLayout id={id} as="section" ariaLabelledby={`${id}-title`}>
      <SectionHeader title={title} subtitle={subtitle} align="center" />

      <div className="mt-12 max-w-3xl mx-auto space-y-4">
        {faqList.map((faq, index) => (
          <AccordionItem
            key={index}
            index={index}
            isOpen={openIndex === index}
            question={faq.question}
            answer={faq.answer}
            onToggle={() => toggleFAQ(index)}
            ariaControlsId={`faq-answer-${index}`}
            ariaLabelledById={`faq-question-${index}`}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default FAQSection;
