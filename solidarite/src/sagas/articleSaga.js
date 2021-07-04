import axios from "axios";
import {
  LOAD_ARTICLE_A_REQUEST,
  LOAD_ARTICLE_A_SUCCESS,
  LOAD_ARTICLE_A_FAILURE,
  LOAD_ARTICLE_B_REQUEST,
  LOAD_ARTICLE_B_SUCCESS,
  LOAD_ARTICLE_B_FAILURE,
  LOAD_ARTICLE_PAGE_A_REQUEST,
  LOAD_ARTICLE_PAGE_A_SUCCESS,
  LOAD_ARTICLE_PAGE_A_FAILURE,
} from "../reducers/article";

import { all, fork, call, put, takeLatest, throttle } from "redux-saga/effects";

function articleAPIa(data) {
  return axios.get(`/a-posts?page=${data}`);
}

function articleAPIb(data) {
  return axios.get(`/b-posts?page=${data}`);
}

function articlePageAPIa(data) {
  return axios.get(`/a-posts/${data}`);
}

function* articleAList(action) {
  try {
    const result = yield call(articleAPIa, action.data);
    yield put({
      type: LOAD_ARTICLE_A_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_ARTICLE_A_FAILURE,
      error: err.data,
    });
  }
}

function* articleBList(action) {
  try {
    const result = yield call(articleAPIb, action.data);
    yield put({
      type: LOAD_ARTICLE_B_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_ARTICLE_B_FAILURE,
      error: err.data,
    });
  }
}

function* articlePageA(action) {
  try {
    const result = yield call(articlePageAPIa, action.data);
    yield put({
      type: LOAD_ARTICLE_PAGE_A_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_ARTICLE_PAGE_A_FAILURE,
      error: err.data,
    });
  }
}

function* watchArticleA() {
  yield takeLatest(LOAD_ARTICLE_A_REQUEST, articleAList);
}

function* watchArticleB() {
  yield takeLatest(LOAD_ARTICLE_B_REQUEST, articleBList);
}

function* watchArticlePageA() {
  yield takeLatest(LOAD_ARTICLE_PAGE_A_REQUEST, articlePageA);
}

export default function* articleSaga() {
  yield all(
    [fork(watchArticleA)],
    [fork(watchArticleB)],
    [fork(watchArticlePageA)]
  );
}
