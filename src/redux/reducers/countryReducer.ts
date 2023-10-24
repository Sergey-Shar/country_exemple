import { CountryAll } from "../../shared/api/types"
import { CounterAction, FETCH_COUNTRIES, FETCH_COUNTRIES_ERROR, FETCH_COUNTRIES_SUCCESS } from "../actions/countriesActions"

interface CountryState {
	isLoading: boolean
 countries: CountryAll[]
 error: unknown
}

const countryState: CountryState = {
 isLoading: false,
 countries: [],
 error: '',
}

export const countryReducer = (
	state = countryState,
	action: CounterAction
): CountryState => {
	switch (action.type) {
		case FETCH_COUNTRIES:
			return {
				...state,
				isLoading: true
			}
		case FETCH_COUNTRIES_SUCCESS:
			return {
				...state,
				isLoading: false,
				countries: action.payload
			}
		case FETCH_COUNTRIES_ERROR:
			return {
				...state,
				error: action.payload
			}
		default:
			return state
	}
}
