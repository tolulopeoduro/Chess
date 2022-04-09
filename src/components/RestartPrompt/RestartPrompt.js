import React from 'react'
import { useDispatch } from 'react-redux'
import { restart } from '../../features/Board/BoardSlice'
import WithModal from '../Modal/Modal'
import classes from './RestartPrompt.module.css'

const RestartPrompt = (props) => {

    const {message , onAccept , onDecline} = props


    return (
        <div className={classes.restart}>
            <p>{message}</p>
            <div>
                <button onClick={onAccept}>YES</button>
                <button onClick={onDecline}>NO</button>
            </div>
        </div>
    )
}

export default WithModal(RestartPrompt)