import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePiece, select, setPawnMenu } from '../../features/Board/BoardSlice'
import avoidChecks from '../../utils/avoidChecks'
import movePiece from '../../utils/Move'
import WithModal from '../Modal/Modal'
import Option from '../Option.js/Option'
import classes from './PawnTransformMenu.module.css'
import Randomstring from 'random-string'

const PawnTransformMenu = () => {

    const pawnMenu = useSelector(state => state.board.pawnMenu)
    const pawnSide = useSelector(state => state.board.pawnMenu.side)
    const pawnMove = useSelector(state => state.board.pawnMenu.currentMove)
    const selection = useSelector(state => state.board.selection)
    const board = useSelector(state => state.board.board)

    const dispatch = useDispatch()

    const handleClick = (piece) => {

        const newpiece = {...selection, piece : `${piece}_${pawnSide}_${Randomstring()}`}
        
        dispatch(changePiece(newpiece))
        dispatch(select(newpiece))
        if (pawnMenu.oncheck) {
            avoidChecks(pawnMove)
            dispatch(setPawnMenu(null))
            return
        } 
        dispatch(setPawnMenu(null))
        setTimeout(() => movePiece({...pawnMove} , null , newpiece.piece) , 0)
    }

    return (
        <div className={classes.mainContainer}>
            <div>
                <h1>Checkmate</h1>
            </div>
            <div className={classes.options}>
                <Option side = {pawnSide} piece = 'queen' handleSelect = {() => handleClick('queen')} />
                <Option side = {pawnSide} piece = 'rook' handleSelect = {() => handleClick('rook')} />
                <Option side = {pawnSide} piece = 'bishop' handleSelect = {() => handleClick('bishop')} />
                <Option side = {pawnSide} piece = 'knight' handleSelect = {() => handleClick('knight')} />
            </div>
        </div>
    )
}

export default WithModal(PawnTransformMenu)