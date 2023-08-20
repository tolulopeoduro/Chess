import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import board_reducer from "./reducers/board_reducer";

const reducers = combineReducers({
	board : board_reducer
})

// const persistedReducer = persistReducer(persistConfig, reducers) 

export const store =  configureStore({
	reducer : reducers,
	devTools: process.env.NODE_ENV !== 'production'
})

// export const persistor = persistStore(store)
