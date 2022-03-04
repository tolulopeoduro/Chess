import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Row from '../../components/Row/Row';
import { setAvailableMoves } from '../../features/Board/BoardSlice';
import checkMoves, { clearMoves } from '../../utils/checkMoves';
import findAllPieces from '../../utils/findAllPieces';
import findCheck from '../../utils/findCheck';
import classes from './Main.module.css'

const Main = () => {
    
    
    const selection = useSelector(state => state.board.selection)
    const board  = useSelector(state => state.board.board)

    useEffect(() => {
        if (selection) {
            const {piece , row , box} = selection
            checkMoves(piece , row , box)
        }
    }, [selection])

    useEffect(() => {
        findAllPieces()
    } , [board])

    return (
        <div className={classes.board}>
            {
                board?.map((row , index) => (
                    <Row row = {index} data ={row} />
                ))
            }
        </div>
  );
};

export default Main;
