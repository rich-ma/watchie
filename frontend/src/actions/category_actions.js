import * as CategoryAPIUtil from '../util/category_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

const receiveCategory = category => ({
  type: RECEIVE_CATEGORY,
  category
});

export const fetchCategories = () => dispatch => {
  return CategoryAPIUtil.fetchCategories()
    .then(categories => dispatch(receiveCategories(categories)));
};

export const createCategory = category => dispatch => {
  return CategoryAPIUtil.createCategory(category)
    .then(newCategory => dispatch(receiveCategory(newCategory)));
};