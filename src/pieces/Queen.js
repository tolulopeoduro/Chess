import classNames from "classnames";
import Piece from "./Piece";
import styles from "./piece_style.module.scss";
import { store } from "../Redux/Store";
import { update_selected_piece } from "../Redux/reducers/selected_piece";
import { handle_piece_click, move, parse_piece_data } from "../utils";

export default class Queen extends Piece {
	constructor(props) {
		super(props);
		this.side = this.props.side;
		this.position = this.props.position;
	}

	check_multiple_moves (position, direction, ar) {
		const next = () => {
			switch (direction) {
				case "up":
					return this.move_up(position);
					break;
				case "down":
					return this.move_down(position);
					break;
				case "left":
					return this.move_left(position);
					break;
				case "right":
					return this.move_right(position);
					break;
				case "top_left":
					return this.move_top_left(position);
					break;
				case "top_right":
					return this.move_top_right(position);
					break;
				case "bottom_left":
					return this.move_bottom_left(position);
					break;
				case "bottom_right":
					return this.move_bottom_right(position);
					break;
				default:
					break;
			}
		}
		const next_square = next();
		let next_is_avaiable = this.check_box_availability(next_square);
		if (next_is_avaiable) {
			ar.push(next_square)

			if (!this.is_box_occupied(next_square)) {
				this.check_multiple_moves(next_square, direction, ar);
			}
		}
	}

	list_available_moves () {
		let ar = [];
		this.check_multiple_moves(this.position, "left", ar)
		this.check_multiple_moves(this.position, "right", ar)
		this.check_multiple_moves(this.position, "up", ar)
		this.check_multiple_moves(this.position, "down", ar)
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
					[styles.available_move]: this.props.is_available})
					}
					xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="#b6b6b6" d="M256 0a56 56 0 1 1 0 112a56 56 0 1 1 0-112zM134.1 143.8c3.3-13 15-23.8 30.2-23.8c12.3 0 22.6 7.2 27.7 17c12 23.2 36.2 39 64 39s52-15.8 64-39c5.1-9.8 15.4-17 27.7-17c15.3 0 27 10.8 30.2 23.8c7 27.8 32.2 48.3 62.1 48.3c10.8 0 21-2.7 29.8-7.4c8.4-4.4 18.9-4.5 27.6.9c13 8 17.1 25 9.2 38L399.7 400H112.3L5.4 223.6c-7.9-13-3.8-30 9.2-38c8.7-5.3 19.2-5.3 27.6-.9c8.9 4.7 19 7.4 29.8 7.4c29.9 0 55.1-20.5 62.1-48.3zM256 224zM112 432h288l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H86.6C74.1 512 64 501.9 64 489.4c0-6 2.4-11.8 6.6-16L112 432z"/></svg>
			</div>
		)
	}
}