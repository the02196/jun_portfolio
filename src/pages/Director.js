import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import Contents_Mobile from "../components/director/Contents_Mobile";
import Contents_Tablet from "../components/director/Contents_Tablet";
import Contents_Desktop from "../components/director/Contents_Desktop";
function Director() {
  const language = useSelector((state) => state.language);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <Header
        bg_img={"../images/director/crocodile_desktop.png"}
        year={"2014~2022"}
        title={
          language === "ko"
            ? "인형극장 연출가"
            : language === "en"
            ? "Puppet Theatre Director"
            : language === "ru"
            ? "Режиссер кукольного театра"
            : "인형극장 연출가"
        }
        desc={
          language === "ko"
            ? " 볼쇼이 인형극장과 러시아 알렉산드린스키 국립극장 등, 다양한 규모의 공간에서 상상과 표현의 한계를 시험해 왔습니다."
            : language === "en"
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            : language === "ru"
            ? "Внезапно, ключевые особенности структуры проекта, инициированные исключительно синтетически."
            : "고통이 고통이라는 이유로 그 자체를 사랑하고 소유하려는 자는 없다."
        }
        background_position={"top"}
      />
      <Contents_Mobile />
      <Contents_Tablet />
      <Contents_Desktop />
    </>
  );
}

export default Director;
