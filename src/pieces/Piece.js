import React from "react";
import { move, parse_piece_data } from "../utils";
import { store } from "../Redux/Store"
import styles from "./piece_style.module.scss"
import classNames from "classnames";

export default class Piece extends React.Component {
	constructor (props) {
		super(props);
		this.side = this.props.side;
		this.position = this.props.position;
	}

	rows = ["a", "b", "c", "d", "e", "f", "g", "h"];
	columns = [1, 2, 3, 4, 5, 6, 7, 8];

	move_down (position) {

		if (!position) return null;
		const row = position.split("")[0]
		const column = parseInt(position.split("")[1])
		
		const row_index = this.rows.indexOf(row);
		if (row_index !== -1 && row_index < 7) {
			const new_row = this.rows[row_index+1]
			return new_row+column;
		} else {
			return null;
		}
	}

	move_up (position) {
		if (!position) return null;
		const row = position.split("")[0]
		const column = parseInt(position.split("")[1])
		
		const row_index = this.rows.indexOf(row);
		
		if (row_index !== -1 && row_index >= 0) {
			const new_row = this.rows[row_index-1]
			return new_row+column;
		}
		return null;
	}

	move_left (position) {
		if (!position) return null;
		const row = position.split("")[0];
		const column = parseInt(position.split("")[1]);
		const column_index = this.columns.indexOf(column);
		if (column_index !== -1 && column_index >= 0) {
			const new_column = this.columns[column_index-1];
			return row+new_column;
		}
		return null;
	}

	move_right (position) {
		if (!position) return null;
		const row = position.split("")[0]
		const column = parseInt(position.split("")[1])
		
		const column_index = this.columns.indexOf(column);

		if (column_index !== -1 && column_index < 7) {
			const new_column = this.columns[column_index+1]
			return row + new_column;
		}
		return null;
	}

	move_top_left (position) {
		return this.move_left(this.move_up(position));
	}
	move_top_right (position) {
		return this.move_right(this.move_up(position));
	}
	move_bottom_left (position) {
		return this.move_left(this.move_down(position));
	}
	move_bottom_right (position) {
		return this.move_right(this.move_down(position));
	}

	check_box_availability (box, is_pawn) {
		if (!box) return false; 
		const board = store.getState(s => s).board;
		const box_data = board[box];
		if (!box_data?.piece_string_data) return box;
		if (!is_pawn) {
			return this.check_for_kill(box);
		}
	}
	
	check_for_kill (box) {
		if (!box) return; 
		const board = store.getState(s => s).board
		const box_data = board[box];
		if (!box_data.piece_string_data) return;
		
		const piece_data = parse_piece_data(box_data.piece_string_data);
		return piece_data.side !== this.props.side ? box : null;
	}



	handle_click () {
		const selected_piece = store.getState(s => s).selected_piece;
		move(selected_piece.position, this.position)
	}

	render () {
		return (
			<div onClick={() => this.handle_click()}
			className={classNames({[styles.available_box]: this.props.is_available})}>
				<div></div>
			</div>
		)
	}
}