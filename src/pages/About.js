import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import data from "../data/data.json";
import { NavLink } from "react-router-dom";

const GoToComments = styled.div`
  padding: 2px 8px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: 99;
  font-size: 10px;
  border: 1px solid #666666;
  color: #666666;
  @media screen and (min-width: 768px){
    font-size: 11px;
  }
`;

const Wrap = styled.div`
  margin: 70px auto 20px;
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 500px;
    & .photo {
      height: 600px;
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
  position: relative;
`;

const Desc = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  /* text-align: justify; */
`;
const Age = styled.p`
  margin: 0 0 20px;
  font-size: 13px;
  font-weight: 200;
  color: #666666;
`;

const Skills = styled.p`
  margin: 0 0 20px;
  font-size: 13px;
  font-weight: 200;
  color: #666666;
`;

const Email = styled.p`
  margin: 0 0 70px;
  font-size: 13px;
  font-weight: 200;
  color:#666666;
`;

const Diploma = styled.p`
  margin: 0 0 20px;
  font-size: 13px;
  font-weight: 200;
  color: #666666;
`;

const CopyEmailBtn = styled.button`
  margin-left: 10px;
  background: none;
  border: 1px solid #aaa;
  color: #666666;
  padding: 2px 8px;
  cursor: pointer;
`;

function About() {
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
      <Wrap>
        <Photo className="photo" />
        {language === "ko" && (
          <>
            <Name className="name">{sources.ko_name}
            <NavLink to={"/comments"}>
          <GoToComments>
            다른 이들이 준에 대해 말하다 &gt;{" "}
          </GoToComments>
        </NavLink>
            </Name>
            <Desc className="desc">{sources.ko_desc}</Desc>
            <Age className="age">{sources.ko_age}</Age>

            <Skills>{sources.skills}</Skills>
            <Diploma>{sources.ko_academy}</Diploma>
            <Diploma>{sources.ko_diploma}</Diploma>
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
          </>
        )}
        {language === "en" && (
          <>
            <Name className="name">{sources.en_name}
            <NavLink to={"/comments"}>
          <GoToComments>
          Others talk about Jun &gt;{" "}
          </GoToComments>
        </NavLink>
            </Name>
            <Desc className="desc">{sources.en_desc}</Desc>
            <Skills>{sources.skills}</Skills>
            <Diploma>{sources.en_academy}</Diploma>
            <Diploma>{sources.en_diploma}</Diploma>
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
          </>
        )}
        {language === "ru" && (
          <>
            <Name className="name">{sources.ru_name}
            <NavLink to={"/comments"}>
          <GoToComments>
          Другие говорят о Джуне &gt;{" "}
          </GoToComments>
        </NavLink>
            </Name>
            <Desc className="desc">{sources.ru_desc}</Desc>
            <Skills>{sources.skills}</Skills>
            <Diploma>{sources.en_academy}</Diploma>
            <Diploma>{sources.ru_diploma}</Diploma>
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
          </>
        )}
      </Wrap>
    </>
  );
}

export default About;
