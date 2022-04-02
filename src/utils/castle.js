import { addMovement, move } from "../features/Board/BoardSlice";
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
        const rook_move = {move_2 : {current_box : 5 , current_row : current_row} , selection_2 : {piece : `rook_${turn}_2` , row : current_row , box : 7}}
        const {move_2 , selection_2 } = rook_move
        animate_move(current_move , selection , 0.2)
        animate_move( move_2 , selection_2 , 0.3)
        setTimeout(() => store.dispatch(move(setMove(selection , current_move , "kingside"))) , 300)
        store.dispatch(addMovement({selection , current_move , castle : 'kingside' , rook_move }))
        
    } else if (current_box === 2) {
        const rook_move = {move_2 : {current_box : 3 , current_row : current_row} , selection_2 : {piece : `rook_${turn}_1` , row : current_row , box : 0}}
        const {move_2 , selection_2 } = rook_move
        animate_move(current_move , selection , 0.2)
        animate_move(move_2 , selection_2 , 0.3)
        setTimeout(() => store.dispatch(move(setMove(selection , current_move , "queenside"))) , 300)
        store.dispatch(addMovement({selection , current_move , castle : 'queenside' , rook_move }))
    }
    movement_alert(selection.piece.split('_')[1] , 'isKingMoved')
}


export default kingside