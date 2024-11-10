import React from "react";

function ProgressbarSection() {
  const percentage = 25;

  return (
    <div>
      <div className="flex flex-row justify-between">
      <p className="text-sm text-gray-500 pb-2">Pages 120 of 306</p>
      <p className="text-sm" >{percentage}%</p>

      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-orange-500 h-2 rounded-full"
          style={{ width: 45 }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressbarSection;
