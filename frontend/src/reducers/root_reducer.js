
import { combineReducers } from 'redux';

import session from './sessions/session_reducer';
import errors from './errors/errors_reducer';

const rootReducer = combineReducers({
  session,
  errors,
});

export default rootReducer;
