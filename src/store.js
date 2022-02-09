import { configureStore } from '@reduxjs/toolkit'
import BoardReducer from './features/Board/BoardSlice'

export const store = configureStore({
  reducer: {
      board : BoardReducer
  },
})