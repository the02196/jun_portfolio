import React, { useState } from "react";
import styled from "styled-components";

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
      border-top: 12px solid #666666;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
    }
    li {
      padding-right: 20px;
      box-sizing: border-box;
      background-color: white;
      height: 100%;
      border: 1px solid #ccc;
      &:not(:last-child){
        border-bottom: none;
      }
    }
  }
`;


function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Project');
  
    const options = ['Project', 'Toy Project', 'Clone Coding'];
  
    const getRelatedOptions = () => {
      return options.filter(option => option !== selectedValue);
    };
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (value) => {
      setSelectedValue(value);
      setIsOpen(false);
    };
  
    return (
      <div>
        <ul>
            <li style={{borderBottom: isOpen && "none"}} onClick={toggleDropdown}>{selectedValue}</li>
        </ul>
        {isOpen && (
          <ul>
            {getRelatedOptions().map((option) => (
              <li key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  

function Filter({isOpen, setIsOpen, selectedValue, setSelectedValue}) {
  return (
    <>
      <Wrap>
        <DropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} selectedValue={selectedValue} setSelectedValue={setSelectedValue}  />
      </Wrap>
    </>
  );
}

export default Filter;
