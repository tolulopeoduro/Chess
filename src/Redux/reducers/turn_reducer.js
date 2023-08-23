import { createSlice } from "@reduxjs/toolkit";



const turn = createSlice({
	name: "selected_piece",
	initialState : "a",
	reducers : {
		change_turn : (state, action) => {
			return action.payload;
		}
	}
})

export default turn.reducer;

export const {change_turn} = turn.actions;