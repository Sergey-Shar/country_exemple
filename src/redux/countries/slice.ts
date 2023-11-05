import { createSlice } from '@reduxjs/toolkit'
import { CountryAll } from '../../shared/api/types'
import { fetchCountriesThunk } from './thunks'

interface CountryState {
	isLoading: boolean
 countriesAll: CountryAll[]
	error: unknown
}

const initialState: CountryState = {
	isLoading: false,
 countriesAll: [],
	error: ''
}


export const countriesSlice = createSlice({
 name: 'countries',
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addMatcher(fetchCountriesThunk.pending.match, (state) => {
   state.isLoading = true
  })
  builder.addMatcher(fetchCountriesThunk.fulfilled.match, (state, action) => {
   state.isLoading = false
   state.countriesAll = action.payload
  })
  builder.addMatcher(fetchCountriesThunk.rejected.match, (state, action) => {
   console.log(action.payload)
   state.isLoading = false
   state.error = action.payload
  })
 }
})
