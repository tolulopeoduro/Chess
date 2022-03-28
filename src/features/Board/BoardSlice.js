import { createSlice } from '@reduxjs/toolkit'

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
    },
    pawnMenu : null,
    gameState : {
      isKingMoved : {A : false , B : false},
      isRookOnemoved : {A : false , B : false},
      isRookTwomoved : {A : false , B : false}
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
      state.selection = {side : 'A'}
    },
    move : (state , action) => {
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
    },
    setPawnMenu : (state , action) => {
      state.pawnMenu = action.payload
    },
    setGameState : (state , action) => {
      state.gameState = action.payload
    }
  },
})

export const { 
  select , deselect , move , setAvailableMoves ,clearAvailableMoves , addRemovedPiece , setPawnMenu , setGameState
  } = BoardSlice.actions

export default BoardSlice.reducer