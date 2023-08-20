import React from "react";

export default class Piece extends React.Component {
	constructor (props) {
		super(props);
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
		const row = position.split("")[0]
		const column = parseInt(position.split("")[1])
		
		const row_index = this.rows.indexOf(row);
		
		if (row_index !== -1 && row_index > 0) {
			const new_row = this.rows[row_index-1]
			return new_row+column;
		}
		return null;
	}

	move_left (position) {
		const row = position.split("")[0];
		const column = parseInt(position.split("")[1]);
		const column_index = this.columns.indexOf(column);
		if (column_index !== -1 && column_index > 0) {
			const new_column = this.columns[column_index-1];
			return row+new_column;
		}
		return null;
	}

	move_right (position) {
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

	check_box_availability (box) {
		return;
		if (!box) return false; 
		return box.piece === null || box.piece.side !== this.side;
	}
}