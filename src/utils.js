import { store } from "./Redux/Store";
import { update_available_moves } from "./Redux/reducers/available_moves_reducer";
import { update_board } from "./Redux/reducers/board_reducer";
import { update_selected_piece } from "./Redux/reducers/selected_piece";



export const move = (current_square, target_square) => {
	let board = {...store.getState(s => s).board};
	let current_square_data = board[current_square];
	let target_square_data = board[target_square];

	if (target_square_data.piece_string_data) {
		// console.log(target_square_data.piece_string_data, 'lmhoho');
		// return
	}
	
	board[target_square] = {
		...target_square_data,
		piece_string_data: current_square_data.piece_string_data
	}

	board[current_square] = {
		...current_square_data,
		piece_string_data: null
	}

	store.dispatch(update_selected_piece(null))
	store.dispatch(update_board(board));
}

export const parse_piece_data = (str) => {
	if(!str) return null;
	let split_str = str.split('_');
	return {
		type : split_str[0],
		side : split_str[1]
	}
}