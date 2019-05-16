import { takeLatest, put, call, fork } from "redux-saga/effects";

import axios from "axios";
import { authRequest, authRequestEnd, setAuthMsg ,authRequestSuccess } from "./actions";

export default function*() {
  yield fork(watcher);
}

function* watcher() {
  yield fork(auth);
}

function* auth() {
  yield takeLatest(authRequest, authFlow);
}

function* authFlow({ payload }) {
  try {
    yield call(axios.post, "/api/auth", payload.values);
    yield put(authRequestSuccess());
    yield put(setAuthMsg(""));
     if (typeof payload.onSuccess === "function") {
      payload.onSuccess();
    }
  } catch (e) {
    console.log(e.response);
    yield put(authRequestEnd());
    yield put(setAuthMsg(e.response && e.response.data.message));
  }
}
