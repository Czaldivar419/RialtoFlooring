import React, { useState } from "react";

import { NavbarContainer, Hamburger, NavLinks } from "./styled/homepage.styled";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <a href="/">Logo</a>
      <Hamburger onClick={toggleNav}>☰</Hamburger>
      <NavLinks isOpen={isOpen}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Header;