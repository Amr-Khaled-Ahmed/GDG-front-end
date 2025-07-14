import React from "react";
import { Navigate } from "react-router-dom";

// ProtectedRoute: redirects to /login if no user is found
const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
