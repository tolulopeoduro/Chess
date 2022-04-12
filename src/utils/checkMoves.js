import { setAvailableMoves , clearAvailableMoves } from "../features/Board/BoardSlice"
import { store } from "../store"

const state = store.getState()
const checkMoves = (data , row , box , computer) => {
    const piece = data.split('_')[0]
    !data && store.dispatch(setAvailableMoves(null))
    if (piece === 'pawn') return checkPawnMoves(data , row , box , computer)
    if (piece === 'knight') return checkKnightMoves(data , row , box , computer)
    if (piece === 'rook') return checkRookMoves(data , row , box , computer)
    if (piece === 'bishop') return checkBishopMoves(data , row , box , computer)
    if (piece === 'queen') return checkQueenMoves(data , row , box , computer)
    if (piece === 'king') return checkKingMoves(data , row , box , computer)
    
}

export const clearMoves = store.dispatch(clearAvailableMoves())

const checkPawnMoves = (data , row , box , computer) => {
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
        available_moves.push({row : r , box : b })
    }
    if(B[r][c]?.split('_')[1] === opp ) {
        available_moves.push({row : r , box : c })
    }

    if (computer) {
        return available_moves
    }

    store.dispatch(setAvailableMoves(available_moves))
}

const checkKnightMoves = (data , row , box , computer ) => {
    const type = data.split('_')[1]
    const available_moves = []
    const b = store.getState().board.board
    const checkValidity = (r , x) => {
        if (r > 7 || x > 7 || r < 0 || x < 0) return
        if(b[r][x] === '' || b[r][x].split('_')[1] !== type) {
            available_moves.push({row : r , box : x })
        }
    }
    const p = [
        {row : row-2 , box : box-1} , {row : row-2 , box : box+1} , {row : row+2 , box : box-1} , {row : row+2 , box : box+1},
        {row : row-1 , box : box+2} , {row : row-1 , box : box-2} , {row : row+1 , box : box+2} , {row : row+1 , box : box-2}
    ]
    for (let i = 0 ; i < p.length ; i++) {checkValidity(p[i].row , p[i].box)}

    if (computer) {
        return available_moves
    }

    store.dispatch(setAvailableMoves(available_moves))
}

const checkRookMoves = (data , row , box , computer) => {
    const type = data.split('_')[1]
    const available_moves = []
    const b = store.getState().board.board

    const checkValidity = (r , x) => {
        if (r > 7 || x > 7 || r < 0 || x < 0) return
        const p = b[r][x]
        if(p === '') {
            available_moves.push({row : r , box : x })
        } else if (p.split('_')[1] !== type) {
            available_moves.push({row : r , box : x })
            return 'end'
        } else if (p.split('_')[1] === type) {
            return 'end'
        }
    }

    for (let i = row+1 ; i < 8; i++) {if(checkValidity(i , box)) break}
    for (let i = row-1; i >= 0; i-- ) {if (checkValidity(i , box)) break}
    for (let i = box+1 ; i < 8; i++) {if(checkValidity(row , i))break}
    for (let i = box-1; i >= 0; i-- ) {if(checkValidity(row , i))break}

    if (computer) {
        return available_moves
    }

    store.dispatch(setAvailableMoves(available_moves))
}

const checkBishopMoves = (data , row , box , computer) => {
    const type = data.split('_')[1]
    const available_moves = []
    const b = store.getState().board.board

    const checkValidity = (r , x) => {
        if (r > 7 || x > 7 || r < 0 || x < 0) return 'end'
        const p = b[r][x]
        if(p === '') {
            available_moves.push({row : r , box : x })
        } else if (p.split('_')[1] !== type) {
            available_moves.push({row : r , box : x })
            return 'end'
        } else if (p.split('_')[1] === type) {
            return 'end'
        }
    }

    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row-1-i , box-1-i)) break}
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row-1-i , box+1+i)) break}
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row+1+i , box-1-i)) break}
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row+1+i , box+1+i)) break}
    

    if (computer) {
        return available_moves
    }

    store.dispatch(setAvailableMoves(available_moves))
}

const checkQueenMoves = (data , row , box , computer) => {
    const type = data.split('_')[1]
    const available_moves = []
    const b = store.getState().board.board
    
    const checkValidity = (r , x) => {
        if (r > 7 || x > 7 || r < 0 || x < 0) return 'end'
        const p = b[r][x]
        if(p === '') {
            available_moves.push({row : r , box : x })
        } else if (p.split('_')[1] !== type) {
            available_moves.push({row : r , box : x })
            return 'end'
        } else if (p.split('_')[1] === type) {
            return 'end'
        }
    }
    
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row-1-i , box-1-i)) break}
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row-1-i , box+1+i)) break}
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row+1+i , box-1-i)) break}
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row+1+i , box+1+i)) break}

    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row-1-i , box)) break}
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row+1+i , box)) break}
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row , box+1+i)) break}
    for (let i = 0; i <= 8; i++ ) {if (checkValidity(row, box-1-i)) break}
    

    if (computer) {
        return available_moves
    }

    store.dispatch(setAvailableMoves(available_moves))
}

const checkKingMoves = (data , row , box , computer) => {
    const type = data.split('_')[1]
    const available_moves = []
    const b = store.getState().board.board
    const {isKingMoved , isRookOnemoved , isRookTwomoved} = store.getState().board.gameState
    const kingside_castle_condition = (b[row][5] === "" && b[row][6] === "") && (!isKingMoved[type] && !isRookTwomoved[type])
    const queenside_castle_condition = (b[row][1] === "" && b[row][2] === "" && b[row][3] === "") && (!isKingMoved[type] && !isRookTwomoved[type])
    
    const checkValidity = (r , x) => {
        if (r > 7 || x > 7 || r < 0 || x < 0) return 'end'
        const p = b[r][x]
        if(p === '') {
            available_moves.push({row : r , box : x })
        } else if (p.split('_')[1] !== type) {
            available_moves.push({row : r , box : x })
            return 'end'
        } else if (p.split('_')[1] === type) {
            return 'end'
        }
    }
    
    checkValidity(row-1 , box-1)
    checkValidity(row-1 , box+1)
    checkValidity(row+1 , box-1)
    checkValidity(row+1 , box+1)

    checkValidity(row-1 , box)
    checkValidity(row+1 , box)
    checkValidity(row , box+1)
    checkValidity(row, box-1)

    kingside_castle_condition && available_moves.push({row : row , box : 6 , castle : true})
    queenside_castle_condition && available_moves.push({row : row , box : 2 , castle : true})
    
    

    if (computer) {
        return available_moves
    }

    store.dispatch(setAvailableMoves(available_moves))
}

export default checkMoves
