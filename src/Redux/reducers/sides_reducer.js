import { createSlice } from "@reduxjs/toolkit";



const sides = createSlice({
	name: "selected_piece",
	initialState : {
		a : {
			side: "a",
		},
		b : {
			side: "b"
		}
	},
	reducers : {
		set_sides:(state, action) => {
			return action.payload
		}
	}
})

export default sides.reducer;

export const {set_sides} = sides.actions;