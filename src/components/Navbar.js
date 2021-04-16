import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import menuData from "../data/MenuData";
import logo from "../images/logo.png";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import Bars from "../images/menu.svg";

const Nav = styled.nav`
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  @media screen and (min-width: 1000px) {
    height: 100px;
    padding: 3rem 2rem;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 1400px) {
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const navLink = css`
  color: black;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transform: translateY(-2px);
  }
`;
const Logo = styled(Link)`
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 60px;
  position: relative;
  top: -1rem;
  cursor: pointer;

  @media screen and (min-width: 1000px) {
    height: 100px;
    top: -2.7rem;
  }
`;

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
    fill: red;
    background-image: url(${Bars});
    background-size: contain;
    background-repeat: no-repeat;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 1rem;
    transform: translate(-50%, 50%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${navLink}
  font-size :23px;
  font-weight: 400;
`;

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  let style = {
    backgroundColor:
      navbar || location.pathname !== "/" ? "#FFF8F4" : "transparent",

    transition: "0.4s",
  };
  return (
    <Nav style={style}>
      <Container>
        <Logo smooth to="#Hero"></Logo>
        <MenuBars onClick={toggle} />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavMenuLinks smooth to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          ))}
        </NavMenu>
      </Container>
    </Nav>
  );
};

export default Navbar;
