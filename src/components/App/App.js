import { useEffect, useState } from "react"
import Board from "../../Board/BoardComponent"
import styles from "./App.module.scss"
import classNames from "classnames"

const App = () => {

	const [theme, set_theme] = useState("light_theme")

	return (
		<div className={classNames(styles.App, theme)}>
			<Board/>
			<select value={theme} onChange={(e) => set_theme(e.target.value)} className={styles.switch}>
				<option value={"dark_theme"}>
					dark
				</option>
				<option value={"light_theme"}>
					light
				</option>
				<option value={"white_and_black"}>
					white and black
				</option>
			</select>
		</div>
	)
}

export default App