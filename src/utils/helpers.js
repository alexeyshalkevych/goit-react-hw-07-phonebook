import { toast } from 'react-toastify';

/**
 * find data contact
 */
const findContact = (contacts, contact) =>
  contacts.find(item => item.name === contact.name);

/**
 * convert data from firebase database
 */
const convertDataFromDataBase = data =>
  Object.keys(data.data).map(key => ({ id: key, ...data.data[key] }));

/**
 * convert data before adding to firebase database
 */
const convertItemBeforeAddToDataBase = ({ config, data }) => ({
  id: data.name,
  ...JSON.parse(config.data),
});

/**
 * save to localStorage
 */
const saveToLocaleStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    throw new Error();
  }
};

/**
 * get data from localStorage
 */
const getFromLocaleStorage = key => {
  try {
    const items = localStorage.getItem(key);

    return items ? JSON.parse(items) : null;
  } catch (err) {
    throw new Error();
  }
};

/**
 * check for availability data in state
 */
const hasStateContact = (state, contact) => {
  const stateContact = findContact(state, contact);

  if (stateContact) {
    toast.error(`${contact.name} is already in contacts.`);
    return true;
  }

  return false;
};

export {
  findContact,
  saveToLocaleStorage,
  getFromLocaleStorage,
  hasStateContact,
  convertDataFromDataBase,
  convertItemBeforeAddToDataBase,
};
