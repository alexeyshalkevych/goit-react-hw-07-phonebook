import {
  GET_CONTACTS_SUCCESS,
  ADD_CONTACT_SUCCESS,
  DELETE_CONTACT_SUCCESS,
} from '../actionTypes';
import { hasStateContact } from '../../utils/helpers';

const contactReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_SUCCESS: {
      return [...state, ...payload];
    }

    case ADD_CONTACT_SUCCESS: {
      if (hasStateContact(state, payload)) {
        return state;
      }

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
