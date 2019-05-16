import { createSelector } from "reselect";
export const getArticlesLoaded = state => state.blog.loaded;
export const getRequestProcessing = state => state.blog.requestProccessing;
const getItems = state => state.blog.articles;

export const getArticles = createSelector(
  getItems,
  items => {
    if (!items) {
      return null;
    }
    return Object.values(items);
  }
);
