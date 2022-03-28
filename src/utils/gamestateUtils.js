import { setGameState } from '../features/Board/BoardSlice'
import {store} from '../store'

const movement_alert = (side , n) => {
    const gameState = {...store.getState().board.gameState}
    if (gameState[n][side]) return
    let p = {...gameState[n]}
    p[side] = true
    gameState[n] = p
    store.dispatch(setGameState(gameState))
}

export default movement_alert