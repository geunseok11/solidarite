import axios from "axios";
import {
  LOAD_SEARCH_A_REQUEST,
  LOAD_SEARCH_A_SUCCESS,
  LOAD_SEARCH_A_FAILURE,
  LOAD_SEARCH_B_REQUEST,
  LOAD_SEARCH_B_SUCCESS,
  LOAD_SEARCH_B_FAILURE,
} from "../reducers/search";

import { all, fork, call, put, takeLatest, throttle } from "redux-saga/effects";

function searchAPIa(data) {
  return axios.get(`/a-posts?page=1&search=${data}`);
}

function searchAPIb(data) {
  return axios.get(`/b-posts?page=1&search=${data}`);
}

function* searchAList(action) {
  try {
    const result = yield call(searchAPIa, action.data);
    yield put({
      type: LOAD_SEARCH_A_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_SEARCH_A_FAILURE,
      error: err.data,
    });
  }
}

function* searchBList(action) {
  try {
    const result = yield call(searchAPIb, action.data);
    yield put({
      type: LOAD_SEARCH_B_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_SEARCH_B_FAILURE,
      error: err.data,
    });
  }
}

function* watchSearchA() {
  yield takeLatest(LOAD_SEARCH_A_REQUEST, searchAList);
}

function* watchSearchB() {
  yield takeLatest(LOAD_SEARCH_B_REQUEST, searchBList);
}

export default function* searchSaga() {
  yield all([fork(watchSearchA)], fork(watchSearchB));
}
