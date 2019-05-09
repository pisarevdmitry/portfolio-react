import worksReducer from './reducer'
import {getIsWorksLoaded, getWorks}  from './selectors';
import { loadWorks } from './actions'
import saga from './sagas';

export default worksReducer;
export {
    saga as worksSaga,
    getIsWorksLoaded,
    getWorks,
    loadWorks
}