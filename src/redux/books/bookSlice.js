import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    value: // Initial state:
    [
      {
        item_id: 'item1',
        title: 'The Great Gatsby',
        author: 'John Smith',
        category: 'Fiction',
      },
      {
        item_id: 'item2',
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        category: 'Fiction',
      },
      {
        item_id: 'item3',
        title: 'The Selfish Gene',
        author: 'Richard Dawkins',
        category: 'Nonfiction',
      },
    ],
  },
  reducers: {
    addBook: (state, action) => { state.value.push(action.payload); },
    deleteBook: (state, action) => {
      state.value = state.value.filter((book) => book.item_id !== action.payload);
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
