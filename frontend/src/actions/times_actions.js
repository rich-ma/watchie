import * as TimeAPIUtil from '../util/times_api_util';

export const RECEIVE_TIME = "RECEIVE_TIME";

const receiveTime = time => ({
  type: RECEIVE_TIME,
  time
});

export const createTime = time => dispatch => {
  return TimeAPIUtil.createTime(time)
    .then(newTime => dispatch(receiveTime(newTime)));
};