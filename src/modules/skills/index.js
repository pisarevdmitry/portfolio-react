import skillsReducer from './reducer'
import {getLoaded, getSkills}  from './selectors';
import { loadSkills } from './actions'
import saga from './sagas';

export default skillsReducer;
export {
    saga as skillsSaga,
    getLoaded,
    getSkills,
    loadSkills
}