import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { addContact, deleteContact, fetchContacts } from './operations';
import {
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledDelete,
  handleFulfilledGet,
  handlePending,
  handleRejected,
} from './contactsFunctions';
import { arrayThunks } from './arrayThunks';

const  STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addMatcher(isAnyOf(...arrayThunks(STATUS.PENDING)), handlePending)
      .addMatcher(isAnyOf(...arrayThunks(STATUS.REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...arrayThunks(STATUS.FULFILLED)), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
