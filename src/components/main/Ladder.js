import React from "react";
import styled from "styled-components";
import Horizon from "./Horizon";

const Wrap = styled.div`
  width: 400px;
  left: 50%;
  top: 400px;
  height: 100vh;
  position: fixed;
  transform: translateX(-50%);
  background-color: white;
  transition: 0.2s;
  @media screen and (min-width: 1024px) {
   width: 600px;
  }
  @media screen and (min-width: 1440px) {
   width: 800px;
  }
  @media screen and (min-width: 2200px) {
    width: 1100px; 
  }
`;

const Thin_Bar_Left = styled.div`
  position: absolute;
  left: -10px;
  height: 100%;
  width: 1px;
  background-color: black;
`;

const Bold_Bar_Left = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 6px;
  background-color: black;
`;

const Bold_Bar_Right = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  width: 6px;
  background-color: black;
`;

const Thin_Bar_Right = styled.div`
  position: absolute;
  right: -10px;
  height: 100%;
  width: 1px;
  background-color: black;
`;

function Ladder() {
  return (
    <>
      <Wrap>
        <Thin_Bar_Left />
        <Bold_Bar_Left/>
        <Bold_Bar_Right />
        <Thin_Bar_Right />
      </Wrap>
    </>
  );
}

export default Ladder;
