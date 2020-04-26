import db from '../firebase_config';

/**
 * check if exists item in firebase database
 */
const checkedItemInDataBase = (path, childName, itemName) =>
  db
    .ref(path)
    .orderByChild(childName)
    .equalTo(itemName.name)
    .once('value', snapshot => snapshot.exists());

const checkedContactInDataBase = async contact => {
  try {
    const data = await checkedItemInDataBase('contacts', 'name', contact);

    return await data.val();
  } catch (error) {
    throw new Error();
  }
};

export default checkedContactInDataBase;
