import { store } from "./Redux/Store";
import { update_available_moves } from "./Redux/reducers/available_moves_reducer";
import { update_board } from "./Redux/reducers/board_reducer";
import { update_selected_piece } from "./Redux/reducers/selected_piece";



export const move = (current_square, target_square) => {
	let board = {...store.getState(s => s).board};
	let current_square_data = board[current_square];
	let target_square_data = board[target_square];

	if (target_square_data.piece_string_data) {

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

export const handle_piece_click = (box) => {
	const selected_piece = store.getState(s => s).selected_piece;
	if (selected_piece) {
		const selected_piece_side = parse_piece_data(selected_piece?.piece_str)?.side;
		const available_moves = selected_piece.available_moves;
	
	
		if (((available_moves && selected_piece_side) && selected_piece_side != box.side) && available_moves.includes(box.position)) {
			move(selected_piece.position, box.position)
			return;
		}
		
	}
	store.dispatch(update_selected_piece({
		position : box.position,
		piece_str: `${box.type}_${box.side}`,
		available_moves: box.list_available_moves()
	}))
}	