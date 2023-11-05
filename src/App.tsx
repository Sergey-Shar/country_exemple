import { lazy , Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Post, PostsList,  Login, MainLayout, PrivateRoute } from './pages'
import { NotFound } from './pages/notFound/NotFound'
import { checkAuthThunk } from './redux'
import { useAppDispatch } from './shared/hooks/useRedux'
const HomePage = lazy(() => import('./pages/home/Home'))

export const App = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(checkAuthThunk())
	},[dispatch])
	
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={
					<Suspense fallback={<div>Loading...</div>}>
							<HomePage />
					</Suspense>
				} />
				<Route path="/login" element={<Login />} />
				<Route element={<PrivateRoute />}>
					<Route path="/posts" element={<PostsList />} />
					<Route path="/posts/:id" element={<Post />} />
				</Route>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
 
