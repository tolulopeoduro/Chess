import classNames from "classnames";
import Piece from "./Piece";
import styles from "./piece_style.module.scss";
import { store } from "../Redux/Store";
import { update_selected_piece } from "../Redux/reducers/selected_piece";
import { handle_piece_click, move, parse_piece_data } from "../utils";

export default class bishop  extends Piece {
	constructor(props) {
		super(props);
		this.side = this.props.side;
		this.position = this.props.position;
	}

	

	list_available_moves () {
		let ar = [];
		this.check_multiple_moves(this.position, "top_left", ar)
		this.check_multiple_moves(this.position, "top_right", ar)
		this.check_multiple_moves(this.position, "bottom_left", ar)
		this.check_multiple_moves(this.position, "bottom_right", ar)
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
					xmlns="http://www.w3.org/2000/svg" width="0.63em" height="1em" viewBox="0 0 320 512"><path fill="#b6b6b6" d="M128 0c-17.7 0-32 14.3-32 32c0 16.1 11.9 29.4 27.4 31.7C78.4 106.8 8 190 8 288c0 47.4 30.8 72.3 56 84.7V400h192v-27.3c25.2-12.5 56-37.4 56-84.7c0-37.3-10.2-72.4-25.3-104.1l-99.4 99.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l106.1-106.1c-23.2-38.1-51.8-69.5-74.2-90.9C212.1 61.4 224 48.1 224 32c0-17.7-14.3-32-32-32h-64zM48 432L6.6 473.4c-4.2 4.2-6.6 10-6.6 16C0 501.9 10.1 512 22.6 512h274.8c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L272 432H48z"/></svg>
			</div>
		)
	}
}