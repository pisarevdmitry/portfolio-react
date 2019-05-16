import {createAction} from 'redux-actions'
export const loadWorks = createAction("LOAD_WORKS");
export const setWorks = createAction("SET_WORKS");
export const addWorkRequest = createAction("ADD_WORK_REQUEST");
export const addWork = createAction("ADD_WORK");
export const workRequestFail = createAction("WORK_REQUEST_FAIL");