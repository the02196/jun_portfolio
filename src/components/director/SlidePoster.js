import React from "react";
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
import WOW from "wowjs";
import "animate.css";
import styled from "styled-components";

const Poster = styled.div`
  background-image: url(${(props) => `../images/director/${props.bg_img}`});
  width: 400px;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  height: 560px;
  margin: 0 auto;
  border: 1px solid #ccc;
  @media screen and (min-width: 1024px) {
    width: 450px;
    height: 630px;
  }
  @media screen and (min-width: 1440px) {
    width: 600px;
    height: 850px;
  }
`;

const FlexWrap = styled.ul`
  display: flex;
  max-width: 100%;
  margin: 110px auto 110px;
`;


function SlidePoster() {
  return (
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
            }
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
            new WOW.WOW({
              live: false,
            }).init();
          }}
        >
          <SwiperSlide style={{ overflow: "hidden" }}>
            <Poster bg_img={"dont_go_poster_mobile.png"} />
          </SwiperSlide>
          <SwiperSlide style={{ overflow: "hidden" }}>
            <Poster bg_img={"poster_crocodile_mobile.png"} />
          </SwiperSlide>
          <SwiperSlide style={{ overflow: "hidden" }}>
            <Poster bg_img={"poster_samurai_mobile.png"} />
          </SwiperSlide>
          <SwiperSlide style={{ overflow: "hidden" }}>
            <Poster bg_img={"poster_samurai2_mobile.png"} />
          </SwiperSlide>
        </Swiper>
      </FlexWrap>
    </>
  );
}

export default SlidePoster;
