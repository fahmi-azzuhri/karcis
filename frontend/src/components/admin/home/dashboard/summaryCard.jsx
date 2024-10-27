import React from "react";

const SummaryCard = ({ title, value, percentChange, icon }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-start">
      <div className="flex items-center text-gray-500 text-lg mb-4">
        {icon}
        <h4 className="ml-2 font-semibold text-gray-700">{title}</h4>
      </div>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
      <p
        className={`text-sm font-medium ${
          percentChange > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {percentChange > 0 ? `+${percentChange}%` : `${percentChange}%`}
      </p>
    </div>
  );
};

export default SummaryCard;
