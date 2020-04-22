import React from "react";
import { Link } from "react-router-dom";

function AppNavigation() {
  return (
    <>
      <div className="Nav">
        <div className="Nav__Wrapper">
          <div className="Nav__Logo">
            <Link to="/">Logo</Link>
          </div>
          <nav className="Nav__Menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default AppNavigation;
