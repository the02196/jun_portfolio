import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: none;
  background-size: cover;
  background-image: url("../images/main/jun.jpeg");
  background-position: center;
  width: 80px;
  height: 80px;
  position: fixed;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  top: 75px;
  left: 15px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

function Profile({hide}) {
  return <Wrap  style={{display: `${hide}`}} />;
}

export default Profile;
