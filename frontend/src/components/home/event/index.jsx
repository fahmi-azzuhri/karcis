import React from "react";
import UpcomingEvent from "./upcomingEvent";
import BrowseArts from "./browseArts";
import BrowseConcerts from "./browseConcerts";

function Events() {
  return (
    <>
      <div className="px-12">
        <h3 className="text-2xl font-bold text-blackDefault">Upcoming Event</h3>
        <UpcomingEvent />
      </div>
      <div className="px-12">
        <h3 className="text-2xl font-bold text-blackDefault">Browse Arts</h3>
        <BrowseArts />
      </div>
      <div className="px-12">
        <h3 className="text-2xl font-bold text-blackDefault">
          Browse Concerts
        </h3>
        <BrowseConcerts />
      </div>
    </>
  );
}

export default Events;
