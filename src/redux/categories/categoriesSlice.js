import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    value: [],
    state: 'Under construction',
  },
  reducers: {
    checkState: (state) => {
      state.state = 'Under construction'
    },
  },
})

export const { checkState } = categoriesSlice.actions

export default categoriesSlice.reducer
