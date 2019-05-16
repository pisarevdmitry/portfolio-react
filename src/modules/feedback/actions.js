import {createAction} from 'redux-actions'
export const feedBackRequest = createAction("FEEDBACK_REQUEST");
export const feedBackRequestEnd = createAction("FEEDBACK_REQUEST_END");
export const setFeedBackMsg = createAction("SET_FEEDBACK_MSG");