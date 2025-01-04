import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import ViewTicketInfo from "../../../../views/home/event/ticketInfo";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SkeletonLoading from "../../../../views/skeleton";
const TicketInfo = () => {
  const location = useLocation();
  const type = location.pathname.split("/")[1];
  const { id, data: getData } = location.state;
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [quantities, setQuantities] = useState({});
  const {
    data: tickets,
    isFetching,
    isLoading,
    error,
  } = useQuery({
    queryKey: [type, id],
    queryFn: async () =>
      axios
        .get(
          `${import.meta.env.VITE_API_ENDPOINT}/api/${type}/ticket-info/${id}`
        )
        .then((response) => response.data),
  });

  if (isFetching || isLoading) {
    return <SkeletonLoading />;
  }

  if (!tickets || tickets.length === 0) {
    return <div>Info not found</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleQuantityChange = (ticketId, increment) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[ticketId] || 0;
      const newQuantity = currentQuantity + increment;

      if (newQuantity < 0) return prevQuantities;

      return { ...prevQuantities, [ticketId]: newQuantity };
    });
  };

  return (
    <ViewTicketInfo
      handleQuantityChange={handleQuantityChange}
      tickets={tickets}
      selectedTicket={selectedTicket}
      setSelectedTicket={setSelectedTicket}
      quantities={quantities}
      FaArrowLeft={FaArrowLeft}
      getData={getData}
    />
  );
};

export default TicketInfo;
