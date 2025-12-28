const LeadPipelineCard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 w-full max-w-md mx-auto relative z-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">Lead Pipeline</h3>
        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
          Real-time
        </span>
      </div>

      <div className="space-y-5">
        {/* New Leads */}
        <div>
          <div className="flex justify-between text-sm mb-1 font-medium text-gray-700">
            <span className="border-l-4 border-blue-600 pl-2">New Leads</span>
            <span className="text-blue-600 font-bold">145</span>
          </div>
          <div className="h-2 bg-blue-50 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 w-[70%] rounded-full"></div>
          </div>
        </div>

        {/* Contacted */}
        <div>
          <div className="flex justify-between text-sm mb-1 font-medium text-gray-700">
            <span className="border-l-4 border-purple-500 pl-2">Contacted</span>
            <span className="text-purple-500 font-bold">98</span>
          </div>
          <div className="h-2 bg-purple-50 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 w-[55%] rounded-full"></div>
          </div>
        </div>

        {/* Qualified */}
        <div>
          <div className="flex justify-between text-sm mb-1 font-medium text-gray-700">
            <span className="border-l-4 border-orange-500 pl-2">Qualified</span>
            <span className="text-orange-500 font-bold">67</span>
          </div>
          <div className="h-2 bg-orange-50 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500 w-[40%] rounded-full"></div>
          </div>
        </div>

        {/* Converted */}
        <div>
          <div className="flex justify-between text-sm mb-1 font-medium text-gray-700">
            <span className="border-l-4 border-green-500 pl-2">Converted</span>
            <span className="text-green-500 font-bold">42</span>
          </div>
          <div className="h-2 bg-green-50 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 w-[25%] rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between">
        <div>
          <div className="text-xs text-gray-400 mb-1">Conversion Rate</div>
          <div className="text-xl font-bold text-green-600">28.9%</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400 mb-1">Avg. Lead Score</div>
          <div className="text-xl font-bold text-blue-600">72/100</div>
        </div>
      </div>
    </div>
  );
};

export default LeadPipelineCard;
