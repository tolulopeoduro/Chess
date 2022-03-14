import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    side : null,
    moves : [],
    checkmate : false
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
        },
        setCheckMate : (state , action) => {
            return {
                ...state,
                checkmate : action.payload
            }
        }
    }
})

export const {addCheck , setCheckSide , clearCheck , setCheckMate} = CheckSlice.actions

export default CheckSlice.reducer