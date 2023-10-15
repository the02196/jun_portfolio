import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
function Director() {

  return (
    <>
      <Header
        bg_img={"../images/director/header.jpg"}
        title={"Puppet theatre Director"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nesciunt voluptatum, vel sequi delectus laborum!"
        }
      />
      <Nav
        brighteness={"brighteness(1.5)"}
        grayscale={"grayscale(1)"}
        hide={"none"}
        bg_color={"white"}
      />
    </>
  );
}

export default Director;
