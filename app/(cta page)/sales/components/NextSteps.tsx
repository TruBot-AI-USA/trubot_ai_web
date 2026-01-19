import { ElementType } from "react";

export interface Step {
  title: string;
  description: string;
  icon: ElementType;
}

const NextSteps = ({ stepList }: { stepList: Step[] }) => {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-electric/20 z-0" />

      <div className="flex flex-col gap-20 z-10">
        {stepList.map((step, index) => {
          const Icon = step.icon;
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`md:grid md:grid-cols-2 items-center gap-10 px-4 ${
                !isEven ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Card block (reversed with RTL when odd) */}
              <div className="md:col-span-1 fade-in slide-in-up md:[direction:ltr]">
                <div className="bg-light p-6 rounded-xl shadow-md w-full max-w-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-electric/10 text-electric rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-navy">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-navy/80 font-body">{step.description}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="hidden md:flex justify-center items-center h-full">
                <div className="w-4 h-4 rounded-full bg-electric/60 border-4 border-light shadow-sm" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NextSteps;
