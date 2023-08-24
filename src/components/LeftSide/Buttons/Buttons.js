import classNames from "classnames"
import styles from "./Buttons.modules.scss"
import { useEffect } from "react"

export default (props) => {

	return (
		<div className={classNames(styles.buttons, {[styles.hide] : props.portrait})}>
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z"/>
					</svg>
					<span>Home</span>
				</button>
				<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
					stroke-width="2"><path d="M12 3a9 9 0 1 1-5.657 2"/><path d="M3 4.5h4v4"/></g>
					</svg>
					<span>Restart</span>
				</button>
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path fill="currentColor" d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1Zm0 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"/>
					</svg>
					<span>Settings</span>
				</button>
				{/* <button>b</button> */}
			</div>
	)
}