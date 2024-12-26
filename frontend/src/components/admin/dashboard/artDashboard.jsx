import React, { useState } from "react";
import ViewArtDashboard from "../../../views/admin/dashboard/artDashboard";
import { useQuery } from "@tanstack/react-query";
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

  const {
    data: arts,
    isPending,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["arts"],
    queryFn: async () =>
      await axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/api/arts`)
        .then((response) => response.data),
  });

  if (isPending || isFetching) {
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
      />
    </div>
  );
}

export default ArtDashboard;
