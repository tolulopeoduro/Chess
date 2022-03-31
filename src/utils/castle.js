import { move } from "../features/Board/BoardSlice";
import { store } from "../store"
import movement_alert from "./gamestateUtils";
import animate_move from "./move_animation";
import setMove from "./setTestBoard";

const board =  store.getState().board.board;
const turn = store.getState().board.turn

const kingside = (current_move) => {
    const selection = store.getState().board.selection
    const turn = store.getState().board.turn
    const {current_piece , current_row , current_box} = current_move
    if (current_box === 6) {
        animate_move(current_move , selection.piece , 0.2)
        animate_move({current_box : 5 , current_row : current_row} , `rook_${turn}_2` , 0.3)
        setTimeout(() => store.dispatch(move(setMove(selection , current_move , "kingside"))) , 300)
        
    } else if (current_box === 2) {
        animate_move(current_move , selection.piece , 0.2)
        animate_move({current_box : 3 , current_row : current_row} , `rook_${turn}_1` , 0.3)
        setTimeout(() => store.dispatch(move(setMove(selection , current_move , "queenside"))) , 300)
    }
    movement_alert(selection.piece.split('_')[1] , 'isKingMoved')
}


export default kingside