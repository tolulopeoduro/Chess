import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { select , move } from '../../features/Board/BoardSlice';
import classes from './Box.module.css'
import cx from 'classnames'

const Box = (props) => {

    const {t} = useTranslation()

    const {selection , turn , available_moves} = useSelector(state => state.board)
    const b = useSelector(state => state.board)

    const dispatch = useDispatch()
    const {index , data , row , box } = props

    const condition = turn === data.split('_')[1] || data === ""
    
    const handleClick = () => {
        
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
            dispatch(move({
                current_piece : data,
                current_row : row,
                current_box : box 
            }))
        }
    }
    
    const is_available = available_moves?.some(p => p.row === row && p.box === box)


    return (
        <button className={cx(classes.box , {[classes.available] : is_available} )} onClick={handleClick} >
            <span></span>
            {t(data)}
        </button>
    );
};

export default Box;
