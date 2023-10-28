import React from "react";
import styled from "styled-components";
import SlidePoster from "./SlidePoster";
import { NavLink } from "react-router-dom";
import Theaters from "./Theaters";
import { useSelector } from "react-redux";
const Wrap = styled.div`
  display: flex;
  margin: 100px 0 50px;
  width: 100%;
  justify-content: center;
`;

const CardWrap = styled.div`
  width: 400px;

  div {
    background-position: center;
    background-size: cover;
  }
  @media screen and (min-width: 768px) {
    width: 500px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
  }
  @media screen and (min-width: 1440px) {
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 19px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 21px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1440px) {
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Desc = styled.div`
  margin-top: 10px;
  font-size: 13px;
  font-weight: 300;
  text-align: center;
  color: #777777;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1440px) {
  }
  @media screen and (min-width: 2200px) {
  }
`;

const JunWithCoWorkers = styled.div`
  margin: 0 auto;
  background-image: url("../images/director/jun_with_co_workers_mobile.png");
  width: 400px;
  height: 250px;
  background-position: center;
  background-size: cover;
  filter: grayscale(1) contrast(0.9);
  @media screen and (min-width: 768px) {
    background-image: url("../images/director/jun_with_co_workers_desktop.png");
    width: 700px;
    height: 440px;
  }
  @media screen and (min-width: 1024px) {
    width: 800px;
    height: 500px;
  }
`;

const Cow = styled.div`
  background-image: url("../images/director/cow_mobile.png");
  width: 100%;
  height: 500px;
  filter: saturate(0.65) contrast(0.9);
  @media screen and (min-width: 768px) {
    background-image: url("../images/director/cow_desktop.png");
    height: 800px;
  }
`;

const BoyPuppet = styled.div`
  background-image: url("../images/director/boy_puppet_mobile.png");
  width: 100%;
  height: 300px;
  filter: saturate(0.8) contrast(0.9);
  @media screen and (min-width: 768px) {
    background-image: url("../images/director/boy_puppet_desktop.png");
    width: 100%;
    height: 400px;
  }
`;

const JunDirector = styled.div`
  background-image: url("../images/director/jun_director_mobile.png");
  background-position: center;
  background-size: cover;
  width: 500px;
  height: 350px;
  filter: saturate(0) contrast(0.9);
  @media screen and (min-width: 768px) {
    width: 700px;
    height: 500px;
  }
  @media screen and (min-width: 1024px) {
    background-image: url("../images/director/jun_director_desktop.png");
    width: 800px;
    height: 540px;
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Draw = styled.div`
  background-image: url("../images/director/draw_mobile.png");
  background-position: center;
  background-size: cover;
  border: 1px solid blakc;
  width: 100%;
  height: 500px;
  filter: saturate(0.7) contrast(1.3);
  @media screen and (min-width: 768px) {
    background-image: url("../images/director/draw_desktop.png");
    height: 800px;
  }
`;

const Dog = styled.div`
  background-image: url("../images/director/dog_mobile.png");
  margin: 0 auto;
  width: 100%;
  height: 500px;
  background-position: center;
  background-size: cover;
  filter: grayscale(0.3) contrast(0.9);
  @media screen and (min-width: 768px) {
    background-image: url("../images/director/dog_desktop.png");
    width: 100%;
    height: 800px;
  }
  @media screen and (min-width: 1440px) {
    height: 1000px;
  }
`;

const Cute = styled.div`
  background-image: url("../images/director/cute_jun.jpg");
  width: 400px;
  height: 400px;
  background-position: center;
  background-size: cover;
  filter: saturate(0.85) contrast(1);
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 500px;
  }
`;

function ShowVideo() {
  return (
    <Wrap style={{ marginTop: "60px" }}>
      <iframe
        src="https://vk.com/video_ext.php?oid=-205978459&id=456239019&hd=2"
        width="853"
        height="480"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
        frameborder="0"
        allowFullScreen
      ></iframe>
    </Wrap>
  );
}

function ShowTitleAndDesc({ title, desc }) {
  return (
    <>
      {title && <Title>{title}</Title>}
      {desc && <Desc>{desc}</Desc>}
    </>
  );
}

function Contents_Mobile() {
  const language = useSelector((state) => state.language);
  return (
    <>
      <Wrap>
        <CardWrap>
          <ShowTitleAndDesc
            title={ language === "ko"
            ? "함께 한다는 것"
            : language === "en"
            ? "Being together"
            : language === "ru"
            && "Быть вместе"
            }
            desc={language === "ko"
            ? "슬로바키아에서 열린 Istropolitana 연극 축제에서, 동료들과"
            : language === "en"
            ? "At the Istropolitana theater festival in Slovakia, with colleagues"
            : language === "ru"
            && "На театральном фестивале Istropolitana в Словакии, с коллегами"}
          />
        </CardWrap>
      </Wrap>
      <JunWithCoWorkers />
      <Theaters />
      <Wrap>
        <CardWrap>
          <ShowTitleAndDesc
            title={language === "ko"
            ? "편집 및 그래픽 작업"
            : language === "en"
            ? "Video editing and graphic design"
            : language === "ru"
            && "Монтаж и графический дизайн"}
            desc={language === "ko"
            ? "공연 홍보를 위한 영상과 포스터 제작"
            : language === "en"
            ? "Сreating videos and posters for promoting performances"
            : language === "ru"
            && "Создание трейлера и постеров для продвижения спектаклей"}
          />
        </CardWrap>
      </Wrap>
      <ShowVideo />
      <SlidePoster />
      <Wrap>
        <CardWrap>
          <ShowTitleAndDesc
            title={language === "ko"
            ? "인형극 스페셜리스트"
            : language === "en"
            ? "Puppet theater specialist"
            : language === "ru"
            && "Специалист по кукольному театру"}
            desc={language === "ko"
            ? "연출가 및 테크니컬 엔지니어로 일하며 다양한 퍼펫들을 설계"
            : language === "en"
            ? "Worked as a director and technical engineer, designed various puppets"
            : language === "ru"
            && "Работал режиссером и техническим инженером, занимался разработкой различных кукол"}
          />
        </CardWrap>
      </Wrap>
      
      <Wrap>
        <CardWrap style={{ marginRight: "20px" }}>
          <Draw />
        </CardWrap>
        <CardWrap style={{ marginTop: "60px" }}>
          <Cow />
        </CardWrap>
      </Wrap>
      {/* <Dog /> */}
   
    </>
  );
}

export default Contents_Mobile;
