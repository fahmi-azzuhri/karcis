import React from "react";

function Aside() {
  return (
    <aside className="w-1/3 p-6">
      <h3 className="text-2xl font-bold mb-4">Event Details</h3>
      <div className="mb-4">
        <img src="/event-image.png" alt="Event" className="w-full rounded-md" />
        <p className="text-gray-700 mt-2">Drive in Senja: Back to the Future</p>
        <p className="text-gray-500 text-sm">by Padmanaba Music Jogja</p>
        <p className="text-gray-500 text-sm">
          September 21, 2024 | 20:00 - 21:30 WIB
        </p>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-semibold">Order Summary</h4>
        <p className="text-gray-600">Ticket Type: 2x Paket VIP</p>
        <p className="text-gray-600">Ticket Price: 2x Rp. 370,000</p>
        <p className="text-gray-600">Service & Handling: Rp. 20,000</p>
        <p className="text-gray-600">Admin Fee: Rp. 2,000</p>
      </div>
      <div className="text-lg font-bold">
        Total: <span className="text-purple-600">Rp. 762,000</span>
      </div>
      <button className="w-full bg-purple-500 text-white py-2 mt-4 rounded-md hover:bg-purple-600">
        Pay Now
      </button>
    </aside>
  );
}

export default Aside;
