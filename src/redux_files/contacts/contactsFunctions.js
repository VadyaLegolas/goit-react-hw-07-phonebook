import { toast } from 'react-toastify';

export const handlePending = state => {
  state.isLoading = true;
};

export const handleDeleteContact = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(contact => contact.id !== payload.id);
};

export const handleAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
};
export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

export const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};
