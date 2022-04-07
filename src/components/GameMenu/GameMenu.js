import React, { useEffect } from 'react'
import {Icon} from '@iconify/react'
import classes from './GameMenu.module.css'
import GameStateControl from '../GameStateControl/GameStateControl'
import {restart, toggle_menu} from '../../features/Board/BoardSlice'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'

const GameMenu = (props) => {
    const in_game_menu = useSelector(state => state.board.in_game_menu)

    const dispatch = useDispatch()

    return (
        <div className={cx(classes.game_menu , {[classes.large] : props.large_screen} , 'box' )}>
            <div className={classes.button_group}>
                <button onClick={() => dispatch(toggle_menu({...in_game_menu , restart : true}))} 
                className={classes.button}><Icon icon='bx:reset'/></button>

                <button onClick={() => dispatch(toggle_menu({...in_game_menu , quit : true}))} 
                className={classes.button}><Icon icon='majesticons:door-exit'/></button>

                <button className={classes.button}><Icon icon='ant-design:home-filled'/></button>
            </div>
            <GameStateControl/>
        </div>
    )
}


export default GameMenu