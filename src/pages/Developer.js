import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import View from "../components/developer/View";
import Gallery from "../components/developer/Gallery";
import { useSelector } from "react-redux";
import List from "../components/developer/List";
import Slide from "../components/developer/Slide";

function Developer() {

  const selectedView = useSelector((state) => state.selectedView);
  function RenderComponent({ selectedView }) {
    switch (selectedView) {
      case "List":
        return <List />;
      case "Gallery":
        return <Gallery/>;
      case "Slide":
        return <Slide/>;
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
          language === "ko" ? "프론트엔드 개발자" :
          language === "en" ? "Front-end Developer" :
          language === "ru" ? "Фронтенд-разработчик" :
          "프론트엔드 개발자" 
        }
        desc={
          language === "ko" ? "고통이 고통이라는 이유로 그 자체를 사랑하고 소유하려는 자는 없다." :
          language === "en" ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." :
          language === "ru" ? "Внезапно, ключевые особенности структуры проекта, инициированные исключительно синтетически." :
          "고통이 고통이라는 이유로 그 자체를 사랑하고 소유하려는 자는 없다." 
        }
        contrast={"contrast(1.1)"}
        backgroundPosition={"center"}
      />
      <View />
      
      <RenderComponent selectedView={selectedView}/>
    </>
  );
}

export default Developer;
