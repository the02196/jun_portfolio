import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import { setSelectedView } from "../../store";
import { useDispatch, useSelector } from "react-redux";

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 40px;
  margin-top: 50px;
  margin-bottom: 80px;
  padding-right: 20px;
`;

const Ul = styled.ul`
  display: flex;
  li {
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:not(:last-child) {
      border-right: none;
    }
  }
`;

const Slide_Wrap = styled.li`
  div {
    width: 55%;
    height: 4px;
    background-color: black;
    &:not(:last-child) {
      margin-bottom: 3px;
    }
  }
`;
const List_Wrap = styled.li`
  div {
    width: 55%;
    height: 4px;
    display: flex;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 3px;
    }
    div {
      background-color: black;
      height: 4px;
      box-sizing: border-box;
      &.short {
        width: 25%;
      }
      &.long {
        width: 68%;
      }
    }
  }
`;

const Gallery_Wrap = styled.li`
  div {
    width: 55%;
    display: flex;
    justify-content: space-between;
    gap: 1.5px;
    flex-wrap: wrap;
    div.box {
      background-color: black;
      width: 46%;
      box-sizing: border-box;
      height: 9.5px;
    }
  }
`;

function View() {
  const dispatch = useDispatch();

  const handleViewChange = (value) => {
    dispatch(setSelectedView(value));
  };
  return (
    <>
      <Wrap>
        <Filter />
        <Ul>
          <Slide_Wrap
            onClick={() => {
              handleViewChange("Slide");
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </Slide_Wrap>
          <List_Wrap
            onClick={() => {
              handleViewChange("List");
            }}
          >
            <div>
              <div className="short"></div>
              <div className="long"></div>
            </div>
            <div>
              <div className="short"></div>
              <div className="long"></div>
            </div>
            <div>
              <div className="short"></div>
              <div className="long"></div>
            </div>
          </List_Wrap>
          <Gallery_Wrap
            onClick={() => {
              handleViewChange("Gallery");
            }}
          >
            <div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </Gallery_Wrap>
        </Ul>
      </Wrap>
    </>
  );
}

export default View;
