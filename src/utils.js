export const new_board = () => {
	let board = {};

	let s = true;
	let j = 1;

	const fill_positions = (ar, piece_type) => {
		ar.forEach(pos => {
			let index = Object.keys(board).indexOf(pos)
			board[pos].piece = `${piece_type}_${get_piece_side(index)}`
		})
	}

	const get_piece_side = (i) => i <= 31 ? "a" : "b";

	const rook_positions = ["a1", "a8", "h1" ,"h8"];
	const bishop_positions = ["a3", "a6", "h3", "h6"];
	const knight_positions = ["a2", "a7", "h2","h2"];
	const king_positions = ["a5", "h5"];
	const queen_positions = ["a4", "h4"];
	const pawn_positions = 
	["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", 
	"g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8" ]



	let i = 0;

	const rows = ["a", "b", "c", "d", "e", "f", "g", "h"];
	const columns = [1, 2, 3, 4, 5, 6, 7, 8];

	rows.forEach(row => {
		columns.forEach(column => {
			let box_name = row+column;
			board[box_name] = {
				colored: s ? i % 2 === 0 : i % 2 !== 0,
				name : box_name
			}
			i++;
		})
		s = s? false : true;
	})

	fill_positions(rook_positions, "rook")
	fill_positions(bishop_positions, "bishop")
	fill_positions(knight_positions, "knight")
	fill_positions(king_positions, "king")
	fill_positions(queen_positions, "queen")
	fill_positions(pawn_positions, "pawn")

	board["f4"].piece = `pawn_a`
	board["f7"].piece = `pawn_a`

	return board;
}

export const parse_piece_data = (str) => {
	if(!str) return null;
	let split_str = str.split('_');
	return {
		type : split_str[0],
		side : split_str[1]
	}
}