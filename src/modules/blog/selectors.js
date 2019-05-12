import { createSelector } from "reselect";
export const getArticlesLoaded = state => state.blog.loaded;
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
