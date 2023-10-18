import React from "react";
import styled from "styled-components";

const Girl = styled.div`
  margin: 100px auto;
  background-image: url("../images/photographer/girl_mobile.png");
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 500px;
`;

const Pray = styled.div`
  margin: 100px auto;
  background-image: url("../images/photographer/pray_mobile.png");
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 500px;
`;


const LittleBoy = styled.div`
  margin: 100px auto;
  background-image: url("../images/photographer/child_1_mobile.png");
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 500px;
`;

const LittleGirl = styled.div`
  margin: 100px auto;
  background-image: url("../images/photographer/child_2_mobile.png");
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 500px;
`

const Rain = styled.div`
  margin: 100px auto;
  background-image: url("../images/photographer/rain_mobile.png");
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 500px;
`;

const HappyAndSad = styled.div`
  margin: 100px auto;
  background-image: url("../images/photographer/happy_sad_mobile.png");
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 500px;
`;


const Dance = styled.div`
  margin: 100px auto;
  background-image: url("../images/photographer/dance_mobile.png");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 300px;
`;

function Contents_Mobile() {
  return (
    <>
      <Girl />
      <Dance />
      <Pray />
      <LittleBoy />
      <LittleGirl />
      <Rain />
      <HappyAndSad />
    </>
  );
}


export default Contents_Mobile