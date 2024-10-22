import React from "react";

function ViewAside(props) {
  const { isAside, handlePayment } = props;
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
      <hr className="border-t border-dashed border-bluePrimaryLight my-4 w-full" />
      <div className="mt-4">
        <h4 className="text-lg font-semibold">Order Summary</h4>
        <div className="flex justify-between text-gray-600">
          <span>Ticket Type:</span>
          <span className="text-sm text-gray-900">2x Paket VIP</span>
        </div>
        <hr className="border-t border-dashed border-bluePrimaryLight my-4 w-full" />
        <div className="flex justify-between text-gray-600">
          <span>Ticket Price:</span>
          <span className="text-sm text-gray-900">2x Rp. 370,000</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Service & Handling:</span>
          <span className="text-sm text-gray-900">Rp. 20,000</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Admin Fee:</span>
          <span className="text-sm text-gray-900">Rp. 2,000</span>
        </div>
      </div>
      <hr className="border-t border-dashed border-bluePrimaryLight my-4 w-full" />
      <div className="flex justify-between text-lg font-bold">
        <span>Total:</span>
        <span className="text-sm text-gray-900">Rp. 762,000</span>
      </div>
      {!!isAside ? (
        <button className="w-full bg-blueDefault hover:bg-blueDarkest text-white py-2 mt-4 rounded-md">
          Pay Now
        </button>
      ) : (
        <button
          onClick={handlePayment}
          className="mt-4 w-full bg-blueDefault hover:bg-blueDarkest text-white px-4 py-2 rounded"
        >
          Continue to Payment
        </button>
      )}
    </aside>
  );
}

export default ViewAside;
