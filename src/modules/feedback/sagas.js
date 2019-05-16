import { takeLatest, put, call, fork } from "redux-saga/effects";

import axios from "axios";
import { feedBackRequest,feedBackRequestEnd, setFeedBackMsg } from "./actions";

export default function*() {
  yield fork(watcher);
}

function* watcher() {
  yield fork(sendFeedback);
  
}

function* sendFeedback() {
  yield takeLatest(feedBackRequest, sendFeedbackFlow);
}

function* sendFeedbackFlow({payload}) {
  try{
    yield call(axios.post, "/contacts", payload);
      yield put(feedBackRequestEnd())
      yield put(setFeedBackMsg('Спасибо За Отклик'))
  } catch (e) {
    yield put(feedBackRequestEnd())
    yield put(setFeedBackMsg('ошибка сервера повторите попыку позжнее'))
  }
}

