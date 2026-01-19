import Button from "@/app/ui/components/shared/Button";
import PageLayout from "@/app/ui/components/shared/PageLayout";

interface CTA {
  label: string;
  href: string;
}

interface AboutHeroSectionProps {
  tagline: string;
  heading: string;
  subheading: string;
  primaryCTA: CTA;
  secondaryCTA?: CTA;
}

const AboutHeroSection = ({
  tagline,
  heading,
  subheading,
  primaryCTA,
  secondaryCTA,
}: AboutHeroSectionProps) => {
  return (
    <div className="relative bg-dark text-light overflow-hidden">
      <PageLayout
        id="about-hero"
        className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center"
        padding="lg"
      >
        {/* Tagline with typing effect */}
        <p
          className="text-electric max-w-md font-body text-md mb-4 typing-effect overflow-hidden"
          aria-label={tagline}
        >
          {tagline}
        </p>

        {/* Main Headline */}
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl sm:text-6xl font-heading font-extrabold leading-tight tracking-tight mb-6 bg-gradient-to-r from-electric via-teal to-navy bg-clip-text text-transparent drop-shadow-md fade-in slide-in-up">
            {heading}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-light/80 max-w-2xl mx-auto mb-10 px-4 py-4 fade-in slide-in-up animation-delay-300">
            {subheading}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button {...primaryCTA} variant="primary" animate />
            {secondaryCTA && (
              <Button {...secondaryCTA} variant="outline" animate />
            )}
          </div>
        </div>
      </PageLayout>

      {/* Background Decoration Blobs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 bg-electric opacity-20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-coral opacity-20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
    </div>
  );
};

export default AboutHeroSection;
