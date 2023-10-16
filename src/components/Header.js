import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Background = styled.div`
  max-width: auto;
  height: 500px;
  background-image: url(${(props) => `${props.bg_img}`});
  background-size: cover;
  background-position: center;
  filter: grayscale(1);
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    height: 700px;
  }
  @media screen and (min-width: 1440px) {
    height: 900px;
    background-position:0 -10px;
  }
`;

const Wrap = styled.div`
  width: 100%;

  background-color: black;
  color: white;
  padding: 30px 20px;
  box-sizing: border-box;
  /* display: flex; */
`;

const Left_Wrap = styled.div``;
const Right_Wrap = styled.div``;

const Title = styled.div`
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 5px;
`;

const Desc = styled.div`
  margin-top: 10px;
  font-weight: 200;
  font-size: 13px;
  line-height: 20px;
`;

const Skill = styled.div`
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 300;
  margin-top: 30px;
  margin-bottom: 5px;
`;

function Header({bg_img, title, desc}) {
  return (
    <>
      <Background bg_img={bg_img} />
      <Wrap>
        <Left_Wrap>
          <Title>{title}</Title>
          <Desc>
         {desc}
          </Desc>
        </Left_Wrap>
        {/* <Right_Wrap>
          <Skill>Skills</Skill>
          <Desc>
            Html5 | CSS | SCSS | Styled-component | TailwindCSS | JavaScript  |
            TypeScript | React | Next.js | Node.js | MongoDB | Firebase | GIT |
            Github | Notion | Slack | Photoshop | Figma | Premium Pro | Dragonframe
          </Desc>
        </Right_Wrap> */}
      </Wrap>
    </>
  );
}

export default Header;
