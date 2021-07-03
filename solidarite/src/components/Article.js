import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadArticleARequest } from "../reducers/article";
import Search from "./Search";

const Article = (props) => {
  const dispatch = useDispatch();
  console.log("article props :", props);
  let [articleA, setArticleA] = useState([]);
  let [hitBottom, sethitBottom] = useState(false);
  let [iterator, setiterator] = useState(0);
  // const [title, setTitle] = useState('')

  // Search(title)

  const articleAList = useSelector((state) => state?.article.articleAList);

  console.log("articleAList in Article : ", articleAList);

  console.log("articleA in Article AA: ", articleA);

  useEffect(() => {
    sethitBottom(false);
    if (iterator < 10) {
      iterator++;
      setiterator(iterator);

      // setArticleA(articleAList);
      dispatch(loadArticleARequest(iterator));
    }
  }, [hitBottom]);

  // useEffect(() => {
  //   sethitBottom(false);

  //   axios.get(`/a-posts?page=${iterator}`).then((res) => {
  //     console.log("axios res :", res.data);
  //     iterator++;
  //     setiterator(iterator);
  //     articleA = [...articleA, ...res.data];
  //     setArticleA(articleA);
  //   });
  // }, [hitBottom]);

  const onScroll = () => {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 10
    ) {
      // dispatch(loadingScreen);
      sethitBottom(true);
    }
  };

  // // useEffect에서 addEvent를 한 경우 반드시 clean up을 해줍시다.
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // const infiniteScroll = useCallback(() => {
  //   // const { documentElement, body } = document;

  //   // const scrollHeight = Math.max(
  //   //   documentElement.scrollHeight,
  //   //   body.scrollHeight
  //   // );
  //   // const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
  //   // const clientHeight = documentElement.clientHeight;

  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const scrollTop = document.documentElement.scrollTop;
  //   const clientHeight = document.documentElement.clientHeight;

  //   if (scrollTop + clientHeight >= scrollHeight) {
  //     setiterator(iterator + 1);
  //     dispatch(loadArticleARequest(iterator));
  //   }
  // }, [iterator]);

  useEffect(() => {
    if (articleAList && articleAList > 0) {
      articleAList = [];
    }
  }, [articleAList]);

  useEffect(() => {
    dispatch(loadArticleARequest(iterator - 1));
  }, [iterator]);

  return (
    <div>
      {/* {articleA.map((el) => (
        <section key={el._id}>
          <ul>
            <a>
              <li>
                <h3>{el.title}</h3>
                <p>{el.content}</p>
              </li>
            </a>
          </ul>
        </section>
      ))} */}
      {articleAList &&
        articleAList.map((el) => (
          <section key={el.id}>
            <ul>
              <a>
                <li>
                  <h3>{el.title}</h3>
                  <p>{el.content}</p>
                </li>
              </a>
            </ul>
          </section>
        ))}
    </div>
  );
};

export default Article;
