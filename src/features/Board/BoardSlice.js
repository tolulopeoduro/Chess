import { createSlice } from '@reduxjs/toolkit'

// const ar0and1 = [
//   Array(8).fill(''),
//   Array(8).fill('pawn_B')
// ]
// const twoToFive =  Array(4).fill(Array(8).fill(''))
// const ar6to7 = [
//   Array(8).fill('pawn_A'),
//   Array(8).fill(''),
// ]
const ar0and1 = [
  ['rook_A' , 'knight_A' , 'bishop_A' , 'queen_A' , 'king_A' , 'bishop_A' , 'knight_A' , 'rook_A'],
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
    turn : 'A',
    available_moves : null,
    removed_pieces : {
      "A" : [],
      "B" : []
    }
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
      // const d = [...state.board]
      // const {piece , row , box} = state.selection 
      // const {current_piece , current_row , current_box} = action.payload
      // if (current_piece !== "") {
        // const a = {...state.removed_pieces}
        // const p = current_piece.split('_')[1] === "A" ? "B" : "A"
        // a[p].push(current_piece)
      // }
      // d[current_row][current_box] = piece
      // d[row][box] = ''
      state.board = action.payload
      state.selection = null
      state.turn = state.turn === 'A' ? 'B' : 'A'
      state.available_moves = null
    },
    setAvailableMoves : (state , action) => {
      state.available_moves = action.payload
    },
    clearAvailableMoves : (state) => {
      state.available_moves = null
    },
    addRemovedPiece : (state , action) => {
      state.removed_pieces = action.payload
    }
  },
})

export const { 
  select , deselect , move , setAvailableMoves ,clearAvailableMoves , addRemovedPiece
  } = BoardSlice.actions

export default BoardSlice.reducer