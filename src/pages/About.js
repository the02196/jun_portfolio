import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import data from "../data/data.json";
import { NavLink } from "react-router-dom";

const GoToComments = styled.div`
  margin-top: 15px;
  margin-bottom: 70px;
  padding: 10px 0;
  font-size: 14px;
  box-sizing: border-box;
  border: 1px solid #aaa;
  color: #222222;
  text-align: center;
  position: relative;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const Wrap = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 300px;
  @media screen and (min-width: 768px) {
    margin-top: 200px;
    width: 700px;
    & .photo {
    }
    & .name {
      font-size: 23px;
      position: relative;
    }
    & .desc {
      font-size: 16px;
    }
  }
`;

const Photo = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  /* filter: contrast(1) brightness(1) grayscale(1); */
  background-image: url("../images/about/jun_snow.jpeg");
  @media screen and (min-width: 768px) {
    background-image: url("../images/about/jun_snow.jpeg");
    height: 500px;
  }
`;

const Name = styled.h1`
  font-weight: 500;
  font-size: 20px;
  margin: 20px 0;
  position: relative;
`;

const Desc = styled.p`
  margin: 0 0 20px;
  font-size: 15px;
  line-height: 20px;
`;
const Age = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  font-weight: 300;
  color: #222222;
`;

const Skills = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  font-weight: 300;
  color: #222222;
  line-height: 20px;
  /* text-align: justify; */
`;

const Email = styled.p`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 300;
  color: #222222;
`;

const Diploma = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  font-weight: 200;
  line-height: 20px;
  color: #222222;
`;

const CopyEmailBtn = styled.button`
  margin-left: 10px;
  background: none;
  border: 1px solid #aaa;
  color: #222222;
  padding: 2px 8px;
  cursor: pointer;
`;

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const language = useSelector((state) => state.language);
  const [sources, setSources] = useState([]);

  useEffect(() => {
    setSources(data.about);
  }, []);

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("이메일이 복사 되었습니다.");
    } catch (error) {
      alert("이메일 복사에 실패하였습니다.");
    }
  };

  return (
    <>
      <Nav />
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Wrap>
          <Photo className="photo" />

          <>
            {/* name */}
            {language === "ko" && (
              <Name className="name">{sources.ko_name}</Name>
            )}
            {language === "en" && (
              <Name className="name">{sources.en_name}</Name>
            )}
            {language === "ru" && (
              <Name className="name">{sources.ru_name}</Name>
            )}
            {/* desc */}
            {language === "ko" && (
              <Desc className="desc">{sources.ko_desc}</Desc>
            )}
            {language === "en" && (
              <Desc className="desc">{sources.en_desc}</Desc>
            )}
            {language === "ru" && (
              <Desc className="desc">{sources.ru_desc}</Desc>
            )}
            {/* age */}
            {language === "ko" && <Age className="age">{sources.ko_age}</Age>}
            {/* skill */}
            <Skills>{sources.skills}</Skills>
            {/* academy */}
            {language === "ko" && <Diploma>{sources.ko_academy}</Diploma>}
            {language === "en" && <Diploma>{sources.en_academy}</Diploma>}
            {language === "ru" && <Diploma>{sources.ru_academy}</Diploma>}
            {/* diploma */}
            {language === "ko" && <Diploma>{sources.ko_diploma}</Diploma>}
            {language === "en" && <Diploma>{sources.en_diploma}</Diploma>}
            {language === "ru" && <Diploma>{sources.ru_diploma}</Diploma>}
            <Email>
              {sources.email}
              <CopyEmailBtn
                onClick={() => {
                  handleCopyClipBoard("the02196@gmail.com");
                }}
              >
                copy e-mail
              </CopyEmailBtn>
            </Email>
            <NavLink to={"/comments"}>
              {language === "ko" && (
                <GoToComments>다른 이들이 준에 대해 말하다 &gt; </GoToComments>
              )}
              {language === "en" && (
                <GoToComments>Others talk about Jun &gt; </GoToComments>
              )}
              {language === "ru" && (
                <GoToComments>Другие говорят о Джуне &gt; </GoToComments>
              )}
            </NavLink>
          </>
        </Wrap>
      </div>
    </>
  );
}

export default About;
