//https://667fa134f2cb59c38dc956a0.mockapi.io/contacts/

// {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// }

// Операції
// Використовуй функцію createAsyncThunk для оголошення асинхронних генераторів екшенів та виконання HTTP-запитів. Обробку екшенів та зміну даних у стані Redux зроби за допомогою createSlice.

// Оголоси наступні операції:

// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchAll".
// addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
// deleteContact - видалення контакту (метод DELETE). Базовий тип екшену "contacts/deleteContact".

import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';


export const store = configureStore({reducer});
