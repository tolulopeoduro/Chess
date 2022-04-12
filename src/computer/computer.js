import { store } from "../store"
import checkMoves from "../utils/checkMoves"
import findAllPieces from "../utils/findAllPieces"
import minimax from "../utils/minimax"

const computer = (side) => {
    const B = store.getState().board.board
    minimax(B)
    
}

export default computer