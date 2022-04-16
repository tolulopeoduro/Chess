import { move } from "../features/Board/BoardSlice"
import { setTestBoard } from "../features/TestBoard/TestBoard"
import { store } from "../store"
import checkMoves from "../utils/checkMoves"
import movePiece from "../utils/Move"
import animate_move from "../utils/move_animation"
import setMove from "../utils/setTestBoard"
import minimax from './minimax/minimax'

const computer = (side ) => {
    
    let best_move = null
    let best_move_score = null
    let all_moves = []

    const B = store.getState().board.board
    for(let i = 0 ; i < B?.length ; i++) {
        for (let j = 0 ; j < B[i].length; j++) {
            if (B[i][j].split('_')[1] === 'A') {
                const moves = checkMoves(B[i][j] , i , j , B)
                for (let k = 0; k < moves.length ; k++) {
                    const {row , box} = moves[k]
                    const selection = {piece : B[i][j] , row : i , box : j }
                    const data = {current_piece : B[row][box] , current_row : row , current_box : box}
                    all_moves.push({selection , data})
                    const current_score = minimax(setMove(selection , data ) , side)
                    if (!best_move_score) {
                        best_move_score = current_score
                        best_move = {selection , data}
                    }
                    if (current_score > best_move_score ) {
                        best_move_score = current_score
                        best_move = {selection , data}
                    }
                }
            }
        }
    }
        const {data , selection} = best_move
        movePiece(data , null , null , selection)

}

export default computer