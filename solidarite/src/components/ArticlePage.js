import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const ArticlePage = (props) => {
  const dispatch = useDispatch();

  const articleA = useSelector((state) => state?.article.articleA);

  console.log();

  useEffect(() => {
    if (articleA && articleA > 0) {
      articleA = [];
    }
  }, [articleA]);

  return (
    <div>
      <section key={articleA._id}>
        <ul>
          <a>
            <li>
              <h3>
                <span>{articleA.id}.</span>
                {articleA.title}
              </h3>
              <p>{articleA.content}</p>
            </li>
          </a>
        </ul>
      </section>
    </div>
  );
};

export default ArticlePage;
