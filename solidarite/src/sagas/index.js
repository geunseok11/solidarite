import { all, fork } from "redux-saga/effects";
import axios from "axios";

import articleSaga from "./articleSaga";
import searchSaga from "./searchSaga";

axios.defaults.baseURL = "https://recruit-api.yonple.com/recruit/582192";

// axios.defaults.withCredentials = true

export default function* rootSaga() {
  yield all([fork(articleSaga), fork(searchSaga)]);
}
