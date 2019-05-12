import {combineReducers} from 'redux'
import userReducer ,{usersSaga} from './user'
import skillsReducer, {skillsSaga}  from './skills'
import worksReducer ,{worksSaga} from './works'
import blogsReducer ,{blogSaga} from './blog'

import { fork } from 'redux-saga/effects';

export default combineReducers({
    user: userReducer,
    skills: skillsReducer,
    works: worksReducer,
    blog: blogsReducer
});


export function* rootSaga() {
    yield fork(usersSaga);
    yield fork(skillsSaga);
    yield fork(worksSaga);
    yield fork(blogSaga);
}