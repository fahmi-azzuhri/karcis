import React from "react";
import UpcomingEvent from "./upcomingEvent";
import TopSelling from "./topSelling";

function Events() {
  return (
    <>
      <div className="px-12">
        <h3 className="text-2xl font-bold text-blackDefault">Upcoming Event</h3>
        <UpcomingEvent />
      </div>
      <div className="px-12">
        <h3 className="text-2xl font-bold text-blackDefault">Top Selling</h3>
        <TopSelling />
      </div>
    </>
  );
}

export default Events;
