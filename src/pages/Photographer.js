import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import Contents_Mobile from "../components/photographer/Contents_Mobile";
import Contents_Tablet from "../components/photographer/Contents_Tablet";
import Contents_Desktop from "../components/photographer/Contents_Desktop";

function Photographer() {
  const language = useSelector((state) => state.language);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <Header
        bg_img={"../images/photographer/memorial_desktop.png"}
        year={"2022~2023"}
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
            ? "이태원 일대에서 다양한 사건들을 마주하며 다양한 이들의 삶과 시선, 살아내는 방식을 관찰하였습니다."
            : language === "en"
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            : language === "ru"
            ? "Внезапно, ключевые особенности структуры проекта, инициированные исключительно синтетически."
            : "고통이 고통이라는 이유로 그 자체를 사랑하고 소유하려는 자는 없다."
        }
        contrast={"contrast(1.01)"}
        background_position={"0 -35px"}
      />
      <Contents_Mobile />
      <Contents_Tablet />
      <Contents_Desktop />
    </>
  );
}

export default Photographer;
