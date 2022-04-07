import { createSlice } from '@reduxjs/toolkit'
import { init } from 'i18next'

const ar0and1 = [
  ['rook_A_1' , 'knight_A_1' , 'bishop_A_1' , 'queen_A' , 'king_A' , 'bishop_A_2' , 'knight_A_2' , 'rook_A_2'],
  ['pawn_A_1' , 'pawn_A_2' , 'pawn_A_3' , 'pawn_A_4' , 'pawn_A_5' , 'pawn_A_6' , 'pawn_A_7' , 'pawn_A_8'],
]
const twoToFive =  Array(4).fill(Array(8).fill(''))
const ar6to7 = [
  ['pawn_B_1' , 'pawn_B_2' , 'pawn_B_3' , 'pawn_B_4' , 'pawn_B_5' , 'pawn_B_6' , 'pawn_B_7' , 'pawn_B_8'],
  ['rook_B_1' , 'knight_B_1' , 'bishop_B_1' , 'queen_B' , 'king_B' , 'bishop_B_2' , 'knight_B_2' , 'rook_B_2']
]


const initialState = {
    selection : null,
    board : [...ar0and1 , ...twoToFive , ...ar6to7 ],
    moves : 0,
    move_in_view : 0,
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
    },
    prev_moves : [[...ar0and1 , ...twoToFive , ...ar6to7 ]],
    prev_removed_pieces : [{"A" : [] , "B" : []}],
    movements : [],
    in_game_menu : {
      restart : false,
      quit : false,
      main_menu : false
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
    restart : (state) => {
      return {...initialState}
    },
    move : (state , action) => {
      state.board = action.payload
      state.moves += 1
      state.prev_moves = [...state.prev_moves , action.payload]
      state.prev_removed_pieces = [...state.prev_removed_pieces , state.removed_pieces]
      state.selection = null
      state.turn = state.turn === 'A' ? 'B' : 'A'
      state.available_moves = null
      return state
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
    },
    setcurrentBoard : (state , action) => {
      const {move_no , board , removed_pieces} = action.payload
        state.selection = null
        state.board = board
        state.moves = move_no
        state.removed_pieces = removed_pieces
        state.available_moves = null
    },
    addMovement : (state , action) => {
        return {
          ...state,
          movements : [...state.movements , action.payload]
        }
    },
    changePiece : (state , action) => {
      const {piece , row , box} = action.payload
      state.board[row][box] = piece
    },
    toggle_menu : (state , action) => {
      state.in_game_menu =  action.payload
    }
  },
})

export const { 
  select , deselect , move , setAvailableMoves ,clearAvailableMoves , 
  addRemovedPiece , setPawnMenu , setGameState , setcurrentBoard , addMovement,
  changePiece , restart , toggle_menu
  } = BoardSlice.actions

export default BoardSlice.reducer