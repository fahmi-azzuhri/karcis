import React, { useState, useEffect } from "react";
import axios from "axios";
import ViewPriceDashboard from "../../../views/admin/dashboard/priceDashboard";
function PriceDashboard() {
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/api/events`
      );
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  return <ViewPriceDashboard events={events} />;
}

export default PriceDashboard;
