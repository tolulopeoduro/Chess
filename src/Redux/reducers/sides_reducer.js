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
		set_side:(state, action) => {
			const {side, data} = action.payload;
			return {
				...state, 
				[side] : data
			}
		}
	}
})

export default sides.reducer;

export const {set_side} = sides.actions;