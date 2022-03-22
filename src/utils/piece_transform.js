import { store } from "../store"

const pieceTransform = (piece , current_selection) => {
    store.dispatch(dispatch(select({...selection , piece : piece})))
    movePiece({...current_selection})
}
