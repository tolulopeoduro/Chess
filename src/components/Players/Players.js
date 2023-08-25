import classNames from "classnames"
import PlayerData from "../PlayerData/PlayerData"
import styles from "./Players.module.scss"
import { useEffect } from "react"
import { useSelector } from "react-redux"

export default (props) => {

	const {sides : player_data} = useSelector(s => s);

	return (
		<div className={classNames(styles.Players, {[styles.hide]: props.portrait})}>
			<PlayerData {...player_data?.["a"]}/>
			<PlayerData {...player_data?.["b"]}/>
		</div>
	)
}