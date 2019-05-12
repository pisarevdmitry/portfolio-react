import { takeLatest, put, take, call, fork } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";
import axios from "axios";
import { loadAricles as loadArticlesAction, setAricles } from "./actions";
export default function*() {
  yield fork(watcher);
}

function* watcher() {
  yield fork(loadAricles);
}

function* loadAricles() {
  yield takeLatest(loadArticlesAction, loadArticlesFlow);
}

function* loadArticlesFlow() {
  try {
    const {
      data: { articles: data }
    } = yield call(axios.get, "/api/blog");
    console.log(data)
    const articles = data.reduce((acc, article) => {
      acc[article._id] = article;
      return acc;
    }, {});
    yield put(setAricles(articles));
  } catch (e) {
    const chan = yield call(timeout, 10000);
    yield take(chan);
    yield put(loadArticlesAction());
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
