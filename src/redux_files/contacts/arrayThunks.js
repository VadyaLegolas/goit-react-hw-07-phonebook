import { addContact, deleteContact, fetchContacts } from "./operations"


const arrayThunks = [addContact, deleteContact, fetchContacts]
export const arrayThunksTypes = (type) => {
  arrayThunks.map(thunk => thunk[type])
}