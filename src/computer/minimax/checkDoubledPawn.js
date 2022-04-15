const checkDoubledPawn = (item , board) => {

    const {piece , row , box} = item

    const [name , side] = piece.split('_')
    const m = `${name}_${side}`

    const next_row = () => side === 'A' ? row + 1 : row - 1

    return board[next_row()][box].includes(m)
    
}

export default checkDoubledPawn