import { store } from "./Redux/Store";
import { update_available_moves } from "./Redux/reducers/available_moves_reducer";
import { update_board } from "./Redux/reducers/board_reducer";
import { update_removed_pieces } from "./Redux/reducers/removed_pieces_reducer";
import { update_selected_piece } from "./Redux/reducers/selected_piece";
import { change_turn } from "./Redux/reducers/turn_reducer";



export const move = (current_square, target_square) => {
	let board = {...store.getState(s => s).board};
	let turn = store.getState(s => s).turn;
	let current_square_data = board[current_square];
	let target_square_data = board[target_square];

	if (target_square_data.piece_string_data) {
		// Add to remove pieces;
		remove_piece(target_square_data.piece_string_data);
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
	store.dispatch(change_turn(turn === "a" ? "b" : "a"));	
	store.dispatch(update_board(board));
}

const remove_piece = (piece_string_data) => {
	let piece_data = parse_piece_data(piece_string_data);
	if (!piece_data) return;
	const {side, type} = piece_data;
	let removed_pieces = {...store.getState(s => s).removed_pieces};
	let pieces_for_player = {...removed_pieces[side]};

	if(pieces_for_player[type]) {
		pieces_for_player[type] = pieces_for_player[type]+1;
	} else {
		pieces_for_player[type] = 1;
	}

	removed_pieces = {...removed_pieces, [side] : pieces_for_player}
	
	store.dispatch(update_removed_pieces(removed_pieces))
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
	const st = store.getState(s => s);
	const selected_piece = st.selected_piece;
	const turn = st.turn;

	if (turn === box.props.side) {
		store.dispatch(update_selected_piece({
			position : box.position,
			piece_str: `${box.type}_${box.side}`,
			available_moves: box.list_available_moves()
		}))

		if (selected_piece?.position === box.position) {
			store.dispatch(update_selected_piece(null));
		}
	}

	
	if (selected_piece) {
		const selected_piece_side = parse_piece_data(selected_piece?.piece_str)?.side;
		const available_moves = selected_piece.available_moves;
		
		if (available_moves && available_moves.includes(box.position)) {
			move(selected_piece.position, box.position);
		}
		
	}
}	

export const organise_pieces = (ar) => {
	let obj = {};
	ar.forEach(element => {
		let name = element.split("_")[0]
		if (!obj[name]) {
			obj[name] = 1;
		} else {
			obj[name] = obj[name]+1;
		}
	});
	return obj;
}