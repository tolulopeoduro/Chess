import { move } from "../features/Board/BoardSlice"
import { setTestBoard } from "../features/TestBoard/TestBoard"
import { store } from "../store"
import findAllPieces from "./findAllPieces"
import findCheck from "./findCheck"
import movePiece from "./Move"
import setMove from "./setTestBoard"

const avoidChecks = (current_selection , init) => {
    const {current_piece , current_row , current_box} = current_selection
    const {piece , row , box} = init ? init : store.getState().board.selection
    const board = store.getState().board.board

    const d = setMove({piece , row , box} , current_selection)
    findAllPieces(store.getState().check.side === 'A' ? 'B' : 'A' , d)
    const checks = store.getState().testcheck
    const avoided = checks.side === null && checks.moves.length === 0
    if (init) return avoided
    console.log(avoided)
    avoided ? movePiece(current_selection) : alert(`${checks.side} is still on Check`)
}

export default avoidChecks