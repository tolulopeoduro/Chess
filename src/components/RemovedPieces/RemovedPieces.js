import React from 'react'
import { useSelector } from 'react-redux'
import RemovedItem from '../RemovedItem/RemovedItem'
import classes from './RemovedPieces.module.css'

const RemovedPieces = (props) => {
    const {side} = props
    const removedPieces = useSelector(state => state.board.removedPieces[side])


  return (
    <div className={classes.removedPieces}>
        {
            removedPieces.map(r => 
                r.qty >0 && <RemovedItem data = {r}/>
            )
        }
    </div>
  )
}

export default RemovedPieces