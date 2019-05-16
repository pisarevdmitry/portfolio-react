import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import produce from 'immer'
import { setWorks, addWorkRequest, addWork, workRequestFail } from "./actions";
const items = handleActions(
  {
    [setWorks]: (state, action) => action.payload,
    [addWork]: produce((draft, {payload}) => {
      if(!draft) {
        draft = {}
      }
      draft[payload['_id']] = payload
      return draft
    }) 
  },
  null
);

const loaded = handleActions({
    [setWorks]: () => true
}, false);

const requestProccessing = handleActions({
  [addWorkRequest]:() => true,
  [addWork] : ()=> false,
  [workRequestFail] : ()=> false
}, false);
export default combineReducers({
  items,
  loaded,
  requestProccessing
});
