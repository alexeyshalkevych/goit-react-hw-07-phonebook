import { connect } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/contactsOperations';
import Phonebook from '../Phonebook/Phonebook';
import { getContacts } from '../../redux/contacts/contactsSelectors';
import getError from '../../redux/error/errorSelectors';

const mapStateToProps = state => ({
  contacts: getContacts(state),
  error: getError(state),
});

const mapDispatchToProps = {
  getAllContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
