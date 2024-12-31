import React, { useState } from "react";
import ViewEventDashboard from "../../../views/admin/dashboard/eventDashboard";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function EventDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const queryClient = useQueryClient();
  const {
    data: events,
    error,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["events dashboard"],
    queryFn: async () =>
      await axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/api/events`)
        .then((res) => res.data),
  });

  const deleteEventMutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(
        `${import.meta.env.VITE_API_ENDPOINT}/api/events/${id}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["events dashboard"]);
    },
    onError: (error) => {
      console.error("Error deleting event:", error);
    },
  });

  const deleteEvents = (id) => {
    deleteEventMutation.mutate(id);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleEventAdded = () => {
    setIsOpen(false);
  };
  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setIsOpen(true);
  };

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching events: {error.message}</div>;
  }

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
