export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
export const getError = state => state.contacts.error;
export const getIsLoading = state => state.contacts.isLoading;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state).toLowerCase();
  
  if (!filter) {
    return contacts;
  }
  
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};
