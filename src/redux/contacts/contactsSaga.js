import { call, put, all, takeLatest, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
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

import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from '../actionTypes';
import { convertDataFromDataBase } from '../../utils/helpers';
import checkedContactInDataBase from '../../utils/firebaseHelpers';
import db from '../../firebase_config';

const createEventChannel = () => {
  const listener = eventChannel(emit => {
    db.ref('contacts').on('value', data => {
      if (data.val() !== null) {
        emit(data.val());
      }
    });

    return () => db.ref('contacts').off(listener);
  });

  return listener;
};

const addContactToDataBase = contact => db.ref('contacts/').push(contact);

const deleteContactFromDataBase = id => db.ref('contacts/').child(id).remove();

function* getContactsWorker() {
  yield put(getContactsRequest());

  try {
    const channel = yield call(createEventChannel);
    const items = yield take(channel);

    yield put(getContactsSuccess(convertDataFromDataBase(items)));
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

    const { key: id } = yield call(addContactToDataBase, contact);

    yield put(addContactSuccess({ id, ...contact }));
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
