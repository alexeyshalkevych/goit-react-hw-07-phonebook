import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import Loader from '../Loader/Loader';
import Contact from '../Containers/ContactContainer';
import { List } from './ContactList.styled';
import Slide from '../../transition/slide.transition';

const ContactList = ({ contacts, loader }) => {
  return (
    <>
      <TransitionGroup component={List}>
        {contacts.map(item => (
          <Slide key={item.id}>
            <Contact item={item} />
          </Slide>
        ))}
      </TransitionGroup>

      {loader && <Loader />}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loader: PropTypes.bool.isRequired,
};

export default ContactList;
