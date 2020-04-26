import {
  GET_CONTACTS_SUCCESS,
  ADD_CONTACT_SUCCESS,
  DELETE_CONTACT_SUCCESS,
  GET_CONTACTS_REQUEST,
  DELETE_CONTACT_REQUEST,
  ADD_CONTACT_REQUEST,
  GET_CONTACTS_ERROR,
  ADD_CONTACT_ERROR,
  DELETE_CONTACT_ERROR,
} from '../actionTypes';

const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case GET_CONTACTS_REQUEST:
    case ADD_CONTACT_REQUEST:
    case DELETE_CONTACT_REQUEST:
      return true;

    case GET_CONTACTS_SUCCESS:
    case GET_CONTACTS_ERROR:
    case ADD_CONTACT_SUCCESS:
    case ADD_CONTACT_ERROR:
    case DELETE_CONTACT_SUCCESS:
    case DELETE_CONTACT_ERROR:
      return false;

    default:
      return state;
  }
};

export default loaderReducer;