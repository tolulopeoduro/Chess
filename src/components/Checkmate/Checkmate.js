import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import classes from './Checkmate.module.css'
import WithModal from '../Modal/Modal'

const Checkmate = (props) => {

    const check = useSelector(state => state.check)
    
    return (
        <div className={classes.mainContainer}>
            <div>
                <h1>Checkmate</h1>
                <p className={classes.cancelButton} onClick={props.handleClose} >x</p>
            </div>
            <div>
                <p>PLAYER {check?.side === "A" ? "B" : "A"} WINS!!!</p>
            </div>
        </div>
    )
}

export default WithModal(Checkmate)