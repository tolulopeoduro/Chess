import { useEffect } from "react"
import styles from "./Board.module.scss"
import classNames from "classnames"
import { Icon } from "@iconify/react"
import Pawn from "../pieces/Pawn"
import { useSelector } from "react-redux"
import { parse_box_data } from "../utils"
import Piece from "../pieces/Piece"

const Board = () => {

	const board = useSelector(s => s.board);

	const handle_pieces = (box_data_string, box_name) => {
		const d = parse_box_data(box_data_string)
		switch (d?.type) {
			case "pawn":
				return <Pawn side = {d.side} position = {box_name} />
				break;
			default:
				break;
		}
	}

	return (
		<div onClick={() => {
		}} className={styles.board}>
			<div className={styles.board_top}>
					{
						[1,2,3,4,5,6,7,8].map((i) => <span key={i}>{i}</span>)
					}
			</div>
			<div className={styles.board_middle}>
				<div className={styles.board_left}>
					{
						['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
						.map((m, index) => <span key={index}>{m}</span>)
					}
				</div>
				<div className={styles.box}>
					{
						Object.values(board).map((box, index) => {
							return (
								<div key={index}
								className={classNames(styles.square, {[styles.white] : !box.colored, [styles.black] : box.colored})} >
									{
										handle_pieces(box.piece, box.name)
									}
								</div>
							)
						})
					}
				</div>
				<div className={styles.board_right}>
				{
					['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
					.map((m, index) => <span key={index}>{m}</span>)
				}
				</div>
			</div>
			<div className={styles.board_bottom}>
				{
					[1,2,3,4,5,6,7,8].map((i) => <span key={i}>{i}</span>)
				}
			</div>
		</div>
	)
}

export default Board