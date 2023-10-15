import React from "react";
import Languages from "./nav/Languages";
import Star from "./nav/Star";
import styled from "styled-components";
import Profile from "./main/Profile";
import View from "./main/View";

const Wrap = styled.div`
background-color: white;
  width: 100%;
  overflow: auto;
  height: auto;
  position: fixed;
  z-index: 999;
  top: 0;
  height: 50px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* @media (max-width: 600px) {
    max-width: 100%;
  } */
`;


function Nav({brighteness, grayscale, hide, bg_color}) {
  return (
    <>
      <Wrap>
        <Star brighteness={brighteness} grayscale={grayscale} hide={hide} />
        <Languages />
      </Wrap>
        <View hide={hide}  />
        <Profile hide={hide} />
    </>
  );
}

export default Nav;
