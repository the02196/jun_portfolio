import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import { setIsOpen, setSelectedView } from "../../store";
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

// const List_Wrap = styled.li`
//   div {
//     width: 55%;
//     height: 4px;
//     background-color: black;
//     &:not(:last-child) {
//       margin-bottom: 3px;
//     }
//   }
// `;
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

const Slide_Wrap = styled.li`
  display: flex;
  flex-direction: row !important;
  div {
    width: 4px;
    height: 55%;
    background-color: black;
    &:not(:last-child) {
      margin-right: 3px;
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
        <List_Wrap
            onClick={() => {
              handleViewChange("List");
              dispatch(setIsOpen(false));
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
          <Slide_Wrap
            onClick={() => {
              handleViewChange("Slide");
              dispatch(setIsOpen(false));
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </Slide_Wrap>

          {/* <Slide_Wrap
            onClick={() => {
              handleViewChange("slide");
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </Slide_Wrap> */}
          <Gallery_Wrap
            onClick={() => {
              handleViewChange("Gallery");
              dispatch(setIsOpen(false));
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
