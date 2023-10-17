import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import data from "../data/data.json";

const Wrap = styled.div`
  margin: 170px auto 20px;
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 500px;
    & .photo{
        height: 600px;
    }
    & .name{
        font-size: 23px;
    }
    & .desc{
        font-size: 16px;
    }
  }
`;

const Photo = styled.div`
  width: 100%;
  height: 470px;
  background-image: url("../images/about/Magic.jpg");
  background-size: cover;
  background-position: center;
  filter: contrast(2) brightness(0.85) grayscale(1);
`;

const Name = styled.h1`
  font-weight: 500;
  font-size: 20px;
  margin: 20px 0;
`;

const Desc = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  /* text-align: justify; */
`;
const Age = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
`;

const Skills = styled.p`
  margin: 0 0 70px;
  font-size: 13px;
  font-weight: 200;
  color: #888888;
`
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
        <Photo className="photo" />
        {language === "ko" && (
          <>
            <Name className="name">{sources.ko_name}</Name>
            <Desc className="desc">{sources.ko_desc}</Desc>
            <Age className="age">{sources.age}</Age>
          </>
        )}
        {language === "en" && (
          <>
            <Name className="name">{sources.en_name}</Name>
            <Desc className="desc">{sources.en_desc}</Desc>
          </>
        )}
        {language === "ru" && (
          <>
            <Name className="name">{sources.ru_name}</Name>
            <Desc className="desc">{sources.ru_desc}</Desc>
          </>
        )}
        <Skills>{sources.skills}</Skills>
      </Wrap>
    </>
  );
}

export default About;
