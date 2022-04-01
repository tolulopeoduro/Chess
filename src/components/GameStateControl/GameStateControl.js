import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setcurrentBoard } from '../../features/Board/BoardSlice'
import { store } from '../../store'
import clear from '../../utils/clear'
import animate_move from '../../utils/move_animation'
import reverse_animation from '../../utils/reverse_animation'

const GameStateControl = () => {

    const {prev_moves , moves , prev_removed_pieces , movements} = useSelector(state => state.board)
    

    const dispatch = useDispatch()

    const handle_click = (n) => {
        const m = moves + n
        
        if (n === 1) {
            if (movements[moves]) {
                const {selection , data , castle} = movements[moves]
                animate_move(data , selection , 0.2)
                setTimeout(() => dispatch(setcurrentBoard({move_no : m , board : prev_moves[m] , removed_pieces : prev_removed_pieces[m] })) , 200)
            }
        } 
        if (n === -1) {
            const {selection , data } = movements[moves + n]
            const data2 = {current_piece : '' ,current_row : selection.row , current_box : selection.box}
            animate_move(data2 , selection , 0.2)
            setTimeout(() => {
                dispatch(setcurrentBoard({move_no : m , board : prev_moves[m] , removed_pieces : prev_removed_pieces[m] }))
                clear(data)
            } , 200)
        }
        
    }

    return (
        <div>
            <button disabled ={moves === 0} onClick={() => handle_click(-1)}>{'<'}</button>
            <button disabled = {prev_moves.length -1 === moves} onClick={() => handle_click(+1)}>{'>'}</button>
        </div>
    )
}

export default GameStateControl