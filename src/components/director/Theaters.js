import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Title = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1440px) {
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Wrap = styled.div`
  display: flex;
  margin: 100px 0;
  width: 100%;

  justify-content: ${(props) => props.justify};
`;

const LinkWrap = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto 100px;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    max-width: 1400px;
  }
`;
const Link = styled.a`
  margin: 0 auto;
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 2px 30px;
  cursor: pointer;
  transition: 0.1s;
  &:not(:nth-child(1)) {
    margin-top: 50px;
  }
  &:hover{
    text-decoration: none;
    p{
     transform : translateX(50px);
    }
  }
  div {
    width: 45px;
    border-radius: 50%;
    height: 45px;
    background-position: center;
    background-size: cover;
    margin-right: 10px;
  }
  p {
    transition: 0.2s;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    color: black;
    b{
      margin-right: 20px;
      font-size: 13px;
    }
  }
  span {
    color: #aaa;
    font-size: 13px;
    font-weight: 400;
  }
  &:visited {
    color: #777;
  }
  @media screen and (min-width: 768px) {
    p{

      font-size: 17px;
      b{
        font-size: 13px;
      }
    }
    
  }
  @media screen and (min-width: 1024px) {
    p{
      font-size: 20px
      b{
        font-size: 13px;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    p{
      font-size: 24px;
      b{
        font-size: 15px;
      }
    }
  }

`;

function ShowTheater({ url, img, theater, year, bg_color }) {
  return (
    <Link en_theater={bg_color} target={"blank"} href={url}>
      <p><b>{year}</b> {theater}</p>
      {/* {img && (
        <div
          style={{
            backgroundImage: `url(../images/director/${img})`,
          }}
        ></div>
      )} */}
      <p>➳</p>
    </Link>
  );
}
function Theaters() {
  const language = useSelector((state) => state.language);
  return (
    <>
      <Wrap style={{ marginBottom: "0" }} justify={"center"}>
        <Title>
          {language === "ko"
            ? "주로 일한 곳들"
            : language === "en"
            ? "The Places Mainly I Worked"
            : language === "ru" && "Места, где я в основном работал"}
        </Title>
      </Wrap>
      <Wrap style={{ marginTop: "60px" }} justify={"center"}>
        <LinkWrap>
          <ShowTheater
            url={"https://alexandrinsky.ru/afisha-i-bilety/don-t-go/"}
            img={"alexandrinsky.png"}
            theater={
              language === "ko"
                ? "러시아 알렉산드린스키 국립 극장"
                : language === "en"
                ? "Alexandrinsky National Theater"
                : language === "ru" && "Александринский театр"
            }
            year={"2022"}
          ></ShowTheater>
          <ShowTheater
            url={"https://skorohod.me/"}
            img={"skorohod.png"}
            theater={
              language === "ko"
                ? "플랫폼 스코로호드 현대 극장"
                : language === "en"
                ? "Platform Skorohod"
                : language === "ru" && "Плошадка Скороход"
            }
            year={"2021 ~ 2022"}
            bg_color={"#EFBACB"}
          ></ShowTheater>
          <ShowTheater
            url={"https://puppets.ru/"}
            img={"btk.png"}
            theater={
              language === "ko"
                ? "볼쇼이 인형 극장"
                : language === "en"
                ? "Bolshoi Puppet Theater"
                : language === "ru" && "Большой театр кукол"
            }
            year={"2016 ~ 2021"}
          ></ShowTheater>
        </LinkWrap>
      </Wrap>
    </>
  );
}

export default Theaters;
