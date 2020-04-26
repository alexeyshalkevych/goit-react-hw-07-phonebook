import { CHANGE_FILTER } from '../actionTypes';

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER: {
      return payload;
    }

    default:
      return state;
  }
};

export default filterReducer;
