import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
padding-right: 30px;
  display: flex;
  font-family: 'Montserrat Alternates', sans-serif;
  div{
    padding-left: 10px;
  }
`;

const Kor = styled.div``;

const Eng = styled.div`
  font-weight: 600;
`;

const Rus = styled.div``;

function Languages({language_color}) {
  return (
    <>
      {/* <Wrap style={{color: `${language_color}`}}> */}
      <Wrap>
        <Kor>Kor</Kor>
        <Eng>Eng</Eng>
        <Rus>Rus</Rus>
      </Wrap>
    </>
  );
}

export default Languages;
