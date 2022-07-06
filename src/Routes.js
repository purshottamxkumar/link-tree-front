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
import Auth from "./components/login/index";
import Verify from "./components/Verify/Verify";
import EmailVerificationPage from "./components/Verify/EmailVerificationPage";
const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact element={<Auth />} />
          <Route path="/user/:username" exact element={<UserPage />} />
          <Route
            path="/verify-email/:verificationString"
            element={<EmailVerificationPage />}
          />
          <Route path="/please-verify" element={<Verify />} />
          <Route path="/admin/" exact element={<AdminPage />}>
            <Route path=":path" element={<AdminRoutes />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
