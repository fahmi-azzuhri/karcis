import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../views/home";
import SignIn from "../components/auth/signIn";
import SignUp from "../components/auth/signUp";
import PaymentCompleted from "../components/payment/paymentCompleted";
import PaymentMethod from "../components/payment/paymentMethod";
import TicketInfo from "../components/home/event/ticketInfo";
import Checkout from "../components/home/event/checkout";
import PaymentWaiting from "../components/payment/paymentWaiting";
import Dashboard from "../components/admin/home/dashboard";
function AppRoutes() {
  const isAdminPage = useLocation().pathname === "/admin/dashboard/home";
  return (
    <Routes>
      {!isAdminPage ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/payment/payment-completed"
            element={<PaymentCompleted />}
          />
          <Route path="/payment/payment-method" element={<PaymentMethod />} />
          <Route
            path="/payment/waiting-payment/"
            element={<PaymentWaiting />}
          />
          <Route path="/event/ticket-info" element={<TicketInfo />} />
          <Route path="/event/checkout" element={<Checkout />} />
        </>
      ) : (
        <Route path="/admin/dashboard/home" element={<Dashboard />} />
      )}
    </Routes>
  );
}

export default AppRoutes;
