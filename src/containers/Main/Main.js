import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkmate from '../../components/Checkmate/Checkmate';
import PawnTransformMenu from '../../components/PawnTransformMenu/PawnTransformMenu';
import RestartPrompt from '../../components/RestartPrompt/RestartPrompt';
import Row from '../../components/Row/Row';
import { restart, setAvailableMoves, toggle_menu } from '../../features/Board/BoardSlice';
import checkMoves, { clearMoves } from '../../utils/checkMoves';
import findAllPieces from '../../utils/findAllPieces';
import findAllMoves from '../../utils/findCheckMate';
import classes from './Main.module.css'

const Main = () => {

    const dispatch = useDispatch()
    
    const selection = useSelector(state => state.board.selection)
    const board  = useSelector(state => state.board.board)
    const check = useSelector(state => state.check)
    const turn = useSelector(state => state.board.turn)
    const pawnMenu = useSelector(state => state.board.pawnMenu)
    const in_game_menu = useSelector(state => state.board.in_game_menu)

    useEffect(() =>
     {
        if (selection) {
            const {piece , row , box} = selection
            checkMoves(piece , row , box)
        }
    }, [selection])

    useEffect(() => {
        findAllPieces(turn === 'A' ? 'B' : 'A')
    } , [turn])

    useEffect(() => {
        if (check.checkmate) {
            setMessages({...messages , checkmate : true})
            return
        }
        check.side && findAllMoves(check.side)
    }, [check])

    const [messages , setMessages] = useState({
        check : false,
        checkmate : false,
        pawnChange : true
    })

    return (
        <div className={classes.board}>
            {
                board?.map((row , index) => (
                    <Row key = {index} row = {index} data ={row} />
                ))
            }
            {check.checkmate && messages.checkmate ? <Checkmate handleClose = {() => setMessages({...messages , checkmate : false })}/> : null}
            {pawnMenu && <PawnTransformMenu/>}
            {
                in_game_menu.restart ? <RestartPrompt 
                message = 'ARE YOU SURE YOU WANT TO RESART' onAccept={() => dispatch(restart())}
                onDecline = {() => dispatch(toggle_menu({...in_game_menu , restart : false}))} 
                /> :
                in_game_menu.quit ? <RestartPrompt 
                message = 'FORFEIT GAME?' onAccept={() => dispatch(restart())}
                onDecline = {() => dispatch(toggle_menu({...in_game_menu , quit : false}))} 
                /> : null
            }
        </div>
  );
};

export default Main;
