import React from "react";

function TicketOption({
  ticketId,
  title,
  description,
  price,
  selectedTicket,
  setSelectedTicket,
  handleQuantityChange,
  quantities,
}) {
  const handleSelect = () => {
    setSelectedTicket(title);
  };

  return (
    <div
      className={`border rounded-lg p-4 cursor-pointer ${
        selectedTicket === title
          ? "border-blueDefault shadow-md"
          : "border-gray-200"
      }`}
      onClick={handleSelect}
    >
      <h3 className="text-lg font-bold text-center">{title}</h3>
      <p className="text-sm text-gray-600 text-center justify-center">
        {description}
      </p>
      <p className="text-xl font-semibold mt-2 text-center">
        Rp {price.toLocaleString()}
      </p>
      <div className="flex items-center justify-evenly mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleQuantityChange(ticketId, -1);
          }}
          className="border border-blueDefault text-blueDefault text-bold text-lg px-2 py-1 rounded-md"
        >
          -
        </button>
        <span className="text-lg">{quantities[ticketId] || 0}</span>{" "}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleQuantityChange(ticketId, 1);
          }}
          className="border border-blueDefault text-blueDefault text-bold text-lg px-2 py-1 rounded-md"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default TicketOption;
