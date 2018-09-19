import axios from 'axios';

export const createTime = time => {
  return axios
    .post('/api/times', time);
};