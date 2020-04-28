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

export {
  findContact,
  convertDataFromDataBase,
  convertItemAfterAddingToDataBase,
};
