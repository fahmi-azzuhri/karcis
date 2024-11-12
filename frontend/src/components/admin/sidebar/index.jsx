import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { MdEvent } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import Cookies from "js-cookie";
import ViewSidebar from "../../../views/admin/sidebar";
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActiveHome = location.pathname === "/admin/dashboard/home";
  const isActiveEvent = location.pathname === "/admin/dashboard/events";
  const isActivePrice = location.pathname === "/admin/dashboard/price";
  const handleSignout = () => {
    Cookies.remove("token");
    Cookies.remove("firstname");
    Cookies.remove("role");
    navigate("/");
    window.location.reload();
  };
  return (
    <ViewSidebar
      handleSignout={handleSignout}
      isActiveEvent={isActiveEvent}
      isActiveHome={isActiveHome}
      isActivePrice={isActivePrice}
      HiHome={HiHome}
      MdEvent={MdEvent}
      CiLogout={CiLogout}
      navigate={navigate}
    />
  );
};

export default Sidebar;
