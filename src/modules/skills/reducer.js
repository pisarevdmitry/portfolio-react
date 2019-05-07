import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { setSkills } from "./actions";
const items = handleActions(
  {
    [setSkills]: (state, action) => action.payload
  },
  null
);

const loaded = handleActions({
    [setSkills]: () => true
}, false);

export default combineReducers({
  items,
  loaded
});
