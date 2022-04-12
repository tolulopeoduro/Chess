import React, { useState } from 'react'
import classes from './Home.module.css'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { load, setPlayers, setSinglePlayer } from '../../features/Players/PlayerSlice'
import {restart, resume} from '../../features/Board/BoardSlice'
import { store } from '../../store'



const Home = () => {
    const [game_settings , set_game_settings] = useState(false)
    const [player1 , set_player1] = useState('')
    const [player2 , set_player2] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const start = (pvp) => {
        if (pvp) {
            dispatch(setPlayers([player1 , player2]))
            dispatch(restart())
            setTimeout(() => navigate('/game') , 0)
            localStorage.setItem('board' , null)
            localStorage.setItem('players' , null)
        } else {
            dispatch(setSinglePlayer(player1))
            dispatch(restart())
            setTimeout(() => navigate('/game') , 0)
            localStorage.setItem('board' , null)
            localStorage.setItem('players' , null)
        }
    }
    
    const savedData = JSON.parse(localStorage.getItem('board'))
    const savedNames = JSON.parse(localStorage.getItem('players'))
    
    const resumeGame = () => {
        savedData && dispatch(resume(savedData))
        dispatch(load(savedNames))
        setTimeout(() => navigate('/game') , 0)
    }


    return (
        <div className={classes.home}>
            <div className={classes.logo}>
                <h1>CHESS</h1>
            </div>
            {
                game_settings ?
            <div className={classes.setup}>
                <input type='text' value = {player1} placeholder='PLAYER A' onChange={e => set_player1(e.target.value)}/>
                
                {game_settings > 1 && <input type='text' value = {player2} placeholder='PLAYER B' onChange={e => set_player2(e.target.value)}/>}
                <div className={classes.setup_buttons}>
                    <button onClick={() => set_game_settings(false)}>BACK</button>
                    <button onClick={() => start(game_settings === 2)}>START</button>
                </div>
            </div>
            :
            <div className={classes.menu}>
                {savedData && <button onClick={() => resumeGame()}>RESUME</button>}
                <button onClick={() => set_game_settings(1)}>1 PLAYER</button> 
                <button onClick={() => set_game_settings(2)}>2 PLAYER</button>
            </div>
            }
            <div>
                BY: ODURO TOLULOPE
            </div>
        </div>
    )
}

export default Home