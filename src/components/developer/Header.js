import React from "react";
import styled from "styled-components";

const Background = styled.div`
  max-width: auto;
  height: 500px;
  background-image: url("../images/main/hands.png");
  background-size: cover;
  background-position: center;
  filter: grayscale(1);
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    height: 700px;
  }
  @media screen and (min-width: 1024px) {
    background-size: contain;

  }
`;

const Wrap = styled.div`
  width: 100%;

  background-color: black;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  /* display: flex; */
`;

const Left_Wrap = styled.div``;
const Right_Wrap = styled.div``;

const Title = styled.div`
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 5px;
`;

const Desc = styled.div`
  font-weight: 200;
`;

const Skill = styled.div`
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 300;
  margin-top: 15px;
  margin-bottom: 5px;
`;

function Header() {
  return (
    <>
      <Background />
      <Wrap>
        <Left_Wrap>
          <Title>Front-end Developer</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nesciunt voluptatum, vel sequi delectus laborum!
          </Desc>
        </Left_Wrap>
        <Right_Wrap>
          {/* <Skill>Skill</Skill>
          <Desc>
            Html5 / CSS / Styled-component / TailwindCSS / SCSS /JavaScript /
            TypeScript React / Next.js /Node.js / MongoDB / Firebase / GIT /
            Github /Notion / Slack Photoshop / Figma / Premium Pro / Dragonframe
          </Desc> */}
        </Right_Wrap>
      </Wrap>
    </>
  );
}

export default Header;
