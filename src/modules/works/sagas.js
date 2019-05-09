import { takeLatest, put, take, call, fork } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";
import axios from "axios";
import { loadWorks as loadWorksAction, setWorks } from "./actions";
import { request } from "../../utils";
export default function*() {
  yield fork(watcher);
}

function* watcher() {
  yield fork(loadWorkss);
}

function* loadWorkss() {
  yield takeLatest(loadWorksAction, loadWorksFlow);
}

function* loadWorksFlow() {
  try {
    const {
    data: { slides: data }
    } = yield call(axios.get, "/api/work");
    console.log(data)
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
