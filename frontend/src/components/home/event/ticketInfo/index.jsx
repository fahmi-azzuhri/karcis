import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import ViewTicketInfo from "../../../../views/home/event/ticketInfo";
import { useLocation } from "react-router-dom";

const TicketInfo = () => {
  const location = useLocation();
  const { detail: getData } = location.state;
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [quantities, setQuantities] = useState({});

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
      selectedTicket={selectedTicket}
      setSelectedTicket={setSelectedTicket}
      quantities={quantities}
      FaArrowLeft={FaArrowLeft}
      getData={getData}
    />
  );
};

export default TicketInfo;
