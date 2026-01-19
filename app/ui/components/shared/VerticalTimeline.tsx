import { ReactElement } from "react";

interface Step {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface VerticalTimelineProps {
  title: string;
  steps: Step[];
  animationOffset?: number;
}

const VerticalTimeline = ({
  title,
  steps,
  animationOffset = 0,
}: VerticalTimelineProps): ReactElement => {
  return (
    <div className="flex-1">
      <h3
        className="text-xl font-heading font-semibold text-navy mb-8 text-center md:text-left"
        id="timeline-title"
      >
        {title}
      </h3>

      <ol className="flex flex-col gap-y-12" aria-labelledby="timeline-title">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const delayStyle = {
            animationDelay: `${animationOffset + index * 100}ms`,
          };

          return (
            <li
              key={index}
              className="relative bg-light p-6 rounded-xl shadow-md fade-in slide-in-up hover-glow transition-all"
              style={delayStyle}
            >
              <div className="absolute left-4 top-6 w-10 h-10 rounded-full bg-electric text-light font-bold text-center leading-10 shadow-md">
                <span className="sr-only">Step {index + 1}</span>
                {index + 1}
              </div>

              <div className="ml-16 flex items-start gap-4">
                <Icon
                  className="w-6 h-6 mt-1 text-electric shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="text-lg font-heading font-semibold text-navy mb-1">
                    {step.title}
                  </h4>
                  <p className="text-navy/80 font-body">{step.description}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default VerticalTimeline;
