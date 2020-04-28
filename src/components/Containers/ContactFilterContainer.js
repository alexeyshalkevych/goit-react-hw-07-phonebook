import { connect } from 'react-redux';
import ContactFilter from '../ContactFilter/ContactFilter';
import changeFilter from '../../redux/filter/filterActions';
import getFilter from '../../redux/filter/filterSelectors';

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = {
  changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
