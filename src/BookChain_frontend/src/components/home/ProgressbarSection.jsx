import React from "react";

function ProgressbarSection() {
  return (
    <div>
      <p className="text-sm text-gray-500 pb-2">Pages 120 of 306</p>
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
