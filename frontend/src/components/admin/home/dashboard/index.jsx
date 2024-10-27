import React from "react";
import SummaryCard from "./summaryCard";
import Sidebar from "../../sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <input
            type="text"
            placeholder="Search"
            className="p-2 border rounded"
          />
        </header>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <SummaryCard
            title="Today's Money"
            value="$53k"
            percentChange={55}
            icon={<i className="fas fa-dollar-sign"></i>}
          />
          <SummaryCard
            title="Today's Users"
            value="2,300"
            percentChange={3}
            icon={<i className="fas fa-users"></i>}
          />
          <SummaryCard
            title="New Clients"
            value="3,462"
            percentChange={-2}
            icon={<i className="fas fa-user-plus"></i>}
          />
          <SummaryCard
            title="Sales"
            value="$103,430"
            percentChange={5}
            icon={<i className="fas fa-chart-line"></i>}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow-md">Website View</div>
          <div className="bg-white p-4 rounded shadow-md">Daily Sales</div>
          <div className="bg-white p-4 rounded shadow-md">Completed Tasks</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="font-bold mb-4">Projects</h3>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="font-bold mb-4">Orders Overview</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
