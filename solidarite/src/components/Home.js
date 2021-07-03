import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Search from "./Search";
import Article from "./Article";

const Home = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>솔리다리테 개발자 사전 과제</h1>
        <p>게시물을 검색해보세요</p>
      </header>
      <Search />
      <Article />
    </div>
  );
};

export default Home;
