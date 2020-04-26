import { call, put, all, takeLatest } from 'redux-saga/effects';
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

import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from '../actionTypes';
import {
  convertDataFromDataBase,
  convertItemBeforeAddToDataBase,
} from '../../utils/helpers';
import checkedContactInDataBase from '../../utils/firebaseHelpers';

function* getContactsWorker() {
  yield put(getContactsRequest());

  try {
    const contacts = yield call(getContactsFromDataBase);
    yield put(getContactsSuccess(convertDataFromDataBase(contacts)));
  } catch (error) {
    yield put(getContactsError({ error }));
  }
}

function* addContactWorker({ contact }) {
  yield put(addContactRequest());

  try {
    const isContact = yield call(checkedContactInDataBase, contact);

    if (isContact) {
      yield put(addContactSuccess(contact));
      return;
    }

    const result = yield call(addContactToDataBase, contact);
    yield put(addContactSuccess(convertItemBeforeAddToDataBase(result)));
  } catch (error) {
    yield put(addContactError({ error }));
  }
}

function* deleteContactWorker({ id }) {
  yield put(deleteContactRequest());

  try {
    yield call(deleteContactFromDataBase, id);
    yield put(deleteContactSuccess(id));
  } catch (error) {
    yield put(deleteContactError({ error }));
  }
}

function* getContactsWatcher() {
  yield takeLatest(GET_CONTACTS, getContactsWorker);
}

function* addContactWatcher() {
  yield takeLatest(ADD_CONTACT, addContactWorker);
}

function* deleteContactWatcher() {
  yield takeLatest(DELETE_CONTACT, deleteContactWorker);
}

function* rootSaga() {
  yield all([
    getContactsWatcher(),
    addContactWatcher(),
    deleteContactWatcher(),
  ]);
}

export default rootSaga;
