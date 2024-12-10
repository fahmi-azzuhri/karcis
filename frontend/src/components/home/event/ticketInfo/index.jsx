import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import ViewTicketInfo from "../../../../views/home/event/ticketInfo";
const TicketInfo = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [quantities, setQuantities] = useState({});

  const tickets = [
    {
      id: 1,
      title: "Paket VIP",
      description: "1 Mobil Max 6 Orang + 1 Merchandise",
      price: "Rp. 371.000",
    },
    {
      id: 2,
      title: "Paket VVIP",
      description: "1 Mobil Max 6 Orang + 2 Merchandise",
      price: "Rp. 424.000",
    },
    {
      id: 3,
      title: "Paket Ngedate",
      description: "1 Mobil Max 2 Orang",
      price: "Rp. 272.000",
    },
    {
      id: 4,
      title: "Paket Ngedate Premium",
      description: "1 Mobil Max 2 Orang + 1 Merchandise",
      price: "Rp. 256.000",
    },
    {
      id: 5,
      title: "Paket Rame",
      description: "1 Mobil Max 5 Orang",
      price: "Rp. 371.000",
    },
    {
      id: 6,
      title: "Paket Rame Premium",
      description: "1 Mobil Max 5 Orang + 1 Merchandise",
      price: "Rp. 417.000",
    },
  ];

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
    />
  );
};

export default TicketInfo;
