import { store } from "../store"

const setMove = (selection , data) => {

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

    return c
}

export default setMove