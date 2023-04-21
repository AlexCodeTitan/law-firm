import React from "react";
import { NavContainer } from "./Navigation.style";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <NavContainer>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
      </div>
      <Link to="/contact">Contact Us</Link>
    </NavContainer>
  );
}

export default Navigation;
