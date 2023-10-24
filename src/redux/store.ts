import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from "./reducers/authReducer";
import { logsTypeActionMiddleware } from "../middleware";
import { countryReducer } from "./reducers/countryReducer";

const persistConfig = {
	key: 'root',
	storage
}

const rootState = combineReducers({
	auth: authReducer,
	countries: countryReducer
})

const persistedReducer = persistReducer(persistConfig, rootState)

export const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(logsTypeActionMiddleware, thunk))
)

export const persistor = persistStore(store)

rootState
export type RootState = ReturnType<typeof rootState>
export type AppDispatch = typeof store.dispatch