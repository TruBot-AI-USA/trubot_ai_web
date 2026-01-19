interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left" | "right";
  className?: string;
  animate?: boolean;
}

const SectionHeader = ({
  title,
  subtitle,
  align = "center",
  className = "",
  animate = true,
}: SectionHeaderProps) => {
  const alignment = {
    center: "text-center",
    right: "text-right",
    left: "text-left",
  }[align];

  const subtitleWrapper = {
    center: "mx-auto",
    right: "ml-auto",
    left: "",
  }[align];

  const headingId = `section-heading-${title
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  return (
    <div
      className={`mb-8 md:mb-10 ${alignment} ${className} ${
        animate ? "fade-in slide-in-up" : ""
      }`}
    >
      <h2
        id={headingId}
        className="text-3xl font-heading text-navy mb-4 leading-tight"
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`font-body text-navy text-opacity-70 max-w-2xl ${subtitleWrapper}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
