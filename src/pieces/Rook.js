import classNames from "classnames";
import Piece from "./Piece";
import styles from "./piece_style.module.scss";
import { store } from "../Redux/Store";
import { update_selected_piece } from "../Redux/reducers/selected_piece";
import { handle_piece_click, move, parse_piece_data } from "../utils";

export default class Rook extends Piece {
	constructor(props) {
		super(props);
		this.side = this.props.side;
		this.position = this.props.position;
	}

	list_available_moves () {
		let ar = [];
		this.check_multiple_moves(this.position, "left", ar)
		this.check_multiple_moves(this.position, "right", ar)
		this.check_multiple_moves(this.position, "up", ar)
		this.check_multiple_moves(this.position, "down", ar)
		return ar;
	}

	handle_click () {
		handle_piece_click(this);
	}

	render () {
		return (
			<div className={styles.piece} onClick={() => this.handle_click()}>
					<svg className={
					classNames({[styles[this.props.side]] : true,
					[styles.available_move] : this.props.is_available})
					}
					xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512"><path fill="#b6b6b6" d="M32 192V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v40c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v40c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v144c0 10.1-4.7 19.6-12.8 25.6L352 256l16 144H80l16-144l-51.2-38.4c-8.1-6-12.8-15.5-12.8-25.6zm176 96h32c8.8 0 16-7.2 16-16v-48c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16zM22.6 473.4L64 432h320l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H38.6C26.1 512 16 501.9 16 489.4c0-6 2.4-11.8 6.6-16z"/></svg>
			</div>
		)
	}
}