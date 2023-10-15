import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 40px;
  display: none;
  background-color: black;
  position: fixed;
  transition: 0.2s;
  bottom: 0;
  @media screen and (min-width: 768px) {
    /* display: block; */
  }
`;

const Email = styled.div``;

function Footer() {
  return (
    <>
      <Wrap>
        <Email />
      </Wrap>
    </>
  );
}

export default Footer;
