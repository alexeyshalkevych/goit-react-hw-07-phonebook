import { connect } from 'react-redux';
import Phonebook from '../Phonebook/Phonebook';
import { getContacts } from '../../redux/contacts/contactsSelectors';
import getError from '../../redux/error/errorSelectors';
import { GET_CONTACTS } from '../../redux/actionTypes';

const mapStateToProps = state => ({
  contacts: getContacts(state),
  error: getError(state),
});

const mapDispatchToProps = dispatch => ({
  getAllContacts: () => dispatch({ type: GET_CONTACTS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
