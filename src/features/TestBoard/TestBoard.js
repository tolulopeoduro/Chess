import { createSlice } from "@reduxjs/toolkit";

const TestBoardSlice = createSlice({
    name : 'testBoard',
    initialState : null,
    reducers : {
        setTestBoard : (state , action) => {
            const b = [...action.payload.board]
            b[0][0] = 'hwllo'
            return 
        }
    }
})

export const {
    setTestBoard
} = TestBoardSlice.actions

export default TestBoardSlice.reducer