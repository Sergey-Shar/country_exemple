
import { Navigation } from '..'
import { useThemeContext } from '../../context'
import { logoutAction } from '../../redux/actions/authActions'
import { authSelector } from '../../redux/selectors/selectors'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/useRedux'
import styles from './styles.module.css'
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {

	const { changeTheme } = useThemeContext()
	
	const navigate = useNavigate()
	const { user } = useAppSelector(authSelector)
	const dispatch = useAppDispatch()

	const handleLogout = () => {
		const action = logoutAction()
		dispatch(action)
			navigate('/')
			}

 return (
		<header className={styles.header}>
			<div className={`container ${styles['container--header']}`}>
				<Link to="/">logo</Link>
				<Navigation/>
				<button onClick={changeTheme}>change theme</button>
				{user ?
					<button onClick={handleLogout}>Logout</button> :
					<button onClick={() => navigate('/login')}>Login</button>
				}
				
			</div>
		</header>
	)
}
 