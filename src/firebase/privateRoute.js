import React from "react";
import { Navigate } from "react-router-dom";

const Private_route = ({ user, children }) => {
  if (!user) {
    // user is not authenticated
    return <Navigate to="/auth" />;
  }
  return children;
};

export default Private_route;
