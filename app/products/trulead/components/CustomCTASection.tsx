import { ArrowRight, CheckCircle2 } from "lucide-react";

import Button from "@/app/ui/components/shared/Button";

interface CustomCTASectionProps {
  title: string;
  subtitle: string;
  features: string[];
  buttons: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
}

const CustomCTASection = ({
  title,
  subtitle,
  features,
  buttons,
}: CustomCTASectionProps) => {
  return (
    <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-navy">{title}</h2>
        <p className="text-lg text-gray-600">{subtitle}</p>

        <ul className="space-y-3 pt-4">
          {features.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-gray-700 font-medium"
            >
              <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 w-full md:w-auto">
        <Button
          href={buttons.primary.href}
          label={buttons.primary.label}
          className="h-[60px] px-8 rounded-full !bg-blue-600 !text-white hover:!bg-blue-700 flex items-center justify-center font-bold text-lg"
          iconRight={ArrowRight}
        />
        <Button
          href={buttons.secondary.href}
          label={buttons.secondary.label}
          className="h-[60px] px-8 rounded-full !bg-blue-600 !text-white hover:!bg-blue-700 flex items-center justify-center font-bold text-lg"
        />
      </div>
    </div>
  );
};

export default CustomCTASection;
