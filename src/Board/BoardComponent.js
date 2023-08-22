import styles from "./Board.module.scss"
import Pawn from "../pieces/Pawn"
import { useSelector } from "react-redux"
import { parse_piece_data } from "../utils"
import Box from "../Box/Box"

const Board = () => {

	const board = useSelector(s => s.board);

	

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
						Object.values(board).map((box, index) => <Box key = {index} box = {box}/>)	
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