import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { authRequest, authRequestEnd, setAuthMsg ,authRequestSuccess } from "./actions";


const authProcessing = handleActions({
[authRequest] :() => true,
[authRequestEnd] : () => false,
[authRequestSuccess] : () => false
}, false)

const authMsg = handleActions({
  [setAuthMsg]: (state, action) => action.payload
}, '')
const isLogged =  handleActions({
    [authRequestSuccess]: () => true
  }, false)

export default combineReducers({
  authProcessing,
  authMsg,
  isLogged
})
