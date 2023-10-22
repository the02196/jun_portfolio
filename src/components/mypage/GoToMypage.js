import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { hideTriangle, stopAnimation } from "../../store";

const ClickMe = keyframes`
  0%{
    transform: scale(3);
    top: 7%;
    left: 150px;
  }
  50%{
    transform: scale(3);
    top: 7%;
    left: 150px;
  }
  70%{
    transform: scale(0.5);
  }
  100%{
    transform: scale(1);
  }
`;

const Show = keyframes`
  0%{
    opacity: 0;
  }
  80%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const Btn = styled.div`
  width: 50px;
  height: 40px;
  position: fixed;
  border-radius: 50%;
  top: 11px;
  left: 60px;
  z-index: 999;
  background-image: url("../images/about/jun.png");
  background-position: center;
  background-size: cover;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) => props.animation && css`${ClickMe} 1.5s forwards`};
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
    top: 50%;
    transform: translateY(-50%);
    left: 50px;
    width: 0;
    height: 0;
    border-bottom: 6px solid transparent;
    border-top: 6px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid black;
    animation: ${(props) => props.animation && css`${Show} 1.5s forwards`};
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
  const triangle = useSelector((state) => state.triangle);

  return (
   
    <>
      <Btn animation={animation}>
        <NavLink onClick={()=>{dispatch(hideTriangle(false))}}
          style={{ width: "100%", height: "100%" }}
          to={"/about"}
        ></NavLink>
      {triangle && <Triangle animation={animation}></Triangle>}
      </Btn>
      {/* <AboutJun>About Jun</AboutJun> */}
    </>
  );
}

export default GoToMypage;
