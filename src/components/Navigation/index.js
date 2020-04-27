import React from "react";
import { Link, NavLink } from "react-router-dom";

function AppNavigation() {
  return (
    <>
      <div className="Nav">
        <div className="Nav__Wrapper">
          <div className="Nav__Logo">
            <Link to="/">Logo</Link>
          </div>
          <nav className="Nav__Menu">
            <NavLink to="/" activeClassName="selected">
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="selected">
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}

export default AppNavigation;
