import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Ladder from "../components/main/Ladder";
import Horizon from "../components/main/Horizon";
import Profile from "../components/main/Profile";
import Footer from "../components/Footer";



function Main() {
  return (
    <>
      <Nav />
      <Ladder /> 
      <Horizon />
      <Footer/>
    </>
  );
}

export default Main;
