import {combineReducers} from 'redux'
import authReducer ,{authSaga} from './user'
import skillsReducer, {skillsSaga}  from './skills'
import worksReducer ,{worksSaga} from './works'
import blogsReducer ,{blogSaga} from './blog'
import popUpReducer from './popup'
import feedbackReducer, {feedbackSaga} from './feedback'
import { fork } from 'redux-saga/effects';

export default combineReducers({
    auth: authReducer,
    skills: skillsReducer,
    works: worksReducer,
    blog: blogsReducer,
    popup: popUpReducer,
    feedback: feedbackReducer
});


export function* rootSaga() {
    yield fork(authSaga);
    yield fork(skillsSaga);
    yield fork(worksSaga);
    yield fork(blogSaga);
    yield fork(feedbackSaga);
}