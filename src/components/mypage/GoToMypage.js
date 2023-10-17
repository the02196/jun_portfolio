import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.div`
  width: 50px;
  height: 40px;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-48%);
  left: 60px;
  z-index: 999;
  background-image: url("../images/main/jun_face.png");
  background-position: center;
  background-size: cover;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    font-size: 16px;
    display: none;
    color: black;
    font-weight: 600;
    font-family: "Montserrat Alternates", sans-serif;
  }
  /* &:hover {
    box-sizing: border-box;
    background-color: white;
    background-image: none;

    p {
      margin: 0;
      display: block;
    }
  } */
`;

function GoToMypage() {
  return (
    <Btn>
      <NavLink style={{width: "100%", height: "100%"}} to={"/about"}>
        <p>ME</p>
      </NavLink>
    </Btn>
  );
}

export default GoToMypage;
