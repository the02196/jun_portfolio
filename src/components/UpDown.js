import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

const UpDownWrap = styled.div`
  position: fixed;
  z-index: 9999;
  bottom: 50px;
  right: 10px;
  width: 30px;
  height: 70px;
  cursor: pointer;
  text-align: center;
  background-color: #111;
  transition: .2s;
  @media screen and (min-width: 768px){
    width: 50px;
    height: 60px;
  }
`;
const Up = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: .2s;
  &:hover {
    background-color: lightgray;
  }
`;
const Down = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;

  &:hover {
    background-color: lightgray;
  }
`;

function UpDown() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const scrollToBottom = () => {
    const documentHeight = document.documentElement.scrollHeight;
    scroll.scrollTo(documentHeight);
  };

  return (
    <>
      <UpDownWrap>
        <Up onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAngleUp} color="white" />
        </Up>
        <Down onClick={scrollToBottom}>
          <FontAwesomeIcon icon={faAngleDown} color="white" />
        </Down>
      </UpDownWrap>
    </>
  );
}

export default UpDown;
