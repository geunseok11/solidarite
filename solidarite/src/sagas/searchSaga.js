import axios from "axios";
import {
  LOAD_SEARCH_REQUEST,
  LOAD_SEARCH_SUCCESS,
  LOAD_SEARCH_FAILURE,
} from "../reducers/article";

import { all, fork, call, put, takeLatest, throttle } from "redux-saga/effects";

function searchAPI(data) {
  return axios.get(`/a-posts?page=1&search=${data}`);
}

function* searchList(action) {
  try {
    const result = yield call(searchAPI, action.data);
    yield put({
      type: LOAD_SEARCH_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_SEARCH_FAILURE,
      error: err.data,
    });
  }
}

function* watchSearch() {
  yield takeLatest(LOAD_SEARCH_REQUEST, searchList);
}

export default function* searchSaga() {
  yield all([fork(watchSearch)]);
}
