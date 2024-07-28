import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { toast } from 'react-toastify';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleDeleteContact = (state, action) => {
  state.isLoading = false;
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
};

const handleAddContact = (state, action) => {
  state.isLoading = false;
  const { name } = action.payload;
  const normalizeName = name.toLowerCase();
  if (state.items.find(({ name }) => name.toLowerCase() === normalizeName)) {
    toast.error(`"${name}" is already in contacts`, {
      position: 'top-center',
      autoClose: 3000,
      theme: 'colored',
    });
  } else {
    state.items.push(action.payload);
  }
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  // reducers: {
  //   addContact: {
  //     reducer: (state, action) => {
  //       const { name } = action.payload;
  //       const normalizeName = name.toLowerCase();

  //       if (state.find(({ name }) => name.toLowerCase() === normalizeName)) {
  //         toast.error(`"${name}" is already in contacts`, {
  //           position: 'top-center',
  //           autoClose: 3000,
  //           theme: 'colored',
  //         });
  //       } else {
  //         state.push(action.payload);
  //       }
  //     },

  //     prepare: data => {
  //       const id = nanoid();
  //       return { payload: { id, ...data } };
  //     },
  //   },

  //   deleteContact: {
  //     reducer: (state, action) => {
  //       return state.filter(contact => contact.id !== action.payload.id);
  //     },
  //     prepare: id => ({ payload: { id } }),
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(addContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

// export const { addContact } = contactsSlice.actions;
