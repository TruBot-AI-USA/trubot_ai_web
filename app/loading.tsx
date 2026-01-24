import PageLayout from "@/app/ui/components/shared/PageLayout";

const Loading = () => {
  return (
    <PageLayout
      padding="lg"
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading content"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="pulse bg-gray-soft rounded-xl h-[200px] w-full shadow-sm"
            aria-hidden="true"
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default Loading;
