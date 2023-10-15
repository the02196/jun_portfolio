import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import { setIsOpen, setSelectedValue } from "../../store";
import { useDispatch, useSelector } from "react-redux";

const Wrap = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Inner_Wrap = styled.li`
  width: 400px;
  height: 600px;
  margin: 30px auto;
  cursor: pointer;
  position: relative;
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
`;
const Days = styled.span`
  color: ${(props) => props.color};
  font-size: 15px;
  font-weight: 200;
`;
const Skills = styled.p`
  color: ${(props) => props.color};
  font-size: 15px;
  font-weight: 200;
`;
const Desc = styled.p`
  margin-top: 18px;
  color: ${(props) => props.color};
  font-size: 13px;
  font-weight: 200;
`;

const Option = styled.p`
  color: ${(props) => props.color};
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-size: 13px;
  font-weight: 300;
`;

function GalleryView({ json, language }) {
  return json.map((e, i) => {
    return (
      <Inner_Wrap key={i}>
        <Image bg_img={e.mobile} />
        <Card bg_color={e.bg_color}>
          <Card_Top_Wrap>
            <Title color={e.font_color}>
              {" "}
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

function RenderComponent({ json, selectedView, language }) {
  switch (selectedView) {
    case "List":
      return;
    case "Gallery":
      return <GalleryView json={json} language={language} />;

    case "Slide":
      return;
    default:
      return <GalleryView />;
  }
}

function Gallery() {
  const [json, setJson] = useState([]);
  const language = useSelector((state) => state.language);
  const selectedView = useSelector((state) => state.selectedView);

  useEffect(() => {
    setJson(data.developer);
  }, []);

  return (
    <>
      <Wrap>
        <RenderComponent
          json={json}
          setJson={setJson}
          selectedView={selectedView}
          language={language}
        />
      </Wrap>
    </>
  );
}

export default Gallery;
