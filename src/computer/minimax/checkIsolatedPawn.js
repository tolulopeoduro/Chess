const checkIsolatedPawn = (item , board) => {

    const {piece , row , box} = item


    const [name , side] = piece.split('_')
    const m = `${name}_${side}`

    const next_row = () => side === 'A' ? row + 1 : row - 1

    const all_positions = [
        board[row][box-1],
        board[row][box+1],
        board[row+1][box-1],
        board[row+1][box+1],
        board[row-1][box-1],
        board[row-1][box+1],
    ]

    return all_positions.some((item) => item && item.includes(`_${side}_`))

    
}

export default checkIsolatedPawn