"use client";

import { useState } from "react";

const PipelineSlider = () => {
  const [value, setValue] = useState(1);

  const projected = value * 10;

  return (
    <div className="w-full fade-in slide-in-left animation-delay-200">
      <h4 className="font-heading text-xl mb-4">Revenue Growth Projection</h4>

      <div className="mb-4 text-sm text-navy bg-light text-center py-2 rounded font-body w-64">
        Drag to simulate: ₹{value}M → ₹{projected}M+
      </div>

      <input
        type="range"
        min={1}
        max={10}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="w-full accent-electric"
      />

      <div className="mt-6">
        <div className="relative h-3 bg-gray-600 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal transition-all duration-700"
            style={{ width: `${value * 10}%` }}
          />
        </div>
        <div className="mt-2 text-xs text-gray-300 text-right font-body">
          Projected Pipeline: ₹{projected}M
        </div>
      </div>
    </div>
  );
};

export default PipelineSlider;
