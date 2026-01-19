const SavingsChart = () => {
  const savings = [20, 35, 50];

  return (
    <div className="space-y-4 fade-in slide-in-up animation-delay-300">
      <h4 className="text-navy text-lg font-heading font-semibold mb-4">
        Before vs After Aggregation
      </h4>

      <ul className="space-y-3">
        {savings.map((percent, index) => (
          <li key={index} className="text-sm font-body text-navy/80">
            <div className="flex justify-between mb-1">
              <span>Plan {index + 1}</span>
              <span className="text-electric">{percent}% Saved</span>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-electric transition-all duration-700"
                style={{ width: `${percent}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavingsChart;
