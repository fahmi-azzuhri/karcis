import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/home";
import SignIn from "../components/auth/signIn";
import SignUp from "../components/auth/signUp";
import PaymentCompleted from "../components/payment/paymentCompleted";
import PaymentMethod from "../components/payment/paymentMethod";
import TicketInfo from "../components/home/event/ticketInfo";
import Checkout from "../components/home/event/checkout";
import PaymentWaiting from "../components/payment/paymentWaiting";
import Dashboard from "../components/admin/dashboard";
import DetailEvent from "../components/home/event/detailEvent";
import ProtectedRoute from "./protectedRoute";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/payment/payment-completed" element={<PaymentCompleted />} />
      <Route
        path="/payment/payment-method"
        element={
          <ProtectedRoute>
            <PaymentMethod />
          </ProtectedRoute>
        }
      />
      <Route
        path="/payment/waiting-payment/"
        element={
          <ProtectedRoute>
            <PaymentWaiting />
          </ProtectedRoute>
        }
      />
      <Route path="/event/ticket-info" element={<TicketInfo />} />
      <Route path="/event/detail-event" element={<DetailEvent />} />
      <Route
        path="/event/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/dashboard/home"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/dashboard/events"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/dashboard/concerts"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
