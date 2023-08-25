import { useDispatch } from "react-redux"
import { update_modal } from "../../../Redux/reducers/modal_reducer"
import styles from "./NewGameMenu.module.scss"
import { useEffect, useState } from "react";
import { set_side, set_sides } from "../../../Redux/reducers/sides_reducer";
import { reset_board } from "../../../Redux/reducers/board_reducer";
import classNames from "classnames";
import modalStyle from "../Modals.module.scss";
import { return_removed_pieces } from "../../../Redux/reducers/removed_pieces_reducer";

export default () => {

	const dispatch = useDispatch();
	
	const [player_a_name, set_player_a_name] = useState("");
	const [player_b_name, set_player_b_name] = useState("");

	const handle_name = (name, side) => {
		let regex = (/^([a-z0-9A-Z])[a-z0-9_ ]{0,12}$/i)
		if (name?.match(regex))
			return name;
		else 
			return `Player ${side}`
	}

	useEffect(() => {
	}, [player_a_name])

	const handle_start = () => {
		const data = {
			a : {
				side : "a",
				player_name : handle_name(player_a_name, "a"),
				wins : 0
			},
			b : {
				side : "b",
				player_name : handle_name(player_b_name, "b"),
				wins : 0
			}
		}

		dispatch(set_sides(data));
		dispatch(reset_board());
		dispatch(return_removed_pieces())
		setTimeout(() => dispatch(update_modal(null)), 0);
	}

	return (
		<div className={classNames(modalStyle.modal_container, styles.container)}>
			<div className={styles.header}>
				<span className={styles.back_button} onClick={() => dispatch(update_modal("main_menu"))}>
					<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"/><path fill="currentColor" d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"/></svg>
				</span>
				<h1>NEW GAME</h1>
			</div>
			<div className={styles.inputs}>
				<input value={player_a_name} onChange={(e) => set_player_a_name(e.target.value)} type="text" placeholder="PLAYER A" />
				<input value={player_b_name} onChange={(e) => set_player_b_name(e.target.value)} type="text" placeholder="PLAYER B" />
			</div>
				<button onClick={() => handle_start()}>
					START
				</button>
				<span className={styles.info}>
				<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path fill="currentColor" d="M18 6a12 12 0 1 0 12 12A12 12 0 0 0 18 6Zm-2 5.15a2 2 0 1 1 2 2a2 2 0 0 1-2.1-2ZM23 24a1 1 0 0 1-1 1h-7a1 1 0 1 1 0-2h2v-6h-1a1 1 0 0 1 0-2h4v8h2a1 1 0 0 1 1 1Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
					You can start without filling player names</span>
		</div>
	)
}