import { configureStore } from '@reduxjs/toolkit'
import BoardReducer from './features/Board/BoardSlice'
import CheckReducer from './features/Board/CheckSlice'

export const store = configureStore({
  reducer: {
      board : BoardReducer,
      check : CheckReducer
  },
})