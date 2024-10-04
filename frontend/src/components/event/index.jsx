import React from "react";
import UpcomingEvent from "./upcomingEvent";

function Events() {
  return (
    <>
      <div className="px-12">
        <h3 className="text-2xl font-bold text-blackDefault">Upcoming Event</h3>
        <UpcomingEvent />
      </div>
    </>
  );
}

export default Events;
