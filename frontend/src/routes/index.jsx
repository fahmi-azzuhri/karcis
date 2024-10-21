import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/home";
import SignIn from "../components/auth/signIn";
import SignUp from "../components/auth/signUp";
import PaymentCompleted from "../components/payment/paymentCompleted";
import PaymentMethod from "../components/payment/paymentMethod";
import TicketInfo from "../components/home/event/ticketInfo";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/payment/payment-completed" element={<PaymentCompleted />} />
      <Route path="/payment/payment-method" element={<PaymentMethod />} />
      <Route path="/event/ticket-info" element={<TicketInfo />} />
    </Routes>
  );
}

export default AppRoutes;
