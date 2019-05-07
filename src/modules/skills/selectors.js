import {createSelector} from 'reselect'
export const getLoaded = state => state.skills.loaded;
const getItems = state => state.skills.items;

export const getSkills = createSelector(getItems,items => {
   if(!items) {
       return null
   }
   return Object.values(items).reduce((acc, item) => {
       if(!acc[item.category]) {
        acc[item.category] = []
       }
       acc[item.category].push(item)
       return acc    
   },{})
})