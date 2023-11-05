import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from './context'
import {store } from './redux/store'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
		<Provider store={store}>
			<ThemeProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
		</ThemeProvider>
		</Provider>
)
