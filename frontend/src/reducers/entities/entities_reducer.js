import {
  combineReducers
} from 'redux';

import locations from './locations_reducer';
import users from './users_reducer';

export default combineReducers({
  locations,
  users
});
