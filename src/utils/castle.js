import { move } from "../features/Board/BoardSlice";
import { store } from "../store"
import movement_alert from "./gamestateUtils";
import setMove from "./setTestBoard";

const board =  store.getState().board.board;

const kingside = (current_move) => {
    const selection = store.getState().board.selection
    const {current_piece , current_row , current_box} = current_move
    if (current_box === 6) {
        store.dispatch(move(setMove(selection , current_move , "kingside")))
    } else if (current_box === 2) {
        store.dispatch(move(setMove(selection , current_move , "queenside")))
    }
    movement_alert(selection.piece.split('_')[1] , 'isKingMoved')
}


export default kingside