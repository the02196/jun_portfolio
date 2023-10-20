import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import data from "../data/data.json";
import Nav from "../components/Nav";

const ButtonWrap = styled.div`
  width: 400px;
  margin: 100px auto 30px;
  background-color: black;
  position: fixed;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (min-width: 768px) {
    width: 700px;
  }
  @media screen and (min-width: 1024px) {
    width: 900px;
  }
`;

const Button = styled.div`
  padding: 5px 10px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
`;

const Wrap = styled.div`
  width: 100%;
  margin-top: 150px;
`;

const InnerWrap = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  padding: 50px 0 60px;
  border-bottom: 1px solid #dddddd;
  @media screen and (min-width: 768px) {
    width: 700px;
  }
  @media screen and (min-width: 1024px) {
    width: 900px;
  }
`;
const TopWrap = styled.div`
  width: 100%;
  align-items: center;
`;

const BottomWrap = styled.div`
  width: 100%;
  margin-top: 5px;
`;
const LeftWrap = styled.div`
  height: 100%;
  width: 200px;
  margin-right: 30px;
`;
const Profile = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-image: url(${(props) => `${props.profile}`});
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background-size: cover;
  background-position: center;
`;

const Name = styled.p`
  margin: 0;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
`;

const Info = styled.p`
  margin-top: 5px;
  font-size: 13px;
  color: #777777;
`;

const Comment = styled.div`
  font-size: 16px;
  font-weight: 400;
  width: 100%;
`;

function Comments() {
  const language = useSelector((state) => state.language);
  const [sources, setSources] = useState([]);

  useEffect(() => {
    setSources(data.comments);
  }, []);
  return (
    <>
      <Nav />
      <ButtonWrap>
        <Button>개발자 동료들</Button>
        <Button>극장 동료 및 관계자들</Button>
      </ButtonWrap>
      <Wrap>
        {sources.map((e, i) => {
          return (
            <InnerWrap>
              <LeftWrap>
                <Profile profile={e.profile} />
              </LeftWrap>
              <div>
                <TopWrap>
                  <Name>{e.ko_name}</Name>
                  <Info>{e.ko_info}</Info>
                </TopWrap>
                <BottomWrap>
                  <Comment>{e.ko_comment}</Comment>
                </BottomWrap>
              </div>
            </InnerWrap>
          );
        })}
      </Wrap>
    </>
  );
}

export default Comments;
