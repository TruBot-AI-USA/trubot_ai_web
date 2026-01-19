import { ElementType } from "react";

interface HorizontalTimelineProps {
  stepNumber: number;
  title: string;
  description: string;
  delay?: number;
  icon?: ElementType;
}

const HorizontalTimeline = ({
  stepNumber,
  title,
  description,
  delay = 0,
  icon: Icon,
}: HorizontalTimelineProps) => {
  const delayStyle = {
    animationDelay: `${delay}ms`,
  };

  const titleId = `timeline-step-title-${stepNumber}`;

  return (
    <div
      className="flex flex-col items-center text-center space-y-4 fade-in slide-in-up transition-all hover-scale"
      style={delayStyle}
      role="group"
      aria-roledescription="timeline step"
      aria-labelledby={titleId}
    >
      {/* Step Circle */}
      <div
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-electric text-light font-heading font-bold text-lg shadow-md hover-glow"
        aria-hidden="true"
      >
        {Icon ? (
          <Icon className="w-6 h-6" />
        ) : (
          String(stepNumber).padStart(2, "0")
        )}
      </div>

      {/* Title */}
      <h4 id={titleId} className="text-xl font-heading font-semibold text-navy">
        {title}
      </h4>

      {/* Description */}
      <p className="text-sm text-navy/70 leading-relaxed max-w-xs font-body">
        {description}
      </p>
    </div>
  );
};

export default HorizontalTimeline;
