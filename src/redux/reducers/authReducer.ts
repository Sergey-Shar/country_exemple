import { AuthAction, LOGIN, LOGOUT } from "../actions/authActions"

interface AuthState {
 user: string
}

const authState: AuthState = {
 user: ''
}

export const authReducer = (state = authState, action: AuthAction): AuthState => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				user: action.payload
			}
		case LOGOUT:
			return {
				...state,
				user: ''
			}
		default:
			return state
	}
}