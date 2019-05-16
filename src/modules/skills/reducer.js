import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import produce from "immer";
import {
  setSkills,
  addSkillRequest,
  addSkill,
  addSkillFail,
  deleteSkillRequest,
  deleteSkill,
  deleteSkillFail,
  updateSkillsRequest,
  updateSkills,
  updateSkillsFail
} from "./actions";

const items = handleActions(
  {
    [setSkills]: (state, action) => action.payload,
    [addSkill]: produce((draft, { payload }) => {
      draft[payload["_id"]] = payload;
     
    }),
    [deleteSkill]: produce((draft, { payload }) => {
      delete draft[payload]
    }),
    [updateSkills]: produce((draft, { payload }) => {
      payload.forEach(item => {
        draft[item['_id']] = item
      })
    }),
  },
  null
);

const loaded = handleActions(
  {
    [setSkills]: () => true
  },
  false
);

const requestProccessing = handleActions(
  {
    [addSkillRequest]: () => true,
    [addSkill]: () => false,
    [addSkillFail]: () => false,
    [deleteSkillRequest]: () => true,
    [deleteSkill]: () => false,
    [deleteSkillFail]: () => false,
    [updateSkillsRequest]: () => true,
    [updateSkills]: () => false,
    [updateSkillsFail]: () => false
  },
  false
);

export default combineReducers({
  items,
  loaded,
  requestProccessing
});
