import { connect } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import { ADD_CONTACT } from '../../redux/actionTypes';

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch({ type: ADD_CONTACT, contact }),
});

export default connect(null, mapDispatchToProps)(ContactForm);
