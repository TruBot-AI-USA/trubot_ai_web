const ProgressBar = () => {
  return (
    <div className="mt-8 w-full max-w-3xl mx-auto">
      <div className="h-3 rounded-full bg-gray-300 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-electric to-teal scroll-progress" />
      </div>

      <p className="text-center mt-2 text-electric font-body text-sm font-semibold">
        Threshold Achieved!
      </p>
    </div>
  );
};

export default ProgressBar;
