import { addContact, deleteContact, fetchContacts } from "./operations"


const arrayThunks = [addContact, deleteContact, fetchContacts]
export const arrayTypes = (type) => {
  arrayThunks.map(thunk => thunk[type])
}