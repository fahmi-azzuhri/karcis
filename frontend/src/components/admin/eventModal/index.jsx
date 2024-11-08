import React, { useState } from "react";
import axios from "axios";
import ViewEventModal from "../../../views/admin/eventModal";

function AddEventModal({ onClose, onEventAdded }) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (image) data.append("image", image);

    try {
      await axios.post("/api/events", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onEventAdded();
      onClose();
    } catch (error) {
      console.error("Failed to add event", error);
    }
  };

  return (
    <ViewEventModal
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleFileChange={handleFileChange}
      formData={formData}
      handleCloseModal={onClose}
    />
  );
}

export default AddEventModal;
