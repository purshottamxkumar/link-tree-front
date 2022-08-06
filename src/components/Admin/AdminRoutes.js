import React, { useEffect } from "react";
import LinkPage from "./LinkPage/LinkPage";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";
const AdminRoutes = () => {
  const [token] = useToken();
  const navigateTo = useNavigate();
  useEffect(() => {
    if (!token) navigateTo("/");
  });

  return <>{token && <LinkPage />}</>;
};

export default AdminRoutes;
