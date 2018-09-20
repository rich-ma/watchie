import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from '../../actions/category_actions';

const categoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories.data;
    case RECEIVE_CATEGORY:
      return Object.assign({}, state, { [action.category.data._id]: action.category.data });
    default:
      return state;
  }
};

export default categoriesReducer;