import {
  GET_CONTACTS_REQUEST,
  DELETE_CONTACT_REQUEST,
  ADD_CONTACT_REQUEST,
  GET_CONTACTS_ERROR,
  ADD_CONTACT_ERROR,
  DELETE_CONTACT_ERROR,
} from '../actionTypes';

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_REQUEST:
    case ADD_CONTACT_REQUEST:
    case DELETE_CONTACT_REQUEST:
      return null;

    case GET_CONTACTS_ERROR:
    case ADD_CONTACT_ERROR:
    case DELETE_CONTACT_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default errorReducer;
