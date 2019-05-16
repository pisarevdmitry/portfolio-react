import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { feedBackRequest, feedBackRequestEnd, setFeedBackMsg } from "./actions";


const feedbackProcessing = handleActions({
[feedBackRequest] :() => true,
[feedBackRequestEnd] : () => false
}, false)

const feedbackMsg = handleActions({
  [setFeedBackMsg]: (state, action) => action.payload
}, '')


export default combineReducers({
  feedbackProcessing,
  feedbackMsg
})
