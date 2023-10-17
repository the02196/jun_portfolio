import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import { setIsOpen, setSelectedValue } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  margin-top: 100px;
`;

const FlexWrap = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  /* @media screen and (min-width: 1024px) {
    max-width: 1100px;
  }
  @media screen and (min-width: 1550px) {
    max-width: 1700px;
  }
  @media screen and (min-width: 2400px) {
    max-width: 2400px;
  } */
`;

const InnerWrap = styled.li`
  display: flex;

  width: 100%;
height: 100px;
  margin: 10px auto;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  cursor: pointer;
  position: relative;
  @media screen and (min-width: 763px) {
    
    width: 100%;
  height: 150px;
  }
  /* @media screen and (min-width: 1024px) {
    width: 500px;
    height: 750px;
  }

  @media screen and (min-width: 1440px) {
  } */
`;

const Image = styled.div`

  /* display: none; */
  width: 120px;
  height: 100%;
  box-sizing: border-box;
  background-image: url(${(props) => `../images/developer/${props.bg_img}`});
  background-size: cover;
  background-position: center;
  @media screen and (min-width: 763px) {
    width: 180px;
  height: 100%;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-left: 1px solid black;
  background-color: ${(props) => props.bg_color};
  padding: 10px 10px;
  /* @media screen and (min-width: 763px) {
    display: flex;
    flex-direction: column;
    padding: 35px 30px;
    justify-content: center;
  } */
`;

const Card_Top_Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 400;
  @media screen and (min-width: 763px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
const Days = styled.span`
  color: ${(props) => props.color};
  font-size: 15px;
  font-weight: 200;
  @media screen and (min-width: 763px) {
    font-size: 15px;
   
  }
  @media screen and (min-width: 1440px) {
  }
`;

const Days_Mobile = styled.span`
  color: ${(props) => props.color};
  font-size: 15px;
  margin-top: 5px;
  font-weight:200;
  display: block;
  @media screen and (min-width: 763px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`;
const Skills = styled.p`
  color: ${(props) => props.color};
  font-size: 13px;
  font-weight: 200;
  @media screen and (min-width: 763px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
const Desc = styled.p`
  margin-top: 18px;
  color: ${(props) => props.color};
  font-size: 13px;
  font-weight: 200;
  display: none;
  @media screen and (min-width: 763px) {
    font-size: 14px;
      display: block;
  }
  @media screen and (min-width: 1440px) {
  }
`;

const Option = styled.p`
  color: ${(props) => props.color};
  position: absolute;
  bottom: 0px;
  right: 10px;
  font-size: 13px;
  font-weight: 300;
  @media screen and (min-width: 763px) {
   bottom: 10px;
  right: 20px;
  }
`;

function ListView({ json, language }) {
  return json.map((e, i) => {
    return (
      <InnerWrap key={i}>
        <Image bg_img={e.list_bg_img} />
        <Card bg_color={e.bg_color}>
          <Card_Top_Wrap>
            <Title color={e.font_color}>
              {" "}
              {language === "ko" && e.ko_title}
              {language === "en" && e.en_title}
              {language === "ru" && e.ru_title}
            </Title>
            <Days color={e.font_color}>{e.days}</Days>
          {/* <Days_Mobile color={e.font_color}>{e.days}</Days_Mobile> */}
          </Card_Top_Wrap>
          <Skills color={e.font_color}>{e.skills}</Skills>
          <Desc color={e.font_color}>
            {language === "ko" && e.ko_desc}
            {language === "en" && e.en_desc}
            {language === "ru" && e.ru_desc}
          </Desc>
        </Card>
        <Option color={e.font_color}>{e.option}</Option>
      </InnerWrap>
    );
  });
}

function List() {
  const [json, setJson] = useState([]);
  const language = useSelector((state) => state.language);

  useEffect(() => {
    setJson(data.developer);
  }, []);

  return (
    <>
      <Wrap>
        <FlexWrap>
          <ListView json={json} language={language} />
        </FlexWrap>
      </Wrap>
    </>
  );
}

export default List;
