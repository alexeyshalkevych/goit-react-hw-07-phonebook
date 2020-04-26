import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contactsActions';

import {
  getContactsFromDataBase,
  addContactToDataBase,
  deleteContactFromDataBase,
} from '../../services/contactsApi';

import {
  convertDataFromDataBase,
  convertItemBeforeAddToDataBase,
} from '../../utils/helpers';
import checkedContactInDataBase from '../../utils/firebaseHelpers';

/**
 * GET CONTACTS
 */
export const getAllContacts = () => async dispatch => {
  dispatch(getContactsRequest());

  try {
    const data = await getContactsFromDataBase();

    dispatch(getContactsSuccess(convertDataFromDataBase(data)));
  } catch (error) {
    dispatch(getContactsError({ error }));
  }
};

/**
 * ADD CONTACT
 */
export const addContact = contact => async dispatch => {
  dispatch(addContactRequest());

  try {
    const isContact = await checkedContactInDataBase(contact);

    if (isContact) {
      dispatch(addContactSuccess(contact));
      return;
    }

    const data = await addContactToDataBase(contact);

    dispatch(addContactSuccess(convertItemBeforeAddToDataBase(data)));
  } catch (error) {
    dispatch(addContactError({ error }));
  }
};

/**
 * DELETE CONTACT
 */
export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await deleteContactFromDataBase(id);

    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError({ error }));
  }
};
