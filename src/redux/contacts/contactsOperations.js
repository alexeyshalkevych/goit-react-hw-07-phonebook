import { toast } from 'react-toastify';
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
} from '../../api/contactsApi';

import {
  convertDataFromDataBase,
  convertItemAfterAddingToDataBase,
} from '../../utils/helpers';
import checkedContactInDataBase from '../../utils/firebaseHelpers';

export const getAllContacts = () => async dispatch => {
  dispatch(getContactsRequest());

  try {
    const { data } = await getContactsFromDataBase();

    dispatch(getContactsSuccess(convertDataFromDataBase(data)));
  } catch (error) {
    dispatch(getContactsError({ error }));
  }
};

export const addContact = contact => async dispatch => {
  dispatch(addContactRequest());

  try {
    const isContact = await checkedContactInDataBase(contact);

    if (isContact) {
      toast.error(`${contact.name} is already in contacts.`);
      return;
    }

    const data = await addContactToDataBase(contact);

    dispatch(addContactSuccess(convertItemAfterAddingToDataBase(data)));
  } catch (error) {
    dispatch(addContactError({ error }));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await deleteContactFromDataBase(id);

    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError({ error }));
  }
};
