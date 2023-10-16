import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setHorizonAndVertical } from "../../store";

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
  background-color: ${(props) => props.HorizonAndVertical ? "white" : "black"};
`;
const Vertical_long_Box = styled.div`
  width: 56px;
  height: 16px;
  margin: 1px;
  border: 1px solid black;
  background-color: ${(props) => props.HorizonAndVertical ? "white" : "black"};
`;

const Horizon_box = styled.div`
  width: 16px;
  height: 16px;
  margin: 2px;
  border: 1px solid black;
  background-color:  ${(props) => props.HorizonAndVertical ? "black" : "white"};
`;

function View({hide}) {
  const dispatch = useDispatch();
  const HorizonAndVertical = useSelector((state) => state.HorizonAndVertical);

  const handleHorizonAndVertical = (trueOrFalse) => {
    dispatch(setHorizonAndVertical(trueOrFalse)); 
  };

  return (
    <>
      <Wrap style={{display: `${hide}`}}>
        <Horizon_Wrap onClick={()=>{handleHorizonAndVertical(true)}}>
          <Horizon_box HorizonAndVertical={HorizonAndVertical} />
          <Horizon_box HorizonAndVertical={HorizonAndVertical} />
          <Horizon_box HorizonAndVertical={HorizonAndVertical} />
        </Horizon_Wrap>
        <Vertical_Wrap 
        onClick={()=>{handleHorizonAndVertical(false)}}>
          <Vertical_long_Box HorizonAndVertical={HorizonAndVertical}/>
          <Vertical_Box HorizonAndVertical={HorizonAndVertical} />
          <Vertical_Box HorizonAndVertical={HorizonAndVertical} />
          <Vertical_Box HorizonAndVertical={HorizonAndVertical} />
          <Vertical_long_Box HorizonAndVertical={HorizonAndVertical} />
        </Vertical_Wrap>
      </Wrap>
    </>
  );
}

export default View;
