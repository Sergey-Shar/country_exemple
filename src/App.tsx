import { Routes, Route } from 'react-router-dom'
import { CountryDetail, CountryList, Home, Login, MainLayout, PrivateRoute } from './pages'
import { NotFound } from './pages/notFound/NotFound'

export const App = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route element={<PrivateRoute />} >
				<Route path="/countries" element={<CountryList />} />
				<Route path="/countries/:name" element={<CountryDetail />} />
				</Route>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
 
