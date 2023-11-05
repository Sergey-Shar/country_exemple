
import { Navigation } from '..'
import { useThemeContext } from '../../context'
// import { logout } from '../../redux'
import { useAppSelector } from '../../shared/hooks/useRedux'
import styles from './styles.module.css'
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {

	const { changeTheme } = useThemeContext()
	const navigate = useNavigate()
	const auth = useAppSelector((state) => state?.auth.authorization)

	const handleLogout = () => {
		//TODO logout
			}

 return (
		<header className={styles.header}>
			<div className={`container ${styles['container--header']}`}>
				<Link to="/">logo</Link>
				<Navigation />
				<button onClick={changeTheme}>change theme</button>
				{auth ? (
					<button onClick={handleLogout}>Logout</button>
				) : (
					<button onClick={() => navigate('/login')}>Login</button>
				)}
			</div>
		</header>
	)
}
 