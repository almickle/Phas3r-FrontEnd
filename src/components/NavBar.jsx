import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./stylesheets/navbar.css"

function NavBar() {

  let history = useHistory()

  function handleClick(){
    history.push("/")
  }

  return (
    <div id="navbar">
      <img id="navbar-logo" src="https://www.ohsu.edu/sites/default/files/2020-12/support240px.png" alt="" 
      onClick = {handleClick}/>
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