import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewUpcomingEvent from "../../../../views/home/event/upcomingEvent";
import SettingsSlider from "../settingsSlider";
import axios from "axios";

function UpcomingEvent() {
  const settings = SettingsSlider();
  const [events, setEvents] = useState([]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };
  const getEvents = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/api/events`
      );
      setEvents(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

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
