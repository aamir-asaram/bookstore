import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appID = '2l9QUz9ek21lUrhry1Y6';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await axios.get(`${baseURL}/${appID}/books`);
    return response.data;
  },
);

export const addBookAsync = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(`${baseURL}/${appID}/books`, {
    item_id: book.item_id,
    title: book.title,
    author: book.author,
    category: book.category,
  });
  return { book, response };
});

export const deleteBookAsync = createAsyncThunk('books/deleteBook', async (book) => {
  const response = await axios.delete(`${baseURL}/${appID}/books/${book.item_id}`);
  return { book, response };
});

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    value: // Initial state:
    [],
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
    builder
      .addCase(addBookAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value.push(action.payload.book);
      })
      .addCase(addBookAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(deleteBookAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBookAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value = state.value.filter((book) => book.item_id !== action.payload.book.item_id);
      })
      .addCase(deleteBookAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
