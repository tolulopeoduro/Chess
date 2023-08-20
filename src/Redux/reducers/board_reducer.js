import { createSlice } from "@reduxjs/toolkit";
import {new_board} from "../../utils"



const board = createSlice({
	name: "board",
	initialState : new_board(),
	reducers : {
		update_board : (state, action) => {
			return action.payload;
		}
	}
})

export default board.reducer;

export const {update_board} = board.actions;