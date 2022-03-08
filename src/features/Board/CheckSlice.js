import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    side : null,
    moves : []
}

export const CheckSlice = createSlice({
    name : 'check',
    initialState,
    reducers : {
        addCheck : (state , action) => {
            const p = [...state.moves]
            p.push(action.payload)
            return {
                ...state,
                moves : p
            }
        },
        setCheckSide : (state , action) => {
            return {
                ...state,
                side : action.payload
            }
        },
        clearCheck : (state , action) => {
            return initialState
        }
    }
})

export const {addCheck , setCheckSide , clearCheck} = CheckSlice.actions

export default CheckSlice.reducer