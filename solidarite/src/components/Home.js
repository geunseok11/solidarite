import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Search from "./Search";
import Article from "./Article";

const HomeDiv = styled.div`
  position: absolute;
  left: 15%;
  right: 15%;
  top: 0%;
  bottom: 0%;
`;

const HomeHeader = styled.header`
  position: relative;
  align-items: center;
`;
const HomeH1 = styled.h1`
  position: relative;
  left: 15%;
  right: 15%;
`;
const HomeP = styled.p`
  position: relative;
  left: 30%;
  right: 15%;
`;

const Home = (props) => {
  return (
    <HomeDiv>
      <HomeHeader>
        <HomeH1>솔리다리테 개발자 사전 과제</HomeH1>
        <HomeP>게시물을 검색해보세요</HomeP>
      </HomeHeader>
      <Search />
      <Article />
    </HomeDiv>
  );
};

export default Home;
