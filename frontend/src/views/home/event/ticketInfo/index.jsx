import React from "react";

function ViewTicketInfo(props) {
  const {
    handleQuantityChange,
    tickets,
    selectedTicket,
    setSelectedTicket,
    quantities,
    FaArrowLeft,
  } = props;
  return (
    <div className="max-w-screen-2xl mx-auto p-8 flex flex-col">
      <div className="flex flex-row gap-4 items-center">
        <button className="text-lg border border-blueDefault rounded-lg p-2">
          <FaArrowLeft className="text-blueDefault" />
        </button>
        <h1 className="text-xl font-semibold">Ticket Options</h1>
      </div>
      <div className="flex flex-col md:flex-row p-4 items-center">
        <img
          src="https://example.com/movie-poster.jpg"
          alt="Movie Poster"
          className="w-full md:w-1/3 object-cover"
        />
        <div className="ml-4 flex flex-col justify-center">
          <h2 className="text-2xl font-bold">
            Drive In Senja: Back to the Future
          </h2>
          <p className="mt-2 text-gray-600">
            📅 September 27, 2024 | 🕒 20:00 - 23:15 WIB
          </p>
          <p className="text-gray-600">
            📍 Phinisian Theatre Mall @ Alam Sutera
          </p>
          <p className="mt-2 text-gray-700">
            Nikmati film klasik futuristik dalam suasana spektakuler di tepi
            pantai. Bawa kendaraan anda untuk pengalaman bioskop luar ruang yang
            unik.
          </p>
        </div>
      </div>
      <div className="bg-blueDefault text-white text-center p-4 mt-auto">
        <p>Choose your ticket and quantity.</p>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => setSelectedTicket(ticket.id)}
              className={`border p-4 rounded-lg shadow-md cursor-pointer ${
                selectedTicket === ticket.id
                  ? "border-blueDefault"
                  : "border-gray-300"
              }`}
            >
              <h4 className="text-lg font-semibold">{ticket.title}</h4>
              <p className="text-sm text-gray-600">{ticket.description}</p>
              <p className="text-lg font-bold mt-2">{ticket.price}</p>

              <div className="flex items-center justify-evenly mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleQuantityChange(ticket.id, -1);
                  }}
                  className="border border-blueDefault text-blueDefault text-bold text-lg px-2 py-1 rounded-md"
                >
                  -
                </button>
                <span className="text-lg">{quantities[ticket.id] || 0}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleQuantityChange(ticket.id, 1);
                  }}
                  className="border border-blueDefault text-blueDefault text-bold text-lg px-2 py-1 rounded-md"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-blueDefault hover:bg-blueDarkest text-white w-full text-center p-4 my-5">
          Checkout now!
        </button>
      </div>
    </div>
  );
}

export default ViewTicketInfo;
