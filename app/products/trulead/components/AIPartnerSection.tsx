import PageLayout from "@/app/ui/components/shared/PageLayout";

const AIPartnerSection = () => {
  return (
    <div className="bg-[#1034A6] text-white py-5 text-center">
      <PageLayout>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          We Didnt Build Just Another Database <br />
        </h2>
        <h2 className="text-blue-300 text-3xl md:text-5xl font-bold">
          We Built an AI Partner
        </h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mt-10 mb-10">
          TruLead continuously learns from interactions, market signals, and
          evolving buyer behavior—making it smarter every day.
        </p>
      </PageLayout>
    </div>
  );
};

export default AIPartnerSection;
