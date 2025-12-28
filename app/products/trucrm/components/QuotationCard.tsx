import { Send, Download, FileText } from "lucide-react";

const QuotationCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden w-full max-w-md mx-auto rotate-1 hover:rotate-0 transition-all duration-500">
      <div className="p-6 border-b border-gray-50">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-green-100 p-2 rounded text-green-600">
              <FileText size={20} />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm">
                Quotation #Q-2024-1247
              </div>
              <div className="text-xs text-gray-500">Acme Corporation</div>
            </div>
          </div>
          <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-0.5 rounded">
            Pending
          </span>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Product License (x5)</span>
            <span className="font-medium">$2,500</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Implementation</span>
            <span className="font-medium">$1,200</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Training</span>
            <span className="font-medium">$800</span>
          </div>
          <div className="flex justify-between text-red-500">
            <span>Discount (10%)</span>
            <span>-$450</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-4 flex justify-between items-center">
        <div className="font-bold text-gray-900">Total Amount</div>
        <div className="font-bold text-xl text-green-600">$4,050</div>
      </div>
      <div className="p-4 flex gap-2">
        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2 rounded flex items-center justify-center gap-1">
          <Send size={12} /> Send Quote
        </button>
        <button className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-600 text-xs font-bold py-2 rounded flex items-center justify-center gap-1">
          <Download size={12} /> Download PDF
        </button>
      </div>
    </div>
  );
};

export default QuotationCard;
