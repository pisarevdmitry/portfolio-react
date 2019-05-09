import {combineReducers} from 'redux'
import userReducer ,{usersSaga} from './user'
import skillsReducer, {skillsSaga}  from './skills'
import worksReducer ,{worksSaga} from './works'

import { fork } from 'redux-saga/effects';

export default combineReducers({
    user: userReducer,
    skills: skillsReducer,
    works: worksReducer
});


export function* rootSaga() {
    yield fork(usersSaga);
    yield fork(skillsSaga);
    yield fork(worksSaga);
}