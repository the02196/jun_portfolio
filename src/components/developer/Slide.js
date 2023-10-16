import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import { setIsOpen, setSelectedValue } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectCoverflow, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//swiper 공식홈페이지 get started 참조하기
//wowjs를 실행하기 위해서 아래 2개 import 해줘야함 , yarn add wowjs를 해줘야함(터미널에)
import WOW from "wowjs";
import "animate.css";

const Wrap = styled.div`
  width: 100%;

`;

const StyledSlide = styled(SwiperSlide)`
  margin: auto;
`;
const FlexWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    max-width: 1100px;
  }
  @media screen and (min-width: 1550px) {
    max-width: 1700px;
  }
  @media screen and (min-width: 2400px) {
    max-width: 2400px;
  }
`;

const Inner_Wrap = styled.li`
  display: inline-block;
  width: 400px;
  height: 600px;
  cursor: pointer;
  position: relative;
  /* -webkit-box-reflect: below 30px linear-gradient(transparent, rgba(0,0,0,0), rgba(0,0,0,0.3)); */
 
  @media screen and (min-width: 763px) {
    width: 590px;
    height: 900px;
  }
  @media screen and (min-width: 1024px) {
    width: 500px;
    height: 750px;
  }

  @media screen and (min-width: 1440px) {
  }
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
  @media screen and (min-width: 763px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
const Days = styled.span`
  color: ${(props) => props.color};
  font-size: 15px;
  font-weight: 200;
  @media screen and (min-width: 763px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
const Skills = styled.p`
  color: ${(props) => props.color};
  font-size: 15px;
  font-weight: 200;
  @media screen and (min-width: 763px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
const Desc = styled.p`
  margin-top: 18px;
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: 200;
  @media screen and (min-width: 763px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

const Option = styled.p`
  color: ${(props) => props.color};
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-size: 13px;
  font-weight: 300;
`;

function SlideView({ json, language }) {
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

function Slide() {
  const [json, setJson] = useState([]);
  const language = useSelector((state) => state.language);

  useEffect(() => {
    setJson(data.developer);
  }, []);

  useEffect(() => {
    new WOW.WOW({
      //공식홈페이지와 코드가 다른이유는 custom 하기 위해서
      boxClass: "wow", // default
      animateClass: "animate_animated", //https://animate.style/ 사이트에 있는거
      live: false,
      mobile: true,
    }).init();
  }, []);
  return (
    // <>
    //   <Wrap>
    //     <FlexWrap>
    //       <SlideView
    //         json={json}
    //         language={language}
    //       />
    //     </FlexWrap>
    //   </Wrap>
    //   <>
    <>
      <Swiper
       loop={true}
        spaceBetween={0}
        slidesPerView={3}
        grabCursor={true}
       
        centeredSlides={true}
        navigation={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Navigation, Mousewheel]}
        
        onSlideChange={() => {
          //wow는 스크롤에 반응함. 그리고 슬라이드 넘길때마다 animation 효과가 적용되야하므로 onSlideChange를 사용해야함
          new WOW.WOW({
            live: false,
          }).init();
        }}
      >
        {json.map((e, i) => {
          //e를 안쓰면 언더바로 표시
          return (
            <StyledSlide style={{overflow: "hidden"}}>
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
            </StyledSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Slide;