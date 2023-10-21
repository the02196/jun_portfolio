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
        // bg_img={"../images/main/hands.png"}
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
            ? "우크라이나 전쟁 이후, 먹고 살길을 찾아 타국을 전전하는 동료들을 통해, 정보 네트워킹을 통한 자기 PR과 생존의 깊은 연관성을 깨달았습니다. 가까운 이들을 위해 진정으로 유용한 것들을 만드는 일에 가치를 두고 있습니다."
            : language === "en"
            ? "After the war in Ukraine, I realized the deep connection between information networking for self-promotion and survival through colleagues who travel from country to country in search of a way to make a living. I value creating genuinely useful things for those close to me."
            : language === "ru"
            ? "После войны на Украине я осознал глубокую связь между информационным сетеванием для самопиара и выживания через коллег, которые путешествуют из страны в страну в поисках средств к существованию. Я ценю создание действительно полезных вещей для близких мне людей."
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
