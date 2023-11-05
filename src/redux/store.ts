import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { authReducer, postsReducer } from '.'

const rootReducer = combineReducers({
	auth: authReducer,
	posts: postsReducer
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
}
)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch