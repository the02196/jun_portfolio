import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { stopAnimation } from "../../store";

const ClickMe = keyframes`
  0%{
    left: 110px;
  }
  25%{
    left: 120px;
  }
  50%{
    left: 110px;
  }
  75%{
    left: 120px;
  }
  100%{
    left: 110px;
  }
`;

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

const Triangle = styled.div`
 position: absolute;
    top: 25px;
    left: 110px;
    width: 0;
    height: 0;
    border-bottom: 6px solid transparent;
    border-top: 6px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid black;
    animation: ${(props) => props.animation && css`${ClickMe} 1s forwards`};
    animation-delay: 0.5s;
`

const AboutJun = styled.div`
  position: absolute;
  top: 22px;
  font-size: 15px;
  left: 140px;
  font-family: Montserrat Alternates, sans-serif;
  font-weight: 400;
`;

function GoToMypage() {
  const dispatch = useDispatch();
  const animation = useSelector((state) => state.animation);
  useEffect(() => {
    setTimeout(() => {
      dispatch(stopAnimation(false));
    }, 2000);
  }, []);

  return (
    <>
      <Btn>
        <NavLink
          style={{ width: "100%", height: "100%" }}
          to={"/about"}
        ></NavLink>
      </Btn>
      <Triangle animation={animation}></Triangle>
      {/* <AboutJun>About Jun</AboutJun> */}
    </>
  );
}

export default GoToMypage;
