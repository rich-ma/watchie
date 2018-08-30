import { RECEIVE_LOCATIONS, RECEIVE_LOCATION } from "../../actions/location_actions";
import  merge from 'lodash/merge';


const locationReducer = (state = {}, action) => {
  const newState = merge({}, state);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LOCATIONS:
      return action.payload.data;      
    case RECEIVE_LOCATION:
      return merge(newState, { [action.location._id]: action.location })
    default:
      return state;
  }
};

export default locationReducer;