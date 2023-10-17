import { useThemeContext } from '../../context'
import styles from './styles.module.css'

export const Header = () => {

	const { changeTheme } = useThemeContext()

 return (
		<header className={styles.header}>
			<div className={`container ${styles['container--header']}`}>
				<a href="#">logo</a>
				<button onClick={changeTheme}>change theme</button>
			</div>
		</header>
	)
}
 