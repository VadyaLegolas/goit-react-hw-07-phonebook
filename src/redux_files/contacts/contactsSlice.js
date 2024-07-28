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

const arrayThunks = [addContact, deleteContact, fetchContacts]
const arrayTypes = (type) => {
  arrayThunks.map(thunk => thunk[type])
}


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addMatcher(
        isAnyOf(
          ...arrayThunks('pending')
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          ...arrayThunks('rejected'),
        ),
        handleRejected
      ).addMatcher(
        isAnyOf(
          ...arrayThunks('fulfilled'),
        ),
        handleFulfilled
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
