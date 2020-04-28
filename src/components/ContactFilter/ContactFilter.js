import React from 'react';
import PropTypes from 'prop-types';
import { Label, InputField } from './ContactFilter.styled';

const ContactFilter = ({ filter, changeFilter }) => (
  <Label>
    Find contacts by name
    <InputField
      type="text"
      value={filter}
      onChange={e => changeFilter(e.target.value)}
    />
  </Label>
);

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default ContactFilter;
