import classNames from "classnames";
import Piece from "./Piece";
import styles from "./piece_style.module.scss";
import { store } from "../Redux/Store";
import { update_selected_piece } from "../Redux/reducers/selected_piece";
import { handle_piece_click, move, parse_piece_data } from "../utils";

export default class Pawn extends Piece {
	constructor (props) {
		super(props);
		this.side = this.props.side;
		this.position = this.props.position;
	};
	
	type = "pawn";
	side;
	position;
	
	list_available_moves () {
		let moves = [];
		if (this.props.side === "b") {
			moves = [
				this.check_box_availability(this.move_up(this.position), true),
				...(this.position.split("")[0] === "g" && this.check_box_availability(this.move_up(this.position), true)) ? 
				[this.check_box_availability(this.move_up(this.move_up(this.position)), true)] : [],
				this.check_for_kill(this.move_top_left(this.position)),
				this.check_for_kill(this.move_top_right(this.position)),	
			]
		} else {
			moves = [
				this.check_box_availability(this.move_down(this.position), true),
				...(this.position.split("")[0] === "b" && this.check_box_availability(this.move_down(this.position), true)) ? 
				[this.check_box_availability(this.move_down(this.move_down(this.position)), true)] : [],
				this.check_for_kill(this.move_bottom_left(this.position)),
				this.check_for_kill(this.move_bottom_right(this.position))
			]
		}
		return moves.filter(move => move);
	}
	
	handle_click () {
		handle_piece_click(this)
	}

	render () {
		return (
			<div className={styles.piece} onClick={() => this.handle_click()}>
				<svg className={
					classNames({[styles[this.props.side]] : true,
					[styles.available_move] : this.props.is_available})
				} xmlns="http://www.w3.org/2000/svg" width="0.63em" height="1em" viewBox="0 0 320 512">
					<path fill="#b6b6b6" d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400h160l-12.5-112.2c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16c0 12.5 10.1 22.6 22.6 22.6h242.8c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64l-41.4 41.4z"/></svg>
			</div>
		)
	}
}