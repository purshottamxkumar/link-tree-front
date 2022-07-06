import { Navigate, Route } from "react-router-dom";
import { useToken } from "./useToken";
import React from "react";

const PrivatRoutes = (props) => {
  const [token] = useToken();

  if (!token) return <Navigate replace to="/login" />;

  return <Route {...props} />;
};

export default PrivatRoutes;
