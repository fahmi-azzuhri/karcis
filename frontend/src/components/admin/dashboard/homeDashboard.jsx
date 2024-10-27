import React from "react";
import SummaryCard from "../dashboard/summaryCard";
import { PiMoneyWavyDuotone } from "react-icons/pi";
import { FaUsers, FaUserPlus } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
function HomeDashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SummaryCard
          title="Today's Money"
          value="$53k"
          percentChange={55}
          icon={<PiMoneyWavyDuotone />}
        />
        <SummaryCard
          title="Today's Users"
          value="2,300"
          percentChange={3}
          icon={<FaUsers />}
        />
        <SummaryCard
          title="New Clients"
          value="3,462"
          percentChange={-2}
          icon={<FaUserPlus />}
        />
        <SummaryCard
          title="Sales"
          value="$103,430"
          percentChange={5}
          icon={<FaMoneyBillTrendUp />}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="font-semibold text-gray-700 mb-4">Website View</h3>
          <p className="text-sm text-gray-500">Last Campaign Performance</p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="font-semibold text-gray-700 mb-4">Daily Sales</h3>
          <p className="text-sm text-gray-500">15% increase in today's sales</p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="font-semibold text-gray-700 mb-4">Completed Tasks</h3>
          <p className="text-sm text-gray-500">Last Campaign Performance</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="font-semibold text-gray-700 mb-4">Projects</h3>
          {/* Isi projek akan ditambahkan di sini */}
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="font-semibold text-gray-700 mb-4">Orders Overview</h3>
          {/* Isi orders overview akan ditambahkan di sini */}
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
