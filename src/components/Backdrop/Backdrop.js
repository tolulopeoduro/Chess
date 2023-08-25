import styles from "./Backdrop.module.scss"

export default (props) => {
	return (
		<div className={styles.container}>
			{props.child}
		</div>
	)
}