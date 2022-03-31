import { store } from "../store"
import animate_move from "./move_animation"

const setMove = (selection , data , castle) => {
    const board = store.getState().board.board
    const {piece , row , box} = selection
    const {current_piece , current_row , current_box} = data

    let c = [...board]
    
    const a = [...c[current_row]]
    a[current_box] = piece
    c[current_row] = a
    
    const b = [...c[row]]
    b[box] = ''
    c[row] = b

    if (castle === 'kingside') {
        const a = [...c[current_row]]
        a[5] = `rook_${piece.split('_')[1]}`
        a[7] = ''
        c[current_row] = a
    }
    if (castle === 'queenside') {
        const a = [...c[current_row]]
        a[3] = `rook_${piece.split('_')[1]}`
        a[0] = ''
        c[current_row] = a
    }


    return c
}

export default setMove