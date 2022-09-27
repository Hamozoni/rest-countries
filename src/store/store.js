import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';

import darkModeReducer from '../reducers/darkModeReducer'
export const store = configureStore({
  reducer: {
    darkModeReducer: darkModeReducer
  },
}, composeWithDevTools())