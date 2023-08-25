import { useEffect, useState } from "react"
import Board from "../../Board/BoardComponent"
import styles from "./App.module.scss"
import classNames from "classnames"
import LeftSide from "../LeftSide/LeftSide"
import Buttons from "../LeftSide/Buttons/Buttons"
import Players from "../Players/Players"
import Backdrop from "../Backdrop/Backdrop"
import MainMenu from "../Modals/MainMenu/MainMenu"
import { useSelector } from "react-redux"
import NewGameMenu from "../Modals/NewGameMenu/NewGameMenu"

const App = () => {

	const [orientation, set_orientation] = useState(null);
	const {modal} = useSelector(s => s)

	useEffect(() => {
		set_orientation(window.screen.orientation.type.split("-")[0]);
		window.addEventListener("resize",() => {
			set_orientation(window.screen.orientation.type.split("-")[0]);
		})
	}, [])

	const [theme, set_theme] = useState("light_theme_1")

	return (
		<div className={classNames(styles.App, theme)}>
			<div>
				<LeftSide/>
				<Buttons portrait/>
				<Board/>
				<Players portrait/>
				{
					modal === "main_menu" && <Backdrop child = {<MainMenu/>}/>
				}
				{
					modal === "new_game" && <Backdrop child = {<NewGameMenu/>}/>
				}
				<select value={theme} onChange={(e) => set_theme(e.target.value)} className={styles.switch}>
					<optgroup label="dark themes">
						<option value={"dark_theme_1"}>
							dark theme 1
						</option>
						<option value={"dark_theme_2"}>
							dark theme 2
						</option>
					</optgroup>
					<optgroup label="light themes">
						<option value={"light_theme_1"}>
							light theme 1
						</option>
					</optgroup>
					<optgroup label="others">
						<option value={"white_and_black"}>
							white and black
						</option>
					</optgroup>
				</select>
			</div>
		</div>
	)
}

export default App