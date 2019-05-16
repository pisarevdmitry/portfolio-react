import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import produce from 'immer'
import { setAricles, addArticleRequest, addArticle, articleRequestFail } from "./actions";
const articles = handleActions(
  {
    [setAricles]: (state, action) => action.payload,
     [addArticle]: produce((draft, {payload}) => {
      if(!draft) {
        draft = {}
      }
      draft[payload['_id']] = payload
      return draft
    }) 
  },
  null
);

const loaded = handleActions({
    [setAricles]: () => true
}, false);
const requestProccessing = handleActions({
  [addArticleRequest]:() => true,
  [addArticle] : ()=> false,
  [articleRequestFail]: ()=> false,
}, false);

export default combineReducers({
  articles,
  loaded,
  requestProccessing
});
