import {createAction} from 'redux-actions'
export const authRequest = createAction("AUTH_REQUEST");
export const authRequestEnd = createAction("AUTH_REQUEST_END");
export const authRequestSuccess = createAction("AUTH_REQUEST_SUCCESS");
export const setAuthMsg = createAction("SET_AUTH_MSG");