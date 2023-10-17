import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
function Director() {
  const language = useSelector((state) => state.language);
  return (
    <>
      <Header
        bg_img={"../images/director/header2.jpg"}
        title={language === "ko" ? "인형극장 연출가" :
        language === "en" ? "Puppet Theatre Director" :
        language === "ru" ? "Режиссер кукольного театра" :
        "인형극장 연출가" }
        desc={
          language === "ko" ? "고통이 고통이라는 이유로 그 자체를 사랑하고 소유하려는 자는 없다." :
          language === "en" ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." :
          language === "ru" ? "Внезапно, ключевые особенности структуры проекта, инициированные исключительно синтетически." :
          "고통이 고통이라는 이유로 그 자체를 사랑하고 소유하려는 자는 없다." 
        }
        background_position={"top"}
      />
      <Nav
      />
    </>
  );
}

export default Director;
