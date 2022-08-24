import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/navbar.css"

function NavBar() {

  function handleMouseIn(event) {
    if(event.target.id = "route-span") {
      event.target.style.backgroundColor = "white"
      event.target.style.opacity = "80%"
      event.target.children[0].style.backgroundColor = "white"
      event.target.children[0].style.color = "#333"
    }
  }

  function handleMouseOut(event) {
    if(event.target.id = "route-span") {
      event.target.style.backgroundColor = "#333"
      event.target.style.opacity = "100%"
      event.target.children[0].style.backgroundColor = "#333"
      event.target.children[0].style.color = "white"
    }
  }

  return (
    <div id="navbar">
      <img id="navbar-logo" src="https://www.ohsu.edu/sites/default/files/2020-12/support240px.png" alt="" />
      <span id="banner">
          <Link className="route-link" to="/">Home</Link>
          <Link className="route-link" to="/movies">Movies</Link>
          <Link className="route-link" to="/reviews">Reviews</Link>
          <Link className="route-link" to="/login">Login</Link>
      </span>
    </div>
  );
};

export default NavBar;