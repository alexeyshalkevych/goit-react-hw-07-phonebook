import { CHANGE_FILTER } from '../actionTypes';

const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});

export default changeFilter;
