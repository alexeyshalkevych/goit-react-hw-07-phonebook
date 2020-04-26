import { createSelector } from 'reselect';
import getFilter from '../filter/filterSelectors';

export const getContacts = state => state.contacts;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
