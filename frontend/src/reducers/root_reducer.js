
import { combineReducers } from 'redux';

import session from './sessions/session_reducer';
import errors from './errors/errors_reducer';
import entities from './entities/entities_reducer';
import ui from './ui/ui_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  entities,
  // ui
});

export default rootReducer;
