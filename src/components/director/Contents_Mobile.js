import React from "react";
import styled from "styled-components";

const Cow = styled.div`
  margin: 100px auto;
  background-image: url("../images/director/cow_mobile.png");
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 500px;
  filter: grayscale(1) contrast(0.9);
`;

function Contents_Mobile() {
  return (
    <>
      <Cow />
    </>
  );
}

export default Contents_Mobile;
