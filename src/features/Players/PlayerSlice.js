import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    'A' : {
        name : 'TYTANN',
        wins : 0,
        isComputer : false
    },
    'B' : {
        name : 'DADDY ACE',
        wins : 0,
        isComputer : false
    }
}

export const PlayerSlice = createSlice({
    name : 'players',
    initialState,
    reducers : {
        setPlayers : (state , action) => {
            state.A = {
                ...state.A,
                ...action.payload[0]
            }
            state.B = {
                ...state.B,
								...action.payload[1]
            }
        },
        load : (state , action) => {
            return action.payload
        }
    },
})

export const {
    setPlayers , load
} = PlayerSlice.actions

export default PlayerSlice.reducer