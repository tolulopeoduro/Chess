import { createSlice } from "@reduxjs/toolkit";



const selected_piece = createSlice({
	name: "selected_piece",
	initialState : null,
	reducers : {
		update_selected_piece : (state, action) => {
			return action.payload;
		}
	}
})

export default selected_piece.reducer;

export const {update_selected_piece} = selected_piece.actions;