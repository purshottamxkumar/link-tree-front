import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useToken } from "../../auth/useToken.js";
import "./NavLinks.css";
const NavLinks = (props) => {
  const navigateTo = useNavigate();
  const logout = () => {
    window.localStorage.removeItem("token");
    navigateTo("/");
  };
  const [token] = useToken();
  return (
    <>
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink to="/admin/saved-links">Saved Links</NavLink>
        </li>
        {!token && (
          <li className="nav-item">
            <NavLink
              to="/authenticate"
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
              }}
              exact
            >
              <LoginIcon sx={{ marginRight: 1 }} color="sucess" />
              Login
            </NavLink>
          </li>
        )}
        <li className="nav-item">
          <Link
            onClick={() => {
              logout();
            }}
            to="/"
          >
            <LogoutIcon sx={{ marginRight: 1 }} color="sucess" />
            Logout
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
