import { FaChartLine, FaArrowDown } from "react-icons/fa";

const SplitScreenChart = () => {
  return (
    <div className="flex items-center gap-8 float">
      {/* Buyers side */}
      <div className="flex flex-col items-center">
        <FaArrowDown className="text-coral text-4xl animate-bounce" />
        <p className="text-sm mt-2 text-navy font-body">BUYERS -50%</p>
      </div>

      {/* Divider */}
      <div className="w-px h-12 bg-navy/20" />

      {/* Sellers side */}
      <div className="flex flex-col items-center">
        <FaChartLine className="text-teal text-4xl animate-pulse" />
        <p className="text-sm mt-2 text-navy font-body">SELLERS 10x ↑</p>
      </div>
    </div>
  );
};

export default SplitScreenChart;
