import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setFilter, setIsOpen } from "../../store";

const Wrap = styled.div`
  width: 150px;
  height: 100%;
  margin-right: 15px;
  box-sizing: border-box;
  position: relative;
  z-index: 300;
  ul {
    text-align: end;
    line-height: 40px;
    transition: 0.3s;
    overflow: hidden;
    cursor: pointer;
    &::after {
      content: "";
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      left: 10px;
      width: 0px;
      height: 0px;
      border-top: 12px solid #777777;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
    }
    li {
      padding-right: 20px;
      box-sizing: border-box;
      background-color: white;
      height: 100%;
      border: 1px solid #ccc;
      &:not(:last-child) {
        border-bottom: none;
      }
    }
  }
`;

function DropdownMenu() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const selectedView = useSelector((state) => state.selectedView);
  const isOpen = useSelector((state) => state.isOpen);

  const options = ["All", "Project", "Toy Project", "Clone Coding"];

  const getRelatedOptions = () => {
    return options.filter((option) => option !== filter);
  };

  const toggleDropdown = () => {
    dispatch(setIsOpen(!isOpen));
  };

  const handleOptionClick = (value) => {
    dispatch(setIsOpen(false));
    dispatch(setFilter(value));
  };

  return (
    <div>
      <ul selectedView={selectedView}>
        <li
          style={{
            backgroundColor: selectedView === "Slide" && "#eee",
            color: selectedView === "Slide" && "#bbb",
            borderBottom: isOpen && "none",
          }}
          onClick={() => {
            selectedView !== "Slide" && toggleDropdown();
            
          }}
        >
          {filter}
        </li>
      </ul>
      {isOpen && (
        <ul>
          {getRelatedOptions().map((option, i) => (
            <li
              key={option}
              onClick={() => {
                handleOptionClick(option)
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Filter() {
  return (
    <>
      <Wrap>
        <DropdownMenu
        />
      </Wrap>
    </>
  );
}

export default Filter;
