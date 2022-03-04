import { store } from "../store"
import findCheck from "./findCheck"

const findAllPieces = (testBoard) => {
    const B = testBoard ||store.getState().board.board
    const p = []
    for(let i = 0 ; i < B.length ; i++) {
        for (let j = 0 ; j < B[i].length; j++) {
            B[i][j] !== '' && findCheck(B[i][j] , i , j) //console.log(B[i][j])
        }
    }

}


export default findAllPieces