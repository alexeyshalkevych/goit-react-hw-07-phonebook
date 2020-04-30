import { CHANGE_FILTER } from '../../Constants/actionNames';

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
