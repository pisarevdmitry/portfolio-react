import {createSelector} from 'reselect'
export const getIsWorksLoaded = state => state.works.loaded;
export const getRequestProcessing = state => state.works.requestProccessing;
const getItems = state => state.works.items;

export const getWorks = createSelector(getItems,items => {
   if(!items) {
       return null
   }
   return Object.values(items)
})