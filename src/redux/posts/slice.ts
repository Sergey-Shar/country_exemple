import { createSlice } from '@reduxjs/toolkit'
import { Posts } from '../../shared/api/types'
import { fetchPostsThunk } from './thunks'
import _ from 'lodash'

interface CountryState {
	status?: 'loading' | 'success' | 'error'
	results: Posts[]
	hasMore?: boolean
	error?: unknown
}

const initialState: CountryState = {
	results: [],
}

export const postsSlice = createSlice({
 name: 'posts',
 initialState,
	reducers: {},
 extraReducers: (builder) => {
  builder.addMatcher(fetchPostsThunk.pending.match, (state) => {
			state.status = 'loading'
		})
		builder.addMatcher(fetchPostsThunk.fulfilled.match, (state, action) => {
			state.status = 'success'
			state.hasMore = action.payload.results.length > 0
			state.results = _.uniqBy([...state.results, ...action.payload.results], 'id')
		})
  builder.addMatcher(fetchPostsThunk.rejected.match, (state, action) => {
			state.status = 'error'
			state.error = action.error
		})
 }
})
