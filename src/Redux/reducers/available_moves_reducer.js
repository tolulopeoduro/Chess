import { createSlice } from "@reduxjs/toolkit";



const available_moves = createSlice({
	name: "available_moves",
	initialState : [],
	reducers : {
		update_available_moves : (state, action) => {
			return action.payload;
		}
	}
})

export default available_moves.reducer;

export const {update_available_moves} = available_moves.actions;