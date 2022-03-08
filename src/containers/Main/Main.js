import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Row from '../../components/Row/Row';
import checkMoves, { clearMoves } from '../../utils/checkMoves';
import findAllPieces from '../../utils/findAllPieces';
import classes from './Main.module.css'

const Main = () => {
    
    
    const selection = useSelector(state => state.board.selection)
    const board  = useSelector(state => state.board.board)
    const check = useSelector(state => state.check)
    const turn = useSelector(state => state.board.turn)

    useEffect(() => {
        if (selection) {
            const {piece , row , box} = selection
            checkMoves(piece , row , box)
        }
    }, [selection])

    useEffect(() => {
        findAllPieces(turn === 'A' ? 'B' : 'A')
    } , [turn])

    useEffect(() => {
        console.log(check)
    }, [check])

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
