import React from "react";

function ViewDetailEvent() {
  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/1200x400"
          alt="Drive In Senja Event Banner"
          className="w-full"
        />
      </div>
      <div className="mt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">
              Drive In Senja: Back to The Future
            </h1>
            <p className="text-gray-500 mt-2">
              Parkiran Utama Mall @ Alam Sutera
            </p>
            <p className="text-gray-500 mt-1">
              <span role="img" aria-label="calendar">
                📅
              </span>
              September 22, 2021, 20:00 - 21:56 WIB
            </p>
            <p className="text-gray-500 mt-1 sm:w-1/2 w-full">
              Marty travels back in time using an eccentric scientist’s time
              machine. However, he must make his high-school-aged parents fall
              in love in order to return to the present.
            </p>
          </div>

          <div className="w-full sm:w-1/3 text-center">
            <div className="bg-white border border-gray-300 rounded-lg p-6 shadow shadow-[17px_19px_6px_0px_rgba(0,_0,_0,_0.1)] shadow-[#0022BA]">
              <p className="text-blackDefault font-normal">
                Tickets starting at
              </p>
              <p className="text-xl md:text-md sm:text-xl font-semibold text-blackDefault">
                Rp. 212.000
              </p>
              <button className="mt-4 bg-blueDefault text-white px-4 py-2 rounded w-full">
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">Duration</h3>
          <p className="text-gray-600">20:00 - 21:56 WIB</p>
          <p className="text-gray-600">1 hour 56 minutes</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">Audience</h3>
          <p className="text-gray-600">
            This movie is suitable for audience aged 12 and above
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">Attention</h3>
          <p className="text-gray-600">
            Face mask and social distancing are mandatory outside the car.
          </p>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold">Description</h3>
        <p className="text-gray-600 mt-4">
          Drive-In Senja memberikan retro drive-in experience yang dikemas
          secara modern. Penggunaan transmisi radio kit, mengintegrasikan suara
          film ke dalam mobil, ditambah proyektor resolusi tinggi yang
          menyediakan pengalaman visual terbaik. Acara ini merupakan sarana yang
          aman untuk menghabiskan waktu bersama keluarga, pasangan, maupun
          komunitas.
        </p>
      </div>
    </div>
  );
}

export default ViewDetailEvent;
