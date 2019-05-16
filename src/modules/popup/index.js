import popUpReducer from "./reducer";
import { getPopupState, getPopupMsg } from "./selectors";
import { setPopup, clearPopUp } from "./actions";

export default popUpReducer;
export { setPopup, clearPopUp, getPopupState, getPopupMsg };
