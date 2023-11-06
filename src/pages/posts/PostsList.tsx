import { useEffect, useState } from 'react'
import { AppPagination, AppCard, SearchControl } from '../../components'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/useRedux'
import styles from './styles.module.css'
import { fetchPostsThunk } from '../../redux'
import { CardPlaceholder } from '../../components/cardPlaceholder/CardPlaceholder'

export const PostsList = () => {
	const countPosts = useAppSelector((state) => state.posts.postsList.count)

	const dispatch = useAppDispatch()
	const [offset, setOffset] = useState(0)
	const [limit, setLimit] = useState(5)
	const [pageNumber, setPageNumber] = useState(1)
	const [searchParam, setSearchParam] = useState('')
const { status, postsList} = useAppSelector((state) => state.posts
)
	// следим за изменением и отправляем запрос заново с новыми параметрами
	useEffect(() => {
	dispatch(fetchPostsThunk({ limit, offset, searchParam }))
	}, [dispatch, offset, limit, searchParam])

	// следим за изменением страницы и отправляем запрос с правильным offset
	useEffect(() => {
		// теперь нам не нужно обрезать массив, вся работа на сервере
		setOffset((pageNumber - 1) * limit)
	},[pageNumber, limit])

	return (
		<>
			<SearchControl
				onChange={(value) => setSearchParam(value)}
				onSelect={(value) => setLimit(Number(value))
				} />
			<div className="container">
				<ol className={styles.countryList}>
					{status === 'success' &&
						postsList.results?.map((post) => (
							<li key={post.id}>
								<AppCard id={post.id}
									title={post.title}
									description={post.text}
									image={post.image}
									date={post.date}
								/>
							</li>
						))}
					{status === 'loading' &&
						[...Array(limit)].map((_, index) => <CardPlaceholder key={index} />)}
				</ol>
				<AppPagination
					count={countPosts}
					page={limit}
					currentPage={pageNumber}
					setPage={setPageNumber}
				/>
			</div>
		</>
	)
}
