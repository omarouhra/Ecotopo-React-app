import React from 'react';
import styled from 'styled-components';
import menuData from '../data/MenuData';
import { HashLink as Link } from 'react-router-hash-link';
import { FaTimes } from 'react-icons/fa';

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0D435A;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: #FFE7D9;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  text-decoration: none;
  list-style: none;
  color: #ffff;
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &:hover {
    color: #000d1a;
  }
`;


const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer   isOpen={isOpen} onClick={toggle}>
      <Icon  onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu >
          {menuData.map((item, index) => (
            <DropdownLink smooth to={item.link} key={index}>
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
