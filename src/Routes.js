import React from "react";
import {
  Route,
  Routes as Switch,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import AdminPage from "./components/Admin/AdminPage";
import AdminRoutes from "./components/Admin/AdminRoutes";
import UserPage from "./components/UserPage/UserPage";

import Auth from "./components/Login";

import Login from "./components/Login/login";
const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact element={<Auth />} />
          <Route path="/user" exact element={<UserPage />} />
          <Route path=":path" element={<AdminRoutes />} />
          <Route />
          <Route path="/" exact element={<UserPage />} />
          <Route path="/admin" exact element={<AdminPage />}>
            <Route path=":path" element={<AdminRoutes />} />
          </Route>
          <Route path="/login" exact element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
