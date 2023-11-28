import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import View from "../components/developer/View";
import Gallery from "../components/developer/Gallery";
import { useSelector } from "react-redux";
import List from "../components/developer/List";
import Slide from "../components/developer/Slide";

function Developer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedView = useSelector((state) => state.selectedView);
  function RenderComponent({ selectedView }) {
    switch (selectedView) {
      case "List":
        return <List />;
      case "Gallery":
        return <Gallery />;
      case "Slide":
        return <Slide />;
      default:
        return <Gallery />;
    }
  }

  const language = useSelector((state) => state.language);
  return (
    <>
      <Nav />
      <Header
        bg_img={"../images/main/hands.png"}
        year={"2023~"}
        title={
          language === "ko"
            ? "프론트엔드 개발자"
            : language === "en"
            ? "Front-end Developer"
            : language === "ru"
            ? "Фронтенд-разработчик"
            : "프론트엔드 개발자"
        }
        desc={
          language === "ko"
            ? "가까운 이들을 위해 진정으로 유용한 것들을 만드는 일에 가치를 두고 있습니다."
            : language === "en"
            ? "I value creating genuinely useful things for those close to me."
            : language === "ru"
            ? "Я ценю создание действительно полезных вещей для близких мне людей."
            : "가까운 이들을 위해 진정으로 유용한 것들을 만드는 일에 가치를 두고 있습니다."
        }
        contrast={"contrast(1.1)"}
        background_position={"center"}
      />
      <View />

      <RenderComponent selectedView={selectedView} />
    </>
  );
}

export default Developer;
