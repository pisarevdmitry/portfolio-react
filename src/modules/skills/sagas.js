import { takeLatest, put, take, call, fork, select } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";
import axios from "axios";
import {
  loadSkills as loadSkillsAction,
  setSkills,
  addSkillRequest,
  addSkill as addSkillAction,
  addSkillFail,
  deleteSkillRequest,
  deleteSkill as deleteSkillAction,
  deleteSkillFail,
  updateSkillsRequest,
  updateSkills as updateSkillsAction,
  updateSkillsFail
} from "./actions";
import {getItems, getSkills} from './selectors'
import { setPopup } from "../popup";
export default function*() {
  yield fork(watcher);
}

function* watcher() {
  yield fork(loadSkills);
  yield fork(addSkill);
  yield fork(deleteSkill);
  yield fork(updateSkills);
}

function* updateSkills() {
  yield takeLatest(updateSkillsRequest, updateSkillsFlow);
}

function* updateSkillsFlow({ payload }) {
  try {
    const skills = yield select(getItems)
    console.log('--',payload)
    console.log('--state', skills)
    const data = Object.values(skills).reduce((acc, skill) => {
      if(payload[skill.category][skill.name] !== skill.percents) {
        acc.push({...skill, percents: payload[skill.category][skill.name]})
      }
      return acc
    },[])
    yield call(axios.put, "/api/skills", data);
     yield put(updateSkillsAction(data))
    yield put(setPopup("Update Successful")); 
  } catch (e) {
    console.log(e)
    yield put(updateSkillsFail());
    yield put(setPopup("Server Error"));
  }
}

function* deleteSkill() {
  yield takeLatest(deleteSkillRequest, deleteSkillFlow);
}

function* deleteSkillFlow({ payload }) {
  try {
    yield call(axios.delete, `/api/skills/${payload}`);
    yield put(deleteSkillAction(payload));
  } catch (e) {
    yield put(deleteSkillFail());
    yield put(setPopup("Server Error"));
  }
}

function* addSkill() {
  yield takeLatest(addSkillRequest, addSkillFlow);
}

function* addSkillFlow({ payload }) {
  try {
    const data = yield call(axios.post, "/api/skills", payload.values);
    if (typeof payload.onSuccess === "function") {
      payload.onSuccess();
    }
    yield put(addSkillAction(data.data));
  } catch (e) {
    yield put(addSkillFail());
    yield put(setPopup("Server Error"));
  }
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
