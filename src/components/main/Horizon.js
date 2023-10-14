import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import { NavLink } from "react-router-dom";

const Wrap = styled.ul`
  margin-top: 200px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Card = styled.li`
  width: 390px;
  height: 390px;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid black;
  margin-bottom: 70px;
  background-image: url(${(props) => `../images/main/${props.mobile}`});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: 0.2s;
  filter: grayscale(1) brightness(1.2) contrast(1.1);
  &:hover {
    transform: rotate(-2deg);
  }
  @media screen and (min-width: 1024px) {
    width: 590px;
    height: 350px;
    background-position: 0 -35px;
    background-size: cover;
  }
  @media screen and (min-width: 1440px) {
    width: 790px;
    height: 450px;
    background-position: 0 -35px;
    background-size: cover;
  }
`;

const Inner_Wrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
`;

const Years = styled.p`
  color: white;
  font-size: 12px;
  margin: 0;
`;

const Title = styled.h1`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 17px;
  font-weight: 500;
  color: ${(props) => props.font_color};
  background-color: black;
  padding: 2px 4px;
`;

const Desc = styled.p`
  text-align: ${(props) => props.text_align};
  width: 130px;
  font-size: 10px;
  color: whitesmoke;
  font-weight: 300;
`;

function Horizon() {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    setSources(data.main);
  }, []);
  return (
    <>
      <Wrap>
        {sources.map((e, i) => {
          return (
            <NavLink to={e.link}>
              <Card mobile={e.mobile}>
                <Inner_Wrap
                  top={`${e.top}px`}
                  left={`${e.left}px`}
                  right={`${e.right}px`}
                  bottom={`${e.bottom}px`}
                  align={e.align}
                >
                  <Years>{e.years}</Years>
                  <Title font_color={e.font_color}>{e.title}</Title>
                  <Desc text_align={e.text_align}>{e.desc}</Desc>
                </Inner_Wrap>
              </Card>
            </NavLink>
          );
        })}
      </Wrap>
    </>
  );
}

export default Horizon;
