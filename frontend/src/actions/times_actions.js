import * as TimeAPIUtil from '../util/times_api_util';

export const RECEIVE_TIMES = "RECEIVE_TIMES";
export const RECEIVE_TIME = "RECEIVE_TIME";

const receiveTimes = times => ({
  type: RECEIVE_TIMES,
  times
});

const receiveTime = time => ({
  type: RECEIVE_TIME,
  time
});

export const fetchTimes = () => dispatch => {
  return TimeAPIUtil.fetchTimes()
  .then(times => dispatch(receiveTimes(times)));
};

export const createTime = time => dispatch => {
  return TimeAPIUtil.createTime(time)
    .then(newTime => dispatch(receiveTime(newTime)));
};