const AIScoreCard = () => {
  return (
    <div className="absolute top-8 -right-4 md:-right-12 bg-white p-6 rounded-2xl shadow-xl animate-in fade-in slide-in-from-bottom-6 hidden md:block max-w-[240px] z-20">
      <p className="text-gray-500 text-xs font-bold uppercase tracking-wide mb-2">
        AI Insight Score
      </p>
      <div className="text-4xl font-bold text-green-600 mb-1">98/100</div>
      <div className="text-gray-500 text-xs font-medium">
        High buying intent
      </div>
    </div>
  );
};

export default AIScoreCard;
