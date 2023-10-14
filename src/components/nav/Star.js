import React from "react";
import styled from "styled-components";
import Name from "./Name";
import { NavLink } from "react-router-dom";

const Wrap = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Blue_Square = styled.div`
  width: 25px;
  height: 25px;
  background-color: #0075ff;
  position: absolute;
  z-index: 100;
`;

const Red_Square = styled.div`
  width: 25px;
  height: 25px;
  background-color: #ff0000;
  position: absolute;
  z-index: 200;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Small_Blue_Square = styled.div`
  width: 17.5px;
  height: 17.5px;
  background-color: #0075ff;
  position: absolute;
  z-index: 300;
  transform: rotate(-45deg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Small_White_Square = styled.div`
  width: 9px;
  height: 9px;
  background-color: white;
`;

function Star({brighteness, grayscale, hide}) {
  return (
    <>
      <NavLink to={"/"}><Wrap style={{filter: `${brighteness}${grayscale}`}}>
        <Blue_Square />
        <Red_Square >
          <Small_Blue_Square>
            <Small_White_Square />
          </Small_Blue_Square>
        </Red_Square>
        {/* <Name /> */}
      </Wrap>
      </NavLink>
    </>
  );
}

export default Star;
