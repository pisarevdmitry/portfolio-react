import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { setWorks } from "./actions";
const items = handleActions(
  {
    [setWorks]: (state, action) => action.payload
  },
  null
);

const loaded = handleActions({
    [setWorks]: () => true
}, false);

export default combineReducers({
  items,
  loaded
});
