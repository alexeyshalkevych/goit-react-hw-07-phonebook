import { connect } from 'react-redux';
import ContactList from '../ContactList/ContactList';
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors';
import getLoader from '../../redux/loader/loaderSelectors';

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
  loader: getLoader(state),
});

export default connect(mapStateToProps)(ContactList);
