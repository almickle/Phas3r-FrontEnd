import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="topnav">
      <Link to="/"> Home </Link>
      <Link to="/movies"> Movies </Link>
      <Link to="/reviews">Reviews </Link>
      <Link to="/login"> Log In </Link>
    </div>
  );
};

export default NavBar;