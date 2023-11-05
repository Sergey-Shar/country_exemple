import { createSlice } from '@reduxjs/toolkit'
import { PostsResponse } from '../../shared/api/types'
import { fetchPostsThunk } from './thunks'

interface CountryState {
	status?: 'loading' | 'success' | 'error'
	postsList: PostsResponse
	error?: unknown
}

const initialState: CountryState = {
	postsList: {
		"count": 0,
		"next": '',
		"previous": '',
		"results": []
		},
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
			state.postsList = action.payload
		})
  builder.addMatcher(fetchPostsThunk.rejected.match, (state, action) => {
			state.status = 'error'
			state.error = action.error
		})
 }
})
