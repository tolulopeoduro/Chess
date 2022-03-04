import { addCheck } from '../features/Board/CheckSlice'
import {store} from '../store'

const findCheck = (data , row , box , testBoard) => {
    const piece = data.split('_')[0]
    piece === 'bishop' && bishop(data , row , box)
    piece === 'rook' && rook(data , row , box)
    piece === 'queen' && queen(data , row , box)
    piece === 'knight' && knight(data , row , box)
    piece === 'pawn' && pawn(data , row , box)
}



const bishop = (data , row , box , testBoard) => {
    const type = data.split('_')[1]
    let available_moves = []
    const b = store.getState().board.board

    const checkValidity = (r , x) => {
        if (r > 7 || x > 7 || r < 0 || x < 0) return 'end'
        const p = b[r][x]
        if(p === '') {
            available_moves.push({row : r , box : x })
        } else if (p.split('_')[1] !== type) {
            if (p.split('_')[0] === 'king') {
                available_moves.push({row : r , box : x })
                available_moves.unshift({row , box})
                store.dispatch(addCheck(available_moves))
                return 'end'
            } else return 'end'
        } else if (p.split('_')[1] === type) return 'end'
    }

    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row-1-i , box-1-i)) break} ;available_moves = []
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row-1-i , box+1+i)) break} ;available_moves = []
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row+1+i , box-1-i)) break} ;available_moves = []
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row+1+i , box+1+i)) break} ;available_moves = []
    
}

const rook = (data , row , box) => {
    const type = data.split('_')[1]
    let available_moves = []
    const b = store.getState().board.board

    const checkValidity = (r , x) => {
        if (r > 7 || x > 7 || r < 0 || x < 0) return 'end'
        const p = b[r][x]
        if(p === '') {
            available_moves.push({row : r , box : x })
        } else if (p.split('_')[1] !== type) {
            if (p.split('_')[0] === 'king') {
                available_moves.push({row : r , box : x })
                available_moves.unshift({row , box})
                store.dispatch(addCheck(available_moves))
            }
            return 'end'
        } else if (p.split('_')[1] === type) return 'end'
    }

    for (let i = row+1 ; i < 8; i++) {if(checkValidity(i , box)) break} ;available_moves = []
    for (let i = row-1; i >= 0; i-- ) {if (checkValidity(i , box)) break} ;available_moves = []
    for (let i = box+1 ; i < 8; i++) {if(checkValidity(row , i))break} ;available_moves = []
    for (let i = box-1; i >= 0; i-- ) {if(checkValidity(row , i))break} ;available_moves = []
}

const queen = (data , row , box) => {

    const type = data.split('_')[1]
    let available_moves = []
    const b = store.getState().board.board
    
    const checkValidity = (r , x) => {
        if (r > 7 || x > 7 || r < 0 || x < 0) return 'end'
        const p = b[r][x]
        if(p === '') {
            available_moves.push({row : r , box : x })
        } else if (p.split('_')[1] !== type) {
            if (p.split('_')[0] === 'king') {
                available_moves.push({row : r , box : x })
                available_moves.unshift({row , box})
                store.dispatch(addCheck(available_moves))
            }
            return 'end'
        } else if (p.split('_')[1] === type) return 'end'
    }

    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row-1-i , box-1-i)) break} ; available_moves = []
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row-1-i , box+1+i)) break} ; available_moves = []
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row+1+i , box-1-i)) break} ; available_moves = []
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row+1+i , box+1+i)) break} ; available_moves = []

    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row-1-i , box)) break} ; available_moves = []
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row+1+i , box)) break} ; available_moves = []
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row , box+1+i)) break} ; available_moves = []
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row, box-1-i)) break} ; available_moves = []
}

const knight = (data , row , box) => {
    const type = data.split('_')[1]
    let available_moves = []
    const b = store.getState().board.board
    const checkValidity = (r , x) => {
        if (r > 7 || x > 7 || r < 0 || x < 0) return
        if(b[r][x].split('_')[1] !== type ) {
            if (b[r][x].split('_')[0] === 'king') {
                available_moves.push({row : r , box : x })
                available_moves.unshift({row , box})
                store.dispatch(addCheck(available_moves))
            }
        }
    }
    const p = [
        {row : row-2 , box  : box-1} , {row : row-2 , box : box+1} , {row : row+2 , box : box-1} , {row : row+2 , box : box+1},
        {row : row-1 , box : box+2} , {row : row-1 , box : box-2} , {row : row+1 , box : box+2} , {row : row+1 , box : box-2}
    ]
    for (let i = 0 ; i < p.length ; i++) {checkValidity(p[i].row , p[i].box)}
}

const king = (data , row , box) => {
    const type = data.split('_')[1]
    let available_moves = []
    const b = store.getState().board.board
    
    const checkValidity = (r , x) => {
        if (r > 7 || x > 7 || r < 0 || x < 0) return 'end'
        const p = b[r][x]
        if(p === '') {
            available_moves.push({row : r , box : x })
        } else if (p.split('_')[1] !== type) {
            if (p.split('_')[0] === 'king') {
                available_moves.push({row : r , box : x })
                available_moves.unshift({row , box})
                store.dispatch(addCheck(available_moves))
            }
            return 'end'
        } else if (p.split('_')[1] === type) return 'end'
    }


    checkValidity(row-1 , box-1) ; available_moves = []
    checkValidity(row-1 , box+1) ; available_moves = []
    checkValidity(row+1 , box-1) ; available_moves = []
    checkValidity(row+1 , box+1) ; available_moves = []

    checkValidity(row-1 , box) ; available_moves = []
    checkValidity(row+1 , box) ; available_moves = []
    checkValidity(row , box+1) ; available_moves = []
    checkValidity(row, box-1) ; available_moves = []
}

const pawn = (data , row , box) => {
    const type = data.split('_')[1]
    const opp = type === 'A' ? 'B' : 'A'
    const available_moves = []
    const r = type === 'B' ? row-1 : row+1 
    const {a , b , c} = {a : box , b : box - 1 , c : box+1};
    const B = store.getState().board.board
    if (row === 0 || row === 7) return 
    type === 'A' && row === 1 && (B[row+1][box] === '' && B[row+2][box] === '') && available_moves.push({row : row+2 , box : box })
    type === 'B' && row === 6 && (B[row-1][box] === '' && B[row-2][box] === '') && available_moves.push({row : row-2 , box : box })
    if(B[r][a] === '') {
        available_moves.push({row : r , box : a })
    }
    if(B[r][b]?.split('_')[1] === opp) {
        if (B[r][b] === `king_${opp}`) {
            available_moves.push({row : r , box : b})
            available_moves.unshift({row , box})
            store.dispatch(addCheck(available_moves))
        } 
        
    }
    if(B[r][c]?.split('_')[1] === opp) {
        if (B[r][c] === `king_${opp}`) {
            available_moves.push({row : r , box : c })
            available_moves.unshift({row , box})
            store.dispatch(addCheck(available_moves))
        } 
    }
}

export default findCheck