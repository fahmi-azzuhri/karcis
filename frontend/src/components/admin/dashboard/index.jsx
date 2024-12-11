import React from "react";
import Sidebar from "../sidebar";
import HeaderDashboard from "../header";
import { useLocation } from "react-router-dom";
import HomeDashboard from "./homeDashboard";
import EventDashboard from "./eventDashboard";
import ConcertDashboard from "./concertDashboard";

const Dashboard = () => {
  const isHome = useLocation().pathname === "/admin/dashboard/home";
  const isEvent = useLocation().pathname === "/admin/dashboard/events";
  const isConcert = useLocation().pathname === "/admin/dashboard/concerts";

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <HeaderDashboard
          title="Dashboard"
          page={
            isHome
              ? "Home"
              : isEvent
              ? "Event"
              : isConcert
              ? "Concert"
              : "Concert"
          }
        />
        {isHome ? (
          <HomeDashboard />
        ) : isEvent ? (
          <EventDashboard />
        ) : isConcert ? (
          <ConcertDashboard />
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
