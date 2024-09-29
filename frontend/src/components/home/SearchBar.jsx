import React from "react";

function SearchBar() {
  return (
    <div className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 w-3/4 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4 border border-gray-900">
      <input
        type="text"
        placeholder="Search by events, name, location, and more"
        className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="date"
        className="px-4 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blueDefault text-white px-6 py-2 rounded-lg hover:bg-blueDarkest">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
