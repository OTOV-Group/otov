import React from "react";
import { Navigate } from "react-router-dom";

interface IPrivateRoute {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IPrivateRoute> = ({ children }) => {
  const userIsAuthenticated = true; // Replace with your authentication logic
  if (!userIsAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
