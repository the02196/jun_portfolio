import React from "react";
import Header from "../components/director/Header";
import Nav from "../components/nav/Nav";
function Director() {
  return (
    <>
      <Header />
      <Nav brighteness={"brighteness(1.5)"} grayscale={"grayscale(1)"} hide={"none"} bg_color={"white"} />
    </>
  );
}

export default Director;
