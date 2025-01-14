import React from 'react';
import styled from 'styled-components';

const Div = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'openMobileMenu' // Filter out openMobileMenu prop from being forwarded to the DOM
})`
  width: 2rem;
  height: 2rem;
  position: ${({ $openMobileMenu }) => ($openMobileMenu ? 'fixed' : 'static')};
  top: ${({ $openMobileMenu }) => ($openMobileMenu ? '1.7rem' : 'auto')};
  right: ${({ $openMobileMenu }) => ($openMobileMenu ? '2rem' : 'auto')};
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ $openMobileMenu }) => ($openMobileMenu ? '#333' : '#ccc')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ $openMobileMenu }) => ($openMobileMenu ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ $openMobileMenu }) =>
        $openMobileMenu ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ $openMobileMenu }) => ($openMobileMenu ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ $openMobileMenu }) => ($openMobileMenu ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Hamburger = ({ openMobileMenu, setOpenMobileMenu }) => {
  return (
    <Div
      className="pointer"
      $openMobileMenu={openMobileMenu} // Ensure you're using the $openMobileMenu prop here
      onClick={() => setOpenMobileMenu(!openMobileMenu)}>
      <div />
      <div />
      <div />
    </Div>
  );
};

export default Hamburger;
