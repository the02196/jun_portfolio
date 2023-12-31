import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage, setSelectedLanguage } from "../../store";

const Wrap = styled.div`
  padding-right: 38px;
  display: flex;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 19px;
  div {
    cursor: pointer;
    padding-left: 10px;
  }
`;

const Kor = styled.div``;

const Eng = styled.div``;

const Rus = styled.div``;

function Languages() {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(state => state.selectedLanguage); 
  

  const handleSelectedLanguageChange = (languageIndex) => {
    dispatch(setSelectedLanguage(languageIndex)); 
  };

  const handleLanguageChange = (newLanguage) => {
    dispatch(setLanguage(newLanguage));
  };
  return (
    <>
      <Wrap>
        <Kor style={{ fontWeight: selectedLanguage === 1 ? 'bold' : 'normal' }}
          onClick={() => {
            handleLanguageChange("ko");
            handleSelectedLanguageChange(1);
          }}
        >
          Ko
        </Kor>
        <Eng style={{ fontWeight: selectedLanguage === 2 ? 'bold' : 'normal' }}
          onClick={() => {
            handleLanguageChange("en");
            handleSelectedLanguageChange(2);
          }}
        >
          En
        </Eng>
        <Rus style={{ fontWeight: selectedLanguage === 3 ? 'bold' : 'normal' }}
          onClick={() => {
            handleLanguageChange("ru");
            handleSelectedLanguageChange(3);
          }}
        >
          Ru
        </Rus>
      </Wrap>
    </>
  );
}

export default Languages;
