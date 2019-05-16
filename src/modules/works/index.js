import worksReducer from './reducer'
import {getIsWorksLoaded, getWorks, getRequestProcessing}  from './selectors';
import { loadWorks ,addWorkRequest } from './actions'
import saga from './sagas';

export default worksReducer;
export {
    saga as worksSaga,
    getIsWorksLoaded,
    getWorks,
    addWorkRequest,
    getRequestProcessing,
    loadWorks
}