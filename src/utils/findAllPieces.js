import { clearCheck, setCheckSide } from "../features/Board/CheckSlice"
import { store } from "../store"
import findCheck from "./findCheck"

const findAllPieces = (side , testBoard) => {
    store.dispatch(clearCheck())
    console.log(side)
    const B = testBoard ||store.getState().board.board
    const player = store.getState().board.turn
    const p = []
    for(let i = 0 ; i < B.length ; i++) {
        for (let j = 0 ; j < B[i].length; j++) {
            B[i][j].split('_')[1] === side && findCheck(B[i][j] , i , j)
        }
    }

}


export default findAllPieces