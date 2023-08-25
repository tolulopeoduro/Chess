import { createSlice } from "@reduxjs/toolkit";

const initialState =  {a : {}, b: {}};

const removed_pieces = createSlice({
	name: "removed_pieces",
	initialState,
	reducers: {
		update_removed_pieces : (state, action) => {
			return action.payload;
		},
		return_removed_pieces : (state, action) => {
			return initialState
		}
	}
})

export default removed_pieces.reducer;

export const {update_removed_pieces, return_removed_pieces} = removed_pieces.actions;