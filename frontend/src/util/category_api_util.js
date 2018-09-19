import axios from 'axios';

export const createCategory = category => {
  return axios
    .post('/api/categories', category);
};

export const fetchCategories = () => {
  return axios
    .get('/api/categories');
};