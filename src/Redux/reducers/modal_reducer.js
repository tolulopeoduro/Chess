import { createSlice } from "@reduxjs/toolkit";



const modal = createSlice({
	name: "modal",
	initialState : null,
	reducers : {
		update_modal : (state, action) => {
			return action.payload;
		}
	}
})

export default modal.reducer;

export const {update_modal} = modal.actions;