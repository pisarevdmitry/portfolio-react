import {createAction} from 'redux-actions'
export const loadAricles = createAction("LOAD_ARTICLES");
export const setAricles = createAction("SET_ARTICLES");
export const addArticleRequest = createAction("ADD_BLOG_REQUEST");
export const addArticle = createAction("ADD_ARTICLE");
export const articleRequestFail = createAction("ARTICLE_REQUEST_FAIL");
