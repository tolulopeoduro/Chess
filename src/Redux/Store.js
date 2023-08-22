import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import board_reducer from "./reducers/board_reducer";
import available_moves_reducer from "./reducers/available_moves_reducer";
import selected_piece from "./reducers/selected_piece";

const reducers = combineReducers({
	board : board_reducer,
	available_moves: available_moves_reducer,
	selected_piece: selected_piece
})

// const persistedReducer = persistReducer(persistConfig, reducers) 

export const store =  configureStore({
	reducer : reducers,
	devTools: process.env.NODE_ENV !== 'production'
})

// export const persistor = persistStore(store)
