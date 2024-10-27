import React from "react";

const SummaryCard = ({ title, value, percentChange, icon }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="flex items-center mb-2">
        {icon}
        <h4 className="text-lg font-medium ml-2">{title}</h4>
      </div>
      <p className="text-2xl font-semibold">{value}</p>
      <p
        className={`text-sm ${
          percentChange > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {percentChange > 0 ? `+${percentChange}%` : `${percentChange}%`}
      </p>
    </div>
  );
};

export default SummaryCard;
