import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import board_reducer from "./reducers/board_reducer";
import available_moves_reducer from "./reducers/available_moves_reducer";
import selected_piece from "./reducers/selected_piece";
import turn_reducer from "./reducers/turn_reducer";
import sides_reducer from "./reducers/sides_reducer";
import removed_pieces_reducer from "./reducers/removed_pieces_reducer";

const reducers = combineReducers({
	board : board_reducer,
	available_moves: available_moves_reducer,
	selected_piece: selected_piece,
	turn: turn_reducer,
	sides: sides_reducer,
	removed_pieces: removed_pieces_reducer
})

// const persistedReducer = persistReducer(persistConfig, reducers) 

export const store =  configureStore({
	reducer : reducers,
	devTools: process.env.NODE_ENV !== 'production'
})

// export const persistor = persistStore(store)
