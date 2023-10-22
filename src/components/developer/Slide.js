import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import { setIsOpen, setSelectedValue } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  EffectCoverflow,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//swiper 공식홈페이지 get started 참조하기
//wowjs를 실행하기 위해서 아래 2개 import 해줘야함 , yarn add wowjs를 해줘야함(터미널에)
import WOW from "wowjs";
import "animate.css";
import { NavLink } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
`;

const StyledSlide = styled(SwiperSlide)`
  /* margin-left: -30px; */
`;
const FlexWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin: 110px auto 110px;
`;

const Inner_Wrap = styled.li`
  display: block;
  width: 400px;
  margin: 0 auto;
  height: 600px;
  cursor: pointer;
  position: relative;
  /* -webkit-box-reflect: below 30px linear-gradient(transparent, rgba(0,0,0,0), rgba(0,0,0,0.3)); */
  a{
    text-decoration: none;
    &:visited{
      color: ${props => props.link === "Project" ? "white" : "black"}
    }
  }
  @media screen and (min-width: 768px) {
    width: 450px;
    height: 700px;
  }
  /* @media screen and (min-width: 1024px) {
    width: 500px;
    height: 750px;
  } */

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
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
const Days = styled.span`
  color: ${(props) => props.color};
  font-size: 15px;
  font-weight: 200;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
const Skills = styled.p`
  color: ${(props) => props.color};
  font-size: 15px;
  font-weight: 200;
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
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

const Github = styled.p`
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-weight: 400;
`;

function Slide() {
  const language = useSelector((state) => state.language);
  const filter = useSelector((state) => state.filter);
  const data = useSelector((state) => state.data);
  let filteredData = [];
  let unfilteredData = [];
  if (filter === "All") {
    filteredData = data[0];
  } else {
    filteredData = data[0].filter((e) => e.option === filter);
    unfilteredData = data[0].filter((e) => e.option !== filter);
  }
  const finalData = [...filteredData, ...unfilteredData];

  useEffect(() => {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animate_animated",
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
      <FlexWrap>
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 1.6,
            },
            1024: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 2.6,
            },
            1920: {
              slidesPerView: 3.2,
            },
          }}
          // slidesOffsetAfter={30}
          // slidesOffsetBefore={30}
          // grabCursor={true}

          navigation={{ clickable: true }}
          modules={[
            EffectCoverflow,
            Pagination,
            Autoplay,
            Navigation,
            Mousewheel,
          ]}
          onSlideChange={() => {
            //wow는 스크롤에 반응함. 그리고 슬라이드 넘길때마다 animation 효과가 적용되야하므로 onSlideChange를 사용해야함
            new WOW.WOW({
              live: false,
            }).init();
          }}
        >
          {finalData.map((e, i) => {
            //e를 안쓰면 언더바로 표시
            return (
              <SwiperSlide key={i} style={{ overflow: "hidden" }}>
                <Inner_Wrap>
                  <NavLink target="blank" link={e.link} to={e.link}>
                    <Image bg_img={e.mobile} />
                    <Card bg_color={e.bg_color}>
                      <Card_Top_Wrap>
                        <Title color={e.font_color}>
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
                    {e.option === "Project" ? (
                      <Github style={{ color: "white" }}>Link to GitHub</Github>
                    ) : (
                      <Github>Link to GitHub</Github>
                    )}
                  </NavLink>
                </Inner_Wrap>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </FlexWrap>
    </>
  );
}

export default Slide;
