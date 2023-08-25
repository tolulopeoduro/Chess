import classNames from "classnames";
import styles from "./PlayerData.module.scss"
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default (props) => {

	const {side, player_name} = props;
	const {turn} = useSelector(s => s);

	return (
		<div className={classNames(styles.playerData)}>
				<div className={styles.icon}>
					<svg className={styles[side]} xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512"><path fill="#b6b6b6" 
					d="M224 0c17.7 0 32 14.3 32 32v16h16c17.7 0 32 14.3 32 32s-14.3 32-32 32h-16v48h152c22.1 0 40 17.9 40 40c0 5.3-1 10.5-3.1 15.4L368 400H80L3.1
					 215.4C1 210.5 0 205.3 0 200c0-22.1 17.9-40 40-40h152v-48h-16c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V32c0-17.7 14.3-32 32-32zM38.6 
					 473.4L80 432h288l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H54.6C42.1 512 32 501.9 32 489.4c0-6 2.4-11.8 6.6-16z"/>
					 </svg>
				</div>
				<div className={styles.player_info}>
					<h1>{player_name}</h1>
					<p>00:00:00</p>
				</div>
				<div className={classNames(styles.turn_indicator, {[styles.turn] : turn === side})}>
				</div>
			</div>
	)
}