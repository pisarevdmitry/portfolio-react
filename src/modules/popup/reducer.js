import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { setPopup, clearPopUp } from "./actions";
const visible = handleActions(
  {
    [setPopup]: () => true,
    [clearPopUp]: () => false
  },
  false
);

const msg = handleActions({
  [setPopup]: (state, action) => action.payload,
  [clearPopUp]: () => ''
}, '');

export default combineReducers({
  visible,
  msg
});
