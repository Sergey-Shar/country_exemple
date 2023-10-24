import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import { Dispatch } from "redux"
import { CountryAll } from "../../shared/api/types"
import axios from 'axios';

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR'



export interface FetchCountries {
	type: typeof FETCH_COUNTRIES
}
export interface FetchCountriesSuccess {
	type: typeof FETCH_COUNTRIES_SUCCESS
	payload: CountryAll[]
}
export interface FetchCountriesError {
	type: typeof FETCH_COUNTRIES_ERROR
	payload: string
}

export type CounterAction = FetchCountries | FetchCountriesSuccess | FetchCountriesError


export const fetchCountriesThunk = (
	url: string
): ThunkAction<void, RootState, void, CounterAction> => {
	return async (dispatch: Dispatch<CounterAction>) => {
		dispatch({ type: FETCH_COUNTRIES })
		try {
			const { data } = await axios(url)
			dispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: data })
		} catch (error) {
			const err = error as Error
			dispatch({ type: FETCH_COUNTRIES_ERROR, payload: err.message })
		}
	}
}
