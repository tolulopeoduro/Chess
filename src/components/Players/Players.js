import classNames from "classnames"
import PlayerData from "../PlayerData/PlayerData"
import styles from "./Players.module.scss"
import { useEffect } from "react"

export default (props) => {

	useEffect(() => console.log(props.portrait), [])

	return (
		<div className={classNames(styles.Players, {[styles.hide]: props.portrait})}>
			<PlayerData side="a"/>
			<PlayerData side="b"/>
		</div>
	)
}