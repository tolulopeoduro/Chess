import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './PlayerDetailContainer.module.css'
import arrangeRemovedPieces from '../../utils/arrangeRemovedPieces'
import RemovedItem from '../RemovedItem/RemovedItem'
import { useSelector } from 'react-redux'

const PlayerDetailsContainer = (props) => {

    const {player , removed} = props
    const ar = arrangeRemovedPieces(removed , player === "A" ? "B" : "A")
    const turn = useSelector(state => state.board.turn)
    const check = useSelector(state => state.check.side)

    const {t} = useTranslation()
    // turn === player add green dot , check === playre && add red dot
    return (
        <div className = {classes.playerContainer}>
            <div style={{flexDirection :player === "A" && "row-reverse"}}>
                <img src ={require(`../../assets/images/board/king_${player}.PNG`)} height = '20px' />
                <h1>Player {player}</h1> <div style={{visibility : player !== turn && "hidden"}} className={classes.playerBox}></div>
            </div>
            <div style={{visibility : check !== player && "hidden"}} className={classes.checkAlert}>CHECK</div>
            {/* <div className={classes.removedPieces}>
                {
                    ar.map(r => 
                        r.qty >0 && <RemovedItem data = {r}/>
                    )
                }
            </div> */}
        </div>
    )
}

export default PlayerDetailsContainer