import { FaChevronDown } from "react-icons/fa";

interface AccordionItemProps {
  isOpen: boolean;
  question: string;
  answer: string;
  onToggle: () => void;
  index: number;
  ariaControlsId?: string;
  ariaLabelledById?: string;
}

const AccordionItem = ({
  isOpen,
  question,
  answer,
  onToggle,
  index,
  ariaControlsId = `faq-answer-${index}`,
  ariaLabelledById = `faq-question-${index}`,
}: AccordionItemProps) => {
  return (
    <div className="bg-light rounded-lg shadow-md overflow-hidden transition-all duration-300">
      <button
        id={ariaLabelledById}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        aria-expanded={isOpen}
        aria-controls={ariaControlsId}
        className="w-full flex justify-between items-center px-6 py-4 text-left text-navy font-heading font-medium focus:outline-none"
      >
        <h3 className="text-base font-heading font-semibold">{question}</h3>
        <FaChevronDown
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180 text-electric" : "rotate-0"
          }`}
        />
      </button>

      <div
        id={ariaControlsId}
        role="region"
        aria-labelledby={ariaLabelledById}
        aria-hidden={!isOpen}
        className={`
          text-navy/80 font-body text-sm transition-all duration-300 ease-in-out px-6 pb-4
          ${isOpen ? "accordion-open" : "accordion-close"}
        `}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
