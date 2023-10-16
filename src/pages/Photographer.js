import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";

function Photographer() {
  const language = useSelector((state) => state.language);
  return (
    <>
      <Header
        bg_img={"../images/photographer/memorial.png"}
        title={
          language === "ko"
            ? "다큐멘터리 사진작가"
            : language === "en"
            ? "Documentary Photographer"
            : language === "ru"
            ? "Документальный фотограф"
            : "다큐멘터리 사진작가"
        }
        desc={
          language === "ko"
            ? "고통이 고통이라는 이유로 그 자체를 사랑하고 소유하려는 자는 없다."
            : language === "en"
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            : language === "ru"
            ? "Внезапно, ключевые особенности структуры проекта, инициированные исключительно синтетически."
            : "고통이 고통이라는 이유로 그 자체를 사랑하고 소유하려는 자는 없다."
        }
        contrast={"contrast(1.01)"}
        backgroundPosition={"0 -35px"}
      />
      
      <Nav
      
      />
    </>
  );
}

export default Photographer;
