import { useSelector } from "react-redux"
import styles from "../LeftSide/LeftSide.module.scss"
import { useEffect } from "react";
import { organise_pieces } from "../../utils";
import PiecesList from "./PiecesList";

export default () => {

	const removed_pieces = useSelector(s => s).removed_pieces;

	

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