import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Ladder from "../components/main/Ladder";
import Horizon from "../components/main/Horizon";
import Profile from "../components/main/Profile";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Vertical from "../components/main/Vertical";



function Main() {
  const HorizonAndVertical = useSelector((state) => state.HorizonAndVertical);


  return (
    <>
      <Nav />
      {/* {HorizonAndVertical && <Ladder />}  */}
      {/* {HorizonAndVertical ? <Horizon /> : <Vertical/>} */}
      <Ladder />
      <Horizon />
      <Footer/>
    </>
  );
}

export default Main;
