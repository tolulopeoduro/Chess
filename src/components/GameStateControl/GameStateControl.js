import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setcurrentBoard } from '../../features/Board/BoardSlice'
import { store } from '../../store'

const GameStateControl = () => {

    const {prev_moves , moves , prev_removed_pieces} = useSelector(state => state.board)

    const dispatch = useDispatch()

    const handle_click = (n) => {
        const m = moves + n
        dispatch(setcurrentBoard({move_no : m , board : prev_moves[m] , removed_pieces : prev_removed_pieces[m] }))
    }

    return (
        <div>
            <button disabled ={moves === 0} onClick={() => handle_click(-1)}>{'<'}</button>
            <button disabled = {prev_moves.length -1 === moves} onClick={() => handle_click(+1)}>{'>'}</button>
        </div>
    )
}

export default GameStateControl