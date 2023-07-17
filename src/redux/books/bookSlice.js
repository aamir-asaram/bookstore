import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2l9QUz9ek21lUrhry1Y6/books');
    return response.data;
  },
);

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
    loading: false,
    error: null,
  },
  reducers: {
    addBook: (state, action) => { state.value.push(action.payload); },
    deleteBook: (state, action) => {
      state.value = state.value.filter((book) => book.item_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      const data = Object.keys(action.payload).map((item) => {
        const book = {};
        book.author = action.payload[item][0].author;
        book.category = action.payload[item][0].category;
        book.title = action.payload[item][0].title;
        book.item_id = item;
        return book;
      });
      state.value = data;
    })
    .addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
