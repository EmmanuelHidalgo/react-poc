import { combineReducers} from 'redux';

import facetsReducer from './facetsReducer';
import resultsReducer from './resultsReducer';
import resultItemReducer from './resultItemReducer';


export default  combineReducers({
    results: resultsReducer,
    item: resultItemReducer,
    facets:facetsReducer
});