import {createSelector} from 'reselect'
export const getPopupState = state => state.popup.visible;
export const getPopupMsg = state => state.popup.msg;

