import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import arrangeRemovedPieces from '../../utils/arrangeRemovedPieces'
import RemovedItem from '../RemovedItem/RemovedItem'
import classes from './RemovedPieces.module.css'

const RemovedPieces = (props) => {
  const {side} = props
  const removedPieces = useSelector(state => state.board.removed_pieces[side])
  const arranged_list = arrangeRemovedPieces(removedPieces , side)

  return (
    <div className={classes.removedPieces}>
        {
            arranged_list.map(r => 
                r.qty >0 && <RemovedItem data = {r}/>
            )
        }
    </div>
  )
}

export default RemovedPieces