
import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import locations from './location_errors_reducer';

export default combineReducers({
    session,
    locations,
});
