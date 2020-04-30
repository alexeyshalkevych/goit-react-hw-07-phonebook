import { connect } from 'react-redux';
import Contact from '../Contact/Contact';
import { DELETE_CONTACT } from '../../Constants/actionNames';

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch({ type: DELETE_CONTACT, id }),
});

export default connect(null, mapDispatchToProps)(Contact);
