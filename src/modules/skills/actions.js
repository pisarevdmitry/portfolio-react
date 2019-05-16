import {createAction} from 'redux-actions'
export const loadSkills = createAction("LOAD_SKILLS");
export const setSkills = createAction("SET_SKILLS");
export const addSkillRequest = createAction("ADD_SKILL_REQUEST");
export const addSkill = createAction("ADD_SKILL");
export const addSkillFail = createAction("ADD_SKILL_REQUEST_FAIL");
export const deleteSkillRequest = createAction("DELETE_SKILL_REQUEST");
export const deleteSkill = createAction("DELETE_SKILL");
export const deleteSkillFail = createAction("DELETE_SKILL_REQUEST_FAIL");
export const updateSkillsRequest = createAction("UPDATE_SKILLS_REQUEST");
export const updateSkills = createAction("UPDATE_SKILLS");
export const updateSkillsFail = createAction("UPDATE_SKILLS_REQUEST_FAIL");
