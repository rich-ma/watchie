import { RECEIVE_TIME } from '../../actions/times_actions';

const timesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TIME:
      return Object.assign({}, state, {[action.time.data._id]: action.time.data});
    default:
      return state;
  }
};

export default timesReducer;