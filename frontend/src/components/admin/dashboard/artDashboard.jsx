import React, { useState } from "react";
import ViewArtDashboard from "../../../views/admin/dashboard/artDashboard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function ArtDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleArtAdded = () => {
    setIsOpen(false);
  };

  const queryClient = useQueryClient();

  const {
    data: arts,
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["arts"],
    queryFn: async () =>
      await axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/api/arts`)
        .then((response) => response.data),
  });

  const deleteArtMutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${import.meta.env.VITE_API_ENDPOINT}/api/arts/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["delete arts dashboard"]);
    },
    onError: (error) => {
      console.error("Error deleting art:", error);
    },
  });

  const deleteArt = (id) => {
    deleteArtMutation.mutate(id);
  };

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching arts : {error.message}</div>;
  }
  return (
    <div>
      <ViewArtDashboard
        arts={arts}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        handleArtAdded={handleArtAdded}
        deleteArt={deleteArt}
      />
    </div>
  );
}

export default ArtDashboard;
