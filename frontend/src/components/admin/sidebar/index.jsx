import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleDashboard = () => {
    navigate("/admin/dashboard/home");
  };
  return (
    <div className="bg-gray-100 w-64 min-h-screen p-4">
      <h2 className="text-xl font-semibold mb-6">Material Tailwind React</h2>
      <ul>
        <li className="mb-4 font-medium">
          <a
            href="#"
            onClick={handleDashboard}
            className="flex items-center p-2 bg-black text-white rounded"
          >
            Dashboard
          </a>
        </li>
        <li className="mb-4 font-medium">
          <a href="#">Profile</a>
        </li>
        <li className="mb-4 font-medium">
          <a href="#">Tables</a>
        </li>
        <li className="mb-4 font-medium">
          <a href="#">Notifications</a>
        </li>
      </ul>
      <div className="mt-auto">
        <p className="mb-4 font-medium">
          <a href="#">Sign In</a>
        </p>
        <p className="font-medium">
          <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
