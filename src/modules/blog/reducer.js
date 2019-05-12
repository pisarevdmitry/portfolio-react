import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { setAricles } from "./actions";
const articles = handleActions(
  {
    [setAricles]: (state, action) => action.payload
  },
  null
);

const loaded = handleActions({
    [setAricles]: () => true
}, false);

export default combineReducers({
  articles,
  loaded
});
