import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Wrap = styled.div`
  display: flex;
  margin: 100px 0;
  width: 100%;
  justify-content:center;
  
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
    width: 700px;
  }
  @media screen and (min-width: 1440px) {
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 23px;
  }
  @media screen and (min-width: 1440px) {
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Desc = styled.div`
  margin-top: 5px;
  font-size: 13px;
  font-weight: 300;
  text-align: center;
  color: #999999;
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

const Girl = styled.div`
  background-image: url("../images/photographer/wheel_mobile.png");
  width: 100%;
  height: 500px;
  @media screen and (min-width: 768px) {
    height: 600px;
  }
  @media screen and (min-width: 1024px) {
    background-image: url("../images/photographer/wheel_desktop.png");
    height: 850px;
  }
  @media screen and (min-width: 1440px) {
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Pray = styled.div`
  background-image: url("../images/photographer/pray_mobile.png");
  width: 100%;
  height: 500px;
  @media screen and (min-width: 768px) {
    height: 600px;
  }
  @media screen and (min-width: 1024px) {
    height: 700px;
  }
  @media screen and (min-width: 2200px) {
  }
`;

const LittleBoy = styled.div`
  background-image: url("../images/photographer/child_1_mobile.png");
  width: 100%;
  height: 500px;

  @media screen and (min-width: 768px) {
    height: 700px;
  }
  @media screen and (min-width: 1024px) {
    height: 900px;
  }
  @media screen and (min-width: 2200px) {
  }
`;

const LittleGirl = styled.div`
  background-image: url("../images/photographer/child_2_mobile.png");
  width: 100%;
  height: 500px;
  @media screen and (min-width: 768px) {
    height: 700px;
  }
  @media screen and (min-width: 1024px) {
    height: 900px;
  }
  @media screen and (min-width: 2200px) {
  }
`;

const TwoPoliceman = styled.div`
  background-image: url("../images/photographer/police_mobile.png");
  width: 100%;
  height: 500px;
  @media screen and (min-width: 768px) {
    height: 700px;
  }
  @media screen and (min-width: 1024px) {
    background-image: url("../images/photographer/police_desktop.png");
    height: 900px;
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Policemans = styled.div`
  background-image: url("../images/photographer/child_2_mobile.png");
  width: 100%;
  height: 500px;
  @media screen and (min-width: 768px) {
    height: 700px;
  }
  @media screen and (min-width: 1024px) {
    height: 900px;
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Iran = styled.div`
  background-image: url("../images/photographer/iran_mobile.png");
  background-position: center;
  background-size: cover;
  width: 600px;
  height: 500px;
  filter: grayscale(1) brightness(1.07);
  @media screen and (min-width: 1024px) {
    background-image: url("../images/photographer/iran_desktop.png");
    width: 800px;
    height: 1000px;
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Rain = styled.div`
  background-image: url("../images/photographer/rain_mobile.png");
  width: 100%;
  height: 500px;
  @media screen and (min-width: 768px) {
    height: 600px;
  }
  @media screen and (min-width: 768px) {
    height: 700px;
  }
  @media screen and (min-width: 1024px) {
    height: 900px;
  }
  @media screen and (min-width: 2200px) {
  }
`;

const OldMan = styled.div`
  background-image: url("../images/photographer/old_man_mobile.png");
  background-position: center;
  background-size: cover;
  width: 600px;
  height: 500px;
  @media screen and (min-width: 1024px) {
    background-image: url("../images/photographer/old_man_desktop.png");
    width: 1350px;
    height: 1000px;
  }
  @media screen and (min-width: 2200px) {
  }
`;

const HappyAndSad = styled.div`
  background-image: url("../images/photographer/happy_sad_mobile.png");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 700px;
  @media screen and (min-width: 768px) {
    background-image: url("../images/photographer/happy_sad_wide_mobile.png");
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    background-image: url("../images/photographer/happy_sad_wide.png");
    height: 1050px;
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Dance = styled.div`
  background-image: url("../images/photographer/dance_mobile.png");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 400px;
  @media screen and (min-width: 768px) {
    height: 500px;
  }
  @media screen and (min-width: 1024px) {
    background-image: url("../images/photographer/dance_desktop.png");
    height: 1000px;
  }
  @media screen and (min-width: 1440px) {
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Drag = styled.div`
  background-image: url("../images/photographer/drag_queen.png");
  margin: 0 auto;
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 600px;
  @media screen and (min-width: 768px) {
    height: 500px;
  }
  @media screen and (min-width: 1024px) {
    background-image: url("../images/photographer/drag_queen.png");
    height: 1000px;
  }
  @media screen and (min-width: 1440px) {
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Love = styled.div`
  background-image: url("../images/photographer/love_mobile.png");
  background-position: left;
  background-size: cover;
  margin: 0 auto;
  width: 400px;
  height: 700px;
  filter: grayscale(1) brightness(1.45);
  @media screen and (min-width: 768px) {
    width: 650px;
    height: 800px;
  }
  @media screen and (min-width: 1024px) {
    background-image: url("../images/photographer/love_desktop.png");
    width: 1000px;
    height: 1200px;
  }
  @media screen and (min-width: 1440px) {
    width: 1500px;
    height: 1200px;
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Memorial = styled.div`
  background-image: url("../images/photographer/memorial_mobile.png");
  background-position: center;
  background-size: cover;
  width: 600px;
  height: 500px;
  filter: grayscale(1) contrast(1.05) brightness(1.1);
  @media screen and (min-width: 1024px) {
    background-image: url("../images/photographer/memorial_desktop.png");
    width: 800px;
    height: 1000px;
  }
  @media screen and (min-width: 2200px) {
  }
`;
const Police2 = styled.div`
  background-image: url("../images/photographer/police_2_mobile.png");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 560px;
  filter: grayscale(1) brightness(1.1) contrast(1.15);
  @media screen and (min-width: 1024px) {
    background-image: url("../images/photographer/police_2_desktop.png");
    width: 100%;
    height: 1000px;
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Together = styled.div`
  background-image: url("../images/photographer/together_mobile.png");
  background-position: center;
  background-size: cover;
  width: 350px;
  height: 500px;
  filter: grayscale(1) ;
  @media screen and (min-width: 1024px) {
    background-image: url("../images/photographer/together_desktop.png");
    width: 700px;
    height: 850px;
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Monks = styled.div`
  background-image: url("../images/photographer/monks_1.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 600px;
  filter: grayscale(1) brightness(1.1) contrast(1.2);
  @media screen and (min-width: 1024px) {
    width: 1450px;
    height: 860px;
  }
  @media screen and (min-width: 2200px) {
  }
`;

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
      <Wrap >
        <CardWrap>
          <ShowTitleAndDesc
            title={language === "ko"
            ? "시선"
            : language === "en"
            ? "Sight"
            : language === "ru"
            && "Взгляд"}
            desc={language === "ko"
            ? "가까이 있는 것들을 보기"
            : language === "en"
            ? "Observe things that are close"
            : language === "ru"
            && "Наблюдать за близкими вещами"}
          ></ShowTitleAndDesc>
        </CardWrap>
      </Wrap>
      <Wrap>
        <Love />
      </Wrap>
      <Wrap>
        <Dance />
      </Wrap>
      <Wrap>
        <CardWrap>
        <ShowTitleAndDesc
           
            desc={language === "ko"
            ? "무릎 꿇어야만 보이는 것들"
            : language === "en"
            ? "Things that can only be seen by kneeling down"
            : language === "ru"
            && "Вещи, видимые только при преклонении колен"}
          ></ShowTitleAndDesc>
        </CardWrap>
      </Wrap>
      <Wrap style={{ marginBottom: 0 }}>
        <CardWrap style={{ marginRight: "30px" }}>
          <LittleBoy />
        </CardWrap>
        <CardWrap style={{ marginTop: "100px" }}>
          <LittleGirl />
        </CardWrap>
      </Wrap>
      <Wrap>
        <CardWrap>
          <Pray />
        </CardWrap>
      </Wrap>
      <Wrap>
        <CardWrap>
          <ShowTitleAndDesc
            desc={language === "ko"
            ? "기다려야 보이는 것들"
            : language === "en"
            ? "Things that are seen only by waiting"
            : language === "ru"
            && "Вещи, которые видны только при ожидании"}
          ></ShowTitleAndDesc>
        </CardWrap>
      </Wrap>
      <Wrap>
        <OldMan />
      </Wrap>
      <Wrap>
        <CardWrap>
        <ShowTitleAndDesc
            desc={language === "ko"
            ? "몰입해야 보이는 것들"
            : language === "en"
            ? "Things that become visible only through immersion"
            : language === "ru"
            && "Вещи, которые видны только при погружении"}
          ></ShowTitleAndDesc>
        </CardWrap>
      </Wrap>
      <Wrap>
        <CardWrap>
          <Rain />
        </CardWrap>
      </Wrap>
      <Wrap>
        <CardWrap>
          <Girl />
        </CardWrap>
      </Wrap>
      <Wrap>
        <CardWrap>
        <ShowTitleAndDesc
            desc={language === "ko"
            ? "고개를 들어야 보이는 것들"
            : language === "en"
            ? "Things that become visible only when looking up"
            : language === "ru"
            && "Вещи, которые видны только при взгляде вверх"}
          ></ShowTitleAndDesc>
        </CardWrap>
      </Wrap>
      <Wrap>
        <HappyAndSad />
      </Wrap>
      <Wrap style={{marginBottom: "130px"}}>
        <CardWrap>
        <ShowTitleAndDesc
            desc={language === "ko"
            ? "다가가야 보이는 것들"
            : language === "en"
            ? "Things seen only when getting closer"
            : language === "ru"
            && "Вещи, видимые только при приближении"}
          ></ShowTitleAndDesc>
        </CardWrap>
      </Wrap>
      <Wrap>
        <Iran />
        <Memorial style={{marginLeft: "20px", marginTop: "100px"}} />
      </Wrap>
      <Wrap>
        <Monks />
      </Wrap>
      <Wrap>
        <Police2 />
      </Wrap>
      <Wrap>
        <Together />
      </Wrap>

      {/* <Wrap>
        <Drag/>
      </Wrap> */}
    </>
  );
}

export default Contents_Mobile;
