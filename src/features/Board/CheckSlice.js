import {createSlice} from '@reduxjs/toolkit'

const initialState = []

export const CheckSlice = createSlice({
    name : 'check',
    initialState,
    reducers : {
        addCheck : (state , action) => {
            console.log(action.payload)
            return state, action.payload
        }
    }
})

export const {addCheck} = CheckSlice.actions

export default CheckSlice.reducer