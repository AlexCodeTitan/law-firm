import React from "react";
import { NavContainer } from "./Navigation.style";

function Navigation() {
  return (
    <NavContainer>
      <div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
      </div>
      <a href="#">Contact Us</a>
    </NavContainer>
  );
}

export default Navigation;
