import React from "react";
import Sidebar from "../sidebar";
import HeaderDashboard from "../header";
import { useLocation } from "react-router-dom";
import HomeDashboard from "./homeDashboard";
import EventDashboard from "./eventDashboard";
import ConcertDashboard from "./concertDashboard";
import ArtDashboard from "./artDashboard";

const Dashboard = () => {
  const isHome = useLocation().pathname === "/admin/dashboard/home";
  const isEvent = useLocation().pathname === "/admin/dashboard/events";
  const isConcert = useLocation().pathname === "/admin/dashboard/concerts";
  const isArt = useLocation().pathname === "/admin/dashboard/arts";

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
              : isArt
              ? "Art"
              : "Art"
          }
        />
        {isHome ? (
          <HomeDashboard />
        ) : isEvent ? (
          <EventDashboard />
        ) : isConcert ? (
          <ConcertDashboard />
        ) : isArt ? (
          <ArtDashboard />
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
