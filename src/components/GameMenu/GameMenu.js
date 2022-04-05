import React from 'react'
import {Icon} from '@iconify/react'
import classes from './GameMenu.module.css'
import GameStateControl from '../GameStateControl/GameStateControl'
import {restart} from '../../features/Board/BoardSlice'
import { useDispatch } from 'react-redux'
import cx from 'classnames'

const GameMenu = (props) => {
    
    const dispatch = useDispatch()

    return (
        <div className={cx(classes.game_menu , {[classes.large] : props.large_screen} , 'box' )}>
            <div className={classes.button_group}>
                <button onClick={() => dispatch(restart())} className={classes.button}><Icon icon='bx:reset'/></button>
                <button className={classes.button}><Icon icon='ant-design:home-filled'/></button>
                <button className={classes.button}><Icon icon='majesticons:door-exit'/></button>
            </div>
            <GameStateControl/>
        </div>
    )
}


export default GameMenu