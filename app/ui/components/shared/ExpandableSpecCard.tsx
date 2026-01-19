import { ChevronDown } from "lucide-react";

interface ExpandableSpecCardProps {
  icon: React.ElementType;
  title: string;
  items: string[];
  bgClass?: string;
  isOpen: boolean;
  onToggle: () => void;
  index?: number;
}

const ExpandableSpecCard = ({
  icon: Icon,
  title,
  items,
  bgClass = "bg-light",
  isOpen,
  onToggle,
  index = 0,
}: ExpandableSpecCardProps) => {
  const headingId = `spec-title-${index}`;
  const contentId = `spec-content-${index}`;

  return (
    <div
      className={`rounded-xl overflow-hidden shadow transition-all fade-in slide-in-up ${bgClass}`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <button
        id={headingId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        className="w-full flex items-center justify-between px-6 py-4 text-left group focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className="bg-electric/10 text-electric p-2 rounded-full">
            <Icon size={22} />
          </div>
          <h3 className="text-lg text-navy font-semibold font-heading">
            {title}
          </h3>
        </div>

        <ChevronDown
          className={`text-electric transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={headingId}
        aria-hidden={!isOpen}
        className={`transition-all px-6 ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        } overflow-hidden`}
      >
        <ul className="list-disc list-inside text-sm text-navy/80 space-y-2 pl-1">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpandableSpecCard;
