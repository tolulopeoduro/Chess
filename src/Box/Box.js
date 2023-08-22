import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from "./Box.module.scss"
import { parse_piece_data } from '../utils'
import Pawn from '../pieces/Pawn'
import { useSelector } from 'react-redux'

const Box = (props) => {
	
	const box = props.box;

	const selected_piece = useSelector(s => s.selected_piece)
	const [is_available, set_availability] = useState(false);

	useEffect(() => {
		set_availability(box_is_available());
	}, [selected_piece])


	const box_is_available = () => {
		return selected_piece?.available_moves?.includes(box.name)
	}

	const handle_pieces = (box_data_string, box_name) => {
		const d = parse_piece_data(box_data_string)
		switch (d?.type) {
			case "pawn":
				return <Pawn side = {d.side} position = {box_name} is_available = {is_available}  />
				break;
			default:
				break;
		}
	}

	const classes = {
		[styles.white] : !box.colored,
		[styles.black] : box.colored,
		[styles.available_piece] : box_is_available() && box.piece
	}
	
	return (
		<div id = {box.name} 
		className={classNames(styles.square, classes)} >
			{
				box.piece ? handle_pieces(box.piece, box.name) : 
				box_is_available() ?
				<div className={styles.available_box}>
					<div></div>
				</div> : null
			}
		</div>
	)
}

export default Box