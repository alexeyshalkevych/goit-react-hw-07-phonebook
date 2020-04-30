import { connect } from 'react-redux';
import Phonebook from '../Phonebook/Phonebook';
import { getContacts } from '../../redux/contacts/contactsSelectors';
import getError from '../../redux/error/errorSelectors';
import { FETCH_CONTACTS } from '../../Constants/actionNames';

const mapStateToProps = state => ({
  contacts: getContacts(state),
  error: getError(state),
});

const mapDispatchToProps = dispatch => ({
  getAllContacts: () => dispatch({ type: FETCH_CONTACTS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
