import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePiece, move, setcurrentBoard } from '../../features/Board/BoardSlice'
import { store } from '../../store'
import clear from '../../utils/clear'
import animate_move from '../../utils/move_animation'
import classes from './GameStateControl.module.css'

const GameStateControl = () => {

    const {board , prev_moves , moves , prev_removed_pieces , movements} = useSelector(state => state.board)

    const dispatch = useDispatch()

    const handle_click = (n) => {
        console.log(movements)
        const m = moves + n
        if (n === 1) {
            if (movements[moves]) {

                const {selection , data , current_move , castle , old , rook_move} = movements[moves]
                if (castle) {
                    const {move_2 , selection_2} = rook_move
                    setTimeout(() => {
                        animate_move(current_move , selection , 0.2)
                        animate_move(move_2 , selection_2 , 0.3)
                    }  , 0)
                    setTimeout(() => dispatch(setcurrentBoard({move_no : m , board : prev_moves[m] , removed_pieces : prev_removed_pieces[m] })) , 300)
                    return
                }
                if (board[selection.row][selection.box] !== old) {
                    dispatch(changePiece(selection))
                }
                setTimeout(() => animate_move(data , selection , 0.2) , 0)
                setTimeout(() => dispatch(setcurrentBoard({move_no : m , board : prev_moves[m] , removed_pieces : prev_removed_pieces[m] })) , 200)
            }
        } 
        if (n === -1) {
            const {selection , data , current_move , castle , old , rook_move } = movements[moves + n]
            const data2 = {current_piece : '' ,current_row : selection.row , current_box : selection.box}
            
            if (castle) {
                const {selection_2} = rook_move
                console.log(selection_2)
                const rook_move_2 = {current_piece : '' , current_row : selection_2.row , current_box : selection_2.box}

                animate_move(data2 , selection , 0.2)
                animate_move(rook_move_2 , selection_2 , 0.2)
                setTimeout(() => {
                    dispatch(setcurrentBoard({move_no : m , board : prev_moves[m] , removed_pieces : prev_removed_pieces[m] }))
                    clear(data)
                } , 300)
            }
            animate_move(data2 , selection , 0.2)
            setTimeout(() => {
                dispatch(setcurrentBoard({move_no : m , board : prev_moves[m] , removed_pieces : prev_removed_pieces[m] }))
                clear(data)
            } , 200)
        }
        
    }

    return (
        <div>
            <button className = {classes.control_button} disabled ={moves === 0} onClick={() => handle_click(-1)}>{'<'}</button>
            <button className = {classes.control_button} disabled = {prev_moves.length -1 === moves} onClick={() => handle_click(+1)}>{'>'}</button>
        </div>
    )
}

export default GameStateControl