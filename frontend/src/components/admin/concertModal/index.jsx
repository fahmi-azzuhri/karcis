import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import ViewConcertModal from "../../../views/admin/concertModal";

function AddConcertModal(props) {
  const { handleCloseModal, handleConcertAdded } = props;
  const queryClient = useQueryClient();
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
  const [image, setImage] = useState(null);
  const handleInputChange = () => {
    setFormData({ ...formData, [e.target.name]: e.target, value });

    const handleFileChange = (e) => setImage(e.target.files[0]);

    const concertModalMutation = useMutation({
      mutationFn: async (data) => {
        const formData = new FormData();
        Object.keys(data).forEach((key) => formData.append(key, data[key]));
        if (image) formData.append("image", image);

        return axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}/api/concerts`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["concert dashboard"]);
        handleConcertAdded();
        handleCloseModal();
      },
      onError: (error) => {
        console.error("Error adding concert:", error);
        alert(error.response.data.message);
      },
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      concertModalMutation.mutate(formData);
    };
    return (
      <ViewConcertModal
        handleCloseModal={handleCloseModal}
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
      />
    );
  };
}

export default AddConcertModal;
