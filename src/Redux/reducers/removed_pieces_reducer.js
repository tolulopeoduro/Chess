import { createSlice } from "@reduxjs/toolkit";



const removed_pieces = createSlice({
	name: "removed_pieces",
	initialState : {a : {}, b: {}},
	reducers: {
		update_removed_pieces : (state, action) => {
			return action.payload;
		}
	}
})

export default removed_pieces.reducer;

export const {update_removed_pieces} = removed_pieces.actions;