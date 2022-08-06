import React from "react";
import "./Navbar.css";
import { useState } from "react";
import NavLinks from "./NavLinks";
function Navbar(props) {
  const [navbar, toggleNavbar] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 15) toggleNavbar(true);
    else toggleNavbar(false);
  };
  window.addEventListener("scroll", changeNav);
  return (
    <>
      <header
        className={navbar ? "main-header main-header-fixed" : "main-header"}
      >
        <div className="nav-items-container">
          <nav className="main-navigation__header-nav">
            <NavLinks />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
