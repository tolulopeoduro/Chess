import Piece from "./Piece";

export default class Pawn extends Piece {
	constructor (props) {
		super(props);
		this.side = this.props.side;
		this.position = this.props.position;
	}
	
	
	type = "pawn";
	side;
	position;
	
	list_available_moves () {
		let moves = [];
		if (this.props.side === "a") {
			moves = [
				this.check_box_availability(this.move_up(this.position)),
				this.check_box_availability(this.move_top_left(this.position)),
				this.check_box_availability(this.move_top_right(this.position)),
				this.check_box_availability(this.move_up(this.move_up(this.position)))
			]
		} else {
			moves = [
				this.check_box_availability(this.move_down(this.position)),
				this.check_box_availability(this.move_down(this.move_down(this.position))),
				this.check_box_availability(this.move_bottom_left(this.position)),
				this.check_box_availability(this.move_bottom_right(this.position))
			]
		}
		// console.log(moves.filter(move => move));
	}

	render () {
		return (
			<p>{this.type + "_" + this.side}</p>
		)
	}
}