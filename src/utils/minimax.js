import checkMoves from "./checkMoves"

const minimax = (table , side) => {
    const all_pieces = []

    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            const piece = table[i][j]
            // add row and box to piece data
            piece !== "" && all_pieces.push(piece)
        }
    }



    let score_A = 0
    let score_B = 0

    for (let i = 0; i < all_pieces.length ; i++) {
        const m = [all_pieces[i].split('_')[0] , all_pieces[i].split('_')[1]].join('_')
        console.log(m)

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
    }

    for(let i = 0 ; i < table?.length ; i++) {
        for (let j = 0 ; j < table[i].length; j++) {
            // console.log(table[i][j].split('_')[1] === 'A' && checkMoves(table[i][j] , i , j , table))
            if (table[i][j].split('_')[1] === 'A') {
                const moves = checkMoves(table[i][j] , i , j , table)
                if (moves) {
                    score_A += moves.length
                }
            }
        }
    }
    for(let i = 0 ; i < table?.length ; i++) {
        for (let j = 0 ; j < table[i].length; j++) {
            // console.log(table[i][j].split('_')[1] === 'A' && checkMoves(table[i][j] , i , j , table))
            if (table[i][j].split('_')[1] === 'B') {
                const moves = checkMoves(table[i][j] , i , j , table)
                if (moves) {
                    score_B += moves.length
                }
            }
        }
    }

    

    console.log(score_A - score_B)

}

export default minimax