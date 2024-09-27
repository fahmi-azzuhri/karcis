import React from "react";
import bg_home from "/img/bg/bg_home.png";
function Home() {
  return (
    <div className="relative">
      <img src={bg_home} alt="Background" className="w-full h-auto" />
      <div className="absolute top-1/4 w-full text-center">
        <h1 className="text-4xl font-bold text-blueDefault">
          Exclusive events, priceless moments
        </h1>
      </div>
      <div className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 w-3/4 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search by events, name, location, and more"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blueDefault text-white px-6 py-2 rounded-lg hover:bg-blueDarkest">
          Search
        </button>
      </div>
    </div>
  );
}
export default Home;
