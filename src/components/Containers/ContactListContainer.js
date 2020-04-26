import { connect } from 'react-redux';
import ContactList from '../ContactList/ContactList';
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors';

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
});

export default connect(mapStateToProps)(ContactList);
