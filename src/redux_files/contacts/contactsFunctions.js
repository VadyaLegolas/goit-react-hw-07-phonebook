import { toast } from "react-toastify";


export const handlePending = state => {
  state.isLoading = true;
};

export const handleDeleteContact = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(contact => contact.id !== payload.id);
};

export const handleAddContact = (state, { payload }) => {
  state.isLoading = false;
  const { name } = payload;
  const normalizeName = name.toLowerCase();

  if (state.items.find(({ name }) => name.toLowerCase() === normalizeName)) {
    console.log("Already in contacts");
    toast.error(`"${name}" is already in contacts`, {
      position: 'top-center',
      autoClose: 3000,
      theme: 'colored',
    });
  } else {
    state.items.push(payload);
  }
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
