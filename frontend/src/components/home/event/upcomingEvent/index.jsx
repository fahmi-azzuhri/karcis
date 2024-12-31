import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewUpcomingEvent from "../../../../views/home/event/upcomingEvent";
import SettingsSlider from "../settingsSlider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoading from "../../../../views/skeleton";
function UpcomingEvent() {
  const settings = SettingsSlider();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const {
    data: events,
    isFetching,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["upcoming events"],
    queryFn: async () =>
      (await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/api/events`)).data,
  });

  if (isFetching || isLoading) {
    return <SkeletonLoading />;
  }

  if (error) {
    console.error(error);
    return <div>Error loading events!</div>;
  }

  if (!events || events.length === 0) {
    return (
      <div className="text-center text-gray-500">No upcoming events found.</div>
    );
  }
  return (
    <ViewUpcomingEvent
      settings={settings}
      Slider={Slider}
      events={events}
      formatDate={formatDate}
    />
  );
}

export default UpcomingEvent;
