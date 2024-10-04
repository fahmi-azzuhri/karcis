import React from "react";
import UpcomingEvent from "./upcomingEvent";
import TopSelling from "./topSelling";
import BrowseArts from "./browseArts";

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
      <div className="px-12">
        <h3 className="text-2xl font-bold text-blackDefault">Browse Arts</h3>
        <BrowseArts />
      </div>
    </>
  );
}

export default Events;
