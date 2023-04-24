import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

const Nav = styled.nav`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  padding: 0 2rem;
  background: transparent;
  z-index: 3;
  @media (max-width: 380px) {
    gap: 2rem;
  }
`;
const NavLink = styled(Link)`
  font-size: 2rem;
  color: #e9fff7;
  text-decoration: none;
  transition: ease-in-out 0.6s;
  &:hover {
    color: white;
  }
`;
const Button = styled.button`
  border: none;
  background: transparent;
  color: #e9fff7;
  padding: 0.2rem 0.7rem;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: white;
  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 768px) {
    display: ${(props) => (props.isMenuClosed ? "none" : "flex")};
    position: absolute;
    top: 5rem;
    right: 1rem;
    flex-direction: column;
    background: rgba(15, 91, 55, 0.3);
    backdrop-filter: blur(7px);
    padding-right: 2rem;
    border-radius: 10px;
  }
`;

const MenuButton = styled(Button)`
  @media (min-width: 768px) {
    display: none;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;
const Name = styled.h1`
  color: #e9fff7;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Navbar = () => {
  //menu Button functionality
  const [isMenuClosed, setIsMenuClosed] = useState(true);

  return (
    <Nav>
      <LogoContainer>
        <Logo src="/logo.jpg" alt="logo crypto" />
        <Name>CryptoWorld</Name>
      </LogoContainer>

      <LinkContainer isMenuClosed={isMenuClosed} animate={{ transition: "1s" }}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/coinList">Coinlist</NavLink>
      </LinkContainer>

      <MenuButton
        onClick={() => {
          setIsMenuClosed(!isMenuClosed);
        }}
      >
        <MenuIcon />
      </MenuButton>
    </Nav>
  );
};

export default Navbar;
