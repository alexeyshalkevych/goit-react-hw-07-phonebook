import axios from 'axios';

axios.defaults.baseURL = 'https://redux-async-phonebook.firebaseio.com';

export const getContactsFromDataBase = () => axios.get('/contacts.json');

export const addContactToDataBase = contact =>
  axios.post('/contacts.json', contact);

export const deleteContactFromDataBase = id =>
  axios.delete(`/contacts/${id}.json`);
