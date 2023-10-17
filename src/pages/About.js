import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import data from "../data/data.json";

const Wrap = styled.div`
  margin: 130px auto 20px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Photo = styled.div`
  width: 100%;
  height: 430px;
  background-image: url("../images/about/Magic.jpg");
  background-size: cover;
  background-position: center;
  filter: contrast(2) brightness(0.85) grayscale(1);
`;

const Name = styled.h1`
  font-weight: 500;
  font-size: 18px;
  margin: 20px 0;
`;

const Desc = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  color: #444444;
`;
const Age = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  color: #444444;
`;
function About() {
  const language = useSelector((state) => state.language);
  const [sources, setSources] = useState([]);

  useEffect(() => {
    setSources(data.about);
  }, []);

  return (
    <>
      <Nav />
      <Wrap>
        <Photo />
        {language === "ko" && (
          <>
            <Name>{sources.ko_name}</Name>
            <Desc>{sources.ko_desc}</Desc>
            <Age>{sources.age}</Age>
          </>
        )}
        {language === "en" && (
          <>
            <Name>{sources.en_name}</Name>
            <Desc>{sources.en_desc}</Desc>
          </>
        )}
        {language === "ru" && (
          <>
            <Name>{sources.ru_name}</Name>
            <Desc>{sources.ru_desc}</Desc>
          </>
        )}
      </Wrap>
    </>
  );
}

export default About;
