import { setAvailableMoves , clearAvailableMoves } from "../features/Board/BoardSlice"
import { store } from "../store"

const state = store.getState()
const checkMoves = (data , row , box) => {
    !data && store.dispatch(setAvailableMoves(null))
    data === 'pawn_A' && checkPawnMovesA(data , row , box)
    data === 'pawn_B' && checkPawnMovesB(data , row , box)
    data.split('_')[0] === 'knight' && checkKnightMoves(data , row , box)
}

export const clearMoves = store.dispatch(clearAvailableMoves())

const checkPawnMovesB = (data , row , box) => {
    const available_moves = []
    const b = state.board.board
    row === 6 && available_moves.push({row : row-2 , box : box })
    if(b[row-1][box] === '') {
        available_moves.push({row : row-1 , box : box })
    }
    if(b[row-1][box-1]?.split('_')[1] === 'A') {
        available_moves.push({row : row-1 , box : box-1 })
    }
    if(b[row-1][box+1]?.split('_')[1] === 'A') {
        available_moves.push({row : row-1 , box : box+1 })
    }
    store.dispatch(setAvailableMoves(available_moves))
}

const checkPawnMovesA = (data , row , box) => {
    const available_moves = []
    const b = state.board.board
    row === 1 && available_moves.push({row : row+2 , box : box })
    if(b[row+1][box] === '') {
        available_moves.push({row : row+1 , box : box })
    }
    if(b[row+1][box-1]?.split('_')[1] === 'B') {
        available_moves.push({row : row+1 , box : box-1 })
    }
    if(b[row+1][box+1]?.split('_')[1] === 'B') {
        available_moves.push({row : row+1 , box : box+1 })
    }
    store.dispatch(setAvailableMoves(available_moves))
}

const checkKnightMoves = (data , row , box ) => {
    const type = data.split('_')[1]
    const available_moves = []
    const b = state.board.board
    const checkValidity = (r , x) => {
        if (r > 7 || x > 7 || r < 0 || x < 0) return
        if(b[r][x] === '' || b[r][x].split('_')[1] !== type) {
            available_moves.push({row : r , box : x })
        }
    }
    const p = [
        {row : row-2 , box : box-1} , {row : row-2 , box : box+1} , {row : row+2 , box : box-1} , {row : row+2 , box : box+1},
        {row : row-1 , box : box+2} , {row : row-1 , box : box-2} , {row : row+1 , box : box+2 , row : row+1 , box : box-2}
    ]
    for (let i = 0 ; i < p.length ; i++) {checkValidity(p[i].row , p[i].box)}
    store.dispatch(setAvailableMoves(available_moves))
}

export default checkMoves
