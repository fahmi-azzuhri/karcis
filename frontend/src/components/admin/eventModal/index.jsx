import React, { useState } from "react";
import axios from "axios";
import ViewEventModal from "../../../views/admin/eventModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function AddEventModal({ onClose, onEventAdded, editingEvent }) {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    duration: "",
    audience: "",
    attention: "",
    description: "",
    vipPrice: "",
    vvipPrice: "",
    ngedatePrice: "",
    ngedatePremiumPrice: "",
    ramePrice: "",
    ramePremiumPrice: "",
  });
  const [image, setImage] = useState(null);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => setImage(e.target.files[0]);

  const eventModalMutation = useMutation({
    mutationFn: async (data) => {
      const formData = new FormData();
      Object.keys(data).forEach((key) => formData.append(key, data[key]));
      if (image) formData.append("image", image);

      if (editingEvent) {
        return axios.put(
          `${import.meta.env.VITE_API_ENDPOINT}/api/events/${editingEvent.id}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        return axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}/api/events`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["events dashboard"]);
      onEventAdded();
      onClose();
    },
    onError: (error) => {
      console.error("Error adding event:", error);
      alert(error.response.data.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    eventModalMutation.mutate(formData);
  };

  return (
    <ViewEventModal
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleFileChange={handleFileChange}
      formData={formData}
      handleCloseModal={onClose}
      editingEvent={editingEvent}
    />
  );
}

export default AddEventModal;
