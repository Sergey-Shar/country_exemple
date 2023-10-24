import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import { useAppDispatch } from '../../shared/hooks/useRedux'
import { loginAction } from '../../redux/actions/authActions'

export const Login = () => {

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const userName = formData.get('userName')?.toString()
		if (userName) {
			dispatch(loginAction(userName))
			navigate('/countries', { replace: true })
		}
	}	
	return (
		<div className="container">
			<div className={styles.formContainer}>
				<form className={styles.form} onSubmit={handleLogin}>
					<label htmlFor="userName">name</label>
					<input className="input" type="text" name="userName" id="userName" />
					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	)
}
