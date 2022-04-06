import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './PlayerDetailContainer.module.css'
import arrangeRemovedPieces from '../../utils/arrangeRemovedPieces'
import RemovedItem from '../RemovedItem/RemovedItem'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import RemovedPieces from '../RemovedPieces/RemovedPieces'

const PlayerDetailsContainer = (props) => {

    const {player , removed , isLargeScreen} = props
    const turn = useSelector(state => state.board.turn)
    const check = useSelector(state => state.check)

    const {t} = useTranslation()
    return (
        <div className = {classes.large}>
            <div className={classes.player_name}>
                <h1>PLAYER {player}</h1>&nbsp;
                <div className={classes.player_piece}>
                    <img src = {require(`../../assets/images/board/king_${player}.PNG`)} height ="100%" />
                </div>&nbsp;
                <div style={{visibility : turn  !== player && 'hidden'}} className={classes.player_turn}></div>
                <div style={{visibility : check.side !== player && "hidden"}} className={classes.check_alert}>{check.checkmate ? 'CHECKMATE' : 'CHECK' }</div>
            </div>
            <RemovedPieces side ={player}/>
        </div>
    )
}

export default PlayerDetailsContainer