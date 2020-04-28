import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactContainer,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './Contact.styled';

const Contact = ({ contact: { id, name, number }, deleteContact }) => (
  <ContactContainer>
    <ContactName>{name}</ContactName>
    <ContactNumber>{number}</ContactNumber>
    <DeleteButton type="button" onClick={() => deleteContact(id)}>
      &#10006;
    </DeleteButton>
  </ContactContainer>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
