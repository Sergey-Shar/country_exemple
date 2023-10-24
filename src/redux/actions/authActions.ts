
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

interface LoginAction {
	type: typeof LOGIN
	payload: string
}

interface LogoutAction {
	type: typeof LOGOUT
}

export type AuthAction = LoginAction | LogoutAction

export const loginAction = (user: string): LoginAction => {
	return {
		type: LOGIN,
		payload: user
	}
}

export const logoutAction = (): LogoutAction => {
	return {
		type: LOGOUT
	}
}




