import authReducer from "./reducer";
import { getauthProccessing, getauthMsg, isLogged } from "./selectors";
import { authRequest } from "./actions";
import saga from "./sagas";

export default authReducer;
export { saga as authSaga, getauthMsg, getauthProccessing, authRequest, isLogged };
