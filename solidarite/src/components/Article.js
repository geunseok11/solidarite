import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadArticleARequest, loadArticleBRequest } from "../reducers/article";
import styled from "styled-components";
import Search from "./Search";

const Button = styled.button`
  position: relative;
  background: #ffffff;
  border: none;
  cursor: pointer;

  margin-left: 15px;

  ${({ click }) => {
    return click ? `color: #1fa6f1;` : `color: #000000`;
  }};
`;

const ArticleDiv = styled.div`
  border-top: 1px solid;
  margin-top: 10px;
`;

const Article = () => {
  const dispatch = useDispatch();

  let [articleA, setArticleA] = useState([]);
  let [articleB, setArticleB] = useState([]);
  let [hitBottom, sethitBottom] = useState(false);
  let [hitBottomB, sethitBottomB] = useState(false);
  let [iterator, setiterator] = useState(0);
  let [iteratorB, setiteratorB] = useState(0);
  let [postA, setPostA] = useState(true);
  let [postB, setPostB] = useState(false);

  const articleAList = useSelector((state) => state?.article.articleAList);

  const article = useSelector((state) => state?.article);

  console.log("article state", article);

  const articleBList = useSelector((state) => state?.article.articleBList);

  // useEffect(() => {
  //   sethitBottom(false);
  //   if (iterator < 10) {
  //     iterator++;
  //     setiterator(iterator);
  //     dispatch(loadArticleARequest(iterator));
  //   }
  //   if (iteratorB < 10) {
  //     iteratorB++;
  //     setiteratorB(iteratorB);
  //     dispatch(loadArticleBRequest(iteratorB));
  //   }
  // }, [hitBottom]);

  useEffect(() => {
    sethitBottom(false);

    axios.get(`/a-posts?page=${iterator}`).then((res) => {
      console.log("axios res :", res.data);
      iterator++;
      setiterator(iterator);
      articleA = [...articleA, ...res.data];
      setArticleA(articleA);
    });
  }, [hitBottom]);

  useEffect(() => {
    sethitBottomB(false);

    axios.get(`/b-posts?page=${iteratorB}`).then((res) => {
      console.log("axios res :", res.data);
      iteratorB++;
      setiteratorB(iteratorB);
      articleB = [...articleB, ...res.data];
      setArticleB(articleB);
    });
  }, [hitBottomB]);

  const onScroll = () => {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 10
    ) {
      sethitBottom(true);
      sethitBottomB(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (articleAList && articleAList > 0) {
      articleAList = [];
    }
  }, [articleAList]);

  useEffect(() => {
    if (articleBList && articleBList > 0) {
      articleBList = [];
    }
  }, [articleBList]);

  // useEffect(() => {
  //   dispatch(loadArticleARequest(iterator));
  // }, [iterator]);

  // useEffect(() => {
  //   dispatch(loadArticleBRequest(iteratorB));
  // }, [iteratorB]);

  var searchAList = useSelector((state) => state.search?.searchAList);

  useEffect(() => {
    if (searchAList && searchAList.length > 0) {
      searchAList = [];
    }
  }, [searchAList]);

  return (
    <div>
      <Button
        onClick={() => {
          setPostA(true);
          setPostB(false);
        }}
        click={postA}
      >
        POST A
      </Button>
      <Button
        onClick={() => {
          setPostA(false);
          setPostB(true);
        }}
        click={postB}
      >
        POST B
      </Button>
      <ArticleDiv>
        {/* {searchAList !== [] ? (
          <div>
            {searchAList &&
              searchAList.map((el) => {
                return (
                  <section key={el.id}>
                    <ul>
                      <a>
                        <li>
                          <h3>
                            <span>{el.id}.</span>
                            {el.title}
                          </h3>
                          <p>{el.content}</p>
                        </li>
                      </a>
                    </ul>
                  </section>
                );
              })}
          </div>
        ) : (
          <div>
            {postA ? (
              <div>
                {articleAList &&
                  articleAList.map((el) => {
                    return (
                      <section key={el.id}>
                        <ul>
                          <a>
                            <li>
                              <h3>
                                <span>{el.id}.</span>
                                {el.title}
                              </h3>
                              <p>{el.content}</p>
                            </li>
                          </a>
                        </ul>
                      </section>
                    );
                  })}
              </div>
            ) : (
              <div>
                {articleBList &&
                  articleBList.map((el) => {
                    return (
                      <section key={el.id}>
                        <ul>
                          <a>
                            <li>
                              <h3>
                                <span>{el.id}.</span>
                                {el.title}
                              </h3>
                              <p>{el.content}</p>
                            </li>
                          </a>
                        </ul>
                      </section>
                    );
                  })}
              </div>
            )}
          </div>
        )} */}
        {postA ? (
          <div>
            {articleA.map((el) => (
              <section key={el._id}>
                <ul>
                  <a>
                    <li>
                      <h3>
                        <span>{el.id}.</span>
                        {el.title}
                      </h3>
                      <p>{el.content}</p>
                    </li>
                  </a>
                </ul>
              </section>
            ))}
          </div>
        ) : (
          <div>
            {articleB.map((el) => (
              <section key={el._id}>
                <ul>
                  <a>
                    <li>
                      <h3>
                        <span>{el.id}.</span>
                        {el.title}
                      </h3>
                      <p>{el.content}</p>
                    </li>
                  </a>
                </ul>
              </section>
            ))}
          </div>
        )}
      </ArticleDiv>
    </div>
  );
};

export default Article;
