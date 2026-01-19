import { ElementType } from "react";

interface ProcessStepCardProps {
  number: string;
  icon: ElementType;
  title: string;
  description: string;
  color: string;
}

const ProcessStepCard = ({
  number,
  icon: Icon,
  title,
  description,
  color,
}: ProcessStepCardProps) => {
  return (
    <div className="relative p-8 rounded-2xl border border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
      <div
        className={`text-6xl font-bold opacity-10 absolute top-4 right-4 ${
          color.split(" ")[0]
        }`}
      >
        {number}
      </div>
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${color}`}
      >
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ProcessStepCard;
