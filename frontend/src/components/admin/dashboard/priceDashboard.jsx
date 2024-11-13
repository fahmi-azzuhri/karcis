import React, { useState, useEffect } from "react";
import axios from "axios";
import ViewPriceDashboard from "../../../views/admin/dashboard/priceDashboard";
function PriceDashboard() {
  const [events, setEvents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handlePriceAdded = () => {
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
    <ViewPriceDashboard
      events={events}
      handleCloseModal={handleCloseModal}
      handlePriceAdded={handlePriceAdded}
      handleOpenModal={handleOpenModal}
      isOpen={isOpen}
    />
  );
}

export default PriceDashboard;
