import * as CategoryAPIUtil from '../util/category_api_util';

export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

const receiveCategory = category => ({
  type: RECEIVE_CATEGORY,
  category
});

export const createCategory = category => dispatch => {
  debugger
  return CategoryAPIUtil.createCategory(category)
    .then(newCategory => dispatch(receiveCategory(newCategory)));
};