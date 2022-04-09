import { configureStore } from '@reduxjs/toolkit'
import BoardReducer from './features/Board/BoardSlice'
import CheckReducer from './features/Board/CheckSlice'
import PlayerReducer from './features/Players/PlayerSlice'
import TestBoard from './features/TestBoard/TestBoard'
import TestCheck from './features/TestBoard/TestCheck'

export const store = configureStore({
  reducer: {
      board : BoardReducer,
      check : CheckReducer,
      testBoard : TestBoard,
      testcheck : TestCheck,
      players : PlayerReducer
  },
})