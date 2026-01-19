import { FC, ElementType } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface CheckListProps {
  items: string[];
  columns?: 1 | 2;
  className?: string;
  icon?: ElementType;
}

const CheckList: FC<CheckListProps> = ({
  items,
  columns = 2,
  className = "",
  icon: Icon = FaCheckCircle,
}) => {
  const gridCols = columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1";

  return (
    <ul
      className={`grid ${gridCols} gap-x-10 gap-y-6 text-navy font-body text-base ${className}`}
      role="list"
    >
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start fade-in slide-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Icon
            className="text-electric mt-1 mr-3 shrink-0"
            aria-hidden="true"
            focusable="false"
          />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default CheckList;
