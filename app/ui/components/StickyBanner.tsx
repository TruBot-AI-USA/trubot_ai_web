const StickyBanner = ({
  message = "Building a Billion-Dollar 😄 Company — 🦄 Unicorn Mode ON",
}: {
  message?: string;
}) => {
  return (
    <section
      id="site-banner"
      aria-label="Site notification"
      role="region"
      aria-live="polite"
      className="sticky top-[72px] z-40 w-full bg-gradient-to-r from-electric via-navy to-electric text-white text-xs sm:text-sm font-medium text-center px-3 py-1 shadow-sm transition-opacity duration-300"
    >
      {message}
    </section>
  );
};

export default StickyBanner;
