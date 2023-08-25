import ClickAwayListener from "react-click-away-listener"
import styles from "./MainMenu.module.scss"
import { useDispatch } from "react-redux"
import { update_modal } from "../../../Redux/reducers/modal_reducer"
import modal_style from "../Modals.module.scss"
import { Fragment } from "react"
import classNames from "classnames"

export default () => {

	const dispatch = useDispatch()

	return (
			<div className={classNames(modal_style.modal_container, styles.container)}>
				<div>
					<h1>CHESS</h1>
				</div>
				<div className={styles.buttons}>
					<button onClick={() => dispatch(update_modal(null))}>CONTINUE</button>
					<button onClick={() => dispatch(update_modal("new_game"))}>NEW GAME</button>
				</div>
				<span>by <a>Oduro Tolulope</a></span>
			</div>
	)
}