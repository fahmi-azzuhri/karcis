import React, { useState, useEffect } from "react";
import ViewEventDashboard from "../../../views/admin/dashboard/eventDashboard";
import axios from "axios";

function EventDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

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
  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setIsOpen(true);
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

  const deleteEvents = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_ENDPOINT}/api/events/${id}`
      );
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    } catch (error) {
      console.error("Error delete events:", error);
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
      handleEditEvent={handleEditEvent}
      editingEvent={editingEvent}
      deleteEvents={deleteEvents}
    />
  );
}

export default EventDashboard;
