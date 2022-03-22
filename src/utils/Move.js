import { addRemovedPiece, move } from "../features/Board/BoardSlice"
import { store } from "../store"
import setTestBoard from "./setTestBoard"

const movePiece = (data) => {

    const {board} = store.getState().board
    const selection = store.getState().board.selection
    const {piece , row , box} = store.getState().board.selection
    const {current_piece , current_row , current_box} = data

    if (current_piece !== '') {
        const a = {...store.getState().board.removed_pieces};
        const p = current_piece.split('_')[1] === "A" ? "B" : "A"
        const b = [...a[p]]
        b.push(current_piece)
        a[p] = b
        store.dispatch(addRemovedPiece(a))
    }

    store.dispatch(move(setTestBoard(selection , data)))

}

export default movePiece