import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { select , move } from '../../features/Board/BoardSlice';
import classes from './Box.module.css'

const Box = (props) => {

    const {t} = useTranslation()
    const selection = useSelector(state => state.board.selection)

    const dispatch = useDispatch()
    const {index , data , row , box } = props
    
    const handleClick = () => {
        if (!selection) {
            dispatch(select({
                piece : data,
                row : row,
                box : box
            }))
        } else {
            dispatch(move({
                current_piece : data,
                current_row : row,
                current_box : box 
            }))
        }
    }

    return (
        <div className={classes.box} onClick={handleClick} >
            {t(data)}
        </div>
    );
};

export default Box;
