import React, { useState, useEffect } from "react";
import ViewEventDashboard from "../../../views/admin/dashboard/eventDashboard";
import axios from "axios";

function EventDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleEventAdded = () => {
    setIsOpen(false);
    fetchEvents();
  };
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

  return (
    <ViewEventDashboard
      handleCloseModal={handleCloseModal}
      handleEventAdded={handleEventAdded}
      isOpen={isOpen}
      events={events}
      handleOpenModal={handleOpenModal}
    />
  );
}

export default EventDashboard;
