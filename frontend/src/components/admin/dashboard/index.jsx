import React from "react";
import Sidebar from "../sidebar";
import HeaderDashboard from "../header";
import { useLocation } from "react-router-dom";
import HomeDashboard from "./homeDashboard";
import EventDashboard from "./eventDashboard";

const Dashboard = () => {
  const isHome = useLocation().pathname === "/admin/dashboard/home";
  const isEvent = useLocation().pathname === "/admin/dashboard/events";
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <HeaderDashboard title="Dashboard" page={isHome ? "Home" : "Event "} />
        {isHome ? <HomeDashboard /> : isEvent ? <EventDashboard /> : null}
      </div>
    </div>
  );
};

export default Dashboard;
