import { takeLatest, put, take, call, fork } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";
import axios from "axios";
import { loadSkills as loadSkillsAction, setSkills } from "./actions";
import { request } from "../../utils";
export default function*() {
  yield fork(watcher);
}

function* watcher() {
  yield fork(loadSkills);
}

function* loadSkills() {
  yield takeLatest(loadSkillsAction, loadSkillsFlow);
}

function* loadSkillsFlow() {
  try {
    const {
      data: { items: data }
    } = yield call(axios.get, "/api/skills");
    const skills = data.reduce((acc, skill) => {
      acc[skill._id] = skill;
      return acc;
    }, {});
    yield put(setSkills(skills));
  } catch (e) {
    const chan = yield call(timeout, 10000);
    yield take(chan);
    yield put(loadSkillsAction());
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
