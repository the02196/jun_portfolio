import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import { setIsOpen, setSelectedValue } from "../../store";
import { useDispatch, useSelector } from "react-redux";

const Wrap = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const FlexWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    max-width: 1100px;
  }
  @media screen and (min-width: 1550px) {
    max-width: 1700px;
  }
  @media screen and (min-width: 2400px) {
    max-width: 2400px;
  }
`;

const Inner_Wrap = styled.li`
  display: inline-block;
  width: 400px;
  height: 600px;
  margin: 30px auto;
  cursor: pointer;
  position: relative;
  @media screen and (min-width: 763px) {
    width: 590px;
    height: 900px;
  }
  @media screen and (min-width: 1024px) {
    width: 500px;
    height: 750px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

const Image = styled.div`
  width: 100%;
  height: 40%;
  box-sizing: border-box;
  border: 1px solid black;
  border-bottom: none;
  background-image: url(${(props) => `../images/developer/${props.bg_img}`});
  background-size: cover;
  background-position: top;
`;

const Card = styled.div`
  width: 100%;
  height: 60%;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: ${(props) => props.bg_color};
  padding: 25px 20px;
`;

const Card_Top_Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  color: ${(props) => props.color};
  font-size: 20px;
  font-weight: 400;
  @media screen and (min-width: 763px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
const Days = styled.span`
  color: ${(props) => props.color};
  font-size: 15px;
  font-weight: 200;
  @media screen and (min-width: 763px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
const Skills = styled.p`
  color: ${(props) => props.color};
  font-size: 15px;
  font-weight: 200;
  @media screen and (min-width: 763px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
const Desc = styled.p`
  margin-top: 18px;
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: 200;
  @media screen and (min-width: 763px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

const Option = styled.p`
  color: ${(props) => props.color};
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-size: 13px;
  font-weight: 300;
`;

function GalleryView() {
  const language = useSelector((state) => state.language);
  const filter = useSelector((state) => state.filter);
  const data = useSelector((state) => state.data);
  let filteredData = [];
  let unfilteredData = [];
  if (filter === 'All') {
    filteredData = data[0];
  } else {
    filteredData = data[0].filter(e => e.option === filter);
    unfilteredData = data[0].filter(e => e.option !== filter);
  }
  const finalData = [...filteredData, ...unfilteredData];



  return finalData.map((e, i) => {
    return (
      <Inner_Wrap key={i}>
        <Image bg_img={e.mobile} />
        <Card bg_color={e.bg_color}>
          <Card_Top_Wrap>
            <Title color={e.font_color}>
              {language === "ko" && e.ko_title}
              {language === "en" && e.en_title}
              {language === "ru" && e.ru_title}
            </Title>
            <Days color={e.font_color}>{e.days}</Days>
          </Card_Top_Wrap>
          <Skills color={e.font_color}>{e.skills}</Skills>
          <Desc color={e.font_color}>
            {language === "ko" && e.ko_desc}
            {language === "en" && e.en_desc}
            {language === "ru" && e.ru_desc}
          </Desc>
        </Card>
        <Option color={e.font_color}>{e.option}</Option>
      </Inner_Wrap>
    );
  });
}

function Gallery() {
  return (
    <>
      <Wrap>
        <FlexWrap>
          <GalleryView />
        </FlexWrap>
      </Wrap>
    </>
  );
}

export default Gallery;
