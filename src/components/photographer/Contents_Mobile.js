import React from "react";
import styled from "styled-components";
const Wrap = styled.div`
  display: flex;
  margin: 100px 0;
  width: 100%;
  justify-content: ${(props) => props.justify};
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
    width: 1350px;
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

function Contents_Mobile() {
  return (
    <>
      <Wrap justify={"center"}>
        <CardWrap>
          <Title>Lorem, ipsum dolor.</Title>
          <Desc>Ipsum dolor sit amet consectetur.</Desc>
        </CardWrap>
      </Wrap>
      <Wrap>
        <Love />
      </Wrap>
      <Wrap justify={"center"}>
        <Dance />
      </Wrap>
      <Wrap justify={"center"}>
        <CardWrap>
          <Desc>Consectetur adipisicing elit. Ab, sint? Tempore, enim?</Desc>
        </CardWrap>
      </Wrap>

      <Wrap style={{ marginBottom: 0 }} justify={"center"}>
        <CardWrap style={{ marginRight: "30px" }}>
          <LittleBoy />
        </CardWrap>
        <CardWrap style={{ marginTop: "100px" }}>
          <LittleGirl />
        </CardWrap>
      </Wrap>
      <Wrap justify={"center"}>
        <CardWrap>
          <Pray />
        </CardWrap>
      </Wrap>
      <Wrap justify={"center"}>
        <CardWrap>
          <Desc style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            provident eum eaque.
          </Desc>
        </CardWrap>
      </Wrap>
      <Wrap justify={"center"}>
        <OldMan />
      </Wrap>
      <Wrap justify={"center"}>
        <CardWrap>
          <Desc style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            provident eum eaque.
          </Desc>
        </CardWrap>
      </Wrap>
      <Wrap justify={"center"}>
        <CardWrap>
          <Rain />
        </CardWrap>
      </Wrap>
      <Wrap justify={"center"}>
        <CardWrap>
          <Girl />
        </CardWrap>
      </Wrap>
      <Wrap justify={"center"}>
        <CardWrap>
          <Title>Lorem, ipsum dolor.</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, sint?
            Tempore, enim?
          </Desc>
        </CardWrap>
      </Wrap>
      <Wrap justify={"center"}>
        <HappyAndSad />
      </Wrap>
      <Wrap justify={"center"}>
        <CardWrap>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, sint?
            Tempore, enim?
          </Desc>
        </CardWrap>
      </Wrap>
      <Wrap justify={"center"}>
        <Iran />
      </Wrap>

      {/* <Wrap>
        <Drag/>
      </Wrap> */}
    </>
  );
}

export default Contents_Mobile;