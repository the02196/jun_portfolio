import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import View from "../components/developer/View";
import Gallery from "../components/developer/Gallery";
import { setIsOpen, setSelectedValue } from '../store'; 
import { useDispatch, useSelector } from "react-redux";

function Developer() {
  const selectedValue = useSelector(state => state.selectedValue);
  const dispatch = useDispatch();


  const handleValueChange = (value) => {
    dispatch(setSelectedValue(value));
  };

  return (
    <>
      <Nav
        brighteness={"brighteness(1.5)"}
        grayscale={"grayscale(1)"}
        hide={"none"}
        bg_color={"black"}
      />
      <Header
        bg_img={"../images/main/hands.png"}
        title={"Front-end Developer"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nesciunt voluptatum, vel sequi delectus laborum!"
        }
      />
      <View />
      <Gallery />
    </>
  );
}

export default Developer;
