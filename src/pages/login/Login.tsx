import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/auth/useAuthContext'
import styles from './styles.module.css'

export const Login = () => {
	const { logIn } = useAuthContext()
	const navigate = useNavigate()

	const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const userName = formData.get('userName')?.toString()
		if (userName) {
				navigate('/countries', { replace: true })
			logIn(userName, () => {
				navigate('/countries', { replace: true })
			})
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
