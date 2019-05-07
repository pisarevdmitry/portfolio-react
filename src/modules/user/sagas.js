import { takeLatest, put, call, fork } from "redux-saga/effects";
/* import {
  loadArticles as loadArticlesAction,
  setArticles,
  loadArticle as loadArticleAction,
  setArticle
} from "./articlesActions"; */
//import { request } from "../../utils";
export default function*() {
  //yield fork(watcher);
}

/* function* watcher() {
  yield fork(loadArticles);
  yield fork(loadArticle);
}

function* loadArticles() {
  yield takeLatest(loadArticlesAction, loadArticlesFlow);
}
function* loadArticle() {
    yield takeLatest(loadArticleAction, loadArticleFlow);
  }

function* loadArticlesFlow() {
  const data = yield call(request,"http://localhost:3000/api/article", "get");
  yield put(setArticles(data));
}

function* loadArticleFlow({payload}) {
    const data = yield call(request,`http://localhost:3000/api/article/${payload}`, "get");
    yield put(setArticle(data));
  } */
  