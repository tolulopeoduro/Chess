import { store } from "../store"

const state = store.getState()

const checkMoves = (data , row , box) => {
    data === 'pawn_B' && checkPawnMoves(data , row , box)
}

const checkPawnMoves = (data , row , box) => {
    setTimeout(() => {
        const available_moves = []
        const b = state.board.board
        row === 6 && available_moves.push({row : row-2 , box : box })
        if(b[row-1][box] === '' || b[row-1][box].split('_')[1] !== 'A' ) {
            available_moves.push({row : row-1 , box : box })
        }
        if(b[row-1][box-1].split('_')[1] === 'A') {
            available_moves.push({row : row-1 , box : box-1 })
        }
        if(b[row-1][box+1].split('_')[1] === 'A') {
            available_moves.push({row : row-1 , box : box-1 })
        }

        console.log(available_moves)
    } , 0)
}

export default checkMoves