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
        bg_img={"../images/developer/Jun_Coding.jpeg"}
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
            ? "우크라이나 전쟁 이후, 먹고 살길을 찾아 타국을 전전하는 동료들을 통해, 정보 네트워킹을 통한 자기 PR과 생존의 깊은 연관성을 깨달았습니다. 가까운 이들을 위해 진정으로 유용한 것을 만드는 것에 가치를 두고 있습니다."
            : language === "en"
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            : language === "ru"
            ? "Внезапно, ключевые особенности структуры проекта, инициированные исключительно синтетически."
            : "고통이 고통이라는 이유로 그 자체를 사랑하고 소유하려는 자는 없다."
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
