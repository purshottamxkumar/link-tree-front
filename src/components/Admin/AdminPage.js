import React from "react";
import Navbar from "./Uicomponents/Navbar";
import { Outlet } from "react-router-dom";
const AdminPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default AdminPage;
