import { createSlice } from '@reduxjs/toolkit'
import { CountryAll } from '../../shared/api/types'
import { fetchCountriesThunk } from './thunks'

interface CountryState {
	isLoading: boolean
 countriesAll: CountryAll[]
 // searchCountriesName: CountryAll[]
	error: unknown
}

const initialState: CountryState = {
	isLoading: false,
 countriesAll: [],
 // searchCountriesName: [],
	error: ''
}


export const countriesSlice = createSlice({
 name: 'countries',
 initialState,
 reducers: {
  // search(state, action: PayloadAction<string>) {
  //   // state.searchCountriesName = state.countriesAll.filter((country) => country.name.common.toLowerCase().includes(action.payload.toLowerCase()))
  //  }
 },
 extraReducers: (builder) => {
  builder.addMatcher(fetchCountriesThunk.pending.match, (state) => {
   state.isLoading = true
  })
  builder.addMatcher(fetchCountriesThunk.fulfilled.match, (state, action) => {
   state.isLoading = false
   state.countriesAll = action.payload
   //state.searchCountriesName = action.payload
  })
  builder.addMatcher(fetchCountriesThunk.rejected.match, (state, action) => {
   console.log(action.payload)
   state.isLoading = false
   state.error = action.payload
  })
 }
})
