import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    side : null,
    moves : []
}

const testCheck = createSlice({
    name : 'testCheck',
    initialState : initialState,
    reducers : {
        addTestCheck : (state , action) => {
            const p = [...state.moves]
            p.push(action.payload)
            return {
                ...state,
                moves : p
            }
        },
        setTestCheckSide : (state , action) => {
            return {
                ...state,
                side : action.payload
            }
        },
        clearTestCheck : (state , action) => {
            return initialState
        }
    }
    
})

export const {
    addTestCheck , setTestCheckSide , clearTestCheck
} = testCheck.actions

export default testCheck.reducer