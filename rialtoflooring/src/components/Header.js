import React from 'react';
import { HeaderContainer, Logo, Nav } from './styled/homepage.styled';

function Header() {
  return (
    <HeaderContainer>
  <Logo>Rialto Flooring</Logo>
  <Nav>
  <a href="#">Home</a>
  <a href="#">About Us</a>
  <a href="#">Products</a>
  <a href="#">Services</a>
  <a href="#">Contact Us</a>
  </Nav>
  </HeaderContainer>
  );
}

export default Header;