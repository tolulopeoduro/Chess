import checkMoves from "../../utils/checkMoves"
import checkBlockedPawn from "./checkBlockedPawn"
import checkDoubledPawn from "./checkDoubledPawn"
import checkIsolatedPawn from "./checkIsolatedPawn"

const minimax = (table , side) => {
    const all_pieces = []

    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            const piece = table[i][j]
            // add row and box to piece data
            piece !== "" && all_pieces.push({piece : piece , row : i, box : j})
        }
    }



    let score_A = 0
    let score_B = 0

    for (let i = 0; i < all_pieces.length ; i++) {
        const m = [all_pieces[i].piece.split('_')[0] , all_pieces[i].piece.split('_')[1]].join('_')

        switch (m) {
            case 'king_A':
                score_A += 200
                break;
            case 'queen_A':
                score_A += 9
                break;
            case 'rook_A':
                score_A += 5
                break;
            case 'bishop_A':
                score_A += 0.75
                break;
            case 'knight_A':
                score_A += 0.75
                break;
            case 'pawn_A':
                score_A += 0.5
                break;
            default:
            score_A+=0
                break;
        }
        
        switch (m) {
            case 'king_B':
                score_B += 200
                break;
            case 'queen_B':
                score_B += 9
                break;
            case 'rook_B':
                score_B += 5
                break;
            case 'bishop_B':
                score_B += 0.75
                break;
            case 'knight_B':
                score_B += 0.75
                break;
            case 'pawn_B':
                score_B += 0.5
                break;
            default:
            score_A+=0
                break;
        }

        if (m.split('_')[0] === 'pawn') {
            const is_doubled = checkDoubledPawn(all_pieces[i] , table)
            const is_blocked = checkBlockedPawn(all_pieces[i] , table)
            const is_isolated = checkIsolatedPawn(all_pieces[i] , table)

            if (is_doubled || is_blocked) {
                if (m.split('_')[1] === 'A') {
                    score_A += 1
                } else {
                    score_B += 1
                }
            }
        } 
    }


    for(let i = 0 ; i < table?.length ; i++) {
        for (let j = 0 ; j < table[i].length; j++) {
            if (table[i][j].split('_')[1] === 'A') {
                const moves = checkMoves(table[i][j] , i , j , table)
                if (moves) {
                    score_A += moves.length * 0.1
                }
            }
        }
    }
    for(let i = 0 ; i < table?.length ; i++) {
        for (let j = 0 ; j < table[i].length; j++) {
            if (table[i][j].split('_')[1] === 'B') {
                const moves = checkMoves(table[i][j] , i , j , table)
                if (moves) {
                    score_B += moves.length * 0.1
                }
            }
        }
    }

    return score_A - score_B

}

export default minimax