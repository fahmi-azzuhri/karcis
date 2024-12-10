import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ViewAside from "../../../views/payment/paymentMethod/Aside";

function Aside() {
  const location = useLocation();
  const isPaymentMethod = location.pathname === "/payment/payment-method";
  const isWaitingPayment = location.pathname === "/payment/waiting-payment";
  const navigate = useNavigate();
  const handlePayment = () => {
    navigate("/payment/payment-method", { replace: true });
  };
  return (
    <ViewAside
      isPaymentMethod={isPaymentMethod}
      isWaitingPayment={isWaitingPayment}
      handlePayment={handlePayment}
    />
  );
}

export default Aside;
