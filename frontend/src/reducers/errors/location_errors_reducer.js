
import { RECEIVE_LOCATION_ERRORS, CLEAR_LOCATION_ERRORS } from '../../actions/location_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LOCATION_ERRORS:
      return action.errors;
    case CLEAR_LOCATION_ERRORS:
      return [];
    default:
      return state;
  }
};