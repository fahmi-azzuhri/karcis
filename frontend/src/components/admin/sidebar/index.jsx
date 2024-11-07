import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { MdEvent } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import Cookies from "js-cookie";
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActiveHome = location.pathname === "/admin/dashboard/home";
  const isActiveEvent = location.pathname === "/admin/dashboard/events";
  const handleSignout = () => {
    Cookies.remove("token");
    Cookies.remove("firstname");
    Cookies.remove("role");
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="bg-white w-full lg:w-64 min-h-screen p-4 flex flex-col shadow-lg rounded-2xl m-4">
      <h2
        onClick={() => navigate("/admin/dashboard/home")}
        className="text-2xl font-semibold mb-8 text-blueDefault text-center cursor-pointer"
      >
        Karcis.com
      </h2>
      <ul className="space-y-2">
        <li className="font-medium">
          <button
            onClick={() => navigate("/admin/dashboard/home")}
            className={`flex items-center p-3 text-gray-700 hover:bg-blueDefault hover:text-white rounded-lg w-full gap-2 ${
              isActiveHome && "bg-blueDefault text-white"
            }`}
          >
            <HiHome />
            Dashboard
          </button>
        </li>
        <li className="font-medium">
          <button
            onClick={() => navigate("/admin/dashboard/events")}
            className={`flex items-center p-3 text-gray-700 hover:bg-blueDefault hover:text-white rounded-lg w-full gap-2 ${
              isActiveEvent && "bg-blueDefault text-white"
            }`}
          >
            <MdEvent />
            Event
          </button>
        </li>
        <li className="font-medium">
          <button
            onClick={handleSignout}
            className="flex items-center p-3 text-gray-700 hover:bg-blueDefault hover:text-white rounded-lg w-full gap-2"
          >
            <CiLogout />
            Signout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
