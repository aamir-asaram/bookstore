import { createSlice } from '@reduxjs/toolkit';


export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    value: [],
  },
  reducers: {
    addBook: (state, action) => {
      return { ...state, value: state.value.push(action.payload) };
    },
    deleteBook: (state, action) => {
      return { ...state, value: state.value.filter((book) => book.id !== action.payload) }
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
