import { createSlice } from '@reduxjs/toolkit'

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    darkMode: false
  },
  reducers: {
    toggleDarkMode: (state, action) => {
      state.darkMode = action.payload
    }
  }
})

export const { toggleDarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer

