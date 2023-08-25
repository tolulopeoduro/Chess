import classNames from "classnames";
import modal_style from "../Modals.module.scss";
import styles from "./RestartModal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { reset_board } from "../../../Redux/reducers/board_reducer";
import { update_modal } from "../../../Redux/reducers/modal_reducer";
import { return_removed_pieces } from "../../../Redux/reducers/removed_pieces_reducer";
import { useEffect } from "react";
import { change_turn } from "../../../Redux/reducers/turn_reducer";

export default () => {

	const dispatch = useDispatch();
	const {modal, turn} = useSelector(s => {return {turn : s.turn, modal: s.modal}})

	const restart = () => {
		dispatch(reset_board());
		dispatch(return_removed_pieces())
		dispatch(change_turn("a"))
		dispatch(update_modal(null))
	}

	return (
		<div id="restart-modal" className={classNames(modal_style.modal_container, styles.container)}>
			<div className={styles.header}>
				<h1>ARE YOU SURE</h1>
			</div>
			<div className={styles.buttons}>
				<button onClick={() => restart()}>
					RESTART
				</button>
				<button onClick={() => dispatch(update_modal(null))}>
					CANCEL
				</button>
			</div>
		</div>
	)
}