//import { loadArticles, loadArticle } from './articlesActions'
import userReducer from './userReducer'
//import {getArticles, getArticlesLoading, getArticlesLoaded}  from './selectors'
import saga from './sagas';

export default userReducer;
export {
    saga as usersSaga
}