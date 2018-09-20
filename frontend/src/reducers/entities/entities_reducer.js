import {
  combineReducers
} from 'redux';

import locations from './locations_reducer';
import users from './users_reducer';
import categories from './categories_reducer';
import times from './times_reducer';

export default combineReducers({
  locations,
  users,
  categories,
  times
});
