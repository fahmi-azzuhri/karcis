import React from "react";
import TicketOption from "./ticketOptions";

function ViewTicketInfo(props) {
  const {
    handleQuantityChange,
    selectedTicket,
    setSelectedTicket,
    quantities,
    FaArrowLeft,
    getData,
  } = props;

  return (
    <div className="max-w-screen-2xl mx-auto p-8 flex flex-col">
      <div className="flex flex-row gap-4 items-center">
        <button
          onClick={() => window.history.back()}
          className="text-lg border border-blueDefault rounded-lg p-2"
        >
          <FaArrowLeft className="text-blueDefault" />
        </button>
        <h1 className="text-xl font-semibold">Ticket Options</h1>
      </div>
      <div className="flex flex-col md:flex-row p-4 items-center">
        <img
          src={`${import.meta.env.VITE_API_ENDPOINT}${getData.imageUrl}`}
          alt={getData.title}
          className="w-full md:w-1/3 object-cover"
        />
        <div className="ml-4 flex flex-col justify-center">
          <h2 className="text-2xl font-bold">{getData.title}</h2>
          <p className="mt-2 text-gray-600">
            📅 {getData.date} | 🕒 {getData.startTime} to {getData.endTime}
          </p>
          <p className="text-gray-600">📍 {getData.location}</p>
          <p className="mt-2 text-gray-700">{getData.description}</p>
        </div>
      </div>
      <div className="bg-blueDefault text-white text-center p-4 mt-auto">
        <p>Choose your ticket and quantity.</p>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <TicketOption
            ticketId="vip"
            title="Paket VIP"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente officiis adipisci perferendis pariatur deserunt."
            price={getData.vipPrice}
            selectedTicket={selectedTicket}
            setSelectedTicket={setSelectedTicket}
            handleQuantityChange={handleQuantityChange}
            quantities={quantities}
          />
          <TicketOption
            ticketId="vvip"
            title="Paket VVIP"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente officiis adipisci perferendis pariatur deserunt."
            price={getData.vvipPrice}
            selectedTicket={selectedTicket}
            setSelectedTicket={setSelectedTicket}
            handleQuantityChange={handleQuantityChange}
            quantities={quantities}
          />
          <TicketOption
            ticketId="ngedate"
            title="Paket Ngedate"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente officiis adipisci perferendis pariatur deserunt."
            price={getData.ngedatePrice}
            selectedTicket={selectedTicket}
            setSelectedTicket={setSelectedTicket}
            handleQuantityChange={handleQuantityChange}
            quantities={quantities}
          />
          <TicketOption
            ticketId="ngedate-premium"
            title="Paket Ngedate Premium"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente officiis adipisci perferendis pariatur deserunt."
            price={getData.ngedatePremiumPrice}
            selectedTicket={selectedTicket}
            setSelectedTicket={setSelectedTicket}
            handleQuantityChange={handleQuantityChange}
            quantities={quantities}
          />
          <TicketOption
            ticketId="rame"
            title="Paket Rame"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente officiis adipisci perferendis pariatur deserunt."
            price={getData.ramePrice}
            selectedTicket={selectedTicket}
            setSelectedTicket={setSelectedTicket}
            handleQuantityChange={handleQuantityChange}
            quantities={quantities}
          />
          <TicketOption
            ticketId="rame-premium"
            title="Paket Rame Premium"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente officiis adipisci perferendis pariatur deserunt."
            price={getData.ramePremiumPrice}
            selectedTicket={selectedTicket}
            setSelectedTicket={setSelectedTicket}
            handleQuantityChange={handleQuantityChange}
            quantities={quantities}
          />
        </div>
        <button className="bg-blueDefault hover:bg-blueDarkest rounded-lg text-white w-full text-center p-4 my-5">
          Checkout now!
        </button>
      </div>
    </div>
  );
}

export default ViewTicketInfo;
