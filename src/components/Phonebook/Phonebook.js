import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactForm from '../Containers/FormContainer';
import ContactList from '../Containers/ContactListContainer';
import ContactFilter from '../Containers/ContactFilterContainer';
import {
  PhonebookContainer,
  PhonebookTitle,
  PhonebookSubTitle,
  Notification,
} from './Phonebook.styled';
import SlideTitle from '../../transition/popText.transition';
import 'react-toastify/dist/ReactToastify.css';

const Phonebook = ({ getAllContacts }) => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setShowTitle(true);

    getAllContacts();
  }, [getAllContacts]);

  return (
    <PhonebookContainer>
      <SlideTitle in={showTitle}>
        <PhonebookTitle>Phonebook</PhonebookTitle>
      </SlideTitle>
      <ContactForm />
      <PhonebookSubTitle>Contacts</PhonebookSubTitle>
      <ContactFilter />
      <ContactList />
      <Notification autoClose={1500} />
    </PhonebookContainer>
  );
};

Phonebook.propTypes = {
  getAllContacts: PropTypes.func.isRequired,
};

export default Phonebook;
