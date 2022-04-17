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
                name : action.payload[0] !== '' ? action.payload[0] : 'PLAYER A' , isComputer : false
            }
            state.B = {
                ...state.B,
                name : action.payload[1] !== '' ? action.payload[1] : 'PLAYER B',
            }
        },
        setSinglePlayer : (state , action) => {
            state.A = {
                ...state.A,
                name : 'COMPUTER',
                isComputer : true
            }
            state.B = {
                ...state.B,
                name : action.payload[1] !== '' ? action.payload : 'PLAYER A' ,
            }
        },
        load : (state , action) => {
            return action.payload
        }
    },
})

export const {
    setPlayers , setSinglePlayer , load
} = PlayerSlice.actions

export default PlayerSlice.reducer