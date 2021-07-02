import axios from "axios";
import {
  LOAD_ARTICLE_REQUEST,
  LOAD_ARTICLE_SUCCESS,
  LOAD_ARTICLE_FAILURE,
} from "../reducers/article";

import { all, fork, call, put, takeLatest, throttle } from "redux-saga/effects";

function articleAPI(data) {
  return axios.get(`/a-posts?page=${data}`);
}

function* articleList(action) {
  try {
    const result = yield call(articleAPI, action.data);
    yield put({
      type: LOAD_ARTICLE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_ARTICLE_FAILURE,
      error: err.data,
    });
  }
}

function* watchArticle() {
  yield takeLatest(LOAD_ARTICLE_REQUEST, articleList);
}

export default function* articleSaga() {
  yield all([fork(watchArticle)]);
}
