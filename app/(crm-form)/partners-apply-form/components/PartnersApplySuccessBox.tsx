import Button from "@/app/ui/components/shared/Button";

const PartnersApplySuccessBox = () => {
  return (
    <div className="w-full mx-auto bg-light border border-gray-200 rounded-2xl shadow-xl p-8 text-center fade-in scale-up">
      <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg
          className="w-8 h-8 text-electric"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h3 className="text-2xl font-heading text-electric mb-4">
        Application submitted successfully!
      </h3>

      <p className="text-navy/80 font-body mb-6">
        Thank you for applying to become a TruBot AI partner. Our team will
        review your application and get back to you within 5 business days.
      </p>
      <Button href="/" label="Back to Home" variant="primary" animate />
    </div>
  );
};

export default PartnersApplySuccessBox;
