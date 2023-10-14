import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: none;
  position: fixed;
  top: 70px;
  right: 0;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const Horizon_Wrap = styled.div`
  width: 45px;
  height: 100%;
  cursor: pointer;
`;

const Vertical_Wrap = styled.div`
  width: 70px;
  height: 100%;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`;

const Vertical_Box = styled.div`
  width: 16px;
  height: 16px;
  margin: 1px;
  border: 1px solid black;
`;
const Vertical_long_Box = styled.div`
  width: 56px;
  height: 16px;
  margin: 1px;
  border: 1px solid black;
`;

const Horizon_box = styled.div`
  width: 16px;
  height: 16px;
  margin: 2px;
  border: 1px solid black;
  background-color: black;
`;

function View({hide}) {
  return (
    <>
      <Wrap style={{display: `${hide}`}}>
        <Horizon_Wrap>
          <Horizon_box />
          <Horizon_box />
          <Horizon_box />
        </Horizon_Wrap>
        <Vertical_Wrap>
          <Vertical_long_Box />
          <Vertical_Box />
          <Vertical_Box />
          <Vertical_Box />
          <Vertical_long_Box />
        </Vertical_Wrap>
      </Wrap>
    </>
  );
}

export default View;
