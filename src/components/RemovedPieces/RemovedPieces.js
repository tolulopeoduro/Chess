import { useSelector } from "react-redux"
import styles from "./RemovedPieces.module.scss"
import PiecesList from "./PiecesList";

export default () => {
	return (
		<div className={styles.removed_pieces}>
			<div>
				<PiecesList side = "a"/>
			</div>
			<div>
				<PiecesList side = "b"/>
			</div>
		</div>
	)
}