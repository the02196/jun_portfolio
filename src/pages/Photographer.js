import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Photographer() {
  return (
    <>
      <Header bg_img={"../images/photographer/memorial.png"}
        title={"Photographer"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nesciunt voluptatum, vel sequi delectus laborum!"
        } />
      <Nav brighteness={"brighteness(1.5)"} grayscale={"grayscale(1)"} hide={"none"} bg_color={"black"} />
    </>
  );
}

export default Photographer;
