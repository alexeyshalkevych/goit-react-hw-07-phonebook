import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactForm from '../Containers/FormContainer';
import ContactList from '../Containers/ContactListContainer';
import ContactFilter from '../Containers/ContactFilterContainer';
import Error from '../Error/Error';
import {
  PhonebookContainer,
  PhonebookTitle,
  PhonebookSubTitle,
  Notification,
} from './Phonebook.styled';
import SlideTitle from '../../transition/popText.transition';
import PopFilter from '../../transition/pop.transition';
import 'react-toastify/dist/ReactToastify.css';

const Phonebook = ({ contacts, getAllContacts, error }) => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setShowTitle(true);

    getAllContacts();
  }, [getAllContacts]);

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <PhonebookContainer>
          <SlideTitle in={showTitle}>
            <PhonebookTitle>Phonebook</PhonebookTitle>
          </SlideTitle>
          <ContactForm />
          <PhonebookSubTitle>Contacts</PhonebookSubTitle>
          <PopFilter in={contacts.length >= 2}>
            <ContactFilter />
          </PopFilter>
          <ContactList />
          <Notification autoClose={1500} />
        </PhonebookContainer>
      )}
    </>
  );
};

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape([]).isRequired).isRequired,
  getAllContacts: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.object]),
};

Phonebook.defaultProps = {
  error: null,
};

export default Phonebook;
