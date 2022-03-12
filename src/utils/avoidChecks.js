import { move } from "../features/Board/BoardSlice"
import { setTestBoard } from "../features/TestBoard/TestBoard"
import { store } from "../store"
import findAllPieces from "./findAllPieces"
import findCheck from "./findCheck"

const avoidChecks = (current_selection , init) => {
    const {current_piece , current_row , current_box} = current_selection
    const {piece , row , box} = init ? init : store.getState().board.selection
    const board = store.getState().board.board
    const d = board.map((a , index) => {
        if (index === current_row) {
            return a.map((b , index) => {
                if (index === current_box) {
                    return piece
                }
                if (index === box)  {
                    return ''
                }
                return b
            })
        } else if (index === row) {
            return a.map((b , index) => {
                if (index === box) {
                    return ''
                } 
                if (index === box)  {
                    return ''
                }
                return b
            })
        }
        else return a
    })
    findAllPieces(store.getState().check.side === 'A' ? 'B' : 'A' , d)
    const checks = store.getState().testcheck
    const avoided = checks.side === null && checks.moves.length === 0
    console.log(piece , row , box , d)
    console.log(checks)
    if (init) {
        return avoided
    }
    avoided ? store.dispatch(move({...current_selection})) : alert(`${checks.side} is still on Check`)
    console.log(avoided)
}

export default avoidChecks