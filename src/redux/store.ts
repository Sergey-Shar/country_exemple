import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
// import { persistStore, persistReducer } from 'redux-persist'
// // import storage from 'redux-persist/lib/storage' 
import { authReducer, countriesReducer } from ".";

const rootReducer = combineReducers({
	auth: authReducer,
	countries: countriesReducer
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
}
)

// export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch