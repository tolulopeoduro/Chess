import { createSlice } from '@reduxjs/toolkit'

const ar0and1 = [
  ['rook_A' , 'knight_A' , 'bishop_A' , 'king_A' , 'queen_A' , 'bishop_A' , 'knight_A' , 'rook_A'],
  Array(8).fill('pawn_A')
]
const twoToFive =  Array(4).fill(Array(8).fill(''))
const ar6to7 = [
  Array(8).fill('pawn_B'),
  ['rook_B' , 'knight_B' , 'bishop_B' , 'queen_B' , 'king_B' , 'bishop_B' , 'knight_B' , 'rook_B']
]


const initialState = {
    selection : null,
    board : [...ar0and1 , ...twoToFive , ...ar6to7 ],
    A_turn : false,
    available_moves : null
}

export const BoardSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    select: (state , action) => {
        state.selection = action.payload
    },
    deselect: (state) => {
      state.selection = null
    },
    move : (state , action) => {
      const d = [...state.board]
      const {piece , row , box} = state.selection 
      const {current_piece , current_row , current_box} = action.payload
      d[current_row][current_box] = piece
      d[row][box] = ''
      state.selection = null
    }
  },
})

export const { select , deselect , move } = BoardSlice.actions

export default BoardSlice.reducer