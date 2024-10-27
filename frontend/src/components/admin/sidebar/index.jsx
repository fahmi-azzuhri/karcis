import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full lg:w-64 min-h-screen p-4 flex flex-col shadow-lg rounded-2xl m-4">
      <h2 className="text-xl font-semibold mb-8 text-gray-800">
        Material Tailwind React
      </h2>
      <ul className="space-y-2">
        <li className="font-medium">
          <button
            onClick={() => navigate("/admin/dashboard/home")}
            className="flex items-center p-3 bg-gray-800 text-white rounded-lg w-full"
          >
            <i className="fas fa-home mr-3"></i>
            Dashboard
          </button>
        </li>
        <li className="font-medium">
          <button className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg w-full">
            <i className="fas fa-user mr-3"></i>
            Profile
          </button>
        </li>
        <li className="font-medium">
          <button className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg w-full">
            <i className="fas fa-table mr-3"></i>
            Tables
          </button>
        </li>
        <li className="font-medium">
          <button className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg w-full">
            <i className="fas fa-bell mr-3"></i>
            Notifications
          </button>
        </li>
      </ul>
      <div className="mt-auto pt-8">
        <button className="text-gray-700 font-medium mb-4 hover:underline w-full text-left p-2">
          Sign In
        </button>
        <button className="text-gray-700 font-medium hover:underline w-full text-left p-2">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
