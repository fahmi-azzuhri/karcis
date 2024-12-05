import React, { useState, useEffect } from "react";
import axios from "axios";
import ViewEventModal from "../../../views/admin/eventModal";

function AddEventModal({ onClose, onEventAdded, editingEvent }) {
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

  useEffect(() => {
    if (editingEvent) {
      setFormData({
        ...editingEvent,
        title: editingEvent.title || "",
        location: editingEvent.location || "",
        date: editingEvent.date || "",
        duration: editingEvent.duration || "",
        audience: editingEvent.audience || "",
        attention: editingEvent.attention || "",
        description: editingEvent.description || "",
        vipPrice: editingEvent.vipPrice || "",
        vvipPrice: editingEvent.vvipPrice || "",
        ngedatePrice: editingEvent.ngedatePrice || "",
        ngedatePremiumPrice: editingEvent.ngedatePremiumPrice || "",
        ramePrice: editingEvent.ramePrice || "",
        ramePremiumPrice: editingEvent.ramePremiumPrice || "",
      });
      setImage(null);
    } else {
      setFormData({
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
      setImage(null);
    }
  }, [editingEvent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (image) data.append("image", image);

    try {
      if (editingEvent) {
        await axios.put(
          `${import.meta.env.VITE_API_ENDPOINT}/api/events/${editingEvent.id}`,
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}/api/events`,
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      }
      onEventAdded();
      onClose();
    } catch (error) {
      console.error("Failed to submit event:", error);
      alert("An error occurred while submitting the event. Please try again.");
    }
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
