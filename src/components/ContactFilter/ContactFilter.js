import React from 'react';
import PropTypes from 'prop-types';
import { Label, InputField } from './ContactFilter.styled';
import PopFilter from '../../transition/pop.transition';

const ContactFilter = ({ contacts, filter, changeFilter }) => (
  <PopFilter in={contacts.length >= 2}>
    <Label>
      Find contacts by name
      <InputField
        type="text"
        value={filter}
        onChange={e => changeFilter(e.target.value)}
      />
    </Label>
  </PopFilter>
);

ContactFilter.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape([]).isRequired).isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default ContactFilter;
