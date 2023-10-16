import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const GlobalNavigation = styled.ul`
  display: none;
  position: relative;
  width: 100%;
  z-index: 999;
  overflow: hidden;
  height: 100%;
  transition: 0.5s;
  background-color: white;
  a{
    text-decoration: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const GlobalNavigationButton = styled.li`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: 13px;
  color: black;
  font-weight: 500;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:not(:first-child){
    border-top: none;
  }
  &:hover {
    background-color: black;
    color: white;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;


function Navigator() {

  
  const developerMode = useSelector((state) => state.developerMode);

  return (
    <>
      <GlobalNavigation >
        <NavLink to={"/"}>
          <GlobalNavigationButton>Main</GlobalNavigationButton>
        </NavLink>
        <NavLink to={"/developer"}>
          <GlobalNavigationButton>Developer</GlobalNavigationButton>
        </NavLink>
        <NavLink to={"/photographer"}>
          <GlobalNavigationButton>Photographer</GlobalNavigationButton>
        </NavLink>
        <NavLink to={"/Director"}>
          <GlobalNavigationButton>Director</GlobalNavigationButton>
        </NavLink>
      </GlobalNavigation>
    </>
  );
}

export default Navigator;
