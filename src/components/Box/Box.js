import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { select , move, setPawnMenu } from '../../features/Board/BoardSlice';
import classes from './Box.module.css'
import cx from 'classnames'
import avoid_checks from '../../utils/avoidChecks';
import movePiece from '../../utils/Move';
import kingside from '../../utils/castle';

const Box = (props) => {

    const {t} = useTranslation()

    const {selection , turn , available_moves , prev_moves , moves} = useSelector(state => state.board)
    const b = useSelector(state => state.board)
    const check = useSelector(state => state.check)

    const dispatch = useDispatch()
    const {index , data , row , box } = props

    const condition = turn === data.split('_')[1] || data === ""
    
    const handleClick = () => {

        if (check.checkmate) return
        if (moves < prev_moves.length -1) return
        
        if (!selection && turn !== data.split('_')[1]) return
        if (turn === data.split('_')[1] && selection) {
            dispatch(select({
                piece : data,
                row : row,
                box : box
            }))
            return
        }
        
        if (!selection) {
            if (data === '' && !selection) return 
            dispatch(select({
                piece : data,
                row : row,
                box : box
            }))
        } 
        if (selection.row === row && selection.box === box)  {
            dispatch(select(null))
        }

        if (selection && is_available) {
            const currentMove = {
                current_piece : data,
                current_row : row,
                current_box : box,
            }

            if (is_castle) {
                kingside(currentMove)
                return
            }


            if (selection.piece === 'pawn_A' && row ===7) {
                dispatch(setPawnMenu({side : 'A' , currentMove , oncheck : check.side === turn}))
                return 
            }

            if (selection.piece === 'pawn_B' && row ===0) {
                dispatch(setPawnMenu({side : 'B' , currentMove , oncheck : check.side === turn}))
                return
            }

            if (turn === check.side) {
                avoid_checks({
                    current_piece : data,
                    current_row : row,
                    current_box : box,
                })
                return
            }

            movePiece({
                current_piece : data,
                current_row : row,
                current_box : box,
            })
        }
    }
    
    const is_available = available_moves?.some(p => p.row === row && p.box === box)
    const is_castle = available_moves?.some(p => p.row === row && p.box === box && p.castle)

    const opp = turn === 'A' ? 'B' : 'A'

    const [piece , side]  = data.split('_')
    const name = [piece , side].join('_')

    return (
        <div className={cx(classes.box , {[classes.target] : is_available && data.split('_')[1] === opp} , 'box' )} onClick={handleClick} >
            {
            data !== '' ?
            <img className={data} src={require(`../../assets/images/board/${name}.PNG`)} height="100%" />
            : is_available && !is_castle ? 
            <div className={classes.available}></div>
            : is_available && is_castle ? 
            <div className={classes.castle}></div>
            : data
            }
        </div>
    );
};

export default Box;
