// import { v4 as uuidv4 } from 'uuid';
import {
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_ERROR,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_ERROR,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_ERROR,
} from '../actionTypes';

/**
 * GET
 */
export const getContactsRequest = () => ({ type: FETCH_CONTACTS_REQUEST });
export const getContactsSuccess = contacts => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: contacts,
});
export const getContactsError = error => ({
  type: FETCH_CONTACTS_ERROR,
  payload: error,
});

/**
 * POST
 */
export const addContactRequest = () => ({ type: ADD_CONTACT_REQUEST });
export const addContactSuccess = contact => ({
  type: ADD_CONTACT_SUCCESS,
  payload: contact,
});
export const addContactError = error => ({
  type: ADD_CONTACT_ERROR,
  payload: error,
});

/**
 * DELETE
 */
export const deleteContactRequest = () => ({ type: DELETE_CONTACT_REQUEST });
export const deleteContactSuccess = id => ({
  type: DELETE_CONTACT_SUCCESS,
  payload: id,
});
export const deleteContactError = error => ({
  type: DELETE_CONTACT_ERROR,
  payload: error,
});
