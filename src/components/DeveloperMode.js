import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setDeveloperMode } from "../store";
import Navigator from "./Navigator";

const Wrap = styled.div`
  position: fixed;
  z-index: 9999;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const Button = styled.div`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  box-sizing: border-box;
  background-color: black;
  position: relative;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;

    color: black;
  }
`;

function DeveloperMode() {
  const dispatch = useDispatch();

  const developerMode = useSelector((state) => state.developerMode);

  const handleDeveloperMode = (trueOrFalse) => {
    dispatch(setDeveloperMode(trueOrFalse));
  };

  return (
    <>
      <Wrap>
        {/* <Button
          onClick={() => {
            handleDeveloperMode(!developerMode);
          }}
        >
          Navigation
        </Button> */}
        {/* <Navigator /> */}
      </Wrap>
    </>
  );
}

export default DeveloperMode;
