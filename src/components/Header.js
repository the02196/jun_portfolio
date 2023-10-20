import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Background = styled.div`
  max-width: auto;
  height: 500px;
  background-image: url(${(props) => `${props.bg_img}`});
  background-size: cover;
  background-position: center;
  filter: grayscale(1) ${(props) => `${props.contrast}`} ;
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    height: 700px;
  }
  @media screen and (min-width: 1440px) {
    height: 1080px;
    background-position: ${(props) => `${props.background_position}`};
    
  }
  @media screen and (min-width: 2400px) {
    height: 1500px
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

const Year = styled.div`
 letter-spacing: 1px;
  font-size: 12px;
  font-weight: 200;
  margin-bottom: 5px;
`

const Title = styled.div`
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 5px;
  @media screen and (min-width: 1024px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1440px) {
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Desc = styled.div`
  margin-top: 10px;
  font-weight: 200;
  font-size: 13px;
  line-height: 20px;
  @media screen and (min-width: 1024px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1440px) {
  }
  @media screen and (min-width: 2200px) {
  }
`;

const Skill = styled.div`
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 300;
  margin-top: 30px;
  margin-bottom: 5px;
`;

function Header({bg_img, title, desc, contrast, background_position, year}) {
  return (
    <>
      <Background background_position={background_position} bg_img={bg_img} contrast={contrast} />
      <Wrap>
        <Left_Wrap>
          <Year>{year}</Year>
          <Title>{title}</Title>
          <Desc>
         {desc}
          </Desc>
        </Left_Wrap>

      </Wrap>
    </>
  );
}

export default Header;
