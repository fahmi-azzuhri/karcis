import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ViewAside from "../../../views/payment/paymentMethod/Aside";

function Aside() {
  const location = useLocation();
  const isAside = location.pathname === "/payment/payment-method";
  const navigate = useNavigate();
  const handlePayment = () => {
    navigate("/payment/payment-method", { replace: true });
  };
  return <ViewAside isAside={isAside} handlePayment={handlePayment} />;
}

export default Aside;
