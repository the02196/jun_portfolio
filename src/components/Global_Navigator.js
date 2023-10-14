import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const GlobalNavigation = styled.ul`
  display: none;
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: white;
  padding: 2px;
  z-index: 999;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const GlobalNavigationButton = styled.li`
  width: 80px;
  padding: 10px;
  font-size: 13px;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
  cursor: pointer;
  &:hover {
    background-color: white;

    color: black;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

function Global_Navigator() {
  return (
    <>
      <GlobalNavigation>
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

export default Global_Navigator;
