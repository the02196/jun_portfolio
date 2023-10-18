import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  z-index: 99999;
  width: 100%;
  height: 30px;
  /* display: none; */
  background-color: black;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  bottom: 0;
  @media screen and (min-width: 1024px) {
    height: 40px;
    justify-content: right;
  }
`;

const CopyRight = styled.div`
  position: relative;
  color: white;
  font-size: 11px;
  font-weight: 300;
  padding-right: 15px;
  letter-spacing: 0.7px;

`;

const C = styled.span`
  font-size: 17px;
  font-weight: 300;
  top: -1.1px;
  position: absolute;
 
`;
function Footer() {
  return (
    <>
      <Wrap>
        <CopyRight>
          <C>©</C> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Copyright 2023. Jun Choi
          Portfolio. All rights reserved.
        </CopyRight>
      </Wrap>
    </>
  );
}

export default Footer;
