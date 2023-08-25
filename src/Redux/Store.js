import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import board_reducer from "./reducers/board_reducer";
import available_moves_reducer from "./reducers/available_moves_reducer";
import selected_piece from "./reducers/selected_piece";
import turn_reducer from "./reducers/turn_reducer";
import sides_reducer from "./reducers/sides_reducer";
import removed_pieces_reducer from "./reducers/removed_pieces_reducer";
import modal_reducer from "./reducers/modal_reducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const reducers = combineReducers({
	board : board_reducer,
	available_moves: available_moves_reducer,
	selected_piece: selected_piece,
	turn: turn_reducer,
	sides: sides_reducer,
	removed_pieces: removed_pieces_reducer,
	modal: modal_reducer
})

const persistConfig = {
	key : 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, reducers) 

export const store =  configureStore({
	reducer : persistedReducer,
	devTools: process.env.NODE_ENV !== 'production'
})

export const persistor = persistStore(store)
