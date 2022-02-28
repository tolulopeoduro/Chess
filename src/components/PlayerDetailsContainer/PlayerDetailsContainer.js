import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './PlayerDetailContainer.module.css'
import arrangeRemovedPieces from '../../utils/arrangeRemovedPieces'
import RemovedItem from '../RemovedItem/RemovedItem'

const PlayerDetailsContainer = (props) => {

    const {player , removed} = props
    const ar = arrangeRemovedPieces(removed , player === "A" ? "B" : "A")

    const {t} = useTranslation()
    // turn === player add green dot , check === playre && add red dot
    return (
        <div className = {classes.playerContainer}>
            <h1>Player {player}</h1> {}
            <div className={classes.removedPieces}>
                {
                    ar.map(r => 
                        r.qty >0 && <RemovedItem data = {r}/>
                    )
                }
            </div>
        </div>
    )
}

export default PlayerDetailsContainer