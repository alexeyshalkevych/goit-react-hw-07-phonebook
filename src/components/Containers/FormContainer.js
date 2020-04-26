import { connect } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import { addContact } from '../../redux/contacts/contactsOperations';

const mapDispatchToProps = {
  addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
