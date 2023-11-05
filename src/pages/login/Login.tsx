import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/useRedux'
import { loginThunk } from '../../redux'
import { useEffect } from 'react'

export const Login = () => {

	const dispatch = useAppDispatch()
	const {  authorization } = useAppSelector((state) => state?.auth)
	const navigate = useNavigate()

	useEffect(() => {
		if (authorization) {
			navigate('/posts', { replace: true })
		}
	}, [authorization, navigate])

	
	const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const login = formData.get('login')?.toString()
		const password = formData.get('password')?.toString()
		if (login && password) {
			dispatch(loginThunk({ login, password }))
		}
	}	

	//TODO Реализовать переключение видимости пароля

	return (
		<div className="container">
		<div className={styles.formContainer}>
				<form className={styles.form} onSubmit={handleLogin}>
					<label htmlFor="login">login</label>
					<input className="input" type="text" name="login" id="login" />
					<label htmlFor="password">name</label>
					<input className="input" type="password" name="password" id="password" />
					<button type="submit">Authorization</button>
				</form>
			</div>
		</div>
	)
}
