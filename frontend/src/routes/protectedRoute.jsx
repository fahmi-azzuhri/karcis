import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
  const token = Cookies.get("token");

  if (!token) {
    return <Navigate to="/signin" replace={true} />;
  }
  return children;
}

export default ProtectedRoute;
