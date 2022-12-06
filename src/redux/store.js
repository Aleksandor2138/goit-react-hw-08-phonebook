import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlise';
import { filtersReducer } from './contacts/filterSlise';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
