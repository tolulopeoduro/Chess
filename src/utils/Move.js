import { addMovement, addRemovedPiece, move } from "../features/Board/BoardSlice"
import { store } from "../store"
import movement_alert from "./gamestateUtils"
import setTestBoard from "./setTestBoard"
import * as $ from 'jquery'
import animate_move from "./move_animation"

const movePiece = (data , castle , old , computer_selection) => {
    
    const {board} = store.getState().board
    const selection = computer_selection || store.getState().board.selection
    const {piece , row , box} = selection
    const {current_piece , current_row , current_box} = data
    const gameState = store.getState().board.gameState
    const {isKingMoved , isRookOnemoved , isRookTwomoved} = gameState

    if (piece.split('_')[0] === 'king') {
        movement_alert(piece.split('_')[1] , 'isKingMoved')
    }
    if (piece.split('_')[0] === 'rook' && ((row === 0 || row === 7) && box === 0)) {
        movement_alert(piece.split('_')[1] , 'isRookOnemoved')
    }
    if (piece.split('_')[0] === 'rook' && ((row === 0 || row === 7) && box === 7)) {
        movement_alert(piece.split('_')[1] , 'isRookTwomoved')
    }

    if (current_piece !== '') {
        const a = {...store.getState().board.removed_pieces};
        const p = current_piece.split('_')[1] === "A" ? "B" : "A"
        const b = [...a[p]]
        b.push(current_piece)
        a[p] = b
        store.dispatch(addRemovedPiece(a))
    }
    animate_move(data , selection , 0.2)
    setTimeout(() => {
        store.dispatch(move(setTestBoard(selection , data)))
    } , 200)

    store.dispatch(addMovement({selection , data , castle , old}))

}

export default movePiece