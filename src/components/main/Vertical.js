import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../store";
const Wrap = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 100%;
 
`;

const FlexWrap = styled.div`
margin: 0 auto;
  width: 1500px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Card = styled.li`
  width: 450px;
  height: 300px;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: ${(props) => props.bg_color};
  background-image: url(${(props) => `../images/main/${props.mobile}`});
  background-size: cover;
  background-position: top;
  position: relative;
  transition: 0.2s;
  filter: grayscale(1) brightness(1.2) contrast(1.1);
  &:hover {
    /* transform: rotate(-2deg); */
    & > .circle {
      background-color: white;
    }
  }
  /* @media screen and (min-width: 1024px) {
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
  @media screen and (min-width: 2200px) {
    width: 1090px;
    height: 640px;
  } */
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
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.font_color};
`;

const Desc = styled.p`
  text-align: ${(props) => props.text_align};
  width: 130px;
  font-size: 10px;
  color: ${(props) => props.font_color};
  font-weight: 300;
`;

const Circle = styled.div`
  width: 5px;
  height: 5px;
  background-color: gray;
  left: 20px;
  bottom: 20px;
  position: absolute;
`;

function Vertical() {
  const [isActive, setIsActive] = useState(false);
  const [sources, setSources] = useState([]);
  const language = useSelector((state) => state.language);

  useEffect(() => {
    setSources(data.main_vertical);
  }, []);

  return (
    <>
      <Wrap>
        <FlexWrap>
          {sources.map((e, i) => {
            return (
              <NavLink key={i} to={e.link}>
                <Card
                  onMouseEnter={() => {
                    setIsActive(true);
                  }}
                  onMouseOut={() => {
                    setIsActive(false);
                  }}
                  mobile={e.mobile}
                  bg_color={e.bg_color}
                >
                  <Circle className="circle" />
                  <Inner_Wrap
                    top={`${e.top}px`}
                    left={`${e.left}px`}
                    right={`${e.right}px`}
                    bottom={`${e.bottom}px`}
                    align={e.align}
                  >
                    <Years>{e.years}</Years>
                    <Title font_color={e.font_color}>
                      {language === "ko" && e.ko_title}
                      {language === "en" && e.en_title}
                      {language === "ru" && e.ru_title}
                    </Title>
                    <Desc font_color={e.font_color} text_align={e.text_align}>
                      {language === "ko" && e.ko_desc}
                      {language === "en" && e.en_desc}
                      {language === "ru" && e.ru_desc}
                    </Desc>
                  </Inner_Wrap>
                </Card>
              </NavLink>
            );
          })}
        </FlexWrap>
      </Wrap>
    </>
  );
}

export default Vertical;
