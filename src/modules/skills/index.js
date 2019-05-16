import skillsReducer from './reducer'
import {getLoaded, getSkills , getRequestProcessing}  from './selectors';
import { loadSkills, addSkillRequest, deleteSkillRequest, updateSkillsRequest } from './actions'
import saga from './sagas';

export default skillsReducer;
export {
    saga as skillsSaga,
    getLoaded,
    getSkills,
    loadSkills,
    addSkillRequest,
    getRequestProcessing,
    updateSkillsRequest,
    deleteSkillRequest
}