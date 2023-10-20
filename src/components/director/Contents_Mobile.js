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
    width: 600px;
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
    font-size: 20px;
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

const Poster = styled.div`
  background-image: url("../images/director/dont_go_poster_mobile.png");
  width: 100%;
  box-sizing: border-box;
  height: 560px;
  border: 1px solid #ccc;
  @media screen and (min-width: 768px) {
    height: 700px;
  }
  @media screen and (min-width: 1024px) {
    height: 850px;
  }
`;

const Poster_Crocodile = styled.div`
  background-image: url("../images/director/poster_crocodile_mobile.png");
  width: 100%;
  box-sizing: border-box;
  height: 560px;
  border: 1px solid #ccc;
  @media screen and (min-width: 768px) {
    height: 700px;
  }
  @media screen and (min-width: 1024px) {
    height: 850px;
  }
`;

const Jun_with_co_workers = styled.div`
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
  filter: saturate(0.75) contrast(0.9);
  @media screen and (min-width: 768px) {
    background-image: url("../images/director/cow_desktop.png");
    height: 800px;
  }
`;

const BoyPuppet = styled.div`
  background-image: url("../images/director/boy_puppet_mobile.png");
  width: 100%;
  height: 300px;
  filter: saturate(0) contrast(0.9);
  @media screen and (min-width: 768px) {
    background-image: url("../images/director/boy_puppet_desktop.png");
    height: 400px;
  }
`;

const Jun_director = styled.div`
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
    background-image: url("../images/photographer/crocodile_desktop.png");
    width: 1350px;
    height: 1000px;
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Draw = styled.div`
  background-image: url("../images/director/draw_mobile.png");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 500px;
  @media screen and (min-width: 768px) {
    background-image: url("../images/director/draw_desktop.png");
    height: 800px;
  }
`;

function Contents_Mobile() {
  return (
    <>
      <Wrap justify={"center"}>
        <CardWrap>
          <Title>Lorem, ipsum dolor.</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, sint?
            Tempore, enim?
          </Desc>
        </CardWrap>
      </Wrap>
      <Wrap style={{marginBottom: "0"}} justify={"center"}>
        <Jun_with_co_workers />
      </Wrap>
      <Wrap justify={"center"}>
        <CardWrap>
          <Desc>
            Consectetur adipisicing elit. Ab, sint?
            Tempore, enim!
          </Desc>
        </CardWrap>
      </Wrap>
      {/* <Wrap style={{marginTop: "30px"}} justify={"center"}>
        <Jun_director />
      </Wrap> */}
      {/* <Wrap justify={"center"}>
        <CardWrap>
          <Title>Lorem, ipsum dolor.</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, sint?
            Tempore, enim?
          </Desc>
        </CardWrap>
      </Wrap> */}
      <Wrap style={{ marginBottom: "0" }} justify={"center"}>
        <CardWrap>
          <Poster></Poster>
        </CardWrap>
      </Wrap>
      <Wrap style={{ marginTop: "20px" }} justify={"center"}>
        <CardWrap>
          <Poster_Crocodile></Poster_Crocodile>
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
        <CardWrap style={{ marginRight: "20px" }}>
          <Draw />
        </CardWrap>
        <CardWrap style={{ marginTop: "60px" }}>
          <Cow />
        </CardWrap>
      </Wrap>
      {/* <Wrap justify={"center"}>
        <CardWrap>
          <BoyPuppet />
        </CardWrap>
      </Wrap> */}
      
    </>
  );
}

export default Contents_Mobile;
