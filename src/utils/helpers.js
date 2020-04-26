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
  Object.keys(data).map(key => ({ id: key, ...data[key] }));

/**
 * convert data after adding to firebase database
 */
const convertItemAfterAddingToDataBase = ({ config, data }) => ({
  id: data.name,
  ...JSON.parse(config.data),
});

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
  hasStateContact,
  convertDataFromDataBase,
  convertItemAfterAddingToDataBase,
};
