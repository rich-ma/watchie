import axios from 'axios';

export const createCategory = category => {
  debugger
  return axios
    .post('/api/categories', category);
};