import { connect } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/contactsOperations';
import Phonebook from '../Phonebook/Phonebook';
import { getContacts } from '../../redux/contacts/contactsSelectors';

const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = {
  getAllContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
