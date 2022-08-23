import React from "react";
import { Link } from "react-router-dom";
import "/home/mickle/Development/code/phase3/Phas3r-FrontEnd/phas3r/src/stylesheets/navbar.css"

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/"> Home </Link>
      <Link to="/movies"> Movies </Link>
      <Link to="/reviews">Reviews </Link>
      <Link to="/login"> Log In </Link>
    </div>
  );
};

export default NavBar;