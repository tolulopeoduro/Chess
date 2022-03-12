import { clearAvailableMoves } from "../features/Board/BoardSlice"
import { clearCheck, setCheckSide } from "../features/Board/CheckSlice"
import { clearTestCheck } from "../features/TestBoard/TestCheck"
import { store } from "../store"
import avoidChecks from "./avoidChecks"
import checkMoves from "./checkMoves"

const findAllMoves = (side) => {
    const B = store.getState().board.board
    const player = store.getState().board.turn
    const p = []
    for(let i = 0 ; i < B.length ; i++) {
        for (let j = 0 ; j < B[i].length; j++) {
            if (B[i][j].split('_')[1] === side) {
                checkMoves(B[i][j] , i , j)
                const m = store.getState().board.available_moves
                for (let k = 0; k < m.length ; k++) {

                    const {box : current_box , row : current_row , current_piece} = {...m[k] , current_piece : B[i][j]}
                    const selection = {piece : B[i][j] , i , j}
                    p.push(avoidChecks({current_piece , current_row , current_box} , selection))
                }
            }
        }
    }
    const checked = !p.every(a => a === true)
    console.log(checked)
    checked && alert('Checkmate')
    store.dispatch(clearAvailableMoves())
}


export default findAllMoves