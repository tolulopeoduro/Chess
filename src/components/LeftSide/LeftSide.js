import PlayerData from "../PlayerData/PlayerData"
import Players from "../Players/Players"
import RemovedPieces from "../RemovedPieces/RemovedPieces"
import Buttons from "./Buttons/Buttons"
import styles from "./LeftSide.module.scss"

export default (props) => {
	return (
		<div className={styles.left_side}>
			<Buttons/>
			<RemovedPieces/>
			<Players/>
		</div>
	)
}