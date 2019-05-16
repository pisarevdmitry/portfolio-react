import { takeLatest, put, take, call, fork } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";
import axios from "axios";
import {
  loadWorks as loadWorksAction,
  setWorks,
  addWorkRequest,
  addWork as addWorkAction
} from "./actions";
import { setPopup } from "../popup";
export default function*() {
  yield fork(watcher);
}

function* watcher() {
  yield fork(loadWorkss);
  yield fork(addWork);
}

function* loadWorkss() {
  yield takeLatest(loadWorksAction, loadWorksFlow);
}

function* addWork() {
  yield takeLatest(addWorkRequest, addWorkFlow);
}

function* addWorkFlow({ payload }) {
  try {
    const workData = new FormData();
    Object.entries(payload.values).forEach(([name, value]) => {
      workData.append(name, value);
    });
    const data = yield call(axios.post, "/api/work", workData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    if (typeof payload.onSuccess === "function") {
      payload.onSuccess();
    }
    yield put(addWorkAction(data.data));
      yield put(setPopup("Успешно Добавлен"));
  } catch (e) {
    console.log(e);
    yield put(setPopup("Server Eroor"));
  }
}

function* loadWorksFlow() {
  try {
    const {
      data: { slides: data }
    } = yield call(axios.get, "/api/work");
    console.log(data);
    const skills = data.reduce((acc, skill) => {
      acc[skill._id] = skill;
      return acc;
    }, {});
    yield put(setWorks(skills));
  } catch (e) {
    const chan = yield call(timeout, 10000);
    yield take(chan);
    yield put(loadWorksAction());
  }
}

function timeout(secs) {
  return eventChannel(emitter => {
    const iv = setTimeout(() => {
      emitter("ready");
      emitter(END);
    }, secs);
    return () => {
      clearTimeout(iv);
    };
  });
}
