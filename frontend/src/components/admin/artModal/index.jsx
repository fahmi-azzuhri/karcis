import React, { useState } from "react";
import ViewArtModal from "../../../views/admin/artModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
function AddArtModal(props) {
  const { handleCloseModal, handleArtAdded } = props;
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    startTime: "",
    endTime: "",
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

  const queryClient = useQueryClient();

  const [image, setImage] = useState(null);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => setImage(e.target.files[0]);

  const artModalMutation = useMutation({
    mutationFn: async (data) => {
      const formData = new FormData();
      Object.keys(data).forEach((key) => formData.append(key, data[key]));
      if (image) formData.append("image", image);

      return axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/arts`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["arts"]);
      handleArtAdded();
      handleCloseModal();
    },
    onError: (error) => {
      console.error("Error adding event:", error);
      alert(error.response.data.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    artModalMutation.mutate(formData);
  };

  return (
    <div>
      <ViewArtModal
        handleArtAdded={handleArtAdded}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
        formData={formData}
        handleFileChange={handleFileChange}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default AddArtModal;
