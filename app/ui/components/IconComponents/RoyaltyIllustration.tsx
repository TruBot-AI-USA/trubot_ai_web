import { FC } from "react";
import { FaHandshake, FaCrown, FaChartLine } from "react-icons/fa";

const RoyaltyIllustration: FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto text-electric float">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="bg-electric/10 p-6 rounded-full shadow-md hover:shadow-lg transition hover-scale">
          <FaCrown className="text-electric w-12 h-12" />
        </div>

        <div className="flex space-x-8">
          <div className="bg-teal/10 p-5 rounded-full hover:shadow-md transition hover-raise">
            <FaHandshake className="text-teal w-10 h-10" />
          </div>
          <div className="bg-coral/10 p-5 rounded-full hover:shadow-md transition hover-raise">
            <FaChartLine className="text-coral w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyaltyIllustration;
