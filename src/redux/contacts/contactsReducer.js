import {
  FETCH_CONTACTS_SUCCESS,
  ADD_CONTACT_SUCCESS,
  DELETE_CONTACT_SUCCESS,
} from '../actionTypes';

const contactReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_CONTACTS_SUCCESS: {
      return [...state, ...payload];
    }

    case ADD_CONTACT_SUCCESS: {
      return [...state, payload];
    }

    case DELETE_CONTACT_SUCCESS: {
      const filteredState = state.filter(contact => contact.id !== payload);

      return filteredState;
    }

    default:
      return state;
  }
};

export default contactReducer;
