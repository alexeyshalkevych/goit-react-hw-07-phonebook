import { CHANGE_FILTER } from '../../Constants/actionNames';

const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});

export default changeFilter;
