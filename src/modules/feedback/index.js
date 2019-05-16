import formsReducer from "./reducer";
import { getFeedbackMsg,getFeedbackProccessing } from "./selectors";
import { feedBackRequest } from "./actions";
import saga from './sagas';
export default formsReducer;
export {feedBackRequest, getFeedbackMsg,getFeedbackProccessing, saga as feedbackSaga };
