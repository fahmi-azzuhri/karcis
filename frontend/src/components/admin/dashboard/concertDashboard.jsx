import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ViewConcertDashboard from "../../../views/admin/dashboard/concertDashboard";
function ConcertDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const handleOpenModal = () => {
    console.log("open modal");
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleConcertAdded = () => {
    setIsOpen(false);
  };
  const {
    data: concerts,
    isFetching,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["concert"],
    queryFn: async () =>
      await axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/api/concerts`)
        .then((res) => res.data),
  });

  const deleteConcertMutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(
        `${import.meta.env.VITE_API_ENDPOINT}/api/concerts/${id}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["delete concert dashboard"]);
    },
    onError: (error) => {
      console.error("Error deleting concert:", error);
    },
  });

  const deleteConcert = (id) => {
    deleteConcertMutation.mutate(id);
  };

  if (isFetching || isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching concerts : {error.message}</div>;
  }
  return (
    <ViewConcertDashboard
      concerts={concerts}
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      handleConcertAdded={handleConcertAdded}
      handleOpenModal={handleOpenModal}
      deleteConcert={deleteConcert}
    />
  );
}

export default ConcertDashboard;
